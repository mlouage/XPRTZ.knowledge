import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
    {
        date: 'Oktober',
        dateTime: '2023-10-16',
        summary:
            'Labdag: DDD en Consumer based tontract Testing',
        timeSlots: [
            {
                id: 1,
                name: null,
                description: 'Inloop',
                start: '09:00',
                end: '09:30',
            },
            {
                id: 2,
                name: 'Dick van Hirtum en Sander Obdeijn',
                description: 'Track 1: DDD',
                start: '09:30',
                end: '12:00',
            },
            {
                id: 3,
                name: 'Merlin Bieze en Martijn Spaan',
                description: 'Track 2: Consumerbased contract testing met pact.io',
                start: '09:30',
                end: '12:00',
            },
            {
                id: 4,
                name: null,
                description: 'Lunch',
                start: '12:00',
                end: '13:00',
            },
            {
                id: 5,
                name: 'Dick van Hirtum en Sander Obdeijn',
                description: 'Track 1: DDD - Vervolg',
                start: '13:00',
                end: '17:00',
            },
            {
                id: 6,
                name: 'Merlin Bieze en Martijn Spaan',
                description: 'Track 2: Consumerbased contract testing met pact.io - Vervolg',
                start: '13:00',
                end: '17:00',
            },
            {
                id: 7,
                name: 'Iedereen',
                description: 'Presenteren bevindingen',
                start: '17:00',
                end: '17:30',
            },
            {
                id: 8,
                name: null,
                description: 'Drinks en diner',
                start: '17:00',
                end: '20:00',
            },
        ],
    },
    {
        date: 'November',
        dateTime: '2023-11-09',
        summary:
            'Kennisavond: Threat Modeling Workshop',
        timeSlots: [
            {
                id: 1,
                name: null,
                description: 'Inloop',
                start: '17:00',
                end: '18:00',
            },
            {
                id: 2,
                name: null,
                description: 'Diner',
                start: '18:00',
                end: '19:00',
            },
            {
                id: 3,
                name: 'Patrick Bes',
                description: 'Threat Modeling Workshop',
                start: '19:00',
                end: '21:00',
            },
            {
                id: 4,
                name: null,
                description: 'Drinks',
                start: '21:00',
                end: '22:00',
            },
        ],
    },
    {
        date: 'December',
        dateTime: '2023-12-14',
        summary:
            'Kennisavond: presenteren opleidingen en pubquiz',
            timeSlots: [
                {
                    id: 1,
                    name: null,
                    description: 'Inloop',
                    start: '17:00',
                    end: '18:00',
                },
                {
                    id: 2,
                    name: null,
                    description: 'Diner',
                    start: '18:00',
                    end: '19:00',
                },
                {
                    id: 3,
                    name: 'Iedereen',
                    description: 'Presenteren opleidingen',
                    start: '19:00',
                    end: '20:15',
                },
                {
                    id: 4,
                    name: 'Stefan van Tilborg',
                    description: 'Pubquiz (met drinks)',
                    start: '20:30',
                    end: '21:15',
                },
            ],
    },
]

function ScheduleTabbed() {
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let smMediaQuery = window.matchMedia('(min-width: 640px)')

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(smMediaQuery)
        smMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            smMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <Tab.Group
            as="div"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
            vertical={tabOrientation === 'vertical'}
        >
            <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
                {({ selectedIndex }) =>
                    schedule.map((day, dayIndex) => (
                        <div
                            key={day.dateTime}
                            className={clsx(
                                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                                dayIndex !== selectedIndex && 'opacity-70'
                            )}
                        >
                            <DaySummary
                                day={{
                                    ...day,
                                    date: (
                                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                                            <span className="absolute inset-0" />
                                            {day.date}
                                        </Tab>
                                    ),
                                }}
                            />
                        </div>
                    ))
                }
            </Tab.List>
            <Tab.Panels>
                {schedule.map((day) => (
                    <Tab.Panel
                        key={day.dateTime}
                        className="[&:not(:focus-visible)]:focus:outline-none"
                    >
                        <TimeSlots day={day} />
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

function DaySummary({ day }) {
    let date = new Date(day.dateTime);
    let month = new Intl.DateTimeFormat('nl', { month: 'long' }).format(date);
    let dayNumber = new Intl.DateTimeFormat('nl', { day: '2-digit' }).format(date);

    return (
        <>
            <h3 className="text-2xl font-semibold tracking-tight text-green-900">
                {dayNumber > 1 && <div><span>{dayNumber}</span> <span>{month}</span></div>}
                {dayNumber <= 1 && <span className='capitalize'>{month}</span>}
            </h3>
            <p className="mt-1.5 text-base tracking-tight text-green-900">
                {day.summary}
            </p>
        </>
    )
}

function TimeSlots({ day, className }) {
    return (
        <ol
            role="list"
            className={clsx(
                className,
                'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-green-900/5 backdrop-blur'
            )}
        >
            {day.timeSlots.map((timeSlot, timeSlotIndex) => (
                <li
                    key={timeSlot.id}
                    aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
                >
                    {timeSlotIndex > 0 && (
                        <div className="mx-auto mb-8 h-px w-48 bg-lime-20" />
                    )}
                    {timeSlot.description && timeSlot.start && (
                        <h4 className="text-lg font-semibold tracking-tight text-green-900">
                            {timeSlot.description}
                        </h4>
                    )}
                    {timeSlot.description && timeSlot.start == null && timeSlot.end == null && (
                        <h4 className="text-lg font-semibold tracking-tight text-green-600">
                            {timeSlot.description}
                        </h4>
                    )}
                    {timeSlot.name && (
                        <p className="mt-1 tracking-tight text-green-900">
                            {timeSlot.name}
                        </p>
                    )}
                    {timeSlot.start && timeSlot.end && (
                        <p className="mt-1 font-mono text-sm text-slate-500">
                            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
                                {timeSlot.start}
                            </time>{' '}
                            -{' '}
                            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
                                {timeSlot.end}
                            </time>{' '}
                        </p>
                    )}
                    {timeSlot.start && timeSlot.end == null && (
                        <p className="mt-1 font-mono text-sm text-slate-500">
                            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
                                {timeSlot.start}
                            </time>
                        </p>
                    )}
                </li>
            ))}
        </ol>
    )
}

function ScheduleStatic() {
    return (
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
            {schedule.map((day) => (
                <section key={day.dateTime}>
                    <DaySummary day={day} />
                    <TimeSlots day={day} className="mt-10" />
                </section>
            ))}
        </div>
    )
}

export function Schedule() {
    return (
        <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
            <Container className="relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
                        Ons schema voor de komende 3 maanden zit weer boordevol interessante onderwerpen
                    </h2>
                    <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
                        We houden elkaar op de hoogte van de volgende onderwerpen. Alles is live te volgen in Studio B op de Werkspoorkathedraal. Er wordt niets opgenomen, dus je moet erbij zijn om het te zien.
                    </p>
                </div>
            </Container>
            <div className="relative mt-14 sm:mt-24">
                <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-brandwhite">
                    <Image
                        className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
                        src={backgroundImage}
                        alt=""
                        width={918}
                        height={1495}
                        unoptimized
                    />
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
                </div>
                <Container className="relative">
                    <ScheduleTabbed />
                    <ScheduleStatic />
                </Container>
            </div>
        </section>
    )
}
