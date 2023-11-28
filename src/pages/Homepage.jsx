import Hero from "../componets/hero/Hero";
import Header from "../componets/navbar/header/Header";
import Products from "../componets/products/Products";
import SafeArea from "../componets/safeArea/SafeArea";
import ContactUs from "../componets/contact/Contact";
import Footer from "../componets/footer/Footer";

import image_01 from '../assets/test/img_01.jpg';
import image_02 from '../assets/test/img_02.jpg';
import image_03 from '../assets/test/img_03.jpg';
import image_04 from '../assets/test/img_04.jpg';
import image_05 from '../assets/test/img_05.jpg';

export default function Homepage() {
    const defaultData = [
        {
            title:  'title 01',
            src: image_01,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 02',
            src: image_02,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 03',
            src: image_03,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 04',
            src: image_04,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 05',
            src: image_05,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 06',
            src: image_05,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis. Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
        {
            title:  'title 07',
            src: image_05,
            price:  '29.99',
            description: 'Lorem ipsum dolor sit amet. Et dolores perspiciatis sed dignissimos doloremque eum magnam dolor qui expedita molestiae et rerum perferendis.',
        },
    ];
    
    return (
        <div className="bg-white">
            <Header />
            <SafeArea Content={
                <>
                    <Hero />
                    <Products 
                        className="font-fredoka border-b-[1px] border-black"
                        data={defaultData}
                    />
                    <ContactUs />
                </>
            }/>
            <Footer 
                year="2023"
                domain="adamoon.de"
            />
        </div>
    );
}