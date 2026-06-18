import { ArrowLeft, CalendarDays, CheckCircle2, MessageSquare, MonitorPlay, UserRound, Video } from 'lucide-react'
import type { ReactNode } from 'react'

const sessions = [
  {
    title: 'Haussmann Apartment Tour',
    client: 'Layla El Idrissi',
    time: 'Today, 15:30',
    status: 'Ready',
  },
  {
    title: 'Marrakesh Villa Walkthrough',
    client: 'Ahmed Benali',
    time: 'Tomorrow, 10:00',
    status: 'Pending',
  },
  {
    title: 'Rabat Kitchen Review',
    client: 'Youssef Alami',
    time: 'Friday, 17:15',
    status: 'Draft',
  },
] as const

const avatars = [
  {
    name: 'Nora',
    role: 'Property guide',
    tone: 'Warm and practical',
  },
  {
    name: 'Adam',
    role: 'Sales assistant',
    tone: 'Direct and polished',
  },
  {
    name: 'Mina',
    role: 'Design advisor',
    tone: 'Calm and visual',
  },
] as const

const metrics = [
  { label: 'Active hubs', value: '4', icon: MonitorPlay },
  { label: 'Avatar scripts', value: '18', icon: UserRound },
  { label: 'Client messages', value: '9', icon: MessageSquare },
] as const

function HubCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <article className={`rounded-[20px] bg-white/33 p-5 shadow-[0_4px_22px_rgba(0,0,0,0.12)] ${className}`}>
      {children}
    </article>
  )
}

export default function HubAvatar() {
  return (
    <div className="dashboard-bg min-h-screen overflow-hidden font-lato text-[#1D1F2C]">
      <div className="relative min-h-screen px-4 py-8 sm:px-8 lg:px-[clamp(2rem,6vw,7.25rem)] lg:py-[clamp(2rem,4.4vw,5.3rem)]">
        <header className="glass-panel mb-6 flex min-h-[72px] items-center justify-between rounded-[20px] px-5 lg:min-h-[100px] lg:px-7">
          <div>
            <p className="text-sm font-medium text-[#4A4C56]">VR Boost</p>
            <h1 className="text-2xl font-bold tracking-[-0.48px] sm:text-3xl">Hub & Avatar</h1>
          </div>
          <div className="flex gap-3">
            <a
              href="/dashboard"
              className="inline-flex min-h-11 items-center gap-2 rounded-[12px] border border-white/70 bg-white/44 px-4 text-sm font-medium text-[#4A4C56] transition hover:bg-white/60"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Dashboard
            </a>
            <a
              href="/"
              className="hidden min-h-11 items-center rounded-[12px] bg-black px-4 text-sm font-medium text-white transition hover:bg-black/80 sm:inline-flex"
            >
              Landing
            </a>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <section className="glass-panel rounded-[20px] p-5 sm:p-7">
            <div className="mb-8">
              <p className="mb-3 text-sm font-medium text-[#4A4C56]">Live guided visit</p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.6px] sm:text-4xl">
                Launch a remote visit with a virtual guide and shared property context.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => {
                const Icon = metric.icon
                return (
                <HubCard key={metric.label}>
                  <Icon className="mb-5 h-6 w-6 text-[#4A4C56]" aria-hidden="true" />
                  <p className="text-sm text-[#4A4C56]">{metric.label}</p>
                  <p className="mt-2 text-4xl font-bold text-[#4A4C56]">{metric.value}</p>
                </HubCard>
                )
              })}
            </div>

            <div className="mt-6 overflow-hidden rounded-[20px] bg-black/80 text-white shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-video bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/35" />
                <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 backdrop-blur">
                  <Video className="h-7 w-7 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold">Haussmann Apartment Hub</p>
                  <p className="mt-1 text-sm text-white/65">Matterport tour, avatar notes, and live chat ready.</p>
                </div>
                <button className="min-h-11 rounded-[12px] bg-white px-4 text-sm font-semibold text-black">
                  Start session
                </button>
              </div>
            </div>
          </section>

          <section className="grid gap-6">
            <HubCard>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-[-0.48px]">Upcoming sessions</h2>
                <CalendarDays className="h-6 w-6 text-[#4A4C56]" aria-hidden="true" />
              </div>
              <div className="grid gap-3">
                {sessions.map((session) => (
                  <div key={session.title} className="rounded-[16px] bg-white/44 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-bold text-[#21272A]">{session.title}</p>
                        <p className="mt-1 text-sm text-[#4A4C56]">{session.client} - {session.time}</p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-md bg-white/70 px-3 py-1 text-sm font-medium text-[#4A4C56]">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        {session.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </HubCard>

            <HubCard>
              <h2 className="mb-5 text-2xl font-bold tracking-[-0.48px]">Avatar presets</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {avatars.map((avatar) => (
                  <div key={avatar.name} className="rounded-[16px] bg-white/44 p-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F7F7]">
                      <UserRound className="h-6 w-6 text-[#4A4C56]" aria-hidden="true" />
                    </div>
                    <p className="text-lg font-bold">{avatar.name}</p>
                    <p className="mt-1 text-sm text-[#4A4C56]">{avatar.role}</p>
                    <p className="mt-4 text-sm text-[#848484]">{avatar.tone}</p>
                  </div>
                ))}
              </div>
            </HubCard>
          </section>
        </main>
      </div>
    </div>
  )
}
