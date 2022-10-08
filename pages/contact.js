import Head from "next/head"
import Navbar from "../components/navbar"

export default function Contact() {
    return (
        <div>
            <Head>
                <title>ElectroBuys | Contact Us</title>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
            </Head>

            <div>
                <Navbar />
            </div>

            <div>
                <div className="flex justify-center font-abc font-bold">
                    Contact Us
                </div>
                <form method="POST" action="https://formspree.io/f/xoqbwjoa">
                    <div className="flex justify-center pt-5 pb-2">
                        <input className='bg-slate-200 rounded-3xl p-2' name="Name" id="name" type="input" placeholder="Name"></input>
                    </div>
                    <div className="flex justify-center pt-3">
                        <input className='bg-slate-200 rounded-3xl p-2' type="input" name="Email" id="email" placeholder="Email"></input>
                    </div>
                    <div className="flex justify-center pt-5">
                        <textarea className='bg-slate-200 rounded-3xl p-2 h-60' type="input" name="Message" id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="flex justify-center pt-5">
                        <button className="font-abc font-bold bg-black text-white py-2 px-3 rounded-3xl" type="submit">Submit</button>
                    </div>
                </form>
                <div className="pt-24">
                    <h1 className="flex justify-center text-sm pb-12 font-light text-slate-400">ElectroBuys 2022</h1>
                </div>
            </div>
        </div>
    )
}