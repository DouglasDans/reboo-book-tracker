import { getAllBooksByBookStatus } from "@/api/reboo-api/services/book.service"
import ListItems from "@/components/list-items"
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
      <ListItems title="Lendo Agora" data={inProgressBooks} controlsDisabled listNoWrap />
      <ListItems title="Próximas Leituras" data={notStartedBooks} controlsDisabled listNoWrap />
    </Fragment>
  )
}