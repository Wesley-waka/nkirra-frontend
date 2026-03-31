import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Page = () => {
  return (
    <div className="px-6">
      {/* Header */}
      <div className="w-full py-8 flex items-center justify-between border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-semibold text-brand">Personal info</h1>
          <p className="text-sm text-gray-600 mt-1">Update your personal details here.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>

      {/* Name */}
      <div className="py-8 w-full flex gap-40 border-b border-gray-200">
        <div className="w-40 shrink-0">
          <h2 className="text-sm font-medium text-gray-700">Name</h2>
        </div>
        <div className="flex gap-4">
          <Input placeholder="First Name" className="rounded-lg w-[300px]" />
          <Input placeholder="Last Name" className="rounded-lg w-[300px]" />
        </div>
      </div>

      {/* Email */}
      <div className="py-8 w-full flex gap-40 border-b border-gray-200">
        <div className="w-40 shrink-0">
          <h2 className="text-sm font-medium text-gray-700">Email address</h2>
        </div>
        <div>
          <Input placeholder="Email" className="rounded-lg w-[624px]" />
        </div>
      </div>

      {/* Phone */}
      <div className="py-8 w-full flex gap-40 border-b border-gray-200">
        <div className="w-40 shrink-0">
          <h2 className="text-sm font-medium text-gray-700">Phone number</h2>
        </div>
        <div>
          <Input placeholder="Phone number" className="rounded-lg w-[624px]" />
        </div>
      </div>

      {/* Role */}
      <div className="py-8 w-full flex gap-40 ">
        <div className="w-40 shrink-0">
          <h2 className="text-sm font-medium text-gray-700">Role</h2>
        </div>
        <div className='flex gap-4 items-center'>
          <div>
            <span className="text-sm text-gray-900">Group Admin</span>
          </div>
          <Button>Switch to Member</Button>
        </div>
      </div>
    </div>
  )
}

export default Page