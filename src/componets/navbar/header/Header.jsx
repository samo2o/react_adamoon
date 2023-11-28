import logoBlack from '../../../assets/adamoon_black.png';
import logoColor from '../../../assets/adamoon_colored.png';

import Navbar from "../Navbar";

export default function Header() {
    const domain = window.location.host;

    const taps = [
        {
            'name': 'Homepage',
            'link': `http://${domain}/home`,
        },
        {
            'name': 'Alle Produkte',
            'link': `http://${domain}/products`,
        },
        {
            'name': 'Uber uns',
            'link': `http://${domain}/#`,
        },
        {
            'name': 'Kontakt',
            'link': `http://${domain}/#`,
        },
    ];

    return(
        <nav className="fixed w-full border-b-[1px] border-black bg-white z-10">
            <Navbar 
                logo={[logoBlack, logoColor]}
                taps={taps}
            />
        </nav>
    );
}