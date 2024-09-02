import Image from "next/image";
import group from '../public/Group.png'

export default function Footer() {
    return (
        <div className="w-full  flex flex-col bg-customGreen lg:mt-[180px] mt-[120px]">
            <div className="lg:mx-auto lg:w-[1240px] mx-6 border-b border-customGrayN300 ">
                <div className="flex flex-col lg:flex-row lg:mt-[40px] mt-[24px] mb-[32px]">
                    <div className="lg:w-[435px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] lg:mr-[114px] lg:gap-[40px]">
                        {/* First Div with Links */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2  text-customWhite">
                                <li>
                                    <a href="/site" className="block text-paragraph-s text-customWhite mb-[8px] lg:mb-[10px]"> Site</a>
                                    <a href="/about" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">About</a>
                                    <a href="/projects" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">Projects</a>
                                    <a href="/services" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">Services</a>
                                    <a href="/awards" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">Awards</a>
                                    <a href="/contact" className="block text-paragraph-xs text-customGrayN300">Contact us</a>
                                </li>
                            </ol>
                        </div>

                        {/* Second Div with Social Media Links */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2 text-customWhite">
                                <li>
                                    <p className="text-paragraph-s text-customWhite lg:mb-[10px] mb-[8px]">Social</p>
                                    <a href="https://linkedin.com" className="block text-paragraph-xs text-customGrayN300 mb-[8px] lg:mb-[10px]">Linkedin</a>
                                    <a href="https://pinterest.com" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">Pinterest</a>
                                    <a href="https://instagram.com" className="block text-paragraph-xs text-customGrayN300 mb-[8px]">Instagram</a>
                                    <a href="https://behance.net" className="block text-paragraph-xs text-customGrayN300">Behance</a>
                                </li>
                            </ol>
                        </div>


                        {/* Third Div */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2 text-customWhite">
                                <li>
                                    <p className="text-paragraph-s text-customWhite mb-[8px]">Contact</p>
                                    <p className="text-paragraph-xs text-customGrayN300 mb-[8px]">Info@deformbuild.com</p>
                                    <p className="text-paragraph-xs text-customGrayN300">+374 95 434 111</p>
                                </li>
                            </ol>
                        </div>

                        {/* Fourth Div */}
                        <div className="lg:w-full">
                            <ol className="list-decimal pl-5 space-y-2 text-customWhite">
                                <li>
                                    <p className="text-paragraph-s text-customWhite mb-[8px]">Career</p>
                                    <p className="text-paragraph-xs text-customGrayN300">Info@deformbuild.com</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="lg:w-[691px] mt-[34px] lg:mt-0 ">
                        <Image src={group} alt="Group" className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="lg:mx-auto lg:w-[1240px] mx-6 mt-[32px] lg:mb-[40px] mb-[24px] text-customWhite text-text-paragraph-xs">
                <div className="text-lg lg:text-xl leading-relaxed flex flex-col lg:flex-row lg:space-x-12">
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
