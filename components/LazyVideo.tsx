"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
  /** Distance from viewport (px) to start loading. Default 200px. */
  rootMargin?: string;
  /** Skip lazy loading — load immediately (for above-fold heroes). */
  eager?: boolean;
};

export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  function LazyVideo(
    { src, rootMargin = "200px", eager = false, preload, ...rest },
    forwardedRef,
  ) {
    const innerRef = useRef<HTMLVideoElement | null>(null);
    useImperativeHandle(forwardedRef, () => innerRef.current as HTMLVideoElement);

    const [visible, setVisible] = useState(eager);

    useEffect(() => {
      if (visible) return;
      const el = innerRef.current;
      if (!el || typeof IntersectionObserver === "undefined") {
        setVisible(true);
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setVisible(true);
            io.disconnect();
          }
        },
        { rootMargin },
      );
      io.observe(el);
      return () => io.disconnect();
    }, [visible, rootMargin]);

    return (
      <video
        ref={innerRef}
        {...rest}
        src={visible ? src : undefined}
        preload={visible ? preload ?? "metadata" : "none"}
      />
    );
  },
);
