export const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Virtual Visits', href: '#visits' },
  { label: 'About', href: '#about' },
] as const

export const valuePropositions = [
  {
    title: 'Virtual Home Staging',
    description:
      'Create realistic furnished environments using curated luxury collections.',
    icon: 'staging',
  },
  {
    title: '3D Property Preview',
    description:
      'Allow clients to explore interiors before purchasing decisions.',
    icon: 'preview',
  },
  {
    title: 'Hub & Avatar Collaboration',
    description:
      'Host immersive remote visits and guide customers through projects.',
    icon: 'collaboration',
  },
] as const

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Upload Property',
    description:
      'Import floor plans, photos, or 3D scans of the property to stage.',
    icon: 'upload',
  },
  {
    step: 2,
    title: 'Connect Virtual Tour',
    description:
      'Link existing virtual tours or create new immersive walkthroughs.',
    icon: 'tour',
  },
  {
    step: 3,
    title: 'Select Furniture Style',
    description:
      'Browse curated luxury collections and apply styles to each room.',
    icon: 'style',
  },
  {
    step: 4,
    title: 'Share Interactive Experience',
    description:
      'Send live staging previews to clients and collaborate in real time.',
    icon: 'share',
  },
] as const

export const furnitureCollections = [
  {
    name: 'Contemporary Elegance',
    description: 'Refined silhouettes and rich textures for timeless interiors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=86',
  },
  {
    name: 'Modern Parisian',
    description: 'Haussmann-inspired sophistication meets contemporary comfort.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=86',
  },
  {
    name: 'Scandinavian Premium',
    description: 'Nordic minimalism elevated with exceptional craftsmanship.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=86',
  },
  {
    name: 'Architect Collection',
    description: 'Statement pieces designed in collaboration with world-class architects.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=86',
  },
  {
    name: 'Minimal Luxury',
    description: 'Quiet opulence through restraint, materiality, and precision.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=86',
  },
  {
    name: 'Signature Living',
    description: 'Iconic Roche Bobois designs that define a room instantly.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=86',
  },
] as const

export const metrics = [
  { value: '300+', label: 'Luxury Projects' },
  { value: '1,200+', label: 'Furniture References' },
  { value: '85%', label: 'Faster Client Decisions' },
  { value: '40+', label: 'Partner Agencies' },
] as const

export const testimonials = [
  {
    quote:
      'Our clients now experience a fully furnished apartment before construction is even complete. This has fundamentally changed how we sell off-plan properties.',
    author: 'Isabelle Moreau',
    role: 'Director',
    company: 'Prestige Immobilier',
    type: 'Real Estate Agency',
  },
  {
    quote:
      'The virtual staging platform lets our clients see exactly how a Roche Bobois piece transforms their space. Conversion rates have increased dramatically.',
    author: 'Laurent Dubois',
    role: 'Showroom Manager',
    company: 'Roche Bobois Lyon',
    type: 'Furniture Retailer',
  },
  {
    quote:
      'Being able to walk investors through furnished interiors remotely has been invaluable. We secured three major developments this quarter using the platform.',
    author: 'Marc Fontaine',
    role: 'Development Director',
    company: 'Groupe Fontaine Developpement',
    type: 'Property Developer',
  },
] as const
