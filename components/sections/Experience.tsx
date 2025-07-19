import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'EKCORP CO., LTD',
    position: 'Full-stack Marketing',
    time: '12/2023 - Present',
    description: 'Participated in building multi-channel marketing strategies, optimizing advertising, and developing digital content for the business.',
    projectUrl: '#',
  },
  {
    company: 'ORIENHAIR JOINT STOCK COMPANY',
    position: 'Content Creator',
    time: '08/2023 - 11/2023',
    description: 'Created media content, managed fanpages, and supported new product promotion campaigns.',
    projectUrl: '#',
  },
  {
    company: 'VIHAT TECHNOLOGY CO., LTD',
    position: 'Content Creative',
    time: '08/2022 - 01/2023',
    description: 'Responsible for ideas, producing video and image content for digital media projects.',
    projectUrl: '#',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        My <span className="text-white drop-shadow">Experience</span>
      </h2>

      <div className="w-full md:max-w-3xl mx-auto space-y-8 md:space-y-12">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 1
          return (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-3 md:gap-6 w-full`}
              initial={{ opacity: 0, x: isEven ? 120 : -120, scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex-1" />
              <div className="bg-zinc-900 p-5 md:p-10 rounded-2xl md:rounded-3xl border border-zinc-700 shadow-2xl w-full">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-2xl font-bold uppercase">{exp.company}</h3>
                  <span className="text-sm md:text-base text-zinc-400 flex items-center gap-1 min-w-[120px] md:min-w-[170px] justify-end">
                    <Calendar className="w-4 md:w-5 h-4 md:h-5" />
                    {exp.time}
                  </span>
                </div>
                <p className="text-base md:text-lg text-zinc-300 mb-1 md:mb-2 font-semibold">{exp.position}</p>
                <p className="text-sm md:text-base text-zinc-400 mb-2 md:mb-3">{exp.description}</p>
                {exp.projectUrl && (
                  <div className="flex justify-end mt-2">
                    <a
                      href={exp.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 text-white px-4 md:px-5 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-primary transition"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
              <div className="flex-1" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
