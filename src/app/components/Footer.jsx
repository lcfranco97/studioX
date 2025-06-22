'use client'

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from './assets/footerimg2.png';
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Footer() {

    const scrollTo = useSmoothScroll();

    return (
        <footer className="w-full bg-black grid grid-cols-1 justify-center md:flex py-20 md:justify-around items-center gap-12">
            <div className="flex flex-col gap-4 text-white items-center">
                <Link href={'/'}>
                    <h2 className="text-white font-semibold text-4xl">StudioX</h2>
                </Link>
                
                <p className="text-2xl font-semibold">Redes sociais</p>
                <div className="flex gap-4">
                    <Link href={'/'}>
                        <FaInstagram  size={28}/>
                    </Link>

                    <Link href={'/'}>
                        <FaSquareFacebook  size={28}/>
                    </Link>

                    <Link href={'/'}>
                        <FaLinkedin  size={28}/>
                    </Link>

                </div>
            </div>

            <div className="flex flex-col gap-4 text-white items-center">
                <Link href={'/'} className="text-xl font-semibold hover:underline transition duration-300">
                    <p>Início</p>
                </Link>

                <button onClick={() => scrollTo('services')} className="text-xl font-semibold hover:underline transition duration-300 cursor-pointer">
                    <p>Serviços</p>
                </button>

                <button onClick={() => scrollTo('portfolio')} className="text-xl font-semibold hover:underline transition duration-300 cursor-pointer">
                    <p>Portfólios</p>
                </button>

            </div>

            <div className="flex items-center justify-center">
                <Image src={img}
                    alt="Footer imagem"
                    width={300}
                    height={200}
                    className=""
                />    
            </div>


        </footer>
    )
}