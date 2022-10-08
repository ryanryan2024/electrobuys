import Navbar from "../components/navbar";
import { Tab } from '@headlessui/react'
import Head from "next/head";
import iPhonePad from '../public/iphonepad.png'
import Image from "next/image";
import AppleWatch from '../public/AppleWatch.png'
import AirPods from '../public/AirPods.png'
import MacBook from '../public/MacbookBanner.png'
import iPhone12listing from '../public/listingPhotos/iphone12.png'
import iPhoneXlisting from '../public/listingPhotos/iphonex.png'
import iPhoneXSlisting from '../public/listingPhotos/iphonexs.jpg'
import iPhoneXRlisting from '../public/listingPhotos/iphonexr.jpg'
import AppleWatchSE from '../public/listingPhotos/applewatchse.jpg'
import AppleWatch7 from '../public/listingPhotos/applewatch7.jpg'
import iPhone13listing from '../public/listingPhotos/iphone13.jpg'
import iPhone13Prolisting from '../public/listingPhotos/iphone13pro.jpg'
import AirPodsSecondGen from '../public/listingPhotos/airpodssecond.jpg'
import AirPodsThirdGen from '../public/listingPhotos/airpodsthird.jpg'
import AirPodsPro from '../public/listingPhotos/airpodspro.jpg'
import MacbookAir from '../public/listingPhotos/macbookair.jpg'
import MacbookAir128 from '../public/listingPhotos/macbookair128.jpg'
import MacbookAirM2 from '../public/listingPhotos/macbookairm2.jpg'
import MacbookAirM2256 from '../public/listingPhotos/macbookairm2256.jpg'
import MacbookPro14 from '../public/listingPhotos/macbookpro14.jpg'
import MacbookProM2 from '../public/listingPhotos/macbookprom2.jpg'
import iPadPro from '../public/listingPhotos/ipadpro.jpg'
import iPadPro11 from '../public/listingPhotos/ipadpro128.jpg'
import iPadProSilver from '../public/listingPhotos/ipadpro128silver.jpg'
import iPadMini from '../public/listingPhotos/ipadmini.jpg'
import iPadAir from '../public/listingPhotos/ipadair.jpg'

export default function Apple () {
    return (
        <div>
            <Head>
                <title>ElectroBuys | Apple®</title>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
            </Head>
            <Navbar />

            <div className="px-7">
                <Tab.Group>
                    <Tab.List className="flex justify-between px-5 bg-slate-200 text-black py-1 rounded-3xl text-lg">
                        <Tab>📱 (32)</Tab>
                        <Tab>⌚️ (16)</Tab>
                        <Tab>🎧 (3)</Tab>
                        <Tab className="px-5">💻 (10)</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div>
                                <div className="flex justify-center py-12 shadow-xl rounded-3xl">
                                    <Image src={iPhonePad} width="900" height="210" /> 
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cs6oq0uS8hZd7W5ks">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZe8wya5s1TB6Jy8wA">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - Lavender</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kA9AC91o2XF9VKdQT">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kA0024L841J2ti4gl">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - Emerald Green</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kA8wycdA2XF2ti9AG">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - Product Red</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28o8wycdAgOvaZOcMT">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone12listing} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 12 5G 64GB (Unlocked) - White</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$559.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQ8wy3H41TBgk8fZ7">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXlisting} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone X 64GB (Unlocked) - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$279.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/eVa4gielIgOvec05ku">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXlisting} width="200" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone X 64GB (Unlocked) - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$279.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/6oEfZ03H4fKrfg4dR1">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXSlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XS 64GB (Unlocked) - Gold</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$289.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kAeUW6TggOv0la28k">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXSlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XS 64GB (Unlocked) - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$289.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28ofZ05Pc1TB9VKcMZ">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXSlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XS 64GB (Unlocked) - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$289.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28o9ACa5scyffg43cq">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - White</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kA9AC5Pc7dV4Bq3cr">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQ6oq4L869R7NC6oE">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - Orange</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28odQSa5s69R1pefZf">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/bIY0021yW8hZ7NC7sK">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - Product Red</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZe3ce4L8bub8RG3cv">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhoneXRlisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone XR 64GB (Unlocked) - Yellow</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$299.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="py-5">
                                    <a href="https://buy.stripe.com/eVafZ06Tg1TBaZOaEY">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13listing} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 5G 256GB (Unlocked) - Product Red</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$749.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28o146a5s69R5Fu4gB">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13listing} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 5G 256GB (Unlocked) - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$749.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/4gwbIK4L87dVc3S3cy">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13listing} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 5G 256GB (Unlocked) - Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$749.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/00geUW6Tg9m3gk89AX">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13listing} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 5G 256GB (Unlocked) - Lavender</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$749.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/eVa8wy6Tg0Pxfg43cA">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13listing} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 5G 256GB (Unlocked) - White</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$749.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQfZ02D08hZfg48wV">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13Prolisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 Pro 5G 256GB (Unlocked) - Emerald Green</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$979.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/6oE0027XkeGngk84gG">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13Prolisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 Pro 5G 256GB (Unlocked) - Baby Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$979.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZeaEG6Tg41J7NC00r">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13Prolisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 Pro 5G 256GB (Unlocked) - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$979.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/4gw4gia5sfKrc3ScNe">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13Prolisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 Pro 5G 256GB (Unlocked) - Gold</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$979.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cs9ACdhE7dVec028B">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPhone13Prolisting} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPhone 13 Pro 5G 256GB (Unlocked) - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$979.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/6oEcMOdhEbubd7W5kO">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPadPro} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPad Pro 12.9" 5th Gen 256GB - WiFi - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$969.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28ofZ0gtQ8hZ0la8x1">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPadPro11} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPad Pro 11" 3rd Gen 256GB - WiFi - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$769.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cs6oq0uSeGnd7W8x2">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPadProSilver} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPad Pro 12.9" 5th Gen 128GB - WiFi - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$919.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/6oEbIK4L8gOvd7W14B">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPadMini} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPad Mini 8.3" 6th Gen 64GB - WiFi - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$459.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZe28a6Tg8hZ1pe28G">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={iPadAir} width="140" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">iPad Air 10.9" 4th Gen 64GB - WiFi - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$459.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="flex justify-center py-12 shadow-xl rounded-3xl">
                                <Image src={AppleWatch} width="900" height="210" /> 
                            </div>
                            <div className="py-5">
                                    <a href="https://buy.stripe.com/8wMbIK0uSeGn8RGbJh">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 40mm - WiFi & LTE - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$249.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQ8wygtQeGn0labJj">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 40mm - WiFi & LTE - Rose Gold</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$249.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/00gaEGelI1TBfg428I">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 40mm - WiFi & LTE - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$249.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/14kdQSb9wbubec0dRs">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 44mm - WiFi & LTE - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$259.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/5kA4gi3H4eGnd7W14H">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 44mm - WiFi & LTE - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$259.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/28o8wy91ocyf3xmbJm">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatchSE} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">SE (1st Generation GPS) 44mm - WiFi & LTE - Rose Gold</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$259.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/bIYdQScdAfKr2ti3cR">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 41mm - WiFi & LTE - Forest Green</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$359.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/14k8wyb9wbubfg4bJo">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 41mm - WiFi & LTE - Dark Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$359.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/7sI4gi7Xk9m35FudRx">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 41mm - WiFi & LTE - Product Red</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$359.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQdQS7XkgOvd7W14M">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 41mm - WiFi & LTE - Starlight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$359.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/6oEaEG7Xk0Px9VK8xf">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 41mm - WiFi & LTE - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$359.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQcMOdhE55N7NCcNw">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 45mm - WiFi & LTE - Forest Green</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$389.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/4gwaEGelIeGnc3SeVF">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 45mm - WiFi & LTE - Dark Blue</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$389.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/00g3ce6Tg1TBfg4eVG">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 45mm - WiFi & LTE - Product Red</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$389.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/8wM002cdAcyf1pe9Bn">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 45mm - WiFi & LTE - Starlight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$389.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/7sIcMOdhEcyf9VK7tg">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AppleWatch7} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">Series 7 (GPS) 45mm - WiFi & LTE - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$389.00</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div>
                                <div className="flex justify-center py-12 shadow-xl rounded-3xl">
                                    <Image src={AirPods} width="900" height="210" /> 
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/9AQ5kma5sfKr9VK5l9">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AirPodsSecondGen} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">AirPods Second Generation</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$109.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/cN2eUWb9weGn8RG7ti">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AirPodsThirdGen} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">AirPods Third Generation</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$126.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 5 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cseUW91ofKraZOeVL">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={AirPodsPro} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">AirPods Pros</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$174.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 5 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div>
                                <div className="flex justify-center py-12 shadow-xl rounded-3xl">
                                    <Image src={MacBook} width="900" height="210" /> 
                                </div>
                                <div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/8wMeUWdhE55N9VKbJA">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAir} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.3" M1 256GB SSD 8GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$949.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cscMO4L841J2ti7tl">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAir} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.3" M1 256GB SSD 8GB RAM - Rose Gold</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$949.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/bIY28acdA2XFaZObJC">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAir} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.3" M1 256GB SSD 8GB RAM - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$949.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/bIYdQSgtQ8hZec0293">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAir128} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.3" M1 128GB SSD 8GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$779.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3csaEG91o7dV3xmbJE">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAirM2} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.6" M2 512GB SSD 8GB RAM - Midnight</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$1409.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/3cs28agtQ69Rd7W6pl">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookAirM2} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Air 13.6" M2 512GB SSD 8GB RAM - Silver</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$1409.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/7sI1464L8eGnd7W6pm">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookPro14} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Pro 14" M1 Pro 512GB SSD 16GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$1549.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZeeUW3H455N5Fu9Bz">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookPro14} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Pro 16" M1 Pro 512GB SSD 16GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$2099.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/fZe6oqgtQ1TB6JyfZY">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookProM2} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Pro 13.3" M2 256GB SSD 8GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$1139.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 6 Days</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="py-5">
                                    <a href="https://buy.stripe.com/dR63cecdA7dV5FuaFF">
                                        <div className="pb-5">
                                            <div className="flex h-50 l-50 bg-white shadow-xl rounded-3xl p-5">
                                                <Image src={MacbookProM2} width="175" height="300" />
                                                <div className="pl-5 pt-8">
                                                    <h1 className="font-seriff font-light pb-5 text-sm">MacBook Pro 13.3" M1 256GB SSD 8GB RAM - Space Gray</h1>
                                                    <h1 className="font-extralight pb-5 text-sm">Condition: New</h1>
                                                    <h1 className="font-seriff font-light pb-5 text-sm">$899.99</h1>
                                                    <h1 className="font-seriff font-bold pb-5 text-sm">Estimated Delivery Time: 1 Week</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}