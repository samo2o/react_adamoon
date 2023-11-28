export default function ContactUs() {
    return (
        <section className="w-full">
            <div className="flex flex-col py-5 items-center justify-center w-full">
                <h1 className="text-2xl text-center mb-5 font-bold">Contact Us</h1>
                <input className="text-black px-4 py-2 mb-2 w-[320px] border-[1px] border-black text-black/50 focus:outline-none" placeholder="Email"/>
                <textarea className="text-black px-4 py-2 mb-2 w-[320px] h-[120px] border-[1px] resize-none border-black text-black/50 focus:outline-none" placeholder="Messege"/>
                <button className="w-[320px] py-2 bg-black text-white font-semibold hover:opacity-80 transition-opacity duration-100">Send</button>
            </div>
        </section>
    );
}