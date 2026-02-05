export interface Work {
  title: string
  image: string
  description: string
  progress: number
  link?: string
  skills: {
    icon: string
    name: string
  }[]
}

export const work: Work[] = [
  {
    title: 'Yume Arcade',
    image: '/imgs/yume.webp',
    description: 'I have created one of the most well known home offices around the internet',
    progress: 100,
    link: 'https://yumearcade.ca/',
    skills: [
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/cad.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/mysql.svg', name: 'MySQL' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
    ]
  },
  {
    title: 'HomeLab',
    image: '/imgs/computer.png',
    description: 'I have created one of the most well known home offices around the internet',
    progress: 90,
    link: 'https://www.reddit.com/r/battlestations/comments/g1x6g1/completely_reasonable_apartment_setup/',
    skills: [
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/cad.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/mysql.svg', name: 'MySQL' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
    ]
  },
  {
    title: 'HomeLab',
    image: '/imgs/computer.png',
    description: 'I have created one of the most well known home offices around the internet',
    progress: 90,
    link: 'https://www.reddit.com/r/battlestations/comments/g1x6g1/completely_reasonable_apartment_setup/',
    skills: [
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/cad.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/mysql.svg', name: 'MySQL' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
    ]
  },
  {
    title: 'HomeLab',
    image: '/imgs/computer.png',
    description: 'I have created one of the most well known home offices around the internet',
    progress: 90,
    link: 'https://www.reddit.com/r/battlestations/comments/g1x6g1/completely_reasonable_apartment_setup/',
    skills: [
      { icon: '/imgs/skill-icons/javascript.svg', name: 'Javascript' },
      { icon: '/imgs/skill-icons/cad.svg', name: 'CAD Modeling' },
      { icon: '/imgs/skill-icons/arduino.svg', name: 'Arduino' },
      { icon: '/imgs/skill-icons/mysql.svg', name: 'MySQL' },
      { icon: '/imgs/skill-icons/docker.svg', name: 'Docker' },
    ]
  },
]
