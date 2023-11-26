export default function Products({ data, ...props }) {
    return (
        <section {...props}>
            <h1 className="text-2xl text-center mt-5 font-bold">Produkte</h1>
            <div className="md:grid grid-cols-3 mx-auto max-w-[980px]">
                {
                    data.map((item, index) => (
                        <div className="flex flex-col items-center justify-content m-5 border-[1px] border-black" id={index}>
                            <img className="w-[720px] md:w-[320px]" src={item.src} alt="" />
                            <h2 className="w-full pt-4 px-4 ptb-2 capitalize text-lg font-bold">{item.title}</h2>
                            <h4 className="w-full px-4 ptb-2">{item.price}</h4>
                            <p className="px-4 pt-2">{item.description}</p>
                            <div className="w-full p-4">
                                <button className="px-4 py-2 border-[1px] border-black">Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}