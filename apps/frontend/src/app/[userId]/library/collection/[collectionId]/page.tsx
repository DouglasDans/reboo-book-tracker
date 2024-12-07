import CollectionPage from "@/containers/library-page/collection-page"
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
    <CollectionPage collection={collectionData} />
  )
}