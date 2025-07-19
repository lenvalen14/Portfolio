'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projectGroups = [
  {
    title: 'Data Science Projects',
    projects: [
      {
        title: 'Retail Sales Forecasting',
        image: '/retail-forecast.png',
        description: 'Utilized historical sales data to build a model forecasting retail revenue for the next 3 months. Applied time-series techniques to identify trends and seasonality.',
        github: '#',
      },
      {
        title: 'Customer Churn Prediction',
        image: '/churn.jpg',
        description: 'Analyzed customer data to build a model predicting which customers are likely to leave the service. Helped the business team take timely action.',
        github: 'https://github.com/GiangSon-5/Customer_Segmentation_Using_RFM_Clustering',
      },
    ],
  },
  {
    title: 'NLP & LLMs Projects',
    projects: [
      {
        title: 'Customer Support Chatbot',
        image: '/chatbot.png',
        description: 'Developed an intelligent chatbot using RAG architecture to answer customer questions based on product documents. Reduced support workload and provided 24/7 information.',
        github: '#',
      },
      {
        title: 'Sentiment Analysis on Reviews',
        image: '/sentiment.png',
        description: 'Applied BERT model to automatically classify customer review sentiments for products.',
        github: '#',
      },
    ],
  },
  {
    title: 'Computer Vision Projects',
    projects: [
      {
        title: 'Real-time Face Recognition',
        image: '/face-recognition.png',
        description: 'Implemented GhostFaceNet combined with YOLOv5 to detect and recognize faces from images or video input. Supported new user registration, identity verification, and fast search with FAISS.',
        github: 'https://github.com/GiangSon-5/face_detector_realtime',
      },
      {
        title: 'Automatic License Plate Recognition',
        image: '/anpr.png',
        description: 'Developed a license plate recognition system using OCR and Computer Vision techniques to support automatic vehicle control.',
        github: '#',
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-0 py-20 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        My Projects
      </h2>
      <div className="space-y-24 max-w-6xl mx-auto">
        {projectGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-12">
            <h3 className="font-bold text-3xl md:text-4xl mb-6 text-left text-white/90 pl-2">{group.title}</h3>
            <div className="space-y-16">
              {group.projects.map((project, idx) => {
                const isEven = idx % 2 === 1
                return (
                  <motion.div
                    key={idx}
                    className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-4 md:gap-16 bg-white/5 rounded-2xl shadow-2xl p-4 md:p-10 w-full`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: idx * 0.08 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="w-full md:w-1/2 flex items-center justify-center relative mb-4 md:mb-0">
                      <div className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-white/10 blur-2xl z-0" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={320}
                        height={200}
                        className="object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2 md:gap-4 text-left w-full">
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="text-2xl md:text-4xl font-extrabold text-primary/80">{(idx+1).toString().padStart(2,'0')}</span>
                        <h4 className="font-bold text-lg md:text-2xl mb-1 text-white">{project.title}</h4>
                      </div>
                      <p className="text-zinc-200 text-sm md:text-lg mb-2">{project.description}</p>
                      <div className="flex items-center gap-2 md:gap-3 mt-2">
                        <Link href={project.github} target="_blank" className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition text-sm md:text-base shadow">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                          GitHub
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
