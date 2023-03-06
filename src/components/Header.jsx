import Image from 'next/image'

import { Container } from '@/components/Container'

import Logo from '@/images/Logo.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
        <Image
          src={Logo}
          alt=""
          width={32}
          height={32}
          priority
          unoptimized
        />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-green-600/10 py-4 font-mono text-sm text-green-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>WSK - Studio B, Utrecht</p>
          </div>
        </div>

      </Container>
    </header>
  )
}
