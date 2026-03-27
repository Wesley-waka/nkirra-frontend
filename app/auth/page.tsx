'use client'
import Image from 'next/image'
// import SignIn from './ui/sign-in'
// import SignUp from './ui/sign-up'
import { useState } from 'react'
import { Field, FieldGroup, FieldLabel, FieldContent, FieldDescription } from '@/components/ui/field'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import OrDivider from '@/components/or-divider'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Stepper from '@/components/stepper'
import { motion, AnimatePresence } from 'framer-motion'

export default function page() {
  const [login,setLogin] = useState<boolean>(true);
  const [user,setUser] = useState<'admin' | 'member' | null>(null);
  const [userType,setUserType] = useState<'admin' | 'member' | null>(null);
  const router = useRouter()


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };


  return (
<div className="flex flex-col lg:flex-row w-full h-screen">

  {/* Pic Div – Hidden on mobile + tablet */}
  <div className="hidden lg:flex lg:w-4/9 relative text-white ">
   <div className="flex flex-col lg:justify-around xl:justify-normal mt-16 xl:mt-[120px] w-full max-w-[700px] mx-auto px-6 xl:px-0 relative z-10">
      
      {/* Logo & Title */}
      <div className=''>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-start gap-2 xl:gap-4'>
            <Image src="/auth-5.png" alt="GetAbiro" width={70} height={70} className="xl:w-[90px] xl:h-[90px]" />
            <h1 className="text-4xl xl:text-6xl font-bold text-white">Nkirra</h1>
          </div>
          <h1 className="text-base xl:text-xl font-normal text-white"> Finance For You,Finance For Everyone.</h1>
        </div>
        {/* Welcome Section */}
        <div className='flex flex-col justify-between gap-4 mt-10 xl:mt-[80px] w-full max-w-[600px]'>
          <div>
            <h1 className="text-2xl xl:text-4xl font-bold text-white">Welcome to Nkirra</h1>
            <p className="text-sm xl:text-lg text-white mt-4 leading-relaxed">
              We offer a simple set of tools for effective event management and collaboration with AI assistance with matching you with the right vendor for your event. Our top tier features include advanced analytics, priority support, and exclusive vendor discounts. Join our community to plan effectively, collaborate seamlessly, and succeed effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className='flex flex-row gap-3 xl:gap-8 mt-10 xl:mt-50'>
        <div className='flex flex-col gap-1 items-center justify-center px-4 xl:px-18 py-4 xl:py-5 bg-[#a9012b] rounded-md flex-1 xl:w-[200px]'>
          <Image src='/group-white.svg' alt='event-auth' width={40} height={40} className="xl:w-[50px] xl:h-[50px]" />
          <div className='text-white font-bold text-sm xl:text-lg'>Cooperate</div>
        </div>
        <div className='flex flex-col gap-1 items-center justify-center px-4 xl:px-18 py-4 xl:py-5 bg-[#a9012b] rounded-md flex-1 xl:w-[200px]'>
          <Image src='settings-white.svg' alt='event-auth' width={40} height={40} className="xl:w-[50px] xl:h-[50px]" />
          <div className='text-white font-bold text-sm xl:text-lg'>Customize</div>
        </div>
        <div className='flex flex-col gap-1 items-center justify-center px-4 xl:px-18 py-4 xl:py-5 bg-[#a9012b] rounded-md flex-1 xl:w-[200px]'>
          <Image src='grow-white.svg' alt='event-auth' width={40} height={40} className="xl:w-[50px] xl:h-[50px]" />
          <div className='text-white font-bold text-sm xl:text-lg'>Grow</div>
        </div>
      </div>

   </div>

   {/* Background Image */}
   <div 
      className="absolute inset-0 rounded-tr-4xl"
      style={{
        backgroundImage: 'url(/collab.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
   />
   {/* Overlay */}
   <div 
      className="absolute inset-0 rounded-tr-full  "
      style={{ backgroundColor: 'rgba(0, 0, 139, 0.6)',borderBottomRightRadius: '2rem' }}
   />
</div>



  {/* Form Div */}
  <div className="w-full lg:w-5/9 p-6 sm:p-16 sm:px-30 min-h-screen flex flex-col ">

{login ? (<div className='h-full w-full '>
  
  {/*
  <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input placeholder="Jordan" />
              </Field>
  
            <Button className="w-full h-10" variant="default">Create Account</Button> */}
  
  
        <div className='flex flex-col justify-between h-[200px]'>
          <Link className="" href='/'>
            <Image
              src='/icons/left.svg'
              alt='arrow-left'
              height={60}
              width={60}
              className='text-brand'
            />
          </Link>
          <div className='flex flex-col gap-2'>
            <h1 className='text-brand text-6xl font-manrope'>
              Log in
            </h1>
            <h1>
              Don't have an account? <span className='text-brand underline font-bold cursor-pointer' onClick={()=> {
                setLogin(false);
              }}> Create an account</span>
            </h1>
          </div>
        </div>

        <div className='my-12 flex flex-col gap-11'>
          <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <Input placeholder="Jordan" className='rounded-2xl'/>
                </Field>

                <div className='flex flex-col gap-6'>
 

                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input type="password" className='rounded-2xl' placeholder="••••••••" />
                  </Field>

                  <h1 className='text-brand underline text-right font-bold'>Forgot Password?</h1>
                </div>


        </div>

        <div className='flex flex-col gap-8'>

           <Button className="w-full h-12 rounded-2xl bg-[#a9012b]" variant="default" onClick={()=>router.push('/dashboard')}>Create Account</Button> 

           <Field orientation="horizontal">
            <Checkbox id="terms" />
            <FieldContent>
              <FieldLabel>Accept terms and conditions</FieldLabel>
              <FieldDescription>By clicking this checkbox, you agree to the terms.</FieldDescription>
            </FieldContent>
          </Field>

          <OrDivider text="OR" />

          <div className='flex flex-row gap-3 w-full'>
            <Button className='flex-1 bg-background border-1 border-gray-300 h-12'>
              <Image
                src='/icons/google.svg'
                alt='Google sign in'
                height={20}
                width={20}
              />
              <h1 className='text-black'>Continue with Google</h1>
            </Button>
            {/* <Button className='flex-1'>
              <div></div>
              <h1>Continue with Facebook</h1>
            </Button> */}
          </div>

         

        </div>

        

         

        
  
</div>) : ''}

{
  login ? '' : (<>
  
  </>)

}

{!user && !login ?(
  <div className="w-full px-4 sm:px-8 md:px-16">

  {/* Header */}
  <div className="flex flex-col justify-between min-h-[150px] sm:min-h-[200px]">
    
    <div onClick={() => setLogin(true)} className="cursor-pointer">
      <Image
        src="/icons/left.svg"
        alt="arrow-left"
        height={40}
        width={40}
        className="text-brand sm:h-[50px] sm:w-[50px]"
      />
    </div>

    <div className="mt-4 sm:mt-0">
      <h1 className="text-brand text-2xl sm:text-3xl md:text-4xl text-center font-normal">
        Select your Role
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base mt-2">
        Choose whether you want to join a group or create your own
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="flex flex-col justify-between items-center mt-10 gap-8">

    {/* Cards */}
    <div className="flex flex-col sm:flex-row w-full gap-6 sm:gap-8">
      
      {/* Admin */}
      <div
        className={`${
          userType === "admin" ? "border border-brand" : "border border-gray-300"
        } w-full sm:w-1/2 min-h-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 shadow-sm cursor-pointer p-4`}
        onClick={() => setUserType("admin")}
      >
        <Image
          src="/animations/admin.png"
          alt="admin"
          width={150}
          height={150}
          className="w-24 sm:w-32 md:w-40 h-auto"
        />
        <div className="text-sm sm:text-base">Group Admin</div>
      </div>

      {/* Member */}
      <div
        className={`${
          userType === "member" ? "border border-brand" : "border border-gray-300"
        } w-full sm:w-1/2 min-h-[200px] rounded-3xl flex flex-col items-center justify-center gap-4 shadow-sm cursor-pointer p-4`}
        onClick={() => setUserType("member")}
      >
        <Image
          src="/animations/member.png"
          alt="member"
          width={150}
          height={150}
          className="w-24 sm:w-32 md:w-40 h-auto"
        />
        <div className="text-sm sm:text-base">Group Member</div>
      </div>

    </div>

    {/* Button */}
    <Button
      className="w-full h-12 rounded-2xl bg-[#a9012b] mt-4"
      variant="default"
      onClick={() => setUser(userType)}
    >
      Continue
    </Button>

  </div>
</div>
) : login ? '':(<div className='h-full w-full '>
  
  {/*
  <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input placeholder="Jordan" />
              </Field>
  
            <Button className="w-full h-10" variant="default">Create Account</Button> */}
  
  
        <div className='flex flex-col  h-[200px]'>
          <div className="" onClick={()=>setUser(null)}>
            <Image
              src='/icons/left.svg'
              alt='arrow-left'
              height={60}
              width={60}
              className='text-brand'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-brand text-6xl font-manrope'>
              Sign Up
            </h1>
            <h1>
              Have an account? <span className='text-brand underline font-bold' onClick={()=>{setLogin(true);setUser(null)}}>Sign in</span>
            </h1>
          </div>
        </div>

      <Stepper user={user} setLogin={setLogin} setUser={setUser}/>

        

         

        
  
</div>)}




</div>
</div>
  )
}
