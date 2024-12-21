import { collectionApiService } from "@/api/reboo-api"
import CollectionPage from "@/containers/library-page/collection-page/main-page"
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
  const collectionData = await collectionApiService.getCollectionById(params.collectionId)
  return (
    <CollectionPage collection={collectionData} />
  )
}