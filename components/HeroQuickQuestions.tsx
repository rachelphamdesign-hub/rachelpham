"use client";

import { useState } from "react";
import Link from "next/link";

const prompts = [
  "Tell me about Rachel",
  "What’s your favorite project?",
  "What tools do you use?",
] as const;

type Prompt = (typeof prompts)[number];

export function HeroQuickQuestions() {
  const [activePrompt, setActivePrompt] = useState<Prompt | null>(null);

  return (
    <div
      className="w-full rounded-[20px] border p-6 md:p-7"
      style={{
        background: "color-mix(in oklab, var(--bg-surface) 92%, transparent)",
        borderColor: "var(--border-default)",
        boxShadow: "0 8px 26px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3
        className="text-[15px] font-semibold tracking-[-0.01em] leading-[1.45]"
        style={{ color: "var(--text-primary)" }}
      >
        I&apos;m open to Web Design and Graphic Design opportunities.
      </h3>

      <p
        className="mt-3 text-[13px] leading-[1.6]"
        style={{ color: "var(--text-secondary)" }}
      >
        I created this chatbot to help you get to know me — feel free to explore my
        work, projects, and experience!
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {prompts.map((prompt) => {
          const active = activePrompt === prompt;
          return (
            <button
              key={prompt}
              type="button"
              onClick={() => setActivePrompt(prompt)}
              className="rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors"
              style={{
                borderColor: active ? "var(--accent-action)" : "var(--border-default)",
                color: active ? "var(--accent-action)" : "var(--text-tertiary)",
                background: active ? "color-mix(in oklab, var(--accent-action) 8%, transparent)" : "transparent",
              }}
            >
              {prompt}
            </button>
          );
        })}
      </div>

      {activePrompt === "What’s your favorite project?" && (
        <div
          className="mt-5 rounded-[14px] border p-4"
          style={{
            borderColor: "var(--border-default)",
            background: "color-mix(in oklab, var(--bg-page) 65%, transparent)",
          }}
        >
          <p className="text-[13px] leading-[1.65]" style={{ color: "var(--text-secondary)" }}>
            My favorite project is Social Robot — it focuses on helping patients feel less
            lonely through interaction and emotional support. I believe this kind of design
            has real impact and represents the future of human-centered technology.
          </p>
          <Link
            href="/work/social-robots"
            className="mt-4 inline-flex h-9 items-center rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{
              background: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Read more about this project
          </Link>
        </div>
      )}
    </div>
  );
}

