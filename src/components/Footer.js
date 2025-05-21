import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Sri Pallavi</h3>
            <p className="text-white/80">Full Stack Developer</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-teal-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-teal-200">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-teal-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-teal-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/Sripallavi123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-teal-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sri-pallavi-guntupalli-57a17726a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-teal-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:sripallaviguntupalli2004@gmail.com"
                className="text-white/80 hover:text-teal-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Sri Pallavi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
