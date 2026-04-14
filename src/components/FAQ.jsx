import { useState } from 'react'

const faqs = [
  {
    question: 'What file format and resolution are the designs?',
    answer: 'Every design is a high-resolution PNG file at 300 DPI (typically 4500x5400 pixels) with a transparent background. This is the industry standard for print-on-demand — you can upload directly to any platform without editing.',
  },
  {
    question: 'Can I sell products using these designs?',
    answer: 'Yes. Every pack includes a full commercial license. You can use the designs on shirts, hoodies, mugs, tote bags, or any other product — and sell through Etsy, Shopify, Amazon, or any other channel. No royalties, no per-sale fees.',
  },
  {
    question: 'How quickly can I access the files?',
    answer: "Instantly. After payment, you'll get a download link for a ZIP file containing all your designs. Most customers have their first designs uploaded to a store within 15 minutes of purchase.",
  },
  {
    question: "I'm new to merch — which pack should I start with?",
    answer: "Start with the Starter Pack (10 designs, $29). It's enough to test demand, list your first products, and see what sells. You can always upgrade later — and you'll already know the quality.",
  },
  {
    question: 'Which pack is the best value?',
    answer: "The Ultimate Pack at $1.28 per design is the lowest cost per design by far. If you're building a serious catalog or selling across multiple platforms, it gives you the most variety and the highest margin on every product.",
  },
  {
    question: 'What platforms do these work with?',
    answer: 'Any platform that accepts PNG uploads: Printful, Printify, Merch by Amazon, Redbubble, TeeSpring, TeePublic, Shopify, Etsy, and more. The files are already optimized for the most common print dimensions.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-semibold text-text-primary group-hover:text-cyan transition-colors">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${open ? 'rotate-45 text-cyan' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm text-text-secondary leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Common Questions, Straight Answers
          </h2>
          <p className="text-text-secondary">
            If your question isn't here, reach out — we respond fast.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
