import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";


const Header = ()=>{
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY > 50); // 50px scrolldan keyin background o'zgaradi
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
return(
    // absolute inset-x-0 top-0 z-50  -- header class
<header className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}>
    <Navbar />
</header>
)
}
export default Header;