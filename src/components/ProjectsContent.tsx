import Image from 'next/image'
import { work } from '@/data/work'

export default function WorkContent() {
  return (
    <div className="flex flex-wrap justify-between w-full max-w-[860px] gap-y-[50px] md:gap-y-0 md:gap-x-0">
      {work.map((item, index) => (
        <div key={index} className="w-full md:w-[350px] md:mb-[50px] bg-title-text text-[#444] font-roboto">
          <div className="relative h-[200px] w-full">
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/25">
              <div className="absolute bottom-0 m-[15px] text-white text-[1.1em] font-semibold">
                {item.title}
              </div>
            </div>
          </div>
          
          <div className="p-[15px] break-words border-b border-[#ccc]">
            {item.link ? (
              <>
                {item.description.split('internet')[0]}
                <a href={item.link} className="text-[#444] border-b border-dotted border-[#444]">internet</a>
              </>
            ) : (
              item.description
            )}
          </div>

          <div className="flex py-[17px] px-[15px] border-b border-[#ccc] justify-between items-center">
            <div className="w-4/5 bg-[#ccc] h-3">
              <div 
                className="h-full bg-theme-yellow"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <div className="text-sm font-semibold">{item.progress}%</div>
          </div>

          <div className="flex py-[15px] px-0">
            {item.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="group relative h-[45px] w-[45px] ml-[15px]">
                <Image 
                  src={skill.icon}
                  alt={skill.name}
                  width={45}
                  height={45}
                  className="w-[45px] h-auto"
                />
                <div className="opacity-0 group-hover:opacity-100 bg-black text-white text-center rounded-md p-[5px] absolute z-10 bottom-[52px] left-1/2 -translate-x-1/2 transition-opacity duration-250 whitespace-nowrap text-sm">
                  {skill.name}
                  <div className="absolute top-full left-1/2 -ml-[5px] border-[5px] border-solid border-t-black border-x-transparent border-b-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
