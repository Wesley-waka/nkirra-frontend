import React from 'react'
import { Button } from '@/components/ui/button'
import MemberGroupsTable from '@/components/memberGroups'

const groups = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="w-full py-6 sm:py-8 flex items-center justify-between border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-brand">Groups</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your groups here.</p>
        </div>
      </div>

      {/* Groups Table Section */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between py-6 sm:py-8 border-b border-gray-200 gap-4 sm:gap-0">
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-700">Groups</h2>
            <p className="text-sm text-gray-600 mt-1">Where should invoices be sent?</p>
          </div>
        </div>
        <div className="w-full sm:w-3/4 overflow-x-auto">
          <MemberGroupsTable />
        </div>
      </div>

      {/* Active Group Section */}
      <div className="py-6 sm:py-8 w-full flex flex-col sm:flex-row sm:gap-40 gap-2">
        <div className="w-full sm:w-40 sm:shrink-0">
          <h2 className="text-sm font-medium text-gray-700">Active Group</h2>
        </div>
        <div>
          <span className="text-sm text-gray-900">Faida Group</span>
        </div>
      </div>
    </div>
  )
}

export default groups