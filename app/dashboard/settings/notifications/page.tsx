import { Button } from '@/components/ui/button'
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const NotificationRow = () => (
  <div className="w-full sm:w-1/2 py-6">
    <Field orientation="horizontal" className="max-w-full flex-col sm:flex-row gap-4 sm:gap-0">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          Share across devices
        </FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <div className="flex flex-row sm:flex-col gap-6">
        <div className="flex gap-3 items-center">
          <Switch id="switch-focus-mode" />
          <div>Push</div>
        </div>
        <div className="flex gap-3 items-center">
          <Switch id="switch-focus-mode" />
          <div>Email</div>
        </div>
        <div className="flex gap-3 items-center">
          <Switch id="switch-focus-mode" />
          <div>SMS</div>
        </div>
      </div>
    </Field>
  </div>
)

const page = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="w-full py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-brand">Notifications</h1>
          <p className="text-sm text-gray-600 mt-1">
            We may still send you important notifications about your account outside of your notification settings.
          </p>
        </div>
        <div className="flex gap-2 sm:shrink-0">
          <Button variant="outline" className="flex-1 sm:flex-none">Cancel</Button>
          <Button className="flex-1 sm:flex-none">Save</Button>
        </div>
      </div>

      <NotificationRow />
      <div className="border-b border-gray-200"></div>

      <NotificationRow />
      <div className="border-b border-gray-200"></div>

      <NotificationRow />
      <div className="border-b border-gray-200"></div>

      <NotificationRow />
    </div>
  )
}

export default page