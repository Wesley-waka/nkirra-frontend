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
   <div className="flex flex-col gap-6 p-4 sm:p-0 flex-1 h-full">
      {/* <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create a new account</h1>
        <p className="text-gray-600">Join our community to start managing your events better</p>
      </div> */}

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-8">
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel>First Name</FieldLabel>
              <Input placeholder="Jordan" />
            </Field>
            <Field>
              <FieldLabel>Last Name</FieldLabel>
              <Input placeholder="Lee" />
            </Field>
          </FieldGroup>
          {/* <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input placeholder="+254 700 000 000" />
          </Field> */}
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" placeholder="jordan.lee@example.com" />
          </Field>
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="••••••••" />
            </Field>
            <Field>
              <FieldLabel>Confirm Password</FieldLabel>
              <Input type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="terms" />
            <FieldContent>
              <FieldLabel>Accept terms and conditions</FieldLabel>
              <FieldDescription>By clicking this checkbox, you agree to the terms.</FieldDescription>
            </FieldContent>
          </Field>
        </div>
        <div className="mt-6">
          <Button className="w-full h-12 rounded-2xl bg-[#a9012b]" variant="default" onClick={next}>Create Account</Button> 
          
        </div>
      </div>
    </div>
  )
}
