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


export default function Services() {

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);
    const [isForthOpen, setIsForthOpen] = useState(false);
    const [isFifthOpen, setIsFifthOpen] = useState(false);
    const [isSixthOpen, setIsSixthOpen] = useState(false);



    const toggleFirstSection = () => setIsFirstOpen((prev) => !prev);
    const toggleSecondSection = () => setIsSecondOpen((prev) => !prev);
    const toggleThirdSection = () => setIsThirdOpen((prev) => !prev);
    const toggleForthSection = () => setIsForthOpen((prev) => !prev);
    const toggleSFifthSection = () => setIsFifthOpen((prev) => !prev);
    const toggleSixthSection = () => setIsSixthOpen((prev) => !prev);






    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[750px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pt-[75px] lg:pb-[60px]  py-[24px]">
                        For us, design isn&apos;t just a job - it&apos;s a calling to make a difference in people&apos;s lives.
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
                    <div className="col-span-1 mt-[60px] lg:mt-0">
                        <h2 className="font-bold lg:text-heading-2 text-heading-2-mobile">Services</h2>
                    </div>

                    {/* Right Content Column */}


                    <div className="col-span-2 lg:w-[820px]">


                        {/* First */}

                        <div className="flex flex-col md:flex-row gap-6 ">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] lg:mt-0">
                                    <span className="mr-[30px] lg:mb-0 mb-[32px]">01</span>
                                    <span className="flex-grow">Design Concept Consultation</span>
                                    <button
                                        onClick={toggleFirstSection}
                                        className="absolute right-0 flex items-center ml-2 lg:mb-0 mb-[32px]"
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isFirstOpen ? vector : plus}
                                            alt={isFirstOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] ${!isFirstOpen ? 'border-b border-customGray' : ''}`}>
                                    Design Concept Consultation package provides comprehensive design guidance and advice for your home, office, or other spaces.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isFirstOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
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
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isFirstOpen && (
                            <div className={`${!isFirstOpen ? '' : 'border-b border-customGray'} py-[24px] lg:pt-[32px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center  `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain w-[20px]" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}


                        {/* Second */}

                        <div className="flex flex-col md:flex-row gap-6  pt-[16px] lg:pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] lg:mt-0">
                                    <span className="mr-[30px] lg:mb-0">02</span>
                                    <span className="flex-grow">
                                        Interior Design
                                    </span>
                                    <button
                                        onClick={toggleSecondSection}
                                        className="absolute right-0 flex items-center ml-2 lg:mb-0 "
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isSecondOpen ? vector : plus}
                                            alt={isSecondOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] ${!isSecondOpen ? 'border-b border-customGray' : ''}`}>
                                    Interior Design Package offers tailored solutions to suit your unique style, preferences, and functional requirements.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isSecondOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
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
                                    <span className="ml-[10px]">Concept Development</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">Space Planning </span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px]">3D Visualizations</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain !w-[20px]" />
                                    </span>
                                    <span className="ml-[10px]">Cost Estimating</span>
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Concept Development
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    This stage involves exploring the client&apos;s ideas, inspirations, and aspirations for the space. Creative brainstorming and visualization techniques are used to develop a cohesive design concept that captures the client&apos;s vision and objectives.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Space Planning
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Space planning focuses on organizing and arranging interior spaces to optimize functionality, flow, and usability.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    3D Visualizations
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    3D visualizations provide clients with realistic renderings of the proposed design concepts.
                                    These visualizations help clients to better understand and visualize how the final design will look and feel in their space before construction or implementation begins.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Working Drawings
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Working drawings are detailed plans and specifications used by contractors to guide the actual construction or renovation of a space. These drawings provide precise measurements, material requirements, and construction techniques, ensuring that the design vision is accurately translated into reality. They serve as essential documents for obtaining building permits and coordinating various construction disciplines.
                                </p>
                            </div>
                        )}
                        {isSecondOpen && (

                            <div className="lg:pt-[32px] pt-[24px] border-b border-customGray py-[24px] ">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Cost Estimating
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Cost estimating involves calculating the anticipated costs associated with the design and implementation of the project.<br />
                                    This includes factors such as materials, labor, furnishings, and any other expenses related to bringing the design concept to life.
                                </p>
                            </div>
                        )}


                        {/* Third */}

                        <div className="flex flex-col md:flex-row gap-6 pt-[16px] lg:pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] lg:mt-0">
                                    <span className="mr-[30px] md:mb-0 ">03</span>
                                    <span className="flex-grow">Interior Decoration</span>
                                    <button
                                        onClick={toggleThirdSection}
                                        className="absolute right-0 flex items-center ml-2 md:mb-0 "
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isThirdOpen ? vector : plus}
                                            alt={isThirdOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] ${!isThirdOpen ? 'border-b border-customGray' : ''}`}>
                                    Interior Decoration Package offers you the freedom to redesign and enhance your interior without the hassle of major renovations.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isThirdOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isThirdOpen && (
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
                        {isThirdOpen && (
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isThirdOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isThirdOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isThirdOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isThirdOpen && (
                            <div className={`${!isThirdOpen ? '' : 'border-b border-customGray'} py-[24px] lg:pt-[32px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center  `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain w-[20px]" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>

                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>

                            </div>
                        )}

                        {/* Forth */}

                        <div className="flex flex-col md:flex-row gap-6 pt-[16px] lg:pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] md:mt-0">
                                    <span className="mr-[30px] md:mb-0 ">04</span>
                                    <span className="flex-grow">Designer Supervision</span>
                                    <button
                                        onClick={toggleForthSection}
                                        className="absolute right-0 flex items-center ml-2 lg:mb-0"
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isForthOpen ? vector : plus}
                                            alt={isForthOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] ${!isForthOpen ? 'border-b border-customGray' : ''}`}>
                                    Design Concept Consultation package provides comprehensive design guidance and advice for your home, office, or other spaces.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isForthOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isForthOpen && (
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
                        {isForthOpen && (
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isForthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isForthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isForthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isForthOpen && (
                            <div className={`${!isForthOpen ? '' : 'border-b border-customGray'} py-[24px] lg:pt-[32px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center  `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain w-[20px]" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}


                        {/* Fifth */}

                        <div className="flex flex-col md:flex-row gap-6 pt-[16px] lg:pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] lg:mt-0">
                                    <span className="mr-[30px] md:mb-0 ">05</span>
                                    <span className="flex-grow">Supply Management</span>
                                    <button
                                        onClick={toggleSFifthSection}
                                        className="absolute right-0 flex items-center ml-2 md:mb-0 "
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isFifthOpen ? vector : plus}
                                            alt={isFifthOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] lg:pr-[17px] ${!isFifthOpen ? 'border-b border-customGray' : ''}`}>
                                    Supply Management service encompasses the seamless procurement and sourcing of materials, furnishings, and accessories essential for your interior design project.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isFifthOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isFifthOpen && (
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
                        {isFifthOpen && (
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isFifthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isFifthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isFifthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isFifthOpen && (
                            <div className={`${!isFifthOpen ? '' : 'border-b border-customGray'} py-[24px] lg:pt-[32px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center  `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain w-[20px]" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}

                        {/* Sixth */}

                        <div className="flex flex-col md:flex-row gap-6 pt-[16px] lg:pt-[24px]">
                            <div>
                                <h3 className="lg:text-subheading-1 text-subheading-1-mobile font-semibold relative flex items-center mt-[24px] lg:mt-0">
                                    <span className="mr-[30px] md:mb-0">06</span>
                                    <span className="flex-grow">Landscape Design</span>
                                    <button
                                        onClick={toggleSixthSection}
                                        className="absolute right-0 flex items-center ml-2 md:mb-0"
                                        aria-label="Toggle section"
                                    >
                                        <Image
                                            src={isSixthOpen ? vector : plus}
                                            alt={isSixthOpen ? 'minus' : 'plus'}
                                            className="object-contain h-[24px] w-[24px]"
                                        />
                                    </button>
                                </h3>
                                <p className={`lg:text-paragraph-m text-paragraph-m-mobile lg:py-[24px] py-[18px] ${!isSixthOpen ? 'border-b border-customGray' : ''}`}>
                                    Design Concept Consultation package provides comprehensive design guidance and advice for your home, office, or other spaces.
                                </p>
                            </div>
                        </div>



                        {/* Open version */}

                        {isSixthOpen && (
                            <div className="flex lg:gap-[20px] gap-[16px] lg:pb-[40px] pb-[18px]">
                                <div className="order-3 lg:order-none">
                                    <Image src={frame99} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                                <div className="order-2 lg:order-none">
                                    <Image src={frame100} alt="homeimg" className="object-contain mx-auto " />
                                </div>
                            </div>
                        )}
                        {isSixthOpen && (
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
                        {isSixthOpen && (
                            <div className="lg:pt-[40px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Personalized Advice
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Receive expert design advice and recommendations tailored to your specific space and preferences.
                                </p>
                            </div>
                        )}
                        {isSixthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Interactive Session
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Engage in a 2-3 hour interactive consultation where you can ask anything about design and implementation.
                                </p>
                            </div>
                        )}
                        {isSixthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Immediate Feedback
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Get immediate feedback and insights from our experienced design team to address your design challenges.
                                </p>
                            </div>
                        )}
                        {isSixthOpen && (
                            <div className="lg:pt-[32px] pt-[24px]">
                                <h2 className="lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center">
                                    Customized Solutions
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px]">
                                    Our team will provide personalized solutions and recommendations to help you achieve your design goals.
                                </p>
                            </div>
                        )}
                        {isSixthOpen && (
                            <div className={`${!isSixthOpen ? '' : 'border-b border-customGray'} py-[24px] lg:pt-[32px]`}>
                                <h2 className={`lg:text-subheading-2 text-subheading-2-mobile font-semibold relative flex items-center  `}>
                                    How It Works
                                </h2>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[14px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain w-[20px]" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Schedule Your Consultation: Book your Design Concept Consultation by contacting us directly to arrange an appointment.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Meet with Our Design Team: During the consultation, meet with our design team to discuss your design goals, challenges, and questions.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Explore Design Ideas: Explore design concepts, color palettes, furniture layouts, and more to envision the possibilities for your space.</span>
                                </p>
                                <p className="lg:text-paragraph-m text-paragraph-m-mobile pt-[10px] flex items-center">
                                    <span className="flex items-center">
                                        <Image src={vector} alt="vector" className="object-contain" />
                                    </span>
                                    <span className="ml-[10px] lg:text-paragraph-m text-paragraph-m-mobile w-[297px] lg:w-[770px]">Receive Expert Recommendations: Receive personalized recommendations and guidance from our team to help you move forward with your design project.</span>
                                </p>
                            </div>
                        )}




                    </div>




                </div>
            </div>

        </Layout>
    );
}

