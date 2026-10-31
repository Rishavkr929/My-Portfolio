import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Rishavkr929",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/rishav-kumar-r929",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode size={20} />,
      url: "https://leetcode.com/u/Rishav_929/",
      label: "LeetCode",
    },
    {
      icon: <SiGeeksforgeeks size={20} />,
      url: "https://www.geeksforgeeks.org/profile/rishav929?tab=activity",
      label: "GeeksforGeeks",
    },
  ];

  return (
    <footer className="border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-xl text-red-500 font-bold  dark:text-red-400">
            Portfolio
          </h3>
          <p className="text-xs">Software Developer</p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="text-gray-600 dark:text-gray-400
                  hover:text-red-600 dark:hover:text-red-400
                  hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs flex items-center gap-1">
         © {currentYear} Made with <FaHeart className="text-red-500" />
        </p>
      </div>
      <div className="h-24"></div>
    </footer>
  );
};

export default Footer;
