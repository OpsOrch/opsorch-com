"use client";

import { useCallback, useState } from "react";

type DemoCTAProps = {
  videoSrc: string;
  label: string;
};

export default function DemoCTA({ videoSrc, label }: DemoCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[#72e0e0] px-5 py-3 text-sm font-semibold text-[#041217] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#9af1f1]"
      >
        {label}
        <span aria-hidden>↗</span>
      </button>

      {isOpen && (
        <div className="demo-overlay" role="dialog" aria-modal aria-label="OpsOrch demo video" onClick={close}>
          <div className="demo-overlay__panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="demo-overlay__close" onClick={close} aria-label="Close demo video">
              ×
            </button>
            <video src={videoSrc} controls autoPlay className="demo-overlay__video" />
          </div>
        </div>
      )}
    </>
  );
}
