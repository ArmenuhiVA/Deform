'use client'

import Layout from "@/components/Layout";
import stairs from '@/public/stairs.jpg'
import frame99 from "@/public/Frame99.jpg"
import frame100 from "@/public/Frame100.jpg"
import arrowdown from '@/public/ArrowDown.svg'
import plus from '@/public/Plus.svg'
import vector from '@/public/Vector233.svg'
import Image from "next/image";
import { useState } from "react";


export default function About() {

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    // Toggle functions for each section
    const toggleFirstSection = () => setIsFirstOpen((prev) => !prev);
    const toggleSecondSection = () => setIsSecondOpen((prev) => !prev);


    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[750px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pt-[75px] lg:pb-[60px]  py-[24px]">
                        For us, design isn't just a job - it's a calling to make a difference in people's lives.
                    </h1>
                </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-[1240px] md:mx-auto mx-6 lg:mt-[60px] lg:mb-[140px]">
                <div className=" grid lg:grid-cols-3  grid-cols-4 lg:items-center items-end">
                    <div className="col-span-1 w-[32px]">

                        <p
                            className="lg:text-paragraph-l text-paragraph-l-mobile "
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            Scroll for more info
                        </p>
                        <Image
                            src={arrowdown}
                            alt="arrowdown"
                            className=" object-contain m-auto mt-[14px]"
                        />
                    </div>
                    <div className="col-span-2 w-[241px] lg:w-[820px]">
                        <Image
                            src={stairs}
                            alt="Interior Design"
                            className="w-full h-auto lg:mt-4 "
                        />
                    </div>
                </div>
            </div>

            {/* Services Section */}

            <div className="lg:w-[1240px] lg:mx-auto mx-6 ">
                <div className="grid grid-cols-1 md:grid-cols-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-heading-2 text-heading-2-mobile">Services</h2>
                    </div>

                    {/* Right Content Column */}
                    

                    <div className="col-span-2 lg:w-[820px]">


                        {/* First */}

                        <div className="flex flex-col md:flex-row gap-6 lg:h-[144px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center">
                                    <span className="mr-[30px]">01</span>
                                    <span className="flex-grow">Design Concept Consultation</span>
                                    <button
                                        onClick={toggleFirstSection}
                                        className="absolute right-0 flex items-center ml-2"
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isFirstOpen ? vector : plus}
                                            alt={isFirstOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile py-[24px] ${!isFirstOpen ? 'border-b border-customGray' : ''}`}>
                                    Design Concept Consultation package provides comprehensive design guidance and advice for your home, office, or other spaces.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isFirstOpen && (
                            <div className="flex gap-[20px] pb-[40px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div>
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    What we offer
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Personalized Advice</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Interactive Session</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Immediate Feedback</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain !w-[20px]" />
                                    </span>
                                    <span className="ml-[10px]">Customized Solutions</span>
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[40px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className={`${!isFirstOpen ? '' : 'border-b border-customGray'  } pb-[24px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center lg:pt-[32px] `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}


                        {/* Second */}

                        <div className="flex flex-col md:flex-row gap-6 lg:h-[144px] pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center">
                                    <span className="mr-[30px]">01</span>
                                    <span className="flex-grow">Design Concept Consultation</span>
                                    <button
                                        onClick={toggleSecondSection}
                                        className="absolute right-0 flex items-center ml-2"
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isSecondOpen ? vector : plus}
                                            alt={isSecondOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile py-[24px] ${!isSecondOpen ? 'border-b border-customGray' : ''}`}>
                                    Design Concept Consultation package provides comprehensive design guidance and advice for your home, office, or other spaces.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isSecondOpen && (
                            <div className="flex gap-[20px] pb-[40px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div>
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    What we offer
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Personalized Advice</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Interactive Session</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Immediate Feedback</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain !w-[20px]" />
                                    </span>
                                    <span className="ml-[10px]">Customized Solutions</span>
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[40px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div>
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center lg:pt-[32px]">
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}
                    </div>




                </div>
            </div>

        </Layout>
    );
}

