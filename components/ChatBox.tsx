"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const suggestions = [
  "Tell me about Rachel",
  "What’s your favorite project?",
  "What tools do you use?",
  "What are you looking for?",
] as const;

type Suggestion = (typeof suggestions)[number];

const responses: Record<Suggestion, string> = {
  "Tell me about Rachel":
    "I’m a Product and Graphic Designer based in Ontario, currently working at IDEAWORKS at Mohawk College, with experience in UI/UX, branding, and web design through both internships and real projects. Outside of work, I’m into hiking, traveling, and exploring new places, and I’m a big fan of matcha 🍵",
  "What’s your favorite project?":
    "My favorite project is Social Robot 🤖. It focuses on helping patients feel less lonely through interactive and emotional support. I believe this kind of product represents the future and can make a real impact.",
  "What tools do you use?":
    "I mainly use Figma, Adobe Creative Suite, Cursor, and prototyping workflows with React. For research and UX process work, I also use Miro, structured usability testing methods, and disability testing tools.",
  "What are you looking for?":
    "I’m looking for a Web or Graphic Designer role where I can combine UI/UX, branding, and visual design to create experiences with comfort, clarity, and accessibility, making sure what we build works well for everyone.",
};

const ctaByPrompt: Partial<
  Record<Suggestion, { label: string; href: string; external?: boolean }>
> = {
  "Tell me about Rachel": {
    label: "Get to know me",
    href: "/about",
  },
  "What’s your favorite project?": {
    label: "Explore Social Robot",
    href: "/work/social-robots",
  },
  "What tools do you use?": {
    label: "See my toolkit",
    href: "/about",
  },
  "What are you looking for?": {
    label: "Let’s work together",
    href: "mailto:rachelphamdesign@gmail.com",
    external: true,
  },
};

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  prompt?: Suggestion;
  animClass?: "chat-user-in" | "chat-bot-in";
};

const introMessage =
  "I’m open to Web Design and Graphic Design opportunities. I created this chatbot to help you get to know me — feel free to explore my work, projects, and experience!";

export function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-intro-bot",
      role: "bot",
      text: introMessage,
    },
  ]);
  const [selected, setSelected] = useState<Suggestion | null>(null);
  const [phase, setPhase] = useState<"idle" | "user" | "typing" | "botTyping" | "done">(
    "idle",
  );
  const [typedText, setTypedText] = useState("");
  const timersRef = useRef<number[]>([]);
  const messageCounterRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typedText, phase]);

  const startChatFlow = (prompt: Suggestion) => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    setSelected(prompt);
    setTypedText("");
    setPhase("user");
    const currentCount = messageCounterRef.current++;
    const userMessageId = `msg-${currentCount}-user`;
    const botMessageId = `msg-${currentCount}-bot`;

    setMessages((prev) => [
      ...prev,
      { id: userMessageId, role: "user", text: prompt, prompt, animClass: "chat-user-in" },
    ]);

    // Step 1: brief pause before typing indicator
    const delayTimer = window.setTimeout(() => {
      setPhase("typing");
      setMessages((prev) => [
        ...prev,
        { id: botMessageId, role: "bot", text: "...", prompt, animClass: "chat-bot-in" },
      ]);
    }, 420);
    timersRef.current.push(delayTimer);

    // Step 2: show typing indicator for ~1s
    const typingTimer = window.setTimeout(() => {
      setPhase("botTyping");
      let index = 0;
      const full = responses[prompt];

      const typeChar = () => {
        index += 1;
        const nextText = full.slice(0, index);
        setTypedText(nextText);
        setMessages((prev) =>
          prev.map((message) =>
            message.id === botMessageId ? { ...message, text: nextText } : message,
          ),
        );
        if (index < full.length) {
          const charTimer = window.setTimeout(typeChar, 16);
          timersRef.current.push(charTimer);
        } else {
          setPhase("done");
          setMessages((prev) =>
            prev.map((message) =>
              message.id === botMessageId ? { ...message, text: full } : message,
            ),
          );
        }
      };

      typeChar();
    }, 1450);
    timersRef.current.push(typingTimer);
  };

  return (
    <aside
      className="w-full rounded-[32px] border p-1 backdrop-blur-[15px]"
      style={{
        background: "color-mix(in oklab, var(--bg-surface) 88%, transparent)",
        borderColor: "var(--border-default)",
        boxShadow: "0px 20px 50px rgba(0,0,0,0.04)",
      }}
      aria-label="Interactive about chat"
    >
      <div className="rounded-[30px] overflow-hidden">
        <div
          className="px-8 py-6 border-b"
          style={{ borderColor: "var(--border-default)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
        </div>

        <div className="px-8 pt-8 pb-6">
          <h3
            className="text-[14px] font-semibold tracking-[-0.025em]"
            style={{ color: "var(--text-primary)" }}
          >
            Hi there, ask me anything ✨
          </h3>

          <div
            ref={scrollRef}
            className="mt-5 h-[230px] overflow-y-auto pr-1"
            style={{ scrollbarGutter: "stable" }}
          >
            <div className="flex flex-col gap-3 pb-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[88%] rounded-[22px] border px-5 py-3 text-[14px] leading-[1.6]"
                    style={{
                      background: "var(--bg-elevated)",
                      borderColor: "var(--border-default)",
                      color: "var(--text-primary)",
                      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                      animation:
                        message.animClass === "chat-user-in"
                          ? "chat-user-in 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)"
                          : message.animClass === "chat-bot-in"
                            ? "chat-bot-in 0.58s cubic-bezier(0.25, 0.1, 0.25, 1)"
                            : undefined,
                    }}
                  >
                    {phase === "typing" &&
                    message.role === "bot" &&
                    message.prompt === selected &&
                    message.text === "..." ? (
                      <div className="inline-flex items-center gap-1 py-1">
                        <span className="chat-dot" />
                        <span className="chat-dot" />
                        <span className="chat-dot" />
                      </div>
                    ) : (
                      <p>{message.text}</p>
                    )}

                    {phase === "done" &&
                      message.role === "bot" &&
                      message.prompt &&
                      message.prompt === selected &&
                      ctaByPrompt[message.prompt] && (
                        <Link
                          href={ctaByPrompt[message.prompt]!.href}
                          target={ctaByPrompt[message.prompt]!.external ? "_blank" : undefined}
                          rel={
                            ctaByPrompt[message.prompt]!.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-3 inline-flex h-9 items-center rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.08em]"
                          style={{
                            background: "var(--btn-primary-bg)",
                            color: "var(--btn-primary-text)",
                            animation:
                              "chat-bot-in 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)",
                          }}
                        >
                          {ctaByPrompt[message.prompt]!.label} →
                        </Link>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="flex flex-wrap gap-3">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => startChatFlow(item)}
                className="rounded-full px-6 py-3 text-[12px] font-bold tracking-[-0.02em] transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background:
                    selected === item ? "var(--btn-primary-bg)" : "var(--bg-elevated)",
                  color:
                    selected === item ? "var(--btn-primary-text)" : "var(--text-primary)",
                  opacity: selected && selected !== item ? 0.65 : 1,
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

