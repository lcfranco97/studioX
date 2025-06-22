'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import BudgetModal from "./BudgetModal";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollTo = useSmoothScroll();
    
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
    }, []);
    
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => setMenuOpen(false);


    return (
        <>
            <header className={`fixed w-full top-0 left-0 z-50 px-10 py-4 flex items-center   justify-between transition-all duration-300 ${scrolled ? 'bg-black text-white shadow-mg backdrop-blur-md' : 'bg-transparent text-white'}`}>

                <Link href={'/'} className="text-2xl font-semibold">
                    StudioX
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href={'/'} className="text-xl font-medium hover:bg-purple-700 rounded-lg px-2 py-2 transition duration-300">
                        Início
                    </Link>

                    <button onClick={() => scrollTo('services')} className="text-xl font-medium  hover:bg-purple-700 rounded-lg px-2 py-2 transition duration-300 cursor-pointer">
                        Serviços
                    </button>

                    <button onClick={() => scrollTo('portfolio')} className="text-xl font-medium  hover:bg-purple-700 rounded-lg px-2 py-2 transition duration-300 cursor-pointer">
                        Portfólio
                    </button>

                    
                    <button onClick={() => setIsModalOpen(true)} className=" rounded-lg px-2 py-2 cursor-pointer bg-purple-600 hover:bg-purple-700 transition duration-300">
                        Orçamento
                    </button>
                    
                </nav>

                <button className="md:hidden text-white z-[60]"
                 onClick={toggleMenu} aria-label="Abrir menu">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>


            </header>
            
                <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? 'opacitity-100 visible' : 'opacity-0 invisible'} md:hidden`} onClick={closeMenu} />

                <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 p-6 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <button className="absolute top-4 right-4 text-white" onClick={closeMenu} aria-label="Fechar menu">
                        <X size={28} />
                    </button>
                 

                    <nav className="flex flex-col space-y-4 mt-16 text-lg font-medium items-start">
                        <Link href={'/'} onClick={closeMenu} className="text-2xl">Início</Link>
                        <hr />
                        <button onClick={() => scrollTo('services')} className="text-2xl">Serviços</button>
                        <hr />
                        <button onClick={() => scrollTo('portfolio')} className="text-2xl">Portfólio</button>
                        <hr />
                        
                        <button onClick={() => setIsModalOpen(true)} className="rounded-lg px-4 py-2 text-white bg-violet-600">
                                Orçamento
                        </button>
                        
                    </nav>

                </div>



            

            <BudgetModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />    
        </>
    );
}