import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Cuboid,
  MonitorPlay,
  Palette,
  Sofa,
  Upload,
  Users,
  Video,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { SectionWrapper } from './components/SectionWrapper'
import {
  furnitureCollections,
  howItWorksSteps,
  metrics,
  testimonials,
  valuePropositions,
} from './data/mock-data'

const heroImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88'

const iconMap = {
  staging: Sofa,
  preview: Cuboid,
  collaboration: Users,
  upload: Upload,
  tour: Video,
  style: Palette,
  share: MonitorPlay,
} as const

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
  variant?: 'dark' | 'light'
}) {
  const isDark = variant === 'dark'

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 text-sm font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:px-7 ${
        isDark
          ? 'border-primary bg-primary text-cream hover:bg-[#2B2B2B]'
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
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-accent"
          >
            Luxury virtual home staging
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-primary sm:text-6xl lg:text-7xl xl:text-[5rem]"
          >
            Transform Empty Spaces Into Exceptional Experiences
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-7 max-w-2xl text-lg leading-9 text-secondary"
          >
            Create immersive home staging projects, showcase premium furniture collections, and help clients
            visualize their future interiors before a single piece is installed.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#projects">Create Project</ButtonLink>
            <ButtonLink href="#visits" variant="light">
              Watch Demo
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-7 top-10 hidden h-28 w-28 border border-accent/50 lg:block" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Elegant furnished living room staged with premium contemporary furniture"
            className="relative aspect-[4/5] w-full object-cover shadow-[0_28px_80px_rgba(23,23,23,0.12)] sm:aspect-[16/12] lg:aspect-[5/4]"
          />
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 p-5 shadow-[0_16px_50px_rgba(23,23,23,0.10)] sm:left-auto sm:w-80">
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-primary">Showroom-ready preview</p>
                <p className="mt-1 text-sm leading-6 text-secondary">
                  Curated room sets prepared for private client presentation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ValueProposition() {
  return (
    <SectionWrapper id="solutions" className="pb-16">
      <SectionHeader
        eyebrow="Platform"
        title="A refined workspace for premium property presentation"
        description="Purpose-built for teams who sell spaces through atmosphere, proportion, materiality, and trust."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
        {valuePropositions.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <article
              key={item.title}
              className="group border border-border bg-card p-8 shadow-[0_18px_55px_rgba(23,23,23,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,23,23,0.08)]"
            >
              <div className="mb-10 flex h-12 w-12 items-center justify-center border border-accent/50 bg-cream text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-medium text-primary">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-secondary">{item.description}</p>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

function HowItWorks() {
  return (
    <SectionWrapper id="projects" className="bg-white/55">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workflow"
          title="From vacant property to immersive client visit"
          description="A composed project flow for sales teams, showroom consultants, and development partners."
        />
        <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-border lg:block" aria-hidden="true" />
          {howItWorksSteps.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <article key={step.title} className="relative bg-card p-7 shadow-[0_14px_44px_rgba(23,23,23,0.045)]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-accent/60 bg-cream">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="font-display text-4xl text-accent/70">0{step.step}</span>
                </div>
                <h3 className="font-display text-2xl font-medium text-primary">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-secondary">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

function Collections() {
  return (
    <SectionWrapper id="visits">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Collections"
            title="Furniture stories for every architectural character"
            align="left"
          />
          <p className="max-w-2xl text-base leading-8 text-secondary lg:ml-auto">
            Present curated Roche Bobois-inspired atmospheres with photography-led collection cards that feel closer to a
            private showroom catalogue than a software library.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {furnitureCollections.map((collection) => (
            <article key={collection.name} className="group overflow-hidden bg-card shadow-[0_18px_55px_rgba(23,23,23,0.05)]">
              <div className="aspect-[5/4] overflow-hidden bg-border">
                <img
                  src={collection.image}
                  alt={`${collection.name} luxury interior collection`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium text-primary">{collection.name}</h3>
                  <ChevronRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <p className="text-sm leading-7 text-secondary">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function Metrics() {
  return (
    <section className="section-padding bg-primary py-16 text-cream sm:py-20" aria-label="Platform metrics">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="border-l border-accent/40 pl-6">
            <p className="font-display text-5xl font-medium sm:text-6xl">{metric.value}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cream/65">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by teams presenting properties at the highest level"
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="border border-border bg-card p-8 shadow-[0_18px_55px_rgba(23,23,23,0.045)]">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{testimonial.type}</p>
            <blockquote className="font-display text-2xl font-medium leading-snug text-primary">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-9 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex h-11 w-11 items-center justify-center bg-cream">
                <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{testimonial.author}</p>
                <p className="mt-1 text-sm text-secondary">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

function FinalCta() {
  return (
    <SectionWrapper id="demo" className="pt-8">
      <div className="mx-auto max-w-7xl bg-white px-6 py-16 shadow-[0_24px_80px_rgba(23,23,23,0.06)] sm:px-10 sm:py-20 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Private demonstration</p>
            <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
              Elevate Every Property Presentation
            </h2>
          </div>
          <ButtonLink href="mailto:demo@roche-bobois-staging.com">Request a Private Demonstration</ButtonLink>
        </div>
      </div>
    </SectionWrapper>
  )
}

function Footer() {
  return (
    <footer className="section-padding border-t border-border py-10" aria-label="Footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-secondary md:flex-row md:items-center md:justify-between">
        <a href="#" className="font-display text-lg font-semibold tracking-[0.15em] text-primary">
          ROCHE BOBOIS
        </a>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <a href="#solutions" className="hover:text-primary">Solutions</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#visits" className="hover:text-primary">Virtual Visits</a>
          <a href="#about" className="hover:text-primary">About</a>
        </div>
        <p>Luxury B2B Home Staging Platform</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Collections />
        <Metrics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
