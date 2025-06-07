import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { developer } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Azizbek Ahadov</h3>
            <p className="text-gray-400 mb-4">{developer.bio}</p>
            <p className="text-gray-400">{developer.location}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-accent transition-colors">Home</a>
              <a href="/about" className="block text-gray-400 hover:text-accent transition-colors">About</a>
              <a href="/skills" className="block text-gray-400 hover:text-accent transition-colors">Skills</a>
              <a href="/portfolio" className="block text-gray-400 hover:text-accent transition-colors">Portfolio</a>
              <a href="/blog" className="block text-gray-400 hover:text-accent transition-colors">Blog</a>
              <a href="/contact" className="block text-gray-400 hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p><a  href={`mailto:${developer.email}`}>{developer.email}</a></p>
              <p><a  href={`tel:${developer.phone}`}>{developer.phone}</a></p>
              <div className="flex space-x-4 mt-4">
                {developer.socialLinks.github && (
                  <a
                    href={developer.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {developer.socialLinks.linkedin && (
                  <a
                    href={developer.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {developer.socialLinks.dribbble && (
                  <a
                    href={developer.socialLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <Dribbble size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Azizbek Ahadov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}