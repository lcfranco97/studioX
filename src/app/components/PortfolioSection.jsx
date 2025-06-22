'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import Image from "next/image";

export default function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtredProjects = activeFilter === "all"
    ? projectsData : projectsData.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 bg-gray-50 mb-40" id="portfolio">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Portfólio</h2>

                {/* Filtros */}
                <div className="flex justify-center gap-4 mb-12">
                    {["all", "web", "branding", "ui"].map((filter) => (
                        <motion.button key={filter}
                            onClick={() => setActiveFilter(filter)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === filter ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'}`}
                        >
                            {filter === "all" ? "Todos" : filter}
                        </motion.button>    
                    ))}
                </div>

                {/* Grid dos projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtredProjects.map((project, index) => (
                        <motion.div key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <Image src={project.image} alt={project.title}
                                width={400}
                                height={200}
                                className="w-full h-64 object-cover rounded-lg"
                            />

                            <div className="absolute inset-0 group-hover:bg-black/50 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 rounded-lg">
                                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-purple-600 hover:bg-purple-900 px-4 py-2 cursor-pointer">Ver detalhes</p>
                            </div>

                        </motion.div>    
                    ))}
                </div>    

            </div>
        </section>
    );
}