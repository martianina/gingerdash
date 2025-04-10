interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'The Four Leaf Clover Phenotype',
    description: `Exploring a quirky but replicable talent among redheads—finding four-leaf clovers—and what it might tell us about perception and MC1R.`,
    imgSrc: '/static/images/projects/clover.jpg',
    href: '/blog/four-leaf-clover-phenotype',
  },
  {
    title: 'The MC1R Longitudinal Study',
    description: `A first-of-its-kind effort to track MC1R carriers across time—mapping health constellations and rewriting how redhead biology is studied.`,
    imgSrc: '/static/images/projects/longitudinal.jpg',
    href: '/blog/mc1r-longitudinal-study',
  },
  {
    title: 'Sunscreen Safety for Redheads',
    description: `Can DeSci help redheads verify and access safer, more effective sunscreen formulas the FDA has neglected for decades?`,
    imgSrc: '/static/images/projects/sunscreen.jpg',
    href: '/blog/sunscreen-safety-redheads',
  },
]

export default projectsData
