"use client";

import { useState, useRef, useEffect } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is included in the free plan?",
    answer:
      "The free plan includes access to all core features with up to 3 active projects, 5 GB of storage, and community support...",
  },
  {
    id: 2,
    question: "How do I cancel or change my subscription?",
    answer:
      "You can manage your subscription directly from your account settings under Billing & Plans...",
  },
  {
    id: 3,
    question: "Is my data secure and private?",
    answer:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified and GDPR compliant...",
  },
  {
    id: 4,
    question: "Can I collaborate with my team members?",
    answer:
      "Team collaboration is available on all paid plans. You can invite unlimited members, assign roles, and work in real-time...",
  },
  {
    id: 5,
    question: "Do you offer a refund if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. Just reach out to our support team within 30 days...",
  },
  {
    id: 6,
    question: "How do I get in touch with customer support?",
    answer:
      "Reach our support team via 24/7 live chat (paid plans), email, or by submitting a ticket.",
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      if (openItem === index + 1) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0px";
      }
    });
  }, [openItem]);

  return (
    <div className="bg-green-bg font-sans w-full px-5 py-16">
      <div className="w-full flex flex-col gap-4">

        {/* Accordion */}
        <div className="flex flex-col gap-3.5 w-full">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`w-full p-6 bg-green-100 rounded-2xl outline outline-1 outline-offset-[-1px] ${
                openItem === item.id ? "outline-teal-900" : "outline-slate-200"
              } flex flex-col gap-2 transition-all duration-300 cursor-pointer`}
              onClick={() => toggleItem(item.id)}
            >
              <div className="w-full flex justify-between items-start">
                <div className="flex-1 text-teal-900 text-xl font-semibold leading-6">
                  {item.question}
                </div>

                {/* Icon */}
                <div className="w-6 h-6 relative">
                  {/* Horizontal bar */}
                  <div className="w-4 h-0.5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-teal-900" />
                  {/* Vertical bar (hidden when open) */}
                  <div
                    className={`w-0.5 h-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-teal-900 transition-all duration-300 ${
                      openItem === item.id ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
                    }`}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-slate-500 text-base leading-6 pt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}