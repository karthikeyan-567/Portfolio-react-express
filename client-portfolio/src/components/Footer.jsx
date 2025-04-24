import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect!</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white"
          >
            <Mail size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
