import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Page = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="w-full py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-brand">Password</h1>
          <p className="text-sm text-gray-600 mt-1">Update your password here.</p>
        </div>
        <div className="flex gap-2 sm:shrink-0">
          <Button variant="outline" className="flex-1 sm:flex-none">Cancel</Button>
          <Button className="flex-1 sm:flex-none">Save</Button>
        </div>
      </div>

      {/* Password Fields */}
      <div className="py-6 sm:py-8 w-full flex flex-col sm:flex-row sm:gap-40 border-gray-200">
        <div className="w-full sm:w-40 shrink-0 mb-4 sm:mb-0">
          <h2 className="text-sm font-medium text-gray-700">Password</h2>
        </div>
        <div className="flex gap-4 flex-col w-full sm:w-auto">
          <Input
            type="password"
            placeholder="Current Password"
            className="rounded-lg w-full sm:w-[300px]"
          />
          <Input
            type="password"
            placeholder="New Password"
            className="rounded-lg w-full sm:w-[300px]"
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            className="rounded-lg w-full sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Page