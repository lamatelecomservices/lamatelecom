"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  imageSrc: string;
}

export function VideoBackground({ videoSrc, imageSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyRef = useRef(false);
  const [videoReady, setVideoReady] = useState(false);

  const tryPlay = useCallback(() => {
    if (readyRef.current) return;
    const v = videoRef.current;
    if (!v) return;

    readyRef.current = true;
    v.muted = true;
    setVideoReady(true);

    void v.play().catch(() => {
      readyRef.current = false;
      setVideoReady(false);
    });
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Cached / fast loads: events may have fired before handlers ran
    if (v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    }
  }, [tryPlay]);

  return (
    <>
      <Image
        src={imageSrc}
        alt=""
        fill
        className={`pointer-events-none object-cover transition-opacity duration-500 ease-out ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
        priority
        sizes="100vw" />
      <video
        ref={videoRef}
        className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
        onCanPlay={tryPlay}
        onLoadedData={tryPlay}
        aria-hidden />
    </>
  );
}
