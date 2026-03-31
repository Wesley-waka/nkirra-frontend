import React from 'react'
import { TabsLine } from '../components/TabsLine'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className=' w-full h-[130px] bg-gray-100 flex justify-between  px-6 flex-col'>
        <div>
          <h1 className='text-2xl font-bold pt-4'>Settings</h1>
          <h1 className='text-sm text-gray-600 py-2'>Manage your personal information and preferences</h1>
        </div>
        <div className=' flex justify-start items-end'>
          <TabsLine/>
        </div>
      </div>
      {children}
    </div>
  )
}

export default layout