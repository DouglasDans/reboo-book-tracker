import { Metadata } from "next"
import BookAddPage from "@/containers/library-page/book-page/add-edit-pages/index.add"

export const metadata: Metadata = {
  title: "Adicionar Novo Livro",
}

export default function page() {
  return (
    <BookAddPage />
  )
}
