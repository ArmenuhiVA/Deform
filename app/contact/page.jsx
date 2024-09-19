
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import arrowright from "@/public/Arrow Right.svg";


export default function Contact() {

    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[750px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pt-[75px] pt-[24px]">
                        Do you have any questions? <br />
                        Let’s talk
                    </h1>
                </div>
            </div>

            <div className="lg:w-[1240px] lg:mx-auto lg:mt-[80px] mt-[24px] mx-6 sm:min-h-[374px]">
                <div className="flex flex-col lg:flex-row">
                    <h2 className="text-subheading-1-mobile lg:text-subheading-1 flex-1 font-semibold pb-[24px] lg:pb-[0px]">
                        Info@deformbuild.com
                    </h2>
                    <div className="flex-1 min-h-auto">
                        {/* Main Section Content */}
                        <div className="h-auto lg:w-[820px]">
                            <div className="h-[40px] border-b border-customGrayN300"></div>
                            <div className="h-[40px] border-b border-customGrayN300 lg:border-0 mt-[24px] md:mt-0"></div>
                            <div className="h-[40px] border-b border-customGrayN300 mt-[24px] md:mt-0"></div>
                            <div className="h-[40px] border-b border-customGrayN300 lg:border-0 mt-[24px] md:mt-0"></div>
                            <div className="h-[64px] border-b border-customGrayN300 mt-[24px] md:mt-0"></div>
                        </div>

                        <div className="md:w-[151px] w-[190px] h-10 border-zinc-500 border-b-solid border-b-2 md:ml-auto md:mt-[84px] mt-[34px] md:flex items-center justify-between md:justify-end hidden">
                            <p className="md:hidden text-paragraph-xs-mobile lg:text-paragraph-xs">
                                More information
                            </p>
                            <Link href="/about">
                                <Image src={arrowright} alt="arrowright" className="object-contain" />
                            </Link>
                        </div>

                        {/* Services Section */}
                        <div className="lg:mt-[60px] mt-[16px]">
                            <h2 className="text-subheading-2-mobile lg:text-subheading-2 font-bold pb-[16px] lg:pb-[24px]">
                                Services
                            </h2>
                            {/* Grid Layout for Boxes */}
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:w-[588px]">
                                {/* First Row: Two Boxes */}
                                <div className="w-[16px] h-[16px] border border-black m-[4px]"></div>
                                <div className="w-[16px] h-[16px] border border-black m-[4px]"></div>
                                {/* Second Row: Two Boxes */}
                                <div className="w-[16px] h-[16px] border border-black m-[4px]"></div>
                                <div className="w-[16px] h-[16px] border border-black m-[4px]"></div>
                                {/* Third Row: One Box */}
                                <div className=" w-[16px] h-[16px] border border-black m-[4px]"></div>
                            </div>
                        </div>
                        <div className="w-[154px]  h-10 border-zinc-500 border-b-solid border-b-2 md:ml-auto md:mt-[48px] mt-[24px] flex items-center justify-between md:justify-end">
                            <p className="md:hidden text-paragraph-xs-mobile lg:text-paragraph-xs">
                                Get Started
                            </p>
                            <Link href="/about">
                                <Image src={arrowright} alt="arrowright" className="object-contain" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:mt-[140px] mt-[60px]">
                    <h2 className="text-subheading-1-mobile lg:text-subheading-1 flex-1 font-semibold pb-[24px] lg:pb-[0px]">
                        Subscribe for more info
                    </h2>
                    <div className="flex-1">
                        <div className="lg:w-[820px]">
                            <div className="h-[40px] border-b border-customGrayN300"></div>
                        </div>
                        <div className="md:w-[151px] w-[143px] h-10 border-zinc-500 border-b-solid border-b-2 md:ml-auto md:mt-[48px] mt-[24px] flex items-center justify-between md:justify-end">
                            <p className="md:hidden text-paragraph-xs-mobile lg:text-paragraph-xs">
                                Subscribe
                            </p>
                            <Link href="/about">
                                <Image src={arrowright} alt="arrowright" className="object-contain" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

