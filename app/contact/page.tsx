"use client"

import { useState, type FormEvent } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `New message from ${name}`
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`
    window.location.href = `mailto:adnan.ahamed3101@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 text-black rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 text-black rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 text-black rounded"
            rows={5}
          ></textarea>
        </div>
        <button type="submit" className="bg-[#FIC40F] text-black px-4 py-2 rounded hover:bg-[#9859B6]">
          Send Message
        </button>
      </form>
    </div>
  )
}

