'use client'

import homeimg from "../public/homeimg.png";
import Link from "next/link";
import Image from "next/image";
import blogpost from '@/public/blogpost.jpg'
import project2 from '@/public/Project2.jpg'
import project3 from '@/public/Project3.jpg'
import leftbutton from '@/public/leftButton.svg'
import rightbutton from '@/public/rightButton.svg'
import React from 'react';
import Layout from "@/components/Layout";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

const TOTAL_PAGES = 10;

export default function Blog() {

    const searchParams = useSearchParams();
    const currentPage = searchParams ? Number(searchParams.get('page')) : 1;
    const TOTAL_PAGES = 10; // Replace this with your dynamic total page count

   
    return (
        <Layout>

            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[500px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pb-[60px] lg:pt-[75px] py-[24px]">
                        Blog
                    </h1>
                </div>
            </div>

            <div className="lg:mx-auto lg:w-[1240px] mb-16 mx-6 ">
                {/* Desktop Layout */}
                <div className="hidden lg:flex gap-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>
                    </div>

                    <div className="order-3 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                </div>

                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>

                    <div className="order-3 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                </div>

                <div className="hidden lg:flex gap-[20px] lg:mt-[20px]">
                    <div className="hidden lg:block">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>

                    <div className="order-3 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                    <div className="order-2 lg:order-none">
                        <Link href="/blog/post">
                            <Image src={blogpost} alt="Blog post" className="object-contain mx-auto" />
                        </Link>                     </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden grid grid-cols-2 gap-[12px]">
                    {/* First row of photos */}

                    <div className="flex flex-col">
                        <Link href="/blog/post">
                            <Image src={project3} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile">Apr 4, 2024</p>
                    </div>



                    <div className="flex flex-col">
                        <Link href="/blog/post">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile">Apr 4, 2024</p>
                    </div>


                    <div className="flex flex-col mt-[12px]">
                        <Link href="/blog/post">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile ">Apr 4, 2024</p>
                    </div>
                    <div className="flex flex-col mt-[12px]">
                        <Link href="/blog/post">
                            <Image src={project3} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile ">Apr 4, 2024</p>
                    </div>

                    <div className="flex flex-col mt-[12px]">
                        <Link href="/blog/post">
                            <Image src={project3} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile ">Apr 4, 2024</p>
                    </div>
                    <div className="flex flex-col mt-[12px]">
                        <Link href="/blog/post">
                            <Image src={project2} alt="Urban design trends" className="object-contain" />
                        </Link>
                        <p className="text-subheading-2-mobile mt-4 font-bold">Urban design trends</p>
                        <p className="text-paragraph-s-mobile ">Apr 4, 2024</p>
                    </div>

                </div>

                <div>
                    {/* Other blog page content */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={TOTAL_PAGES}
                        leftButton={leftbutton}
                        rightButton={rightbutton}
                    />
                </div>
            </div>
        </Layout>
    );
}
