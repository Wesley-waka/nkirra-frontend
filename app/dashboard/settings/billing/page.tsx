import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { MailIcon, SquarePlus } from 'lucide-react'

const Page = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="w-full py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-brand">Billing</h1>
          <p className="text-sm text-gray-600 mt-1">Update your billing details here.</p>
        </div>
        <div className="flex gap-2 sm:shrink-0">
          <Button variant="outline" className="flex-1 sm:flex-none">Cancel</Button>
          <Button className="flex-1 sm:flex-none">Save</Button>
        </div>
      </div>

      {/* Contact Email Section */}
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between py-6 sm:py-8 gap-4 sm:gap-0">
        <div className="w-full sm:w-auto">
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-700">Contact email</h2>
            <p className="text-sm text-gray-600 mt-1">Where should invoices be sent?</p>
          </div>
        </div>

        <RadioGroup defaultValue="comfortable" className="w-full">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" id="desc-r1" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r1">Send to my account email</FieldLabel>
              <FieldDescription>
                Standard spacing for most use cases.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" id="desc-r2" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r2">Send to alternative email</FieldLabel>
              <FieldDescription>
                <InputGroup>
                  <InputGroupInput type="email" placeholder="Enter your email" />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>
              </FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </div>

      <div className="border-gray-200 border-b"></div>

      {/* Payment Method Section */}
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-between py-6 sm:py-8 gap-4 sm:gap-0">
        <div>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-700">Contact email</h2>
            <p className="text-sm text-gray-600 mt-1">Where should invoices be sent?</p>
          </div>
        </div>

        <RadioGroup defaultValue="plus" className="w-full sm:max-w-sm">
          <FieldLabel htmlFor="plus-plan">
            <Field orientation="horizontal" className="gap-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <FieldContent className="flex-shrink-0">
                <img src="/icons/visa-svgrepo-com.svg" alt="Visa" width={50} height={50} />
              </FieldContent>
              <FieldContent className="flex-1 min-w-0">
                <FieldTitle>Visa Ending in 1234</FieldTitle>
                <FieldDescription>Expiry 06/28</FieldDescription>
                <div className="flex gap-4 mt-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Set as default</button>
                  <button className="text-sm text-brand hover:text-brand/80 transition-colors">Edit</button>
                </div>
              </FieldContent>
              <RadioGroupItem value="plus" id="plus-plan" />
            </Field>
          </FieldLabel>

          <FieldLabel htmlFor="pro-plan">
            <Field orientation="horizontal" className="gap-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <FieldContent className="flex-shrink-0">
                <img src="/icons/mastercard.svg" alt="Mastercard" width={50} height={50} />
              </FieldContent>
              <FieldContent className="flex-1 min-w-0">
                <FieldTitle>Visa Ending in 1234</FieldTitle>
                <FieldDescription>Expiry 06/28</FieldDescription>
                <div className="flex gap-4 mt-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Set as default</button>
                  <button className="text-sm text-brand hover:text-brand/80 transition-colors">Edit</button>
                </div>
              </FieldContent>
              <RadioGroupItem value="pro" id="pro-plan" />
            </Field>
          </FieldLabel>

          <div className="flex gap-2 mt-6 sm:mt-10">
            <SquarePlus className="w-6 h-6 text-gray-400 cursor-pointer" />
            <div>Add new payment method</div>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default Page