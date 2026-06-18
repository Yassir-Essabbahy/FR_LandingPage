import {
  ArrowRight,
  ExternalLink,
  Armchair,
  BadgeCheck,
  Building2,
  Check,
  Gem,
  Home,
  LampFloor,
  MonitorPlay,
  Palette,
  Share2,
  Sofa,
  TreePine,
  Users,
} from 'lucide-react'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import HubAvatar from './components/HubAvatar'
import { Navbar } from './components/Navbar'
import { SectionWrapper } from './components/SectionWrapper'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const heroImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=88'

const styleOptions = [
  { name: 'Modern', icon: Home, detail: 'Clean lines, warm neutrals, premium city-apartment feel.' },
  { name: 'Scandinavian', icon: TreePine, detail: 'Light wood, calm textures, natural and bright staging.' },
  { name: 'Luxury', icon: Gem, detail: 'Rich materials, sculptural pieces, elevated presentation.' },
] as const

const previewFurniture = [
  { name: 'Oslo Modular Sofa', meta: 'Modern · Soft grey fabric', icon: Sofa },
  { name: 'Aria Coffee Table', meta: 'Scandinavian · Pale oak', icon: Armchair },
  { name: 'Pleated Floor Lamp', meta: 'Luxury · Linen shade', icon: LampFloor },
  { name: 'Gallery Accent Chair', meta: 'Modern · Cream boucle', icon: Armchair },
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function ButtonLink({
  href,
  children,
  variant = 'dark',
}: {
  href: string
  children: ReactNode
  variant?: 'dark' | 'light' | 'dashboard'
}) {
  const isDark = variant === 'dark'
  const isDashboard = variant === 'dashboard'

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 text-sm font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:px-7 ${
        isDashboard
          ? 'border-white/70 bg-white/40 text-primary shadow-[0_10px_30px_rgba(74,76,86,0.16)] backdrop-blur hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_16px_36px_rgba(74,76,86,0.22)]'
          : isDark
          ? 'border-primary bg-primary text-cream hover:bg-[#2F4550]'
          : 'border-border bg-transparent text-primary hover:border-accent hover:bg-white'
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-secondary sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

function Hero() {
  return (
    <section className="section-padding relative overflow-hidden pt-28 sm:pt-32 lg:pt-36" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center xl:gap-20">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Premium virtual staging for real estate teams
          </motion.p>
          <motion.h1 id="hero-title" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-primary sm:text-6xl lg:text-7xl xl:text-[5rem]">
            Transform every listing into a guided digital showroom
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.8 }} className="mt-7 max-w-2xl text-lg leading-9 text-secondary">
            VR Boost helps agencies, developers, and furniture brands present properties with elevated staging, curated product placement, and live avatar-led visits built for serious buyers.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#create-project">Build a Showcase</ButtonLink>
            <ButtonLink href="/dashboard" variant="dashboard">Open Dashboard</ButtonLink>
            <ButtonLink href="#solutions" variant="light">Explore benefits</ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1 }} className="relative">
          <div className="absolute -left-7 top-10 hidden h-28 w-28 border border-accent/50 lg:block" aria-hidden="true" />
          <img src={heroImage} alt="Staged modern living room for a virtual property preview" className="relative aspect-[4/5] w-full object-cover shadow-[0_28px_80px_rgba(23,23,23,0.12)] sm:aspect-[16/12] lg:aspect-[5/4]" />
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 p-5 shadow-[0_16px_50px_rgba(23,23,23,0.10)] sm:left-auto sm:w-80">
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-primary">Ready-to-share preview</p>
                <p className="mt-1 text-sm leading-6 text-secondary">A staged look, a 3D tour, and a guided remote visit in one project.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LandingContent() {
  const benefits = [
    {
      title: 'Curated Virtual Staging',
      text: 'Turn empty rooms into aspirational interiors aligned with the positioning of each property.',
      icon: Sofa,
    },
    {
      title: 'Guided Buyer Journeys',
      text: 'Give prospects a live, hosted walkthrough where every room has context, flow, and intent.',
      icon: Users,
    },
    {
      title: 'Agency Sales Assets',
      text: 'Equip brokers with premium digital presentations that make follow-up sharper and faster.',
      icon: Building2,
    },
    {
      title: 'Brand Partnerships',
      text: 'Place furniture collections inside real buying moments, not disconnected catalog pages.',
      icon: Palette,
    },
  ] as const

  return (
    <>
      <SectionWrapper id="solutions" className="pb-16">
        <SectionHeader
          eyebrow="Sales enablement for premium property teams"
          title="A richer way to market spaces before they are move-in ready"
          description="Blend virtual interiors, branded furniture catalogs, and guided remote visits into one polished experience your sales team can share with qualified prospects."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article key={benefit.title} className="border border-border bg-card p-7 shadow-[0_18px_55px_rgba(23,23,23,0.045)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-accent/50 bg-cream text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-medium text-primary">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-secondary">{benefit.text}</p>
              </article>
            )
          })}
        </div>
      </SectionWrapper>

      <section className="section-padding bg-primary py-16 text-cream sm:py-20" aria-label="Landing benefits">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {[
            ['Launch earlier', 'Bring high-value listings to market before furnishing, fit-out, or final staging is complete.'],
            ['Sell the vision', 'Help buyers understand scale, atmosphere, and lifestyle fit before they book a visit.'],
            ['Monetize the room', 'Create premium placement opportunities for furniture and design partners.'],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-accent/40 pl-6">
              <p className="font-display text-3xl font-medium">{title}</p>
              <p className="mt-4 text-sm leading-7 text-cream/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionWrapper id="demo" className="pt-8">
        <div className="mx-auto max-w-7xl bg-white px-6 py-16 shadow-[0_24px_80px_rgba(23,23,23,0.06)] sm:px-10 sm:py-20 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Sales showcase workflow</p>
              <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
                Package a property into a premium buyer-facing experience.
              </h2>
            </div>
            <ButtonLink href="#create-project">Build a Showcase</ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-primary">{label}</span>
      {children}
    </label>
  )
}

function TextInput(props: JSX.IntrinsicElements['input']) {
  return (
    <input
      {...props}
      className="h-12 w-full border border-border bg-white px-4 text-sm text-primary outline-none transition placeholder:text-secondary/55 focus:border-accent focus:ring-2 focus:ring-accent/20"
    />
  )
}

function ActionButton({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: IconComponent
}) {
  const variants = {
    primary: 'border-primary bg-primary text-cream hover:bg-[#2F4550]',
    secondary: 'border-border bg-white text-primary hover:border-accent',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-3 border px-5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream ${variants[variant]}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </button>
  )
}

function CreateProject({
  selectedStyle,
  setSelectedStyle,
  onPreview,
}: {
  selectedStyle: string
  setSelectedStyle: (style: string) => void
  onPreview: () => void
}) {
  return (
    <section id="create-project" className="section-padding scroll-mt-24 py-16 sm:py-20 lg:py-24" aria-labelledby="create-title">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Showcase builder</p>
          <h2 id="create-title" className="font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Build a high-converting property showcase
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
            Add the property essentials, connect a 3D tour, and choose the interior direction your sales team wants to lead with.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-start">
          <div className="border border-border bg-card p-6 shadow-[0_24px_80px_rgba(23,23,23,0.07)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Property name">
                <TextInput defaultValue="Haussmann Apartment" placeholder="ex: City Loft" />
              </Field>
              <Field label="Surface">
                <TextInput defaultValue="75 m2" placeholder="ex: 75 m2" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Address">
                  <TextInput defaultValue="24 Avenue Victor Hugo, Paris" placeholder="Street, city" />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Matterport URL">
                  <TextInput defaultValue="https://my.matterport.com/show/?m=demo" placeholder="https://my.matterport.com/show/?m=..." />
                </Field>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-primary">Style selector</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {styleOptions.map((style) => {
                  const Icon = style.icon
                  const active = selectedStyle === style.name
                  return (
                    <button
                      type="button"
                      key={style.name}
                      onClick={() => setSelectedStyle(style.name)}
                      className={`min-h-36 border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(23,23,23,0.07)] ${
                        active ? 'border-primary bg-primary text-cream' : 'border-border bg-white text-primary hover:border-accent'
                      }`}
                    >
                      <Icon className={`mb-5 h-6 w-6 ${active ? 'text-accent' : 'text-primary'}`} aria-hidden="true" />
                      <span className="block font-display text-xl font-medium">{style.name}</span>
                      <span className={`mt-2 block text-sm leading-6 ${active ? 'text-cream/68' : 'text-secondary'}`}>{style.detail}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <ActionButton onClick={onPreview} icon={ArrowRight}>Generate Preview</ActionButton>
            </div>
          </div>

          <aside className="border border-border bg-primary text-cream shadow-[0_24px_80px_rgba(23,23,23,0.12)] lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={heroImage} alt="Preview of staged property" className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Vr Boost</p>
                <h3 className="font-display text-3xl font-medium">Showcase brief</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-7 text-cream/70">
                Turn property details, staging direction, and visit context into one premium sales presentation.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ selectedStyle }: { selectedStyle: string }) {
  return (
    <section id="project-preview" className="section-padding scroll-mt-24 border-t border-border bg-white/55 py-16 sm:py-20" aria-labelledby="preview-title">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Buyer-ready preview</p>
            <h2 id="preview-title" className="font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              Haussmann Apartment Preview
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
              A polished preview for sales teams, combining the selected interior direction with curated furniture and a guided visit entry point.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionButton variant="secondary" icon={Share2}>Share Project</ActionButton>
            <a
              href="/hub-avatar"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-primary bg-primary px-5 text-sm font-medium text-cream transition hover:bg-[#2F4550] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              <MonitorPlay className="h-4 w-4" aria-hidden="true" />
              Join Hub & Avatar
            </a>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <article className="overflow-hidden border border-border bg-card shadow-[0_18px_55px_rgba(23,23,23,0.05)]">
            <div className="relative aspect-[16/9] min-h-72 overflow-hidden bg-primary">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                alt="Project preview placeholder"
              />
              <div className="pointer-events-none absolute left-6 top-6 border border-white/20 bg-primary/70 px-4 py-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Project preview</p>
              </div>
              <a
                href="https://matterport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto absolute bottom-6 right-6 flex items-center gap-2 border border-white/20 bg-primary/80 px-4 py-3 backdrop-blur transition-colors hover:bg-primary"
              >
                <ExternalLink className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">View on Matterport</span>
              </a>
            </div>
          </article>

          <div className="space-y-6">
            <article className="border border-border bg-card p-6 shadow-[0_18px_55px_rgba(23,23,23,0.05)]">
              <p className="mb-5 text-sm font-semibold text-primary">Selected style cards</p>
              <div className="grid gap-3">
                {styleOptions.map((style) => {
                  const Icon = style.icon
                  const active = selectedStyle === style.name
                  return (
                    <div key={style.name} className={`flex items-start gap-4 border p-4 ${active ? 'border-primary bg-primary text-cream' : 'border-border bg-white text-primary'}`}>
                      <Icon className={`mt-1 h-5 w-5 ${active ? 'text-accent' : 'text-primary'}`} aria-hidden="true" />
                      <div>
                        <p className="font-display text-xl font-medium">{style.name}</p>
                        <p className={`mt-1 text-sm leading-6 ${active ? 'text-cream/65' : 'text-secondary'}`}>{style.detail}</p>
                      </div>
                      {active ? <Check className="ml-auto h-5 w-5 text-accent" aria-hidden="true" /> : null}
                    </div>
                  )
                })}
              </div>
            </article>

            <article className="border border-border bg-card p-6 shadow-[0_18px_55px_rgba(23,23,23,0.05)]">
              <p className="mb-5 text-sm font-semibold text-primary">Furniture cards</p>
              <div className="grid gap-3">
                {previewFurniture.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.name} className="flex items-center gap-4 border border-border bg-white p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-cream">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">{item.name}</p>
                        <p className="mt-1 text-sm text-secondary">{item.meta}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="section-padding border-t border-border bg-primary py-12 text-cream" aria-label="Footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-cream/65 md:flex-row md:items-center md:justify-between">
        <a href="#" className="font-display text-2xl font-semibold tracking-[0.12em] text-cream">Vr Boost</a>
        <p>Premium Virtual Staging + Guided Buyer Journeys</p>
        <p>2026 VR Boost Agency</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState('Modern')
  const [showPreview, setShowPreview] = useState(false)
  const currentPath = window.location.pathname.replace(/\/$/, '')
  const isDashboardPage = currentPath === '/dashboard'
  const isHubAvatarPage = currentPath === '/hub-avatar'

  const handlePreview = () => {
    setShowPreview(true)
    window.setTimeout(() => {
      window.history.replaceState(null, '', '#project-preview')
      document.getElementById('project-preview')?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 80)
  }

  if (isDashboardPage) {
    return <Dashboard />
  }

  if (isHubAvatarPage) {
    return <HubAvatar />
  }

  return (
    <div className="dashboard-bg min-h-screen overflow-x-hidden text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <LandingContent />
        <CreateProject selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} onPreview={handlePreview} />
        {showPreview ? <ProjectPreview selectedStyle={selectedStyle} /> : null}
      </main>
      <Footer />
    </div>
  )
}