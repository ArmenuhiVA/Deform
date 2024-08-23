import Layout from "@/components/Layout";
import homeimg from '@/public/titleImage.png'
import ceoimg from '@/public/AnushImage.png'
import design from '@/public/Frame 59.png'
import Image from "next/image";


export default function About() {

    return (
        <Layout>
            {/* Title Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  my-10 ">
                <div className="text-lg lg:text-xl leading-relaxed lg:flex lg:space-x-12">
                    <h1 className="lg:w-[550px] heading-1">Welcome to Deform
                        where art meets function</h1>
                </div>
            </div>

            {/* Image Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:h-[481px]my-10 ">
                <Image src={homeimg} alt="Logo" className="object-contain" />
            </div>

            {/* Aboout the Studio Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  my-10">
                {/* About the Studio Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold heading-2">About the Studio</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        {/* Founder Info */}
                        <div className="flex flex-col md:flex-row gap-6 bg-white border-t border-r border-l border-customGray lg:h-[388px]">
                            <Image
                                src={ceoimg}
                                alt="Grigoryan Anush"
                                className="w-full  h-auto object-fit"
                            />
                            <div>
                                <h3 className="subheading-1">Grigoryan Anush</h3>
                                <p className="paragraph-l pt-[16px] pb-[24px]">Founder and CEO</p>
                                <p className="paragraph-l">
                                    I'm Anush, the founder and creative mind behind our studio. With over seven years of experience crafting both residential and commercial interiors, I've dedicated myself to creating spaces that seamlessly blend functionality with aesthetic allure.
                                </p>
                            </div>
                        </div>

                        {/* Philosophy Text */}
                        <p className="pt-10 paragraph-l border-b border-r border-l border-customGray pb-[24px]">
                            For us, design isn't just a job – it's a calling to make a difference in people's lives.
                            That's why every project we undertake is infused with purpose, aimed at
                            improving the space that envelops you and enriching your environment.
                            But what truly sets us apart is our personalized approach. We don't just create for the sake of it;
                            we immerse ourselves in your vision, understanding your unique needs and aspirations to deliver
                            spaces that truly resonate with you.
                        </p>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-2">
                        <h3 className="subheading-1 py-5">Welcome to Deform, where your story becomes our inspiration.</h3>
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

