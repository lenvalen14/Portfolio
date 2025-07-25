import { motion } from 'framer-motion'
import { SiPython, SiMysql, SiGit, SiJupyter, SiDocker, SiStreamlit, SiFlask, SiPandas, SiNumpy, SiPlotly, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiFastapi } from 'react-icons/si'

const XGBoostIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    width={32}
    height={32}
    fill="currentColor"
    {...props}
  >
    <path d="M624.4 780.1c-9.1 0-17.8-3.6-24.3-10.1L299.6 469.5c-13.4-13.4-13.4-35.1 0-48.5l300.6-300.6c13.4-13.4 35.1-13.4 48.5 0s13.4 35.1 0 48.5L372.4 445.3l252 252 252-252-113-113c-13.4-13.4-13.4-35.1 0-48.5s35.1-13.4 48.5 0L949.3 421c6.4 6.4 10.1 15.2 10.1 24.3 0 9.1-3.6 17.8-10.1 24.3L648.7 770.1c-6.4 6.4-15.2 10-24.3 10zM235.7 379.2c-8.8 0-17.6-3.4-24.3-10.1l-136-136C62 219.7 62 198 75.4 184.6s35.1-13.4 48.5 0l136.1 136c13.4 13.4 13.4 35.1 0 48.5-6.7 6.8-15.5 10.1-24.3 10.1zM89.6 727.1c-8.8 0-17.6-3.4-24.3-10.1-13.4-13.4-13.4-35.1 0-48.5l136.1-136.1c13.4-13.4 35.1-13.4 48.5 0s13.4 35.1 0 48.5L113.8 717c-6.7 6.7-15.4 10.1-24.2 10.1z" />
  </svg>
)

const LightGBMIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    width={60}
    height={60}
    fill="currentColor"
    {...props}
  >
    <polygon fill="#EF4927" fillRule="evenodd" clipRule="evenodd" points="69.41,198.28 0,198.28 0,242.71" />
    <polygon fill="#76B644" fillRule="evenodd" clipRule="evenodd" points="28.88,245.76 69.41,219.49 69.41,253.72" />
    <path fill="#E6E7E8" d="M512,290.57h-11.4l0.48-58.35c-0.71,3.02-1.34,5.2-1.88,6.52l-20.69,51.83h-7.92l-20.74-51.44c-0.58-1.52-1.2-3.83-1.85-6.91h-0.18c0.25,2.77,0.38,7.29,0.38,13.58v44.77h-10.63v-69.32h16.19l18.22,46.17c1.39,3.55,2.29,6.19,2.72,7.92h0.23c1.21-3.65,2.16-6.35,2.91-8.12l18.56-45.97H512V290.57L512,290.57z M470.58,290.57l-27.96-69.32h11.13l21.17,54.09L470.58,290.57L470.58,290.57z M506.18,221.24h-9.79H506.18z M506.18,221.24l-27.68,69.32l-3.64-15.38l21.53-53.95H506.18L506.18,221.24z" />
    <path fill="#E6E7E8" d="M380.17,290.26v-68.94h21.87c6.66,0,11.95,1.46,15.84,4.36c3.89,2.92,5.84,6.73,5.84,11.41c0,3.91-1.12,7.3-3.32,10.19c-2.22,2.89-5.28,4.94-9.19,6.15v0.2c4.74,0.54,8.53,2.3,11.37,5.25c2.84,2.97,4.25,6.83,4.25,11.57c0,5.89-2.31,10.67-6.96,14.33c-4.66,3.66-10.52,5.48-17.61,5.48H380.17z M391.57,231.34l0.02,15.05c0,2.67-0.23,3.8,3.16,3.77l4.21-0.03c3.97-0.03,7.09-0.93,9.35-2.82c2.26-1.87,3.38-4.53,3.38-7.96c0-5.89-3.94-8.84-11.82-8.84h-7.3C391.84,230.49,391.57,230.56,391.57,231.34L391.57,231.34z M391.56,260.5v17c0,2.92-0.05,3.61,3.18,3.61h6.58c4.25,0,7.55-0.98,9.88-2.95c2.31-1.97,3.48-4.68,3.48-8.14c0-7.16-4.96-10.73-14.85-10.73h-6.97C391.89,259.29,391.56,259.53,391.56,260.5L391.56,260.5z" />
    <path fill="#E6E7E8" d="M369.38,284.65c-6.95,3.78-14.68,5.67-23.2,5.67c-9.86,0-17.84-3.06-23.95-9.21c-6.11-6.13-9.16-14.25-9.16-24.36c0-10.32,3.33-18.79,10.01-25.41c6.68-6.62,15.17-9.93,25.46-9.93c7,0,12.95,0.98,17.84,2.92c0.94,0.37,0.85,0.16,0.85,1.12v10.61c-5.11-3.4-11.2-5.11-18.27-5.11c-7.11,0-12.92,2.35-17.46,7.02c-4.54,4.68-6.82,10.74-6.82,18.19c0,7.65,1.97,13.68,5.87,18.06c3.9,4.4,9.21,6.59,15.9,6.59c4.06,0,7.63-0.7,10.72-2.08c1.49-0.67,1.18-0.5,1.18-2.14v-13.09c0-1.05-0.53-1.2-1.51-1.2h-12.54v-7.37c0-1.62,0.34-1.93,2.08-1.93h22.98V284.65L369.38,284.65z" />
    <path fill="#E6E7E8" d="M305.71,288.82c-2.15,1.02-4.96,1.53-8.42,1.53c-9.6,0-14.41-4.6-14.41-13.83v-27.99h-4.13v-8.8h4.13l-0.01-12.51c0-0.78,0.24-1.25,1-1.59l10.22-4.53l0.01,18.63h11.83v8.8H294.1v24.75c0,2.94,0.53,5.03,1.58,6.29c1.07,1.25,2.84,1.88,5.33,1.88c1.9,0,3.53-0.54,4.92-1.63v8.64C305.93,288.75,305.98,288.7,305.71,288.82L305.71,288.82z" />
    <path fill="#E6E7E8" d="M271.67,290.57h-11.2v-27.08c0-9.78-3.28-14.69-9.82-14.69c-3.28,0-6.06,1.42-8.32,4.26c-2.26,2.82-3.38,6.45-3.38,10.87v26.63h-11.27v-68.78c0-0.62,0.36-0.55,0.89-0.55h9.94c0.26,0,0.44-0.04,0.44,0.28v27.76h0.2c3.73-6.25,9.09-9.37,16.04-9.37c10.99,0,16.48,6.72,16.48,20.15V290.57L271.67,290.57z" />
    <path fill="#E6E7E8" d="M220.71,285.22c0,18.17-9.14,27.26-27.41,27.26c-6.45,0-12.08-1.07-16.88-3.23l9.21-6.42c2.02,0.84,4.2,0.81,6.22,0.81c11.77,0,17.64-5.79,17.64-17.36v-5.41h-0.2c-3.7,6.32-9.27,9.47-16.72,9.47c-6.02,0-10.89-2.2-14.59-6.6c-3.68-4.39-5.53-10.3-5.53-17.71c0-8.42,1.98-15.1,5.94-20.07c3.98-4.97,9.42-7.44,16.35-7.44c6.53,0,11.39,2.67,14.54,8.02h0.2v-5.47c0-1.17,0.18-1.4,1.35-1.4h8.38c1.36,0,1.49-0.1,1.49,1.26L220.71,285.22L220.71,285.22z M209.59,266.5v-6.44c0-3.48-1.16-6.45-3.45-8.91c-2.31-2.48-5.18-3.7-8.63-3.7c-4.26,0-7.59,1.57-9.98,4.7c-2.41,3.15-3.61,7.54-3.61,13.19c0,4.87,1.16,8.75,3.47,11.67c2.29,2.92,5.36,4.37,9.16,4.37c3.86,0,7.01-1.39,9.42-4.18C208.39,274.43,209.59,270.86,209.59,266.5L209.59,266.5z" />
    <path fill="#E6E7E8" d="M165.23,290.57h-11.22v-48.68c0-0.64,0.14-0.83,0.85-0.83h9.27c0.99,0,1.1-0.03,1.1,0.89V290.57L165.23,290.57z" />
    <path fill="#E6E7E8" d="M159.52,231.81c-1.52,0-2.82-0.49-3.9-1.48c-1.09-1-1.63-2.24-1.63-3.77c0-1.52,0.53-2.79,1.63-3.8c1.08-1.01,2.38-1.52,3.9-1.52c1.57,0,2.91,0.51,4.01,1.52c1.09,1.01,1.64,2.28,1.64,3.8c0,1.45-0.55,2.68-1.64,3.71C162.43,231.3,161.09,231.81,159.52,231.81z" />
    <path fill="#E6E7E8" d="M108.55,290.57v-68.65c0-0.69,0.3-0.68,0.9-0.68h9.75c0.57,0,0.85-0.03,0.85,0.63v58.6c0,0.45,0.17,0.38,0.53,0.38h25.44c0.49,0,0.92-0.06,0.92,0.6v9.11L108.55,290.57L108.55,290.57z" />
    <polygon fill="#FCB518" fillRule="evenodd" clipRule="evenodd" points="0,313.72 69.41,313.72 69.41,269.29" />
    <polygon fill="#1B9AD7" fillRule="evenodd" clipRule="evenodd" points="40.53,266.48 0,292.74 0,258.52" />
  </svg>
)

const skillGroups = [
  {
    title: 'Ngôn ngữ & Công cụ',
    skills: [
      { name: 'Python', icon: <SiPython size={32} /> },
      { name: 'SQL', icon: <SiMysql size={32} /> },
      { name: 'Git', icon: <SiGit size={32} /> },
      { name: 'Jupyter', icon: <SiJupyter size={32} /> },
      { name: 'Docker', icon: <SiDocker size={32} /> },
      { name: 'Streamlit', icon: <SiStreamlit size={32} /> },
      { name: 'Flask', icon: <SiFlask size={32} /> },
      { name: 'Pandas', icon: <SiPandas size={32} /> },
      { name: 'NumPy', icon: <SiNumpy size={32} /> },
      { name: 'Plotly', icon: <SiPlotly size={32} /> },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'scikit-learn', icon: <SiScikitlearn size={32} /> },
      { name: 'XGBoost', icon: <XGBoostIcon /> },
      { name: 'LightGBM', icon: <LightGBMIcon /> },
      { name: 'PyTorch', icon: <SiPytorch size={32} /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={32} /> },
    ],
  },
  {
    title: 'Computer Vision',
    skills: [
      { name: 'OpenCV', icon: <SiOpencv size={32} /> },
      { name: 'PyTorch', icon: <SiPytorch size={32} /> },
      { name: 'FastAPI', icon: <SiFastapi size={32} /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-zinc-100 text-black">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="space-y-12 max-w-6xl mx-auto">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-xl md:text-2xl mb-6 pl-2">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center p-8 border-2 border-zinc-200 rounded-2xl bg-white shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer min-h-[140px]"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="mb-3 text-2xl">{skill.icon}</div>
                  <div className="font-semibold text-base md:text-lg text-center">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
