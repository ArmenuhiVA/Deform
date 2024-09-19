"use client"

import Layout from "@/components/Layout";
import homeimg from '@/public/titleImage.png'
import ceoimg from '@/public/AnushImage.jpg'
import design from '@/public/Frame 59.png'
import Image from "next/image";


export default function About() {

    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[500px] lg:text-heading-1 text-heading-1-mobile font-bold lg:py-[60px] py-[24px]">
                        Welcome to Deform where art meets function</h1>
                </div>
            </div>

            {/* Image Section */}

            <div className="lg:mx-auto  mx-6  lg:mb-[140px] mb-[60px]">
                <Image src={homeimg} alt="Logo" className="object-contain mx-auto" />
            </div>

            {/* Aboout the Studio Section */}

            <div className="lg:w-[1240px] lg:mx-auto mx-6 ">
                {/* About the Studio Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-heading-2 text-heading-2-mobile">About the Studio</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        {/* Founder Info */}
                        <div className="flex flex-col md:flex-row gap-6 bg-white lg:border-t lg:border-r lg:border-l border-customGray lg:h-[388px] ">
                            <Image
                                src={ceoimg}
                                alt="Grigoryan Anush"
                                className=" h-auto object-fit w-[241px] lg:w-full"
                            />
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold">Grigoryan Anush</h3>
                                <p className="lg:text-paragraph-l text-paragraph-l-mobile pt-[16px] pb-[24px] border-b  border-customGray ">Founder and CEO</p>
                                <p className="lg:text-paragraph-l text-paragraph-l-mobile py-[24px] ">
                                    I’m Anush, the founder and creative mind behind our studio. 
                                    With over seven years of experience crafting both residential and commercial interiors, 
                                    I’ve dedicated myself to creating spaces that seamlessly blend functionality with aesthetic allure.                                </p>
                            </div>
                        </div>

                        {/* Philosophy Text */}
                        <div className="border-b lg:border-r lg:border-l border-customGray ">
                            <p className="lg:pt-10 lg:text-paragraph-l  text-paragraph-l-mobile pb-[24px] lg:w-[800px]">
                                For us, design isn’t just a job – it’s a calling to make a difference in people’s lives.
                                That’s why every project we undertake is infused with purpose, aimed at improving the space that envelops you and enriching your environment.
                                But what truly sets us apart is our personalized approach.
                                We don’t just create for the sake of it; we immerse ourselves in your vision, understanding your unique needs and aspirations to deliver spaces that truly resonate with you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-2 ">
                        <h3 className="lg:text-subheading-1 text-subheading-1-mobile lg:pt-[24px] lg:pb-[48px] font-semibold lg:w-[610px]">Welcome to Deform, where your story becomes our inspiration.</h3>
                        <Image
                            src={design}
                            alt="Interior Design"
                            className="w-full h-auto mt-4"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

