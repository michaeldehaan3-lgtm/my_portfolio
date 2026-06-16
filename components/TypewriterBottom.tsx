"use client";

import { useState, useEffect } from "react";

interface TypewriterBottomProps {
  text: string;
}

/** ~400 WPM: 2× faster. Punctuation adds brief pause. */
const CHAR_MS = 30;
const PUNCTUATION_EXTRA_MS = 40;
const PUNCTUATION = /[.,!?;:—]/;

export default function TypewriterBottom({ text }: TypewriterBottomProps) {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (visibleLength >= text.length) return;
    const char = text[visibleLength];
    const baseDelay = CHAR_MS;
    const extra = PUNCTUATION.test(char) ? PUNCTUATION_EXTRA_MS : 0;
    const timer = setTimeout(
      () => setVisibleLength((n) => n + 1),
      baseDelay + extra
    );
    return () => clearTimeout(timer);
  }, [text, visibleLength]);

  const visible = text.slice(0, visibleLength);

  return (
    <div className="typewriter-bottom">
      <div className="typewriter-bottom__inner">
        <p className="typewriter-bottom__text">{visible}</p>
      </div>
    </div>
  );
}
