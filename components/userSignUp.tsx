'use client'
import React from 'react'
import { FieldGroup,Field,FieldLabel,FieldDescription,FieldContent } from './ui/field';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';


interface StepProps {
  next: () => void;
  finish: () => void;
  setLogin: (login: boolean) => void;
  setUser: (user: 'admin' | 'member' | null) => void;
}

export const userSignUp = ({ next, finish, setLogin, setUser }: StepProps) => {
  return (
   <div className="flex flex-col gap-4 p-3 sm:p-4 md:p-6 lg:p-8 flex-1 h-full min-h-0">
      {/* <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Create a new account</h1>
        <p className="text-gray-600 text-sm sm:text-base">Join our community to start managing your events better</p>
      </div> */}

      <div className="flex flex-col justify-between flex-1 min-h-0">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-y-auto">
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Field>
              <FieldLabel className="text-sm sm:text-base">First Name</FieldLabel>
              <Input placeholder="Jordan" className="h-10 sm:h-11" />
            </Field>
            <Field>
              <FieldLabel className="text-sm sm:text-base">Last Name</FieldLabel>
              <Input placeholder="Lee" className="h-10 sm:h-11" />
            </Field>
          </FieldGroup>
          {/* <Field>
            <FieldLabel className="text-sm sm:text-base">Phone</FieldLabel>
            <Input placeholder="+254 700 000 000" className="h-10 sm:h-11" />
          </Field> */}
          <Field>
            <FieldLabel className="text-sm sm:text-base">Email</FieldLabel>
            <Input type="email" placeholder="jordan.lee@example.com" className="h-10 sm:h-11" />
          </Field>
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Field>
              <FieldLabel className="text-sm sm:text-base">Password</FieldLabel>
              <Input type="password" placeholder="••••••••" className="h-10 sm:h-11" />
            </Field>
            <Field>
              <FieldLabel className="text-sm sm:text-base">Confirm Password</FieldLabel>
              <Input type="password" placeholder="••••••••" className="h-10 sm:h-11" />
            </Field>
          </FieldGroup>
          <Field orientation="horizontal" className="items-start sm:items-center">
            <Checkbox id="terms" className="mt-1 sm:mt-0" />
            <FieldContent className="ml-3 sm:ml-2">
              <FieldLabel className="text-sm sm:text-base">Accept terms and conditions</FieldLabel>
              <FieldDescription className="text-xs sm:text-sm">By clicking this checkbox, you agree to the terms.</FieldDescription>
            </FieldContent>
          </Field>
        </div>
        <div className="mt-4 sm:mt-6 flex-shrink-0">
          <Button className="w-full h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-[#a9012b] text-sm sm:text-base font-medium" variant="default" onClick={next}>Create Account</Button> 
          
        </div>
      </div>
    </div>
  )
}
