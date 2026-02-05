'use client'

import { useState } from 'react'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <div className="w-full max-w-[860px] p-8">
      <form action="https://formspree.io/contactme@jonathanpwu.com" method="POST">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
          <div className="flex flex-col w-full md:w-auto pr-8">
            <div className="relative mb-[45px] group">
              <input 
                id="name"
                type="text" 
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="text-lg py-[10px] px-1 block w-full md:w-[300px] border-0 border-b border-[#757575] bg-background text-text focus:outline-none"
              />
              <span className="absolute h-[60%] w-[100px] top-[25%] left-0 pointer-events-none opacity-50"></span>
              <span className="relative block w-full md:w-[300px] after:content-[''] after:h-[2px] after:w-0 after:bottom-[1px] after:absolute after:bg-theme-purple after:transition-all after:duration-200 after:right-1/2 before:content-[''] before:h-[2px] before:w-0 before:bottom-[1px] before:absolute before:bg-theme-purple before:transition-all before:duration-200 before:left-1/2 [input:focus~&]:after:w-1/2 [input:focus~&]:before:w-1/2"></span>
              <label htmlFor="name" className={`text-[#999]  font-normal font-roboto absolute pointer-events-none left-[5px] transition-all duration-200 ${formData.name ? '-top-[15px] text-sm text-theme-contact' : 'text-lg  top-[10px]'}`}>
                Name
              </label>
            </div>

            <div className="relative mb-[45px] group">
              <input 
                id="email"
                type="email" 
                name="_replyto"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="text-lg py-[10px] px-1 block w-full md:w-[300px] border-0 border-b border-[#757575] bg-background text-text focus:outline-none"
              />
              <span className="absolute h-[60%] w-[100px] top-[25%] left-0 pointer-events-none opacity-50"></span>
              <span className="relative block w-full md:w-[300px] after:content-[''] after:h-[2px] after:w-0 after:bottom-[1px] after:absolute after:bg-theme-purple after:transition-all after:duration-200 after:right-1/2 before:content-[''] before:h-[2px] before:w-0 before:bottom-[1px] before:absolute before:bg-theme-purple before:transition-all before:duration-200 before:left-1/2 [input:focus~&]:after:w-1/2 [input:focus~&]:before:w-1/2"></span>
              <label htmlFor="email" className={`text-[#999] text-lg font-normal font-roboto absolute pointer-events-none left-[5px] transition-all duration-200 ${formData.email ? '-top-[15px] text-sm text-theme-contact' : 'text-lg  top-[10px]'}`}>
                Email
              </label>
            </div>

            <textarea 
              name="message" 
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="block md:hidden w-full h-[200px] mb-[45px] resize-none font-roboto text-[0.9em] bg-background text-text border border-[#757575] p-2"
            />

            <input 
              type="submit" 
              value="Send"
              className="border border-[#757575] transition-all duration-300 text-text py-[10px] px-4 cursor-pointer hover:text-theme-purple hover:border-theme-purple bg-background"
            />
          </div>

          <textarea 
            name="message" 
            placeholder="Your message"
            className="hidden md:block w-[500px] h-auto resize-none font-roboto text-[0.9em] bg-background text-text border border-[#757575] p-2"
          />
        </div>
      </form>
    </div>
  )
}
