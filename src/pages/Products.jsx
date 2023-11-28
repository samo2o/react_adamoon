import Header from "../componets/navbar/header/Header";
import SafeArea from "../componets/safeArea/SafeArea";
import ContactUs from "../componets/contact/Contact";
import Footer from "../componets/footer/Footer";

import { testData } from "../__test__/data";

import ProductsComponet from "../componets/products/Products";

export default function ProductsPage() {
    return (
        <div className="bg-white">
            <>
                <Header />
                <SafeArea Content={
                    <ProductsComponet 
                        className="font-fredoka border-b-[1px] border-black"
                        data={testData}
                    />
                } />
                <ContactUs />
                <Footer />
            </>
        </div>
    );
}