"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterBottomProps {
  text: string;
  youtubeEmbedUrl?: string | null;
}

/** ~400 WPM: 2× faster. Punctuation adds brief pause. */
const CHAR_MS = 30;
const PUNCTUATION_EXTRA_MS = 40;
const PUNCTUATION = /[.,!?;:—]/;

export default function TypewriterBottom({
  text,
  youtubeEmbedUrl,
}: TypewriterBottomProps) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const endRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (showVideo || visibleLength >= text.length) return;
    const char = text[visibleLength];
    const baseDelay = CHAR_MS;
    const extra = PUNCTUATION.test(char) ? PUNCTUATION_EXTRA_MS : 0;
    const timer = setTimeout(
      () => setVisibleLength((n) => n + 1),
      baseDelay + extra
    );
    return () => clearTimeout(timer);
  }, [text, visibleLength, showVideo]);

  useEffect(() => {
    if (showVideo) return;
    endRef.current?.scrollIntoView({ block: "end" });
  }, [visibleLength, showVideo]);

  const visible = text.slice(0, visibleLength);

  const handleClick = () => {
    if (youtubeEmbedUrl) {
      setShowVideo(true);
    }
  };

  return (
    <div
      className={`typewriter-fullpage max-md:overflow-x-hidden${
        youtubeEmbedUrl && !showVideo ? " typewriter-fullpage--clickable" : ""
      }`}
      onClick={handleClick}
      role={youtubeEmbedUrl && !showVideo ? "button" : undefined}
      tabIndex={youtubeEmbedUrl && !showVideo ? 0 : undefined}
      onKeyDown={
        youtubeEmbedUrl && !showVideo
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
      aria-label={
        youtubeEmbedUrl && !showVideo
          ? "Click to watch video"
          : undefined
      }
    >
      <div className="typewriter-fullpage__inner max-md:min-w-0">
        {showVideo && youtubeEmbedUrl ? (
          <div className="typewriter-fullpage__video">
            <div className="typewriter-fullpage__video-frame">
              <iframe
                src={youtubeEmbedUrl}
                title="Oberon video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <p className="typewriter-fullpage__text max-md:break-words">
            {visible}
            <span ref={endRef} />
          </p>
        )}
      </div>
    </div>
  );
}
