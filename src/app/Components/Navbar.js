import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            
            <div className="z-10 top-0 sticky w-full flex items-center text-gray-600 text-2xl flex-row p-5 h-[100px] ">
                <Link className="items-center" href="#home">
                    <Image src={"./home.svg"}
                            alt=""
                            width={35}
                            height={35}/>
                </Link>
                <div className="ml-auto flex justify-end gap-8">
                    <Link className="hover:text-purple-800 " href="#about">About Me</Link>
                    <Link  className="hover:text-purple-800 " href="#work">Experience</Link>
                    <Link  className="hover:text-purple-800 " href="#projects">Projects</Link>
                </div>
               
            </div>
        </>
    );
}