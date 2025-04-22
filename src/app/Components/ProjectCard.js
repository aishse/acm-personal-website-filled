import Image from "next/image";

{/** A card to display project information.  */}

export default function ProjectCard({name, description, image, source}) {
    
    return (
        <>
             <div className="flex flex-row bg-white rounded-xl max-w-2xl shadow-lg p-6">


                <div className="w-2/3">
                  <Image
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="w-2/3 overflow-auto px-3">
                  <h1 className="text-4xl font-medium">{name}</h1>
                  <h2 className="pt-4 mb-6">
                    {description}
                  </h2>
                  <a className="text-md text-purple-800"href={source} target="_blank">Find out more -&gt;</a>

                </div>


              </div>
           
        </>

    );
}