'use client'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export function TabsLine() {
  const router = useRouter()

  const handleTabChange = (value: string) => {
    switch (value) {
      case "profile":
        router.push("/dashboard/settings")
        break
      case "password":
        router.push("/dashboard/settings/password")
        break
      case "billing":
        router.push("/dashboard/settings/billing")
        break
      case "notifications":
        router.push("/dashboard/settings/notifications")
        break
      case "groups":
        router.push("/dashboard/settings/groups")
        break
      default:
        break
    }
  }

  return (
    <Tabs defaultValue="profile" onValueChange={handleTabChange}>
      <TabsList variant="line">
        <TabsTrigger value="profile" >Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="groups">Groups</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
