'use client'

import Typewriter from "typewriter-effect";
import VantaBackground from "./VantaBackground";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Hero() {

    const scrollTo = useSmoothScroll();

    return (
        <section className="relative w-full h-screen">
            <VantaBackground />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <Typewriter options={{
                        strings: ["Design que transforma negócios", "Soluções visuais únicas"],
                        autoStart: true,
                        loop: true,
                        }}
                    />        
                </h1>

                <button onClick={() => scrollTo('portfolio')} className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer">
                    Veja nossos projetos
                </button>        


            </div>
        </section>
    )
}