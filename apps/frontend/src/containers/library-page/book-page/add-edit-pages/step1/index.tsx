import { Fragment } from "react"
import SearchBookContainer from "./search-book-container"
import FormBookInfo from "./form-book-info"

export default function Step1BookPage() {
  return (
    <Fragment>
      <h6>Informações do Livro</h6>
      <SearchBookContainer />
      <FormBookInfo />
    </Fragment>
  )
}