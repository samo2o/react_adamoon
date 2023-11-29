export default function Products({ data, showAll=false, ...props }) {
    const maxDisplayedProducts = 6;

    return (
        <section {...props}>
            <h1 className="text-2xl text-center my-5 font-bold">Produkte</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto mb-[12px] max-w-[980px] px-2">
                {
                    showAll ? (
                        data
                        .map((item, index) => (
                            <div className="flex flex-col items-center justify-content mx-1 mb-2 border-[1px] border-black" key={index}>
                                <div className="overflow-hidden">
                                    <img className="w-[720px] md:w-[320px] hover:scale-105 transition-transform duration-300" src={item.src} alt="" />
                                </div>
                                <h2 className="w-full pt-4 px-4 ptb-2 capitalize text-lg font-bold cursor-default">{item.title}</h2>
                                <h4 className="w-full px-4 ptb-2 cursor-default">{item.price}</h4>
                                <p className="px-4 pt-2 h-[128px] overflow-hidden">
                                    {
                                        item.description.length > 140
                                            ? `${item.description.slice(0, 140)}... `
                                            : item.description
                                    }
                                    {
                                        item.description.length > 140 && <span className="font-semibold cursor-pointer hover:underline">Read more</span>
                                    }
                                </p>
                                <div className="w-full p-4">
                                    <button className="px-4 py-2 border-[1px] bg-black text-white border-white hover:opacity-80 transition-opacity duration-100">Bestellen</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        data
                        .filter((item, index) => index < maxDisplayedProducts)
                        .map((item, index) => (
                            <div className="flex flex-col items-center justify-content mx-1 mb-2 border-[1px] border-black" key={index}>
                                <div className="overflow-hidden">
                                    <img className="w-[720px] md:w-[320px] hover:scale-105 transition-transform duration-300" src={item.src} alt="" />
                                </div>
                                <h2 className="w-full pt-4 px-4 ptb-2 capitalize text-lg font-bold cursor-default">{item.title}</h2>
                                <h4 className="w-full px-4 ptb-2 cursor-default">{item.price}</h4>
                                <p className="px-4 pt-2 h-[128px] overflow-hidden">
                                    {
                                        item.description.length > 140
                                            ? `${item.description.slice(0, 140)}... `
                                            : item.description
                                    }
                                    {
                                        item.description.length > 140 && <span className="font-semibold cursor-pointer hover:underline">Read more</span>
                                    }
                                </p>
                                <div className="w-full p-4">
                                    <button className="px-4 py-2 border-[1px] bg-black text-white border-white hover:opacity-80 transition-opacity duration-100">Bestellen</button>
                                </div>
                            </div>
                        ))
                    )
                }
                {
                    showAll === false && (
                        data.length > maxDisplayedProducts && (
                            <div className="flex items-center justify-center w-full col-span-2 md:col-span-3">
                                <button className="px-4 py-2 my-2 bg-black text-white hover:opacity-80 transition-opacity duration-100">Alle anzeigen</button>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
}