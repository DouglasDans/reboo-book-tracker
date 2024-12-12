import CollectionBookList from "@/components/lists/collection-book-list"
import { getAllBooksByBookStatus } from "@/api/reboo-api/services/book.service"
import { Fragment } from "react"

type Props = {
  params: {
    userId: number
  }
}

export default async function BookListWrapper({ params }: Props) {
  const inProgressBooks = await getAllBooksByBookStatus(params.userId, "IN_PROGRESS")
  const notStartedBooks = await getAllBooksByBookStatus(params.userId, "NOT_STARTED")
  return (
    <Fragment>
      <BookList title="Lendo Agora" books={inProgressBooks} controlsDisabled listNoWrap />
      <BookList title="Próximas Leituras" books={notStartedBooks} controlsDisabled listNoWrap />
    </Fragment>
  )
}