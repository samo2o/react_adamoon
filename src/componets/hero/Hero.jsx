import background from '../../assets/section_01_bg.jpg';

export default function Hero() {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="relative py-64 border-b-[1px] border-black" style={backgroundImageStyle}>
            {/* dim overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-fredoka">
                <h1 className="text-3xl">Heart Jelly</h1>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="mt-2 px-8 py-2 border-[1px] border-white" href="#">Shop</button>
            </div>
        </section>
    );
}