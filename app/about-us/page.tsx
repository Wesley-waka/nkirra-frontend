'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoCarousel from "../assets/Carousel";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AboutUs() {
    const router = useRouter();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
  return (
    <>
    <div className=" w-full  mb-12">
       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6">
                   <div className="flex items-center justify-between w-full px-4 sm:px-6 py-2 bg-white border border-gray-200 rounded-2xl">
       
                     <Image
                       src="/logo.png"
                       alt="Logo"
                       width={60}
                       height={60}
                       className="w-12 h-12 sm:w-16 sm:h-16"
                     />
       
                     {/* Desktop nav links */}
                     <nav className="hidden sm:flex gap-6 md:gap-10 items-center">
                       <div
                         onClick={() => router.push("/")}
                         className="cursor-pointer text-sm md:text-base font-medium hover:text-teal-700 transition-colors"
                       >
                         Home
                       </div>
                       <div className="cursor-pointer bg-green-100 px-4 py-1.5 rounded-lg text-sm md:text-base font-medium">
                         About Us
                       </div>
                     </nav>
       
                     {/* Desktop CTA */}
                     <Button
                       variant="default_bg"
                       className="hidden sm:inline-flex items-center justify-center w-[130px] md:w-[150px] h-[40px] md:h-[44px] text-sm md:text-base bg-[#FF4444] rounded-xl"
                     >
                       Get Started
                     </Button>
       
                     {/* Mobile hamburger */}
                     <button
                       onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                       aria-label="Toggle menu"
                       className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                     >
                       <span className="block w-6 h-0.5 bg-gray-600" />
                       <span className="block w-6 h-0.5 bg-gray-600" />
                       <span className="block w-6 h-0.5 bg-gray-600" />
                     </button>
                   </div>
       
                   {/* Mobile dropdown */}
                   {isMobileMenuOpen && (
                     <div className="sm:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
                       <div className="flex flex-col gap-3">
                         <div
                           onClick={() => {
                             router.push("/");
                             setIsMobileMenuOpen(false);
                           }}
                           className="cursor-pointer py-2 text-center font-medium text-sm hover:bg-gray-50 rounded-lg transition-colors"
                         >
                           Home
                         </div>
                         <div className="cursor-pointer bg-green-100 py-2 px-4 rounded-lg text-center font-medium text-sm">
                           About Us
                         </div>
                         <Button
                           variant="default_bg"
                           className="w-full h-[42px] text-sm bg-[#FF4444] rounded-xl"
                         >
                           Get Started
                         </Button>
                       </div>
                     </div>
                   )}
                 </div>
        
        </div>

        <div className="flex items-center justify-center">
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-6">
  <div className="pl-1.5 pr-3 py-1.5 bg-lime-200 rounded-2xl inline-flex justify-center items-center gap-3">
    <div className="pl-1.5 pr-2 py-1 bg-white rounded-xl flex justify-center items-center gap-1">
      <div className="w-2 h-2 p-px relative bg-lime-100 rounded flex justify-between items-center">
        <div className="w-1.5 h-1.5 bg-stone-100 rounded-full" />
        <div className="w-1 h-1 left-[2px] top-[2px] absolute bg-teal-900 rounded-full" />
      </div>
      <div className="justify-center text-teal-900 text-xs font-medium  leading-5">Nkirra</div>
    </div>
    <div className="justify-center text-teal-900 text-sm font-medium  leading-6">About Us</div>
  </div>
  <div className="w-full max-w-[922px] px-4 text-center justify-start text-teal-900 text-4xl sm:text-5xl lg:text-7xl font-semibold  capitalize leading-[40px] sm:leading-[60px] lg:leading-[82px]">Built to Redefine How You Manage Your Money</div>
  <div className="w-full max-w-[848px] px-4 text-center justify-start text-slate-500 text-lg sm:text-xl font-normal  leading-7 sm:leading-9">Nkirra empowers individuals and teams to take full control of their <br/>finances—smarter, faster, and with clarity.</div>
</div>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center py-12 lg:py-18 px-4'>
            <Image
                src="/graphics/hero-sub.jpg"
                alt="About Us 1"
                width={350}
                height={300}
                className="rounded-lg w-full max-w-[350px] h-auto lg:w-[350px] lg:h-[380px]"

            />
             <Image
                src="/graphics/hero-main.png"
                alt="About Us 2"
                width={500}
                height={200}
                className="rounded-lg w-full max-w-[500px] h-auto"
            />
            <Image
                src="/graphics/hero-sub3.jpg"
                alt="About Us 2"
                width={350}
                height={300}
                className="rounded-lg w-full max-w-[350px] h-auto lg:w-[350px] lg:h-[380px]"

            />


        </div>



        <div className='max-w-8xl flex items-center'>
            <div className=" px-6 sm:px-16 lg:px-28 pt-8 sm:pt-14 pb-12 sm:pb-28 inline-flex flex-col lg:flex-row justify-between items-start w-full gap-8">
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold  capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">$120M+</div>
                <div className="justify-start text-slate-500 text-base font-normal  leading-6">Tracked Through Nkirra</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold  capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">1M+</div>
                <div className="justify-start text-slate-500 text-base font-normal  leading-6">Transactions Processed</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold  capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">12K+</div>
                <div className="justify-start text-slate-500 text-base font-normal  leading-6">Goals Achieved With Saving Plans</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold  capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">98%</div>
                <div className="justify-start text-slate-500 text-base font-normal  leading-6">Customer Satisfaction</div>
              </div>
            </div>
        </div>


<div className="bg-green-100 mx-auto min-h-[500px] lg:h-[700px] flex flex-col items-center justify-center px-4">
    <div className="max-w-7xl mx-auto justify-center flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 h-auto lg:h-[600px] rounded-xl">
        <Image
        src="/graphics/intro.jpg"
        alt="About Us"
        width={800}
        height={600}
        className='object-cover rounded-lg'
        />
        </div>
        <div className="w-full lg:w-1/2 inline-flex flex-col justify-center items-start gap-8 px-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="w-full max-w-[566px] flex flex-col justify-start items-start gap-4">
              <div className="px-4 py-1 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-500 inline-flex justify-center items-center gap-3">
                <div className="justify-center text-slate-500 text-sm font-medium  leading-6">Our Story</div>
              </div>
              <div className="self-stretch justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">Why We Built Nkirra</div>
            </div>
            <div className="self-stretch justify-start text-slate-500 text-lg sm:text-xl font-normal leading-7 sm:leading-9">We started Nkirra with a simple yet powerful idea: make finance management easy, accessible, and insightful for everyone. After experiencing the stress of scattered spreadsheets, confusing apps, and data overload, our team set out to create a unified dashboard that helps users make sense of their money.</div>
          </div>
          {/* <div data-size="Large" data-type="Fill" className="px-6 py-3 bg-lime-200 rounded-2xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-stone-950 text-lg font-semibold  leading-8">Get Started Free</div>

          </div> */}
                       <Button variant="default_bg" className="px-18 w-[180px] h-[50px] text-md bg-lime-200 text-black mt-10">Get Started</Button>

        </div>
    </div>
</div>


<div className="max-w-7xl mx-auto py-8 lg:py-16 px-4">
    <div className="px-4 py-1 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-center items-center gap-3">
      <div className="justify-center text-slate-500 text-sm font-medium  leading-6">Mission Statement</div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
      <div className="w-full lg:w-[700px] inline-flex flex-col justify-start items-start gap-4">
    
        <div className="self-stretch justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">By Transforming Financial Stress into Simplicity</div>
      </div>
      <div className="w-full lg:w-96 justify-start text-slate-500 text-lg sm:text-xl font-normal leading-7 sm:leading-9">Our mission is to create a future where managing money is empowering, not overwhelming.</div>
    </div>

    <div className="mt-8 lg:mt-12 h-[400px] lg:h-[600px] w-full bg-gray-200 rounded-lg">
        <Image
        src="/graphics/collaborate.jpg"
        alt="Mission"
        width={1100}
        height={700}
        className='object-cover rounded-lg w-full h-full'
        />
        
    </div>
</div>

<div className="max-w-7xl justify-center items-center mx-auto px-4">
<LogoCarousel/>
</div>


<div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
    <div className='w-full lg:w-1/2'>
        <div className="self-stretch inline-flex flex-col justify-center items-start gap-4 ">
          <div className="px-4 py-1 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-slate-500 text-sm font-medium  leading-6">Company Culture</div>
          </div>
          <div className="self-stretch justify-start text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-[32px] sm:leading-[48px] lg:leading-[64px]">The Core Values That Continuously Drive Us</div>
          <div className="self-stretch justify-start text-slate-500 text-lg sm:text-xl font-normal leading-7 sm:leading-9">More than lines of code, our foundation is a commitment to meaningful progress and purposeful innovation.</div>
        </div>

        {/* <div className="self-stretch h-0  outline-offset-[-0.50px] outline-slate-500 my-14"></div> */}

    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-6 border-t border-slate-200 mt-10">
            
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-10 h-10 bg-lime-200 rounded-full inline-flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image src="/icons/users.svg" alt="check" width={20} height={20} />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-teal-900 text-xl font-semibold  capitalize leading-6">
                Clarity First
              </div>
              <div className="text-slate-500 text-base font-normal  leading-6">
                We simplify the complex so users can act with confidence.
              </div>
            </div>
          </div>
    
          <div className="flex flex-col justify-start items-start gap-4">
           <div className="w-10 h-10 bg-lime-200 rounded-full inline-flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image src="/icons/Vector copy.svg" alt="check" width={20} height={20} />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-teal-900 text-xl font-semibold  capitalize leading-6">
                Clarity First
              </div>
              <div className="text-slate-500 text-base font-normal  leading-6">
                We simplify the complex so users can act with confidence.
              </div>
            </div>
          </div>
    
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-10 h-10 bg-lime-200 rounded-full inline-flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image src="/icons/check.svg" alt="check" width={20} height={20} />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-teal-900 text-xl font-semibold  capitalize leading-6">
                Clarity First
              </div>
              <div className="text-slate-500 text-base font-normal  leading-6">
                We simplify the complex so users can act with confidence.
              </div>
            </div>
          </div>
    
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-10 h-10 bg-lime-200 rounded-full inline-flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image src="/icons/server.svg" alt="check" width={20} height={20} />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-teal-900 text-xl font-semibold  capitalize leading-6">
                Clarity First
              </div>
              <div className="text-slate-500 text-base font-normal  leading-6">
                We simplify the complex so users can act with confidence.
              </div>
            </div>
          </div>
        </div>
    </div>

    <div className="w-full lg:w-1/2 min-h-[500px] lg:h-[700px] bg-lime-200 rounded-xl flex flex-col items-center gap-6 justify-center px-4">

    <Image src="/graphics/balance.jpg" alt="Collaborate" width={400} height={800} className='w-full max-w-[540px] rounded-xl' />

    <div className='flex flex-col sm:flex-row justify-between gap-6 sm:gap-10 w-full'>
        <Image src="/graphics/financeScore.jpg" alt="Collaborate" width={200} height={400} className='w-full max-w-[240px] rounded-xl' />
        <Image src="/graphics/emergency.jpg" alt="Collaborate" width={200} height={400} className='w-full max-w-[240px] rounded-xl' />

    </div>
    </div>
</div>


<div className="w-full flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-7xl bg-gradient-to-b from-lime-200/0 to-lime-200/30 rounded-[20px] p-8 md:p-16 flex flex-col lg:flex-row justify-center items-center gap-8 overflow-hidden">

    {/* Left Content */}
    <div className="flex-1 flex flex-col justify-center items-start gap-6">

      {/* Badge */}
      <div className="flex flex-col gap-4">
        <div className="pl-2 pr-3 py-1.5 bg-lime-100 rounded-2xl inline-flex items-center gap-3">
          <div className="pl-1 pr-2 py-1 bg-white rounded-xl flex items-center gap-1">
            <div className="w-2 h-2 relative bg-lime-100 rounded flex items-center justify-between">
              <div className="w-1.5 h-1.5 bg-stone-100 rounded-full" />
              <div className="w-1 h-1 absolute left-[2px] top-[2px] bg-teal-900 rounded-full" />
            </div>
            <div className="text-teal-900 text-xs font-medium leading-5">Nkirra</div>
          </div>
          <div className="text-teal-900 text-sm font-medium leading-6">Smarter Money Management</div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-teal-900 font-semibold capitalize leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full lg:max-w-xl">
        Ready to Build the Future of Finance With Us?
      </h1>

      {/* Subtext */}
      <p className="text-teal-900 text-base sm:text-lg md:text-xl leading-7 md:leading-9 max-w-full lg:max-w-lg">
        Whether you’re a potential user, partner, or team member—let’s shape smarter money management together.
      </p>

      {/* Button */}
      <Button
        variant="default_bg"
        className="mt-6 px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto text-md bg-lime-200 text-black"
      >
        Get Started
      </Button>
    </div>

    {/* Right Image */}
    <div className="flex-1 w-full flex justify-center items-center">
      <Image
        src="/graphics/cta.png"
        alt="Logo"
        width={700}
        height={700}
        className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-xl"
      />
    </div>

  </div>
</div>


<div>
          <footer className="w-full text-black py-10 border-t-2 border-gray-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
    {/* Column 1 (Wider) */}
    <div className="md:col-span-2 flex flex-col">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={70} />
        <h3 className="text-lg font-semibold">Abirio</h3>
      </div>
      <p className="mt-4 text-gray-500 max-w-full sm:max-w-[320px]">
        From mood boards to payments, Abirio replaces scattered messages, spreadsheets,
        and last-minute chaos with one intelligent workflow.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-black">Help Center</a></li>
        <li><a href="#" className="hover:text-black">Terms of Service</a></li>
        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact</h3>
      <ul className="space-y-2">
        <li>Email: info@example.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Location: Nairobi, Kenya</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-black">Pricing</a></li>
        <li><a href="#" className="hover:text-black">Blog</a></li>
        <li><a href="#" className="hover:text-black">Documentation</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-10 text-sm text-gray-500 text-center sm:text-left max-w-7xl mx-auto px-6 lg:px-8">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </div>
</footer>

        </div>
    </>
  );
}