import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-brandwhite">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-green-600 sm:text-6xl">
            <span>XPRTZ.knowledge</span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
            <p>
              Een overzicht van alle kennis evenementen georganiseerd door XPRTZ. We delen onze kennis in verschillende vormen, zoals workshops in de vorm van een labdag, meetups in de vorm van een kennisavond en zelfs volledige weekends waarbij we kennis steeds combineren met ontspanning.
            </p>
            <p>
              XPRTZ focust op .NET ontwikkeling en het hele eco-systeem daaromheen. Onderwerpen zoals Azure, DevOps, architectuur en security zijn ons niet vreemd.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Sprekers', '18'],
              // ['People Attending', '2,091'],
              ['Locatie', 'Studio B'],
              ['Plaats', 'Werkspoorkathedraal, Utrecht'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-green-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
