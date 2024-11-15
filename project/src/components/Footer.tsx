import React from 'react';
import { Github, Mail, Linkedin, Code2, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light tracking-wider mb-4">CONNECT</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Developer Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 via-transparent to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <div className="relative p-6 border border-gray-800 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-gray-400 mr-3" />
                <h3 className="text-xl font-light tracking-wider">Anest Petollari</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  Crafted with passion by Anest Petollari, a developer who brings creative visions to life through code.
                  Specializing in creating immersive web experiences that blend aesthetics with functionality.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="inline-block px-3 py-1 border border-gray-800 rounded-full mr-2 hover:border-gray-700 transition-colors duration-300">React</span>
                  <span className="inline-block px-3 py-1 border border-gray-800 rounded-full mr-2 hover:border-gray-700 transition-colors duration-300">TypeScript</span>
                  <span className="inline-block px-3 py-1 border border-gray-800 rounded-full hover:border-gray-700 transition-colors duration-300">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anest Petollari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}