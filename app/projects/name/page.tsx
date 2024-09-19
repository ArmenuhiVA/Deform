
import Image from "next/image";
import React from 'react';

import project2 from '@/public/Project2.jpg'
import project3 from '@/public/Project3.jpg'
import project4 from '@/public/project4.jpg'
import design from '@/public/Frame 59.png'
import Layout from "@/components/Layout";



export default function ProjectsName() {
    return (
        <Layout>

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 lg:h-[74px] h-[62px] lg:mt-[79px] lg:mb-[46px] my-[24px] border-b border-cunstomGrayN500">

            </div>

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[500px] lg:text-heading-1 text-heading-1-mobile font-bold  lg:pb-[60px] ">
                        Project name
                    </h1>
                </div>
          
                {/* First Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8  gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Commercial architecture</h2>
                    </div>
                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile lg:pb-[32px] pb-[16px] lg:w-[800px]">
                            Commercial architecture design is a vital aspect of modern business. Creating functional, visually appealing, and sustainable commercial spaces is essential for attracting customers, increasing revenue, and improving brand reputation. In this article, we will explore some of the best practices for commercial architecture design.
                        </p>
                    </div>
                </div>


                {/* Second Section With Image */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Functional Design</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile lg:pb-[32px] pb-[16px] lg:w-[800px]">
                            The design of commercial architecture must always prioritise functionality over aesthetics. It is essential to focus on creating spaces that meet the needs of the business and its customers. A well-designed commercial space should be easy to navigate, provide an efficient flow of traffic, and optimise space utilisation.
                        </p>
                    </div>
                </div>

                <div className="hidden md:grid  md:grid-cols-3 lg:gap-[20px] gap-3 items-start">
                    <div className="col-span-2">
                        <Image
                            src={design}
                            alt="Interior Design"
                            className="w-full h-auto lg:pb-[32px] pb-[16px]"
                        />
                    </div>

                    <div className="order-3 lg:order-none">
                        <Image src={project3} alt="Blog post" className="object-contain mx-auto" />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[20px]  gap-3 items-start lg:mb-[20px]">
                    <div className="col-span-1">
                        <Image src={project3} alt="Blog post" className="object-contain mx-auto" />

                    </div>

                    <div className="order-3 lg:order-none">
                        <Image src={project4} alt="Blog post" className="object-contain mx-auto" />
                    </div>

                    <div className="order-3 lg:order-none hidden md:block">
                        <Image src={project2} alt="Blog post" className="object-contain mx-auto" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8  gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Commercial architecture</h2>
                    </div>
                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile lg:pb-[32px] pb-[16px] lg:w-[800px]">
                            Commercial architecture design is a vital aspect of modern business. Creating functional, visually appealing, and sustainable commercial spaces is essential for attracting customers, increasing revenue, and improving brand reputation. In this article, we will explore some of the best practices for commercial architecture design.
                        </p>
                    </div>
                </div>


                {/* Third Section With Image */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1 ">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Functional Design</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile lg:pb-[32px] pb-[16px] lg:w-[800px]">
                            The design of commercial architecture must always prioritise functionality over aesthetics. It is essential to focus on creating spaces that meet the needs of the business and its customers. A well-designed commercial space should be easy to navigate, provide an efficient flow of traffic, and optimise space utilisation.
                        </p>
                    </div>
                </div>
                
                <div className="hidden md:grid  md:grid-cols-3 lg:gap-[20px] gap-3 items-start">

                    <div className="order-3 lg:order-none ">
                        <Image src={project2} alt="Blog post" className="object-contain mx-auto" />
                    </div>
                    <div className="col-span-2">
                        <Image
                            src={design}
                            alt="Interior Design"
                            className="w-full h-auto lg:pb-[32px] pb-[16px]"
                        />
                    </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[20px]  gap-3 items-start lg:pb-[32px] pb-[16px]">
                    <div className="col-span-1 md:block hidden">
                        <Image src={project3} alt="Blog post" className="object-contain mx-auto" />

                    </div>

                    <div className="order-3 lg:order-none">
                        <Image src={project2} alt="Blog post" className="object-contain mx-auto" />
                    </div>

                    <div className="order-1 lg:order-none ">
                        <Image src={project4} alt="Blog post" className="object-contain mx-auto" />
                    </div>
                </div>

                <div className="hidden md:grid  md:grid-cols-3 lg:gap-[20px] gap-3 items-start">
                    <div className="col-span-2">
                        <Image
                            src={design}
                            alt="Interior Design"
                            className="w-full h-auto lg:pb-[32px] pb-[16px]"
                        />
                    </div>

                    <div className="order-3 lg:order-none">
                        <Image src={project2} alt="Blog post" className="object-contain mx-auto" />
                    </div>

                </div>
            </div>
        </Layout>
    );
}
