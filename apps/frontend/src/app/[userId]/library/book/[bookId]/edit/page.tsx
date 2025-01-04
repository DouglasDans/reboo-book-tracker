import { Metadata } from "next"
import BookEditPage from "@/containers/library-page/book-page/add-edit-pages/index.edit"
import { bookApiService } from "@/api/reboo-api"

type Props = {
  searchParams: string
  params: {
    bookId: number,
    userId: number
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = await bookApiService.getBookById(params.bookId)
  return {
    title: `Editando Livro - ${book.title} `,
  }
}

export default function Page() {
  return (
    <BookEditPage />
  )
}
