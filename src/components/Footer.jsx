import Image from 'next/image'

import { Container } from '@/components/Container'

import Logo from '@/images/Logo.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <Image
          src={Logo}
          alt=""
          width={32}
          height={32}
          priority
          unoptimized
        />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} XPRTZ B.V.
        </p>
      </Container>
    </footer>
  )
}
