import CollectionPage from "@/containers/library-page/collection-page"
import { UserProvider } from "@/context/user/UserProvider"
import { getCollectionById } from "@/services/rebooAPI/api.services"
import { Metadata } from "next"

type Props = {
  params: {
    userId: number
    collectionId: number
  }
}

export const metadata: Metadata = {
  title: "Coleção",
}

export default async function page({ params }: Props) {
  const collectionData = await getCollectionById(params.collectionId)

  return (
    <UserProvider value={params.userId}>
      <CollectionPage collection={collectionData} />
    </UserProvider>
  )
}