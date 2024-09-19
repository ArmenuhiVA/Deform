'use client'

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { useSearchParams } from "next/navigation";

import project1 from '@/public/Project1.jpg'
import project2 from '@/public/Project2.jpg'
import project3 from '@/public/Project3.jpg'
import project4 from '@/public/project4.jpg'
import leftbutton from '@/public/leftButton.svg'
import rightbutton from '@/public/rightButton.svg'

import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";



export default function Projects() {

    const searchParams = useSearchParams();
    const currentPage = searchParams ? Number(searchParams.get('page')) : 1;
    const TOTAL_PAGES = 10;


    return (
        <Layout>

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 lg:h-[74px] h-[62px] lg:mt-[79px] lg:mb-[46px] my-[24px] border-b border-cunstomGrayN500 flex">
                <div className="lg:text-subheading-2 text-subheading-2 font-bold w-[142px] h-[28px] mt-[10px] mb-[24px] md:hidden block">
                    Residential
                </div>
                <div className="lg:text-subheading-2 text-subheading-2 font-bold text-cunstomGrayN500 w-[185px] h-[28px] mt-[10px] mb-[24px] md:hidden block">
                    Commercial
                </div>
            </div>

            <div className="lg:mx-auto lg:w-[1240px] mb-16 mx-6 ">
                {/* Desktop Layout */}
                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <Link href="/projects/name">
                        <Image src={project1} alt="homeimg" className="object-contain mx-auto " />
                    </Link>
                    <div className="order-3 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project2} alt="homeimg" className="object-contain mx-auto " />
                        </Link>                    </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project3} alt="homeimg" className="object-contain mx-auto " />
                        </Link>                    </div>
                </div>

                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/projects/name">
                            <Image src={project2} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                    <div className="order-3 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project3} alt="homeimg" className="object-contain mx-auto " />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project4} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/projects/name">
                            <Image src={project4} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                    <div className="order-3 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project2} alt="homeimg" className="object-contain mx-auto " />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project3} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/projects/name">
                            <Image src={project4} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                    <div className="order-3 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project2} alt="homeimg" className="object-contain mx-auto " />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/projects/name">
                            <Image src={project3} alt="homeimg" className="object-contain mx-auto " />
                        </Link>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden grid grid-cols-2 gap-[12px]">
                    {/* First row of photos */}

                    <div className="flex flex-col">
                        <Link href="/projects/name">
                            <Image src={project4} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col">
                        <Link href="/projects/name">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project4} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project4} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project4} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/projects/name">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Project name</p>
                        <p className="text-paragraph-s-mobile">2023, New York</p>
                    </div>
                </div>

                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={TOTAL_PAGES}
                        leftButton={leftbutton}
                        rightButton={rightbutton}
                        path="projects"
                    />
                </div>
            </div>
        </Layout>
    );
}
