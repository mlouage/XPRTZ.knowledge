import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import stefan from '@/images/auteurs/stefanvt.png'
import mark from '@/images/auteurs/markvl.png'
import maarten from '@/images/auteurs/maartenl.png'
import rob from '@/images/auteurs/robvg.png'
import hans from '@/images/auteurs/hansn.png'
import erwin from '@/images/auteurs/erwinf.png'
import sybren from '@/images/auteurs/sybrenr.png'
import merlin from '@/images/auteurs/merlinb.png'

const days = [
  {
    name: 'Kennisavond',
    date: 'Juli',
    dateTime: '2023-07-13',
    speakers: [
      {
        name: 'Merlin Bieze',
        role: 'Developer',
        image: merlin,
      },
    ],
  },
  {
    name: 'Zomer break',
    date: 'Augustus',
    dateTime: '2023-08-01',
    speakers: [],
  },
  {
    name: 'Zomer break',
    date: 'September',
    dateTime: '2023-09-01',
    speakers: [],
  },
]

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      {/* <ImageClipPaths id={id} /> */}
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl"
          >
            Sprekers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
            Wereld bekende sprekers in Utrecht en omgeving vertellen met veel passie over hun vakgebied.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-green-600 stroke-green-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-green-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-green-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl xl:right-6',
                        )}
                      />
                      <Image
                          className="absolute inset-0 h-full w-full object-cover"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
