import Layout from "@/components/Layout";
import homeforblog from '@/public/homeforblog.jpg'
import design from '@/public/Frame 59.png'
import Image from "next/image";
import facebook from '@/public/facebook.svg'
import twitter from '@/public/twitter.svg'
import Link from "next/link";
import blogpost from '@/public/blogpost.jpg'
import project2 from '@/public/Project2.jpg'
import project3 from '@/public/Project3.jpg'


export default function BlogPost() {

    return (
        <Layout>
            {/* Title Section */}

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[500px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pt-[75px] lg:pb-[80px] py-[24px]">
                        Commercial architecture: <br />
                        Best practices
                    </h1>
                </div>
            </div>

            <div className="lg:w-[1240px] lg:mx-auto mx-6 ">
                {/* First Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 gap-3 items-start">
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
                            The design of commercial architecture must always prioritise functionality over aesthetics. It is essential to focus on creating spaces that meet the needs of the business and its customers. A well-designed commercial space should be easy to navigate, provide an efficient flow of traffic, and optimise space utilisation.                        </p>
                        <Image
                            src={design}
                            alt="Interior Design"
                            className="w-full h-auto lg:pb-[32px] pb-[16px]"
                        />

                    </div>
                </div>

                {/* Third Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Sustainable Design</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            Sustainable design has become a significant factor in commercial architecture design. A building that is sustainable not only contributes to the environment but also reduces energy costs for businesses. Some common sustainable design practices include incorporating natural light, using energy-efficient lighting and heating systems, and selecting sustainable materials.                        </p>
                    </div>
                </div>

                {/* Forth Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Branding</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            The design of a commercial building should reflect the brand identity of the business. A well-designed commercial space can help to build brand recognition and make a lasting impression on customers. Colours, logos, and overall design should align with the brand identity of the business.                        </p>
                    </div>
                </div>

                {/* Fifth Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Flexibility</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            In modern commercial architecture design, flexibility is becoming increasingly important. As businesses continue to evolve and adapt to changing market conditions, commercial spaces must be designed to accommodate changing needs. Flexibility in design can help to ensure that the building can be repurposed or reconfigured without significant additional costs.                        </p>
                    </div>
                </div>

                {/* Sixth Section With Image */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Security</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile lg:pb-[32px] pb-[16px] lg:w-[800px]">
                            Security is a crucial aspect of commercial architecture design. Businesses must ensure that their customers, employees, and assets are protected from potential threats. The design should incorporate features such as security cameras, alarms, and access control systems to provide optimal security.
                        </p>
                        <Image
                            src={homeforblog}
                            alt="homeimg"
                            className="w-full h-auto lg:pb-[32px] pb-[16px]"
                        />

                    </div>
                </div>

                {/* Seventh Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Technology Integration</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            Technology is becoming an essential aspect of commercial architecture design. Businesses must incorporate technology into the design of their commercial spaces to enhance the customer experience and improve efficiency. This can include features such as smart lighting, digital signage, and remote control systems.                            </p>
                    </div>
                </div>

                {/* Eight Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Accessibility</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            Commercial buildings must be designed to accommodate all people, including those with disabilities. Accessibility features such as ramps, elevators, and automatic doors must be included in the design to ensure that the building is accessible to everyone.                            </p>
                    </div>
                </div>

                {/* Ninght Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start lg:pb-[24px] pb-[16px]">
                    {/* Left Title Column */}
                    <div className="col-span-1">
                        <h2 className="font-bold lg:text-subheading-2 text-subheading-2-mobile">Summary</h2>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-span-2 border-b border-customGrayN200">
                        <p className="lg:text-paragraph-s  text-paragraph-s-mobile pb-[24px] lg:w-[800px]">
                            Commercial architecture design best practices must prioritise functionality, sustainability, branding, flexibility, security, technology integration, and accessibility. Businesses must work with experienced architects to create spaces that are not only visually appealing but also practical, energy-efficient, and cost-effective. By incorporating these best practices into their commercial architecture design, businesses can create spaces that attract customers, enhance the customer experience, and boost their brand reputation.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-3 items-start">
                    {/* Left Title Column */}
                    <div className="col-span-1"></div>

                    {/* Right Content Column */}
                    <div className="col-span-2">
                        <div className="flex space-x-2 lg:justify-end">
                            <p className="lg:text-paragraph-s text-paragraph-s-mobile pr-[2px] lg:w-[800px] flex justify-end items-end">
                                <span>Share:</span>
                            </p>
                            <div className="w-[24px] h-[24px]">
                                <Link href={`/?page`}>
                                    <Image src={facebook} alt="facebook" className="w-[20px] h-[20px]" />
                                </Link>
                            </div>
                            <div className="w-[24px] h-[24px]">
                                <Link href={`/?page`}>
                                    <Image src={twitter} alt="twitter" className="w-[20px] h-[20px]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="lg:w-[1240px] lg:mx-auto  mx-6 ">
                <div >
                    <h1 className="lg:w-[500px] lg:text-heading-1 text-heading-1-mobile font-bold lg:pb-[80px] lg:pt-[140px] pb-[24px] pt-[60px]">
                        Other articles
                    </h1>
                </div>
            </div>

            <div className="lg:mx-auto lg:w-[1240px]  mx-6 ">
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
                </div>
            </div>
        </Layout>
    );
}


