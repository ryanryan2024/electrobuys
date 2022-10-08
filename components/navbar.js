import Image from "next/image"
import Logo from "../public/logo.jpeg"

const Navbar = () => {
    return (
        <div className="pb-10">
            <div className="py-12">
                <a href="/">
                    <Image src={Logo} width="220" height="45" />
                </a>
            </div>
        </div>
    )
}

export default Navbar