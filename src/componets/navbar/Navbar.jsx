import { Link } from 'react-router-dom';

export default function Navbar({logo, taps=[]}) {
    function logoClickHandle() {
        window.location.href = window.location.origin;
    }

    return(
        <div className="flex mx-auto py-2 max-w-[1200px] font-fredoka">
            {/* logo */}
            <div className="group relative contents px-4" onClick={logoClickHandle}>
                <img className="absolute h-7 w-auto cursor-pointer opacity-100 group-hover:opacity-0 mx-2" src={logo[0]} alt="" />
                <img className="absolute h-7 w-auto cursor-pointer opacity-0 group-hover:opacity-100 mx-2" src={logo[1]} alt="" />
                <img className="invisible h-7 w-auto mx-2" src={logo[1]} alt="" />
            </div>

            {/* taps */}
            <div className="hidden md:flex md:flex-1 ml-10 items-center space-x-10">
                {
                    taps.map((tap, index) => (
                        <Link to={tap.link} key={index} className="cursor-pointer hover:underline">
                            {tap.name}
                        </Link>
                    ))
                }
            </div>
            
            {/* left icons */}
            <div className="group flex justify-end flex-1 md:flex-none space-x-5 my-auto mx-2 cursor-pointer">
                <div className="group-hover:scale-110 transition-transform duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}