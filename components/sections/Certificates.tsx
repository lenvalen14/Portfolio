import { motion } from 'framer-motion'
import Image from 'next/image'

const certificates = [
  {
    title: 'Data Science and Machine Learning Certificate',
    organization: 'COMPUTER SCIENCE CENTER - UNIVERSITY OF SCIENCE, VNU-HCM',
    date: '05/2025',
    image: '/certificate1.jpg',
  },
  {
    title: 'Deep Learning Specialization',
    organization: 'Coursera & DeepLearning.AI',
    date: '11/2023',
    image: '/certificate2.png',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="px-2 sm:px-6 py-20 bg-zinc-100 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Certificates & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={cert.image}
                alt={cert.title}
                width={180}
                height={240}
                className="rounded-lg object-contain max-h-60 shadow"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl text-primary">{cert.title}</h3>
              <div className="text-zinc-500 text-base">{cert.organization}</div>
              <div className="text-sm text-zinc-400 italic">Issued: {cert.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 