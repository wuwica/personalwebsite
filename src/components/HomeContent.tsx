import Image from 'next/image'

export default function HomeContent() {
  return (
    <div className=" p-8 w-full max-w-[860px] flex flex-col md:flex-row justify-between flex-wrap relative overflow-hidden ">
      <div className="flex flex-col md:min-h-0">
        <div className="flex justify-center md:justify-start">
          <div className="w-[200px] h-[200px] flex-shrink-0 mr-4 md:mr-0">
            <Image
              src="/imgs/portrait.webp"
              alt="Jonathan Wu"
              width={200}
              height={200}
              priority
              className="w-full h-[200px] object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end min-h-0 [&>h5]:my-1 w-[200px]">
          <h5>Shoot me an <a href="mailto:contactme@jonathanpwu.com?Subject=Hello%20Jonathan" target="_top">email</a></h5>
          <h5>Connect with me on <a href="https://www.linkedin.com/in/jonathan-wu-toronto/">LinkedIn</a></h5>
          <h5>My Biggest <a href="https://yumearcade.ca/">Passion Project</a></h5>
          <h5>Take a peek at my <a href="https://github.com/wuwica">Github</a></h5>
          <h5>My  <a href="https://open.spotify.com/playlist/37i9dQZF1DWWBHeXOYZf74?si=07fa75fdd59749fd">favorite playlist</a></h5>
        </div>
      </div>

      <div className="w-full md:w-[5px] h-[10px] md:h-auto my-4 md:my-0 gradient-separator rounded-full relative">
        <div className="absolute inset-0 gradient-separator opacity-60 rounded-full blur-lg"></div>
        <div className="absolute inset-0 gradient-separator rounded-full"></div>
      </div>

      <div className="w-full md:w-[500px] md:float-right">
        <p>
        Hey there! I&apos;m Jonathan, a full-stack software developer, maker, and arcade owner with a love for unique, challenging problems. I&apos;m always on the lookout for something new to learn, whether that means refining old work or diving into something completely outside my comfort zone.
          <br /><br />
          I take real pleasure in exploring unfamiliar territory, improving systems, and expanding my knowledge through hands-on experimentation.
          <br /><br />
          I’m also a serial hobbyist, with interests spanning custom keyboards, 3D printing, homelabbing, manufacturing, and most recently arcade machines. 
          <br /><br />
          <b>Tools fresh in my Toolbelt:</b>
          <br />
          Java + Spring, Elixir + Phoenix, Google Cloud, Docker, Kubernetes, JavaScript, Langchain, Postgres
          <br /><br />
          <b>Tools I've used in the past:</b>
          <br />
          Python, C ++, Swift, Ruby on Rails, Arduino, VB, PHP, React, JQuery, CSS, HTML, Machine Learning, Rust, Tauri
        </p>
      </div>
    </div>
  )
}
