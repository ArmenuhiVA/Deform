import Image from "next/image";
import group from '../public/Group.png'
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full  flex flex-col bg-customGreen lg:mt-[180px] mt-[120px]">
            <div className="lg:mx-auto lg:w-[1240px] mx-6 border-b border-customGrayN300 ">
                <div className="flex flex-col lg:flex-row lg:mt-[40px] mt-[24px] mb-[32px]">
                    <div className="lg:w-[435px]   lg:mr-[114px] ">
                        {/* First Div with Links */}
                        <div className="grid grid-cols-2 gap-[24px] lg:gap-[40px]">
                            <div className="lg:w-full">
                                <ol start={1} className="list-decimal pl-5 space-y-2 text-customWhite">
                                    <li>
                                        <p className="block lg:text-paragraph-s text-paragraph-s-mobile text-customWhite mb-[8px] lg:mb-[10px]">Site</p>
                                        <Link href="/about" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">About</Link>
                                        <Link href="/projects" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Projects</Link>
                                        <Link href="/services" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Services</Link>
                                        <Link href="/awards" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Awards</Link>
                                        <Link href="/contact" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300">Contact us</Link>
                                    </li>
                                </ol>
                            </div>

                            {/* Second Div with Social Media Links */}
                            <div className="lg:w-full">
                                <ol start={2} className="list-decimal pl-5 space-y-2 text-customWhite">
                                    <li>
                                        <p className="lg:text-paragraph-s text-paragraph-s-mobile text-customWhite lg:mb-[10px] mb-[8px]">Social</p>
                                        <a href="https://linkedin.com" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px] lg:mb-[10px]">Linkedin</a>
                                        <a href="https://pinterest.com" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Pinterest</a>
                                        <a href="https://instagram.com" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Instagram</a>
                                        <a href="https://behance.net" className="block lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300">Behance</a>
                                    </li>
                                </ol>
                            </div>
                        </div>


                        {/* Third Div */}
                        <div className="grid lg:grid-cols-2  grid-cols-1 gap-[24px] lg:gap-[40px]">
                            <div className="lg:w-full mt-[24px] lg:mt-[40px]">
                                <ol start={3} className="list-decimal pl-5 space-y-2 text-customWhite">
                                    <li>
                                        <p className="lg:text-paragraph-s text-paragraph-s-mobile text-customWhite mb-[8px]">Contact</p>
                                        <p className="lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300 mb-[8px]">Info@deformbuild.com</p>
                                        <p className="lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300">+374 95 434 111</p>
                                    </li>
                                </ol>
                            </div>

                            {/* Fourth Div */}
                            <div className="lg:w-full  lg:mt-[40px]">
                                <ol start={4} className="list-decimal pl-5 space-y-2 text-customWhite">
                                    <li>
                                        <p className="lg:text-paragraph-s text-paragraph-s-mobile text-customWhite mb-[8px]">Career</p>
                                        <p className="lg:text-paragraph-xs text-paragraph-xs-mobile text-customGrayN300">Info@deformbuild.com</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[691px] mt-[34px] lg:mt-0 ">
                        <Image src={group} alt="Group" className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="lg:mx-auto lg:w-[1240px] mx-6 mt-[32px] lg:mb-[40px] mb-[24px] text-customWhite lg:text-paragraph-xs text-paragraph-xs-mobile">
                <div className="lg:text-paragraph-xs text-paragraph-xs-mobile leading-relaxed flex flex-col lg:flex-row lg:space-x-12 text-customGrayN300">
                    <div className="lg:w-1/2">
                        <p>Ⓒ Copyright 2024 Deform architecture</p>
                    </div>
                    <div className="lg:w-1/2 flex lg:justify-end ">
                        <p className="sm:lowercase sm:first-letter:capitalize lg:normal-case">terms of service | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
