import { UserProvider } from "@/context/user/UserProvider"
import MainLayout from "@/layout/main-layout"
import { ReactNode } from "react"
import { userApiService } from "@/api/reboo-api"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default async function Layout({ children, params }: Props) {
  const user = await userApiService.getUserById(params.userId)
  return (
    <UserProvider value={user}>
      <MainLayout>
        {children}
      </MainLayout>
    </UserProvider>
  )
}
