'use client'

import { motion } from "framer-motion";
import wb from './assets/web2.png';
import brand from './assets/branding.png';
import mobile from './assets/ui.png';
import Image from "next/image";

export default function Services(){

    const services = [
        {img: brand, title: "Branding"},
        {img: wb, title: "Web Design"},
        {img: mobile, title: "UI/UX"},
    ];

    return (
        <section className="py-20 mb-10 bg-white" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Serviços</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((services, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-mg text-center"
                        >
                            <motion.div className="text-4xl mb-4"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image 
                                    src={services.img}
                                    alt={services.title}
                                    width={300}
                                    height={200}
                                    className="mx-auto"
                                />    
                            </motion.div>

                            <h3 className="text-2xl font-bold">{services.title}</h3>

                        </motion.div>    
                    ))}
                </div>

            </div>
        </section>
    );
}