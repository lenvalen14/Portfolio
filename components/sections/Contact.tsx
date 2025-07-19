'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaFacebookF, FaTwitter, FaRedditAlien, FaDiscord } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus(null)
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Thay bằng serviceId của bạn
      'YOUR_TEMPLATE_ID', // Thay bằng templateId của bạn
      formRef.current,
      'YOUR_PUBLIC_KEY' // Thay bằng publicKey của bạn
    )
      .then(() => {
        setStatus('Message sent successfully!')
        formRef.current?.reset()
      })
      .catch(() => setStatus('Failed to send message. Please try again.'))
  }

  return (
    <section id="contact" className="px-6 py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name="user_name" placeholder="Your name" required />
          <Input type="email" name="user_email" placeholder="Email" required />
          <Input type="text" name="user_website" placeholder="Your website (If exists)" />
          <Textarea name="message" placeholder="How can I help?*" rows={5} required />

          <Button type="submit" className="w-fit">Get In Touch</Button>

          {status && <div className={`text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{status}</div>}

          <div className="flex gap-3 pt-4">
            <a href="#"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#"><FaRedditAlien className="w-5 h-5" /></a>
            <a href="#"><FaTwitter className="w-5 h-5" /></a>
            <a href="#"><FaDiscord className="w-5 h-5" /></a>
          </div>
        </form>

        <div className="flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Let's <span className="underline underline-offset-2">talk</span> for</h2>
          <h3 className="text-3xl font-extrabold mb-4">Something special</h3>
          <p className="text-sm text-zinc-600 mb-4">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          <p className="font-semibold text-lg">giangson140403@gmail.com</p>
          <p className="font-semibold text-lg">1234567890</p>
        </div>
      </div>
    </section>
  )
}
