import Image from "next/image"
import Macbook from "../public/MacBook.png"
import Samsung from "../public/samsung27.webp"
import Case from "../public/case.webp"
import Stripe from '../public/stripe.svg'
import Ad from '../public/ad.png'

const Header = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <div className="font-light text-lg pb-2">
                        Shop Apple® Products
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="font-light text-sm pb-7">
                        Starting from $109.99
                    </div>
                </div>
                <div className="flex justify-center pb-24">
                    <a href="./apple" className="bg-black text-white p-2 px-3 rounded-3xl font-abc">Explore</a>
                </div>
                <div className="flex justify-center">
                    <Image src={Macbook} width="240" height="240" />
                </div>
                <div className="flex justify-center font-abc text-xs pt-5 pb-2">
                    M1 MacBook Pro
                </div>
                <div className="flex justify-center font-abc text-xs line-through">
                    $1299.00
                </div>
                <div className="flex justify-center font-abc text-xs">
                    Starting from ($899.99)
                </div>
            </div>
            <div className="pt-36">
                <div className="flex justify-center">
                    <div className="font-light text-lg pb-7">
                        Coming Soon
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src={Samsung} width="240" height="240" />
                </div>
                <div className="flex justify-center font-abc text-xs pt-5 pb-2">
                    Samsung - 27” Odyssey Gaming Monitor
                </div>
                <div className="flex justify-center font-abc text-xs line-through">
                    $429.99
                </div>
                <div className="flex justify-center font-abc text-xs pb-10">
                    Starting from ($379.99)
                </div>
            </div>
            <div className="pt-36">
                <div className="flex justify-center">
                    <div className="font-light text-lg pb-7">
                        Coming Soon
                    </div>
                </div>
                <div className="flex justify-center py-10">
                    <Image src={Case} width="250" height="150" />
                </div>
                <div className="flex justify-center font-abc text-xs pb-2">
                    Corsair RGB Mini Mechanical Gaming Keyboard
                </div>
                <div className="flex justify-center font-abc text-xs line-through">
                    $109.99
                </div>
                <div className="flex justify-center font-abc text-xs pb-10">
                    Starting from ($79.99)
                </div>
            </div>
            <div className="flex justify-center py-24">
                <Image src={Ad} />
            </div>
            <div className="flex justify-center font-abc font-bold pt-10">
                <a href="./review" className="bg-black text-white p-3 rounded-3xl">
                    Write/See Reviews
                </a>
            </div>
            <div className="flex justify-center py-5">
                <a href="https://stripe.com/" target="_blank">
                    <Image src={Stripe} height="200" width="200" />
                </a>
            </div>
            <div>
                <div className="flex justify-center text-sm pt-5 pb-5 font-light text-slate-400 underline">
                    <a href="https://www.tiktok.com/@electrobuysus?lang=en">TikTok</a>
                </div>
                <div className="flex justify-center text-sm pt-5 pb-5 font-light text-slate-400 underline">
                    <a href="./contact">Contact Us</a>
                </div>
                <div>
                    <h1 className="flex justify-center text-sm pb-12 font-light text-slate-400">ElectroBuys 2022</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
