import homeimg from "../public/homeimg.png";
import Link from "next/link";
import Image from "next/image";
import arrowright from "../public/Arrow Right.png";
import kitchenimg from "../public/kitchen.png";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* <NavBar /> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-180 my-16">
        <Image src={homeimg} alt="Logo" className="object-contain" />
      </div>

      {/* About Section */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-56 my-16 ">
        <div className="flex flex-col md:flex-row lg:space-x-12">
          <h2 className="text-heading-2 flex-1 font-bold">About</h2>
          <div className="flex-1">
            <h2 className="text-subheading-1 font-semibold">
              Welcome to Deform, where your story becomes our inspiration.
            </h2>
            <p className="w-auto my-4 text-paragraph-l">
              For us, design isn&apos;t just a job — it&apos;s a calling to make
              a difference in people&apos;s lives. That&apos;s why every project
              we undertake is infused with purpose, aimed at improving the space
              that envelops you and enriching your environment.
            </p>
            <div className="w-40 h-10 border-zinc-500 border-b-solid border-b-2 ml-auto">
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Logo"
                  className="object-contain ml-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  mt-40 mb-16 ">
        <div className="text-lg lg:text-xl leading-relaxed lg:flex lg:space-x-12">
          <h2 className="lg:w-1/2 heading-2 ">Projects</h2>
          <div className="lg:w-1/2">
            <div className="w-40 h-10 border-zinc-500 border-b-solid border-b-2 ml-auto">
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Logo"
                  className="object-contain ml-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-lg lg:text-xl leading-relaxed lg:flex lg:space-x-12">
          <div className="w-full sm:w-1/2 lg:w-1/3 border-zinc-500 border-solid border-2 h-96 mb-2 lg:mb-0 lg:mr-4"></div>
          <div className="w-full sm:w-1/2  lg:w-1/3 border-zinc-500 border-solid border-2 h-96 mb-2 lg:mb-0 lg:mr-4"></div>
          <div className="w-full lg:w-1/3 border-zinc-500 border-solid border-2 h-96 hidden lg:block"></div>
        </div>
      </div>

      {/* Services Section */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-16 mb-24">
        <div className="leading-relaxed lg:flex lg:space-x-12">
          <div className="lg:w-[610px]">
            <h2 className="heading-2"> Services </h2>
            <div className="border-zinc-500 border-b-solid border-b-2 mt-10 pb-4 flex items-center justify-between text-customGray">
              <p className="paragraph-m">Design Concept Consultation</p>
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto text-customGray"
                />
              </a>
            </div>
            <div className="border-zinc-500 border-b-solid border-b-2 mt-8 pb-4 flex items-center justify-between text-customGray">
              <p className="paragraph-m">Interior Design</p>
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto text-customGray"
                />
              </a>
            </div>
            <div className="border-zinc-500 border-b-solid border-b-2 mt-8 pb-4 flex items-center justify-between text-customGray">
              <p className="paragraph-m">Interior Decoration</p>
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto text-customGray"
                />
              </a>
            </div>
            <div className="border-zinc-500 border-b-solid border-b-2 mt-8 pb-4 flex items-center justify-between text-customGray">
              <p className="paragraph-m">Author Support</p>
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto text-customGray"
                />
              </a>
            </div>
            <div className="border-zinc-500 border-b-solid border-b-2 mt-8 pb-4 flex items-center justify-between text-customGray">
              <p className="paragraph-m">Supply Management</p>
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto text-customGray"
                />
              </a>
            </div>
            <div className="w-40 h-10 border-zinc-500 border-b-solid border-b-2 mt-16 ">
              <a href="/about">
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="object-contain ml-auto "
                />
              </a>
            </div>
          </div>
          <div className="lg:w-[610px]">
            <Image
              src={kitchenimg}
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </Layout>
  );
}
