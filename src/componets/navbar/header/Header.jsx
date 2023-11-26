import logoBlack from '../../../assets/adamoon_black.png';
// import logoWhite from '../../../assets/adamoon_white.png';
// import logoColor from '../../../assets/adamoon_colored.png';
import Navbar from "../Navbar";

export default function Header() {
    const taps = ['Homepage', 'Alle Produkte', 'Uber uns', 'Kontakt'];

    return(
        <nav className="fixed w-full border-b-[1px] border-black bg-white z-10">
            <Navbar 
                logo={logoBlack}
                taps={taps}
            />
        </nav>
    );
}