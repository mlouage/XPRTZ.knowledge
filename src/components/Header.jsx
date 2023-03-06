import Image from 'next/image'

import { Container } from '@/components/Container'

import Logo from '@/images/Logo.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="mt-10 lg:mt-0">
          <Image
            src={Logo}
            className="h-12 w-auto"
            alt=""
            width={32}
            height={32}
            priority
            unoptimized
          />
        </div>
        <div className="mx-4 flex flex-auto basis-full overflow-x-auto border-green-600/10 py-4 font-mono text-center text-sm text-green-600 sm:-mx-6 lg:mx-0 lg:basis-auto border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>Werkspoorkathedraal - Studio B, Utrecht</p>
          </div>
        </div>
      </Container>
    </header>
  )
}
