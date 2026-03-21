
"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-6 md:px-12 bg-gradient-to-br from-[#ffffff] via-[#82ffa9] to-white">

  {/* Image div — hidden on small screens */}
  <div className="hidden  lg:flex w-2/3  flex-col items-center h-[700px] justify-between text-black p-8 rounded-2xl">
    <Image src="/auth-image.jpg" alt="Auth Image" width={600} height={600} />

    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-3xl font-bold">
        Simple yet powerful accounting software for business
      </h1>
      <h1 className="text-lg">
        Track Expenses, customize invoices, run reports and even more all from one place
      </h1>
    </div>
  </div>

  {/* Login form div — full width on small screens */}
  <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/3 h-auto md:h-[800px] py-10 md:py-0">
    <div className="bg-white border border-gray-200 rounded-lg w-full md:w-[600px] flex flex-col">

      {/* Top image */}
      <div className="relative">
        <Image src="/savings.jpg" alt="Auth Image" width={550} height={550} className="rounded-t-lg w-full object-cover" />
        <div className="absolute inset-0 bg-gray-600/50 rounded-t-lg"></div>
      </div>

      {/* Form */}
      <div className="p-6 flex flex-col justify-around gap-6">
        <div className="flex items-center justify-center bg-red-500 h-18 w-18 rounded-full ">
          <Image src="/padlock.png" alt="Logo" width={50} height={50} />
        </div>

        <div className="flex flex-col gap-8">
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" placeholder="jordan.lee@example.com" />
          </Field>

          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input type="password" placeholder="••••••••" />
          </Field>
        </div>

        <Button className="bg-red-500 text-white px-4 py-5 text-lg rounded-lg mt-10 w-full">
          Sign In
        </Button>

        <p className="text-sm text-gray-600 text-center mt-2">
          Already have an account?
          <a className="text-primary ml-1 cursor-pointer">Sign In</a>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
