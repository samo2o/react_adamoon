import Header from "../componets/navbar/header/Header";
import SafeArea from "../componets/safeArea/SafeArea";
import ContactUs from "../componets/contact/Contact";
import Footer from "../componets/footer/Footer";

import { testData } from "../__test__/data";

import ProductsComponet from "../componets/products/Products";
import { taps } from "./config";

export default function ProductsPage() {
    return (
        <div className="bg-white">
            <>
                <Header />
                <SafeArea Content={
                    <ProductsComponet 
                        className="font-fredoka border-b-[1px] border-black"
                        data={testData}
                        showAll={true}
                    />
                } />
                <ContactUs />
                <Footer 
                    taps={taps}
                    contactUs={true}
                    year="2023"
                    domain="adamoon.de"
                />
            </>
        </div>
    );
}