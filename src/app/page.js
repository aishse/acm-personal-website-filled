import Image from "next/image";
import Navbar from "./Components/Navbar"
import Link from "next/link"
import ProjectCard from "./Components/ProjectCard";
export default function Home() {
  return (
    <>
      
      <div id="home" className="bg-purple-100 min-h-screen flex flex-col">
        <Navbar/>

       {/** introduction section */}
         <div  className="flex flex-row text-center pt-4 items-center justify-center gap-8 pb-75">
            <div className="w-1/3 justify-center">
              <h1 className="text-7xl font-light">Evil scientist, aspiring ruler of the Tri-State Area</h1>
              <h1 className="text-3xl pt-4 font-light">Hi, I&apos;m Dr. Heinz Doofinsmirtz</h1>
             
              {/** Socials - replace these with your own */}

              <div className="flex flex-row gap-4 justify-center pt-5">
                  <a href="https://simple.wikipedia.org/wiki/Dr._Heinz_Doofenshmirtz"
                        target="_blank">
                       <Image src="/linkedin.svg"
                        alt="" 
                        width={50}
                        height={50}/>
                  </a>
                  
                   <a href="https://github.com/"
                        target="_blank">
                       <Image src="/github.svg"
                        alt="" 
                        width={50}
                        height={50}/>
                  </a>

                   
              </div>
            </div>
            {/** Change this to your photo */}
              <Image src="/profile_pic.png"
                    alt="" 
                    className="rounded-4xl bg-amber-900"
                    width={450}
                    height={450}/>

    
          </div>

          {/** About section */}

          <div id = "about" className="flex flex-col text-left text-2xl pt-10 gap-8 px-32">
            <h1 className="text-7xl font-bold">About me</h1>

            <p className="bg-white rounded-2xl shadow-md p-8">
              Hello! I’m Dr. Heinz Doofenshmirtz, founder and CEO of Doofenshmirtz Evil Incorporated. I specialize in creating -inators — 
              highly specific inventions designed to solve trivial problems, often with unintended consequences. My career began in the small, 
              little-known country of Drusselstein, where I had a less-than-ideal childhood, to say the least. Now, my ongoing (and totally reasonable) 
              quest is to take over the Tri-State Area, all while navigating setbacks like my platypus nemesis and my daughter’s disapproval. I combine science, 
              creativity, and a bit of villainous charm in all my work — aiming for world domination... and perhaps a tiny bit of redemption, but mostly world domination.
            </p>
          </div>

           {/** Work experience section */}
           <div id = "work" className="flex flex-col text-left text-xl pt-10 gap-8 px-32">
            <h1 className="text-7xl font-bold">Work Experience</h1>

              {/** Experience #1 (paste from your resume) */}
             <div className="p-6 rounded-2xl bg-white ">
                <h3 className="text-2xl font-semibold">Chief Inventor and CEO</h3>
                <p className="text-xl text-gray-700">Doofenshmirtz Evil Incorporated <br />Drusselstein — 1998 - Present</p>

                {/** Bullet points */}
                <ul className="list-disc text-left pl-5 mt-3 space-y-2 text-gray-600">
                  <li>Spearheaded the development of over 150 patented *-inators* aimed at solving highly specific and often trivial problems...</li>
                  <li>Led a small, highly dedicated team of erratic assistants and unpredictable lab animals...</li>
                  <li>Successfully executed plans to take over the Tri-State Area on numerous occasions...</li>
                  <li>Championed innovation in the field of &quot;villainous engineering&quot;...</li>
                  <li>Managed to avoid major legal repercussions despite several close calls...</li>
                </ul>
              </div>

           
            </div>

          {/** Projects section */}

          <div id = "projects" className="flex flex-col text-left text-lg pt-10 gap-8 px-30 pb-20">
            <h1 className="text-7xl font-bold">Projects</h1>
            <div className="grid grid-cols-2 gap-2">
                 <ProjectCard
                  name={"Destructor-inator"}
                  description={"An inator that destroys all lawn gnomes in the tri-state area."}
                  image = {"/project-photos/placeholder1.png"}
                  source ={"https://phineasandferb.fandom.com/wiki/List_of_Doofenshmirtz%27s_schemes_and_inventions/Season_1"} />

                <ProjectCard
                  name={"Destructor-inator"}
                  description={"An inator that destroys all lawn gnomes in the tri-state area."}
                  image = {"/project-photos/placeholder1.png"}
                  source ={"https://phineasandferb.fandom.com/wiki/List_of_Doofenshmirtz%27s_schemes_and_inventions/Season_1"} />

                  <ProjectCard
                  name={"Destructor-inator"}
                  description={"An inator that destroys all lawn gnomes in the tri-state area."}
                  image = {"/project-photos/placeholder1.png"}
                  source ={"https://phineasandferb.fandom.com/wiki/List_of_Doofenshmirtz%27s_schemes_and_inventions/Season_1"} />
                 <ProjectCard
                  name={"Destructor-inator"}
                  description={"An inator that destroys all lawn gnomes in the tri-state area."}
                  image = {"/project-photos/placeholder1.png"}
                  source ={"https://phineasandferb.fandom.com/wiki/List_of_Doofenshmirtz%27s_schemes_and_inventions/Season_1"} />

           
           
          
            </div>
           
          
          </div>

          <div>

          </div>
      {/** The website's footer. Replace with your name and any other information you'd like to put here*/}

            <footer className="bg-gray-800 text-white py-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Doofenshmirtz Evil Incorporated</h3>
                  
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm">© {new Date().getFullYear()} Doofenshmirtz Evil Incorporated. All rights reserved.</p>
                </div>
              </div>
          </footer>
        </div>


        


    
    </>
   

    
  );
}
