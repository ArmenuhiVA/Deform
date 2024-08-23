import Image from "next/image";
import group from '../public/Group.png'

export default function Footer() {
    return (
        <div className="w-full  flex flex-col bg-customGreen mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 mt-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-16  border-b-solid border-b-2 border-customGrayN300">
                <div className="text-lg lg:text-xl leading-relaxed flex flex-col lg:flex-row lg:space-x-12 ">
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        {/* First Div with Links */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>
                                    <a href="/site" className="block paragraph-s text-customWhite"> Site</a>
                                    <a href="/about" className="block paragraph-xs text-customGrayN300">About</a>
                                    <a href="/projects" className="block paragraph-xs text-customGrayN300">Projects</a>
                                    <a href="/services" className="block paragraph-xs text-customGrayN300">Services</a>
                                    <a href="/awards" className="block paragraph-xs text-customGrayN300">Awards</a>
                                    <a href="/contact" className="block paragraph-xs text-customGrayN300">Contact us</a>
                                </li>
                            </ol>
                        </div>

                        {/* Second Div with Social Media Links */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p className="paragraph-s text-customWhite">Social</p>
                                    <a href="https://linkedin.com" className="block paragraph-xs text-customGrayN300">Linkedin</a>
                                    <a href="https://pinterest.com" className="block paragraph-xs text-customGrayN300">Pinterest</a>
                                    <a href="https://instagram.com" className="block paragraph-xs text-customGrayN300">Instagram</a>
                                    <a href="https://behance.net" className="block paragraph-xs text-customGrayN300">Behance</a>
                                </li>
                            </ol>
                        </div>

                        {/* Third Div */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p className="paragraph-s text-customWhite">Contact</p>
                                    <p className="paragraph-xs text-customGrayN300">Info@deformbuild.com</p>
                                    <p className="paragraph-xs text-customGrayN300">+374 95 434 111</p>
                                </li>
                            </ol>
                        </div>

                        {/* Fourth Div */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>
                                    <p className="paragraph-s text-customWhite">Career</p>
                                    <p className="paragraph-xs text-customGrayN300">Info@deformbuild.com</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="lg:w-[691px] mt-4 lg:mt-0">
                        <Image src={group} alt="Group" className="object-cover" />
                    </div>
                </div>

            </div>
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mt-16 border-b-solid border-b-2">
                <div className="text-lg lg:text-xl leading-relaxed flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2">

                        <p>Ⓒ Copyright 2024 Deform architecture</p>
                    </div>
                    <div className="lg:w-1/2 ">

                        <p>Terms of service | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
