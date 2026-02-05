export interface Work {
  title: string
  image: string
  description: string
  descriptionExpanded?: string
  progress: number
  link?: string
  bgColor?: string
  skills: {
    icon: string
    name: string
  }[]
}

export const work: Work[] = [
  {
    title: 'Yume Arcade',
    image: '/imgs/yume.webp',
    description: 'Founder and owner of Yume Arcade, Toronto\'s only Japanese arcade',
    descriptionExpanded: 'I\'m the founder and owner of Yume Arcade, Toronto\'s only Japanese arcade.  Built up from basement arcades we took our passion and turned it into a full time business.',
    progress: 100,
    link: 'https://yumearcade.ca/',
    bgColor: '#fef3f0',
    skills: [
      { icon: '/imgs/skill-icons/cad1.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/networking.svg', name: 'Networking Infrastructure' },
      { icon: '/imgs/skill-icons/nextjs.svg', name: 'Next.js' },
    ]
  },
  {
    title: 'Yume Pay',
    image: '/imgs/credits.webp',
    description: 'In house payment system for Yume Arcade',
    descriptionExpanded: 'Designed and built an end to end arcade credit system. Built ontop of a custom PCB, c++ firmware, and a java spring boot backend with a 100% production uptime.',
    progress: 90,
    bgColor: '#e8f4f8',
    skills: [
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/c++.svg', name: 'C++' },
      { icon: '/imgs/skill-icons/cad1.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/circuits.svg', name: 'Circuit Design & Soldering' },
      { icon: '/imgs/skill-icons/java.svg', name: 'Java' },
      { icon: '/imgs/skill-icons/postgres.svg', name: 'PostgreSQL' },
    ]
  },
  {
    title: 'Game Queue System',
    image: '/imgs/yume-queue.webp',
    description: 'First digital line system for arcade games',
    descriptionExpanded: 'Built to deal with growing wait times, and confusion and traditional systems. I made a fully digital line android app linked to the games to streamline and improve the customer experience.',
    progress: 90,
    bgColor: '#f0f8f0',
    skills: [
      { icon: '/imgs/skill-icons/android.svg', name: 'Android' },
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/rust.svg', name: 'Rust' },
      { icon: '/imgs/skill-icons/tauri.svg', name: 'Tauri' },
    ]
  },
  {
    title: 'Yume Self Serve System',
    image: '/imgs/kiosk.webp',
    description: 'Fully automated self serve system for onboarding',
    descriptionExpanded: 'I built a complete self-service onboarding system for customers, including a fully purpose built kiosk designed to meet our unique system requirements and deliver a smooth, intuitive experience.',
    progress: 90,
    bgColor: '#f0f8f0',
    skills: [
      { icon: '/imgs/skill-icons/c++.svg', name: 'C++' },
      { icon: '/imgs/skill-icons/cad1.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/rust.svg', name: 'Rust' },
      { icon: '/imgs/skill-icons/tauri.svg', name: 'Tauri' },
    ]
  },
  {
    title: 'HomeLab',
    image: '/imgs/computer.png',
    description: 'I have created one of the most well known home offices around the internet',
    descriptionExpanded: 'A comprehensive home cloud server setup running Docker containers for media management, network storage, home automation, and development environments.  My little living room PC has gotten picked by publications and youtubers alike.',
    progress: 90,
    link: 'https://www.reddit.com/r/battlestations/comments/g1x6g1/completely_reasonable_apartment_setup/',
    bgColor: '#fef9e8',
    skills: [
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/cad1.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/mysql.svg', name: 'MySQL' },
      { icon: '/imgs/skill-icons/networking.svg', name: 'Networking Infrastructure' },
    ]
  },
]
