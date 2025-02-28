import { useState } from 'react';
import { FaWhatsapp, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';


const HamBurgerVariants = {
            hidden:{
               opacity : 0, y:-10
            },
            visible:{
              opacity:1, y:0,
              
              transition:{
                duration:0.5
              }
            }
           
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-black to-blue-400 shadow-md relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-600">Logo</div>
      {/* Center: Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-white hover:text-blue-600">Home</a>
        <a href="#courses" className="text-white hover:text-blue-600">Courses</a>
        <a href="#about" className="text-white hover:text-blue-600">About</a>
        <a href="#other" className="text-white hover:text-blue-600">Other</a>
      </div>

      {/* Right: WhatsApp Icon, Login Button, and Mobile Menu Button */}
      <div className="flex items-center space-x-12">
        {/* Desktop: WhatsApp Icon and Login Button */}
        <div className="hidden md:flex items-center space-x-8">
          <FaWhatsapp className="text-white  text-3xl hover:text-green-500"/>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FaUser className="mr-2" />
            Login
          </button>
        </div>

        {/* Mobile: WhatsApp Icon, Login Button with Logo, and Hamburger Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <FaWhatsapp className="text-white text-2xl hover:text-green-500" />
          <button className="flex items-center px-2 py-1 bg-blue-600 text-white text-sm rounded-lg">
            <FaUser className="mr-1" />
            Login
          </button>
          <button onClick={toggleMenu} className="text-gray-900 transform transition-transform duration-300 hover:scale-120 ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
        
        variants={HamBurgerVariants}
        initial = "hidden"
        animate = "visible"

        className="absolute top-16 left-0 w-full bg-blue-300 shadow-md md:hidden">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Home</a>
          <a href="#courses" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Courses</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">About</a>
          <a href="#other" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Other</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
