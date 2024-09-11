'use client'

import Layout from "@/components/Layout";
import stairs from '@/public/stairs.jpg'
import frame99 from "@/public/Frame99.jpg"
import frame100 from "@/public/Frame100.jpg"
import arrowdown from '@/public/ArrowDown.svg'
import plus from '@/public/Plus.svg'
import vector from '@/public/Vector233.svg'
import paradise from '@/public/paradise.jpg'
import Image from "next/image";
import { useState } from "react";
import React from "react";


export default function Awards() {

    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[750px] lg:text-heading-2 text-heading-2-mobile font-bold lg:pt-[75px] pt-[24px]">
                        This section is dedicated to showcasing the awards and press mentions of our studio.</h1>
                </div>
            </div>
            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <p className="lg:w-[790px] lg:text-paragraph-l text-paragraph-l-mobile lg:pt-[24px] pt-[16px]">
                        As we embark on our journey in the world of interior design, we look forward to earning recognition for our innovative designs and creative solutions. Stay tuned as we update this space with our achievements and contributions to the design community.
                    </p>
                </div>
            </div>

            <div className="lg:w-[1240px] lg:mx-auto mx-6 lg:mt-[60px]">
                {/* Press and Awards Section */}
                <div className="flex flex-col lg:flex-row lg:gap-[92px] items-start gap-0">
                    {/* Left Title Column */}
                    <div className="flex-shrink-0 lg:w-[328px] w-full">
                        <h2 className="font-bold lg:text-heading-2 text-heading-2-mobile w-full lg:my-0 my-[24px]">
                            Press and Awards
                        </h2>

                        {/* Image only for large screens */}
                        <Image
                            src={paradise}
                            alt="paradise"
                            className="hidden lg:block lg:w-[295px] lg:mt-[32px]"
                        />
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:w-[819px] w-full">
                        {/* Awards Table */}
                        <div className="bg-white">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-customGrayN200">
                                        <th className="font-bold text-subheading-2-mobile lg:text-subheading-2 text-left lg:h-[56px] h-[44px] align-top">
                                            Award
                                        </th>
                                        <th className="font-bold text-subheading-2-mobile lg:text-subheading-2 text-left lg:h-[56px] h-[44px] align-top">
                                            Project
                                        </th>
                                        <th className="font-bold text-subheading-2-mobile lg:text-subheading-2 text-right lg:h-[56px] h-[44px] align-top">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { award: 'Award name', project: 'Project name', date: '2022' },
                                        { award: 'Award very large name', project: 'Project very large name', date: '2022' },
                                        { award: 'Award large name', project: 'Project large name', date: '2022' },
                                        { award: 'Award name', project: 'Project name', date: '2022' },
                                        { award: 'Award very large name', project: 'Project very large name', date: '2022' },
                                        { award: 'Award name', project: 'Project name', date: '2022' },
                                        { award: 'Award very large name', project: 'Project very large name', date: '2022' },
                                    ].map((item, index) => (
                                        <React.Fragment key={index}>
                                            <tr className="border-b hover:text-customBlack hover:cursor-pointer border-customGrayN200 text-customGray">
                                                <td className="lg:h-[80px] h-[88px]">{item.award}</td>
                                                <td className="lg:h-[88px] h-[88px]">{item.project}</td>
                                                <td className="lg:h-[80px] h-[80px] text-right">{item.date}</td>
                                            </tr>

                                            {/* Render the image after the second row for small screens */}
                                            {index === 0 && (
                                                <tr className="lg:hidden">
                                                    <td colSpan={3} className="text-center ">
                                                        <Image
                                                            src={paradise}
                                                            alt="paradise"
                                                            className=" mx-auto"
                                                        />
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

