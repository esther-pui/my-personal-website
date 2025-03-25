import { useState, useRef } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiMoon, BiHome } from "react-icons/bi"
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="py-10 fixed bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })

  return (
    <ul className="relative mx-auto bg-[#f4f4f4] flex w-fit rounded-full
    border-2 border-black http://localhost:5173/ p-1">
      <Tab setPosition={setPosition}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <BiHome className="cursor-pointer h-4 w-4"/>
        </button>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="https://github.com/0xagu" target="_blank" rel="noopener noreferrer">
          <BiLogoGithub className="cursor-pointer h-4 w-4"/>
        </a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <BiLogoLinkedin className="cursor-pointer h-4 w-4" />
        </a>
      </Tab>
      <Tab setPosition={setPosition}>
          <BiMoon className="cursor-pointer h-4 w-4" />
      </Tab>
      <Cursor position={position} />
    </ul>
  )
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  return (
    <li 
    ref={ref}
    onMouseEnter={() => {
      if(!ref.current) return;

      const {width} = ref.current.getBoundingClientRect();

      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft
      })
    }}
    className="relative z-10 block cursor-pointer px-3
    py-1.5 text-xs uppercase text-white mix-blend-difference
    md:px-5 md:py-3 md:text-base" >
      {children}
    </li>
  )
}

const Cursor = ({position}) => {
  return <motion.li 
  animate={position}
  className="absolute z-0 h-7 w-16 rounded-full bg-black md:h-12" />
}

export default Navbar