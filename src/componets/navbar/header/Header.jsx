import logoBlack from '../../../assets/adamoon_black.png';
import logoColor from '../../../assets/adamoon_colored.png';
import Navbar from "../Navbar";
import { taps } from '../../../pages/config';
import { useEffect, useState } from 'react';

export default function Header() {
    const [ prevScrollY, setPrevScrollY ] = useState(0);
    const [ navbarHide, setNavbarHide ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if ( currentScrollY > prevScrollY && currentScrollY > 80 ) {
                setNavbarHide(true);
            } else {
                setNavbarHide(false);
            }
            setPrevScrollY(currentScrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollY]);

    return(
        <nav className={navbarHide ? "fixed w-full border-b-[1px] border-black bg-white z-10 transform -translate-y-[44px] transition-transform duration-300" : "fixed w-full border-b-[1px] border-black bg-white z-10 transform  transition-transform duration-200"}>
            <Navbar 
                logo={[logoBlack, logoColor]}
                taps={taps}
            />
        </nav>
    );
}