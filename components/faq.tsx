"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Autobotwa help automate workflows?",
    answer:
      "Autobotwa uses advanced AI to understand your workflows and automatically streamline repetitive tasks, saving your team hours each week.",
  },
  {
    question: "Is my data secure with Autobotwa?",
    answer:
      "Yes, we use enterprise-grade encryption and comply with GDPR, SOC 2, and other international security standards to protect your data.",
  },
  {
    question: "Can I integrate Autobotwa with my existing tools?",
    answer:
      "Autobotwa integrates seamlessly with 500+ popular business applications including Slack, Teams, Jira, and more.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support, comprehensive documentation, video tutorials, and dedicated onboarding for enterprise clients.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most teams can get up and running with Autobotwa in less than 24 hours. Our setup wizard guides you through the process step by step.",
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with Icon */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Image src="/images/autobotwa-faq-icon.png" alt="Autobotwa" width={56} height={56} className="w-14 h-14" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-zoom-in-stagger-1 border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 bg-card/50 hover:bg-card/80"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <span className="text-left font-semibold text-foreground text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-primary/5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
