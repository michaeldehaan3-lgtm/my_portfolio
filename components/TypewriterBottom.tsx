"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterBottomProps {
  text: string;
}

/** ~400 WPM: 2× faster. Punctuation adds brief pause. */
const CHAR_MS = 30;
const PUNCTUATION_EXTRA_MS = 40;
const PUNCTUATION = /[.,!?;:—]/;

export default function TypewriterBottom({ text }: TypewriterBottomProps) {
  const [visibleLength, setVisibleLength] = useState(0);
  const endRef = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [visibleLength]);

  const visible = text.slice(0, visibleLength);

  return (
    <div className="typewriter-fullpage max-md:overflow-x-hidden">
      <div className="typewriter-fullpage__inner max-md:min-w-0">
        <p className="typewriter-fullpage__text max-md:break-words">
          {visible}
          <span ref={endRef} />
        </p>
      </div>
    </div>
  );
}
