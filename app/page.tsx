import Link from "next/link";
import Image from "next/image";

import kitchenimg from "../public/kitchen.png";
import homeimg from "../public/homeimg.png";
import stairsimg from '@/public/Imagestairs.jpg'
import project1 from '@/public/Project1.jpg'
import project2 from '@/public/Project2.jpg'
import project3 from '@/public/Project3.jpg'
import arrowright from "../public/Arrow Right.svg";

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* <NavBar /> */}
      <div className="lg:mx-auto  lg:mt-[60px] mt-[24px] px-6">
        <Image src={homeimg} alt="homeimg" className="object-contain mx-auto hidden lg:block" />
        <Image
          src={stairsimg}
          alt="Kitchen Small"
          className="w-full h-full object-cover lg:hidden"
        />
      </div>


      {/* About Section */}

      <div className="lg:w-[1240px] lg:mx-auto lg:mt-[104px] mt-[60px] mx-6 sm:h-[374px]">
        <div className="flex flex-col lg:flex-row ">
          <h2 className="text-heading-2-mobile lg:text-heading-2 flex-1 font-bold pb-[24px] lg:pb-[0px]">About</h2>
          <div className="flex-1  lg:w-[715px]">
            <h2 className="text-subheading-1-mobile lg:text-subheading-1 font-semibold lg:w-[615px] lg:h-[96px] pb-[12px] lg:pb-[0px] ">
              Welcome to Deform, where your story becomes our inspiration.
            </h2>
            <p className="text-paragraph-l-mobile lg:paragraph-l lg:h-[128px] lg:w-[705px]">
              For us, design isn&apos;t just a job — it&apos;s a calling to make
              a difference in people&apos;s lives. That&apos;s why every project
              we undertake is infused with purpose, aimed at improving the space
              that envelops you and enriching your environment.
            </p>
            <div className="md:w-[151px] w-[190px] h-10 border-zinc-500 border-b-solid border-b-2 md:ml-auto mr-[40px] md:mt-[84px]  mt-[34px] flex items-center justify-between md:justify-end">
              <p className="md:hidden text-paragraph-xs-mobile lg:text-paragraph-xs">More information</p>
              <Link href="/about">

                <Image
                  src={arrowright}
                  alt="arrowright"
                  className="object-contain "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="lg:mx-auto lg:w-[1240px] md:mb-16 mb-[22px] mx-6">
        <div className=" leading-relaxed lg:flex md:mt-[145px] mt-[60px]">
          <h2 className="lg:w-1/2 text-heading-2-mobile lg:text-heading-2 font-bold">Projects</h2>
          <div className="lg:w-1/2">
            <div className="md:w-[151px] w-[190px] h-10 border-zinc-500 border-b-solid border-b-2 md:ml-auto g:w-1/2 mt-[24px] md:mt-[0px] flex items-center justify-between md:justify-end">
              <p className="md:hidden text-paragraph-xs-mobile lg:text-paragraph-xs">Our Projects</p>

              <Link href="/projects">
                <Image
                  src={arrowright}
                  alt="arrowright"
                  className="object-contain ml-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-auto lg:w-[1240px] mb-16 mx-6 mt-[22px] md:mt-[0px]">
        <div className="flex gap-[20px]">
          <div className="lg:w-1/3 hidden lg:block">
            <Image src={project1} alt="homeimg" className="object-contain mx-auto " />
          </div>
          <div className="order-3 lg:order-none">
            <Image src={project2} alt="homeimg" className="object-contain mx-auto " />
          </div>
          <div className="order-2 lg:order-none">
            <Image src={project3} alt="homeimg" className="object-contain mx-auto " />
          </div>
        </div>
      </div>


      {/* Services Section */}

      <div className="lg:mx-auto lg:w-[1240px] mx-6  lg:mt-[140px] mt-[60px] ">
        <div className="leading-relaxed lg:flex lg:space-x-12">
          <div className="lg:w-[610px]">
            <h2 className="text-heading-2-mobile lg:text-heading-2 font-bold"> Services </h2>
            <div className="border-b border-customGray lg:mt-[48px] mt-[24px]  lg:pb-[18px] pb-[16px] flex items-center justify-between text-customGray  hover:text-customBlack hover:cursor-pointer">
              <p className="text-paragraph-m ">Design Concept Consultation</p>
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto lg:w-[28px] hover:lg:w-[36px] "
                />
              </Link>
            </div>
            <div className="border-b border-customGray lg:mt-[18px] lg:pb-[18px] mt-[16px] pb-[16px]  flex items-center justify-between text-customGray  hover:text-customBlack hover:cursor-pointer">
              <p className="text-paragraph-m ">Interior Design</p>
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto lg:w-[28px] hover:lg:w-[36px] "
                />
              </Link>
            </div>
            <div className="border-b border-customGray lg:mt-[18px] lg:pb-[18px]  mt-[16px] pb-[16px] flex items-center justify-between text-customGray hover:text-customBlack hover:cursor-pointer">
              <p className="text-paragraph-m ">Interior Decoration</p>
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto lg:w-[28px] hover:lg:w-[36px] "
                />
              </Link>
            </div>
            <div className="border-b border-customGray lg:mt-[18px] lg:pb-[18px] mt-[16px] pb-[16px] flex items-center justify-between text-customGray  hover:text-customBlack hover:cursor-pointer">
              <p className="text-paragraph-m ">Author Support</p>
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto lg:w-[28px] hover:lg:w-[36px] "
                />
              </Link>
            </div>
            <div className="border-b border-customGray lg:mt-[18px] lg:pb-[18px] mt-[16px] pb-[16px] flex items-center justify-between text-customGray  hover:text-customBlack hover:cursor-pointer">
              <p className="text-paragraph-m ">Supply Management</p>
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto lg:w-[28px] hover:lg:w-[36px] "
                />
              </Link>
            </div>
            <div className="lg:w-[151px] lg:h-[42px] border-b border-black lg:mt-[66px] hidden lg:flex items-center justify-end">
              <Link href="/services">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto"
                />
              </Link>
            </div>
          </div>
          <div className="lg:w-[610px] lg:ml-[20px] mt-[34px]">
            <Image
              src={kitchenimg}
              alt="Kitchen"
              className="w-full h-full object-cover hidden lg:block"
            />
            <Image
              src={stairsimg}
              alt="Kitchen Small"
              className="w-full h-full object-cover lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </Layout>
  );
}
