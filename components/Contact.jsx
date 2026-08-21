'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Loader2, AlertCircle, Copy, CheckCheck } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { profile } from '@/data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      // Placeholder submit — wire this up to your own backend/email service.
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 1200))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-paper-600 dark:text-carbon-700 max-w-lg mb-12 leading-relaxed">
            Tell me a bit about what you're building — I read every message and
            reply personally.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1fr_auto] gap-10">
          <AnimatedSection delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-lg">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-paper-300 dark:border-carbon-400 bg-transparent px-4 py-3 text-sm text-paper-700 dark:text-carbon-50 outline-none focus:border-signal transition-colors"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-lg border border-paper-300 dark:border-carbon-400 bg-transparent px-4 py-3 text-sm text-paper-700 dark:text-carbon-50 outline-none focus:border-signal transition-colors"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-lg border border-paper-300 dark:border-carbon-400 bg-transparent px-4 py-3 text-sm text-paper-700 dark:text-carbon-50 outline-none focus:border-signal transition-colors resize-none"
                  placeholder="What are you building?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-lg bg-signal text-carbon-100 font-semibold px-6 py-3 text-sm hover:opacity-90 transition-all disabled:opacity-60 min-w-[160px] justify-center"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'loading' ? (
                    <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 size={15} className="animate-spin" /> Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Check size={15} /> Message Sent
                    </motion.span>
                  ) : (
                    <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send Message <ArrowUpRight size={15} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {status === 'error' && (
                <p className="flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle size={13} /> Something went wrong — try again, or email me directly.
                </p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            {/* <div className="rounded-2xl border border-paper-300 dark:border-carbon-400 p-6 w-full md:w-64"> */}
            
              {/*  <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-3">
                Direct
              </p> <button
                onClick={copyEmail}
                className="group flex items-center justify-between gap-2 w-full text-left text-sm text-paper-700 dark:text-carbon-50 hover:text-signal transition-colors mb-4"
              >
                <span className="truncate">{profile.email}</span>
                {copied ? <CheckCheck size={14} className="text-emerald-500 shrink-0" /> : <Copy size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </button> */}
              {/* <p className="text-xs text-paper-600 dark:text-carbon-700 leading-relaxed">
                Based in {profile.location}. {profile.availability}.
              </p> */}
            {/* </div> */}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
