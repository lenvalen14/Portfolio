'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 bg-zinc-100 text-zinc-900">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -80, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -120, scale: 0.85 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/profile.png"
            alt="Avatar"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-6 text-xl leading-relaxed"
          initial={{ opacity: 0, x: 120, scale: 0.85 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            I'm a <strong className="text-primary">Data Scientist</strong> with passion for turning data into insight. I specialize in building solutions with <strong>Python, LLMs, NLP</strong> and <strong>Computer Vision</strong>.
          </p>
          <p>
            I enjoy designing scalable pipelines, fine-tuning large models and building visual dashboards. I'm always learning and experimenting with the latest tools in AI and ML.
          </p>
          <p>
            Outside work, I like writing technical blogs and contributing to open source projects in the AI community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
