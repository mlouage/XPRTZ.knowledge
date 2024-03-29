import React, { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'
import SuccessBanner from '@/components/SuccessBanner'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')

  async function handleOnSubmit(e) {
    e.preventDefault()

    if (honeypot) {
      // If the honeypot field has a value, it's probably a bot
      return;
    }

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setNotificationVisible(true)
        setEmail('')
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  }

  const handleNotificationClose = () => {
    setNotificationVisible(false)
  }

  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-brandwhite py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
                Blijf op de hoogte
              </p>
              <p className="mt-4 text-lg tracking-tight text-green-900">
                Lijkt het je wel wat om een keer langs te komen? Geen probleem,
                laat je e-mail adres achter en we maken direct een afspraak!
              </p>
            </div>
            <form method="post" onSubmit={handleOnSubmit}>
              <h3 className="text-lg font-semibold tracking-tight text-green-900">
                Ik wil op de hoogte blijven{' '}
                <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-green-900/5 focus-within:ring-2 focus-within:ring-green-900">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="E-mail adres"
                  aria-label="E-mail adress"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }} // Hide the honeypot field
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Inschrijven</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
              <SuccessBanner
                isVisble={notificationVisible}
                onClose={handleNotificationClose}
              />
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
