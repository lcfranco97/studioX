'use client'

import { motion } from "framer-motion";

export default function BudgetModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50"
        >
            <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-lg p-6 w-full m-4 max-w-md"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                        Faça seu orçamento sem compromisso!
                    </h2>

                    <button className="text-white hover:text-gray-800 transition duration-300 bg-purple-700 px-2 rounded-lg cursor-pointer" onClick={onClose}>
                        ✕
                    </button>

                </div> 

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>

                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />

                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                        
                        <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />

                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>

                        <textarea id="message" rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Nos conte sobre sua ideia de projeto para fazermos o orçamento"
                            required
                        />

                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors cursor-pointer">
                        Enviar orçamento
                    </button>


                </form>


            </motion.div>    
        </motion.div>    
    );
}