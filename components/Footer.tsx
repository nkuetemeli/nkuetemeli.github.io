import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Natacha Kuete Meli. All rights reserved.
                    </div>

                    <div className="flex items-center gap-5">
                        {socialLinks.map((social, index) => (
                            <motion.a 
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-sm">
                        Made with ❤️ by <span className="font-semibold text-white">Maxwell Tchiabe</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
