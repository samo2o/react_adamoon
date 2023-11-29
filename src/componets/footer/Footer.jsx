import { Link } from 'react-router-dom';
import logoWhite from '../../assets/adamoon_white.png';

export default function Footer({ terms, policy, taps=[], addresse=['1234 Mockingbird Lane', 'Suite 567', 'Cityville, State 54321','Countryland' ], contactUs=false, year='2023', domain='example.de' }) {
    function logoClickHandle() {
        window.location.href = window.location.origin;
    }

    return (
        contactUs ? (
            <section className="flex flex-col gap-2 w-full items-center justify-center text-white bg-black">
                <div className="flex flex-col md:flex-row w-[320px] md:min-w-[720px] lg:min-w-[1000px] pt-12">
                    <div className="flex justify-center md:justify-start flex-1 w-[320px] md:w-auto md:pl-2 py-2">
                        <img src={logoWhite} className="h-7 w-auto cursor-pointer" alt="" onClick={logoClickHandle}/>
                    </div>
                    <div className="text-center md:text-left w-[320px] md:w-48 py-2 pt-10 md:pt-0">
                        <h4 className="text-lg font-semibold cursor-default">Menu</h4>
                        <div className="pt-4">
                            {/* <h4 className="pb-1 cursor-pointer hover:underline">Homepage</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Produkte</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Uber uns</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Kontakt</h4> */}
                            {
                                taps.map((tap, index) => (
                                    <Link to={tap.link} key={index} className="flex flex-col pb-1 cursor-pointer hover:underline">
                                        {tap.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-center md:text-left w-[320px] md:w-48 py-2 pt-10 md:pt-0">
                        <h4 className="text-lg font-semibold cursor-default">Contact</h4>
                        <div className="flex flex-col pt-4 text-left">
                            {addresse.map((line, index) => (
                                <span key={index} className={index % 2 !== 0 ? "pb-1" : ""}>
                                    {line}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-2 pl-2 w-[320px] md:min-w-[720px] lg:min-w-[1000px]">
                    <h1 className="text-sm text-center md:text-left cursor-default opacity-30">© {year} | {domain}</h1>
                </div>
            </section>
        ) : (
            <section className="flex flex-col gap-2 w-full items-center justify-center text-white bg-black">
                <div className="flex flex-col md:flex-row w-[320px] md:min-w-[720px] lg:min-w-[1000px] pt-12">
                    <div className="flex justify-center md:justify-start flex-1 w-[320px] md:w-auto md:pl-2 py-2">
                        <img src={logoWhite} className="h-7 w-auto cursor-pointer" alt="" onClick={logoClickHandle}/>
                    </div>
                    <div className="text-center md:text-left w-[320px] md:w-48 py-2 pt-10 md:pt-0">
                        <h4 className="text-lg font-semibold cursor-default">Menu</h4>
                        <div className="flex flex-col pt-4">
                            {/* <h4 className="pb-1 cursor-pointer hover:underline">Homepage</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Produkte</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Uber uns</h4>
                            <h4 className="pb-1 cursor-pointer hover:underline">Kontakt</h4> */}
                            {
                                taps.map((tap, index) => (
                                    <Link to={tap.link} key={index} className="pb-1 cursor-pointer hover:underline">
                                        {tap.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-center md:text-left w-[320px] md:w-48 py-2 pt-10 md:pt-0">
                        <h4 className="text-lg font-semibold cursor-default">Contact</h4>
                        {addresse.map((line, index) => (
                            <span key={index} className={index % 2 !== 0 ? "pb-1" : ""}>
                                {line}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="py-2 pl-2 w-[320px] md:min-w-[720px] lg:min-w-[1000px]">
                    <h1 className="text-sm text-center md:text-left cursor-default opacity-30">© {year} | {domain}</h1>
                </div>
            </section>
        )
    );
}