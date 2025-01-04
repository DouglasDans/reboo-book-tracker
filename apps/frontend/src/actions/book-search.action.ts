"use server"

import { getAllBookData, getBookByISBN } from "@/api/GoogleBooksAPI/api.services"
import { FormBook } from "@/types/forms.types"

type IndustryIdentifier = {
  type: string
  identifier: string
}

function getIsbnsAsString(industryIdentifiers: IndustryIdentifier[]): string {
  const isbns = industryIdentifiers.map(identifier => identifier.identifier)
  return isbns.join(", ")
}

export async function getBookDataFromAPI(
  isbn: string,
): Promise<Partial<FormBook | undefined>> {
  try {
    const searchResponse = await getBookByISBN(isbn)
    const allBookData = await getAllBookData(searchResponse.items[0].selfLink)

    const book: Partial<FormBook> = {
      title: allBookData.title,
      authors: allBookData.authors.join(","),
      publisher: allBookData.publisher,
      publicationDate: allBookData.publishedDate,
      description: allBookData.description,
      isbn: getIsbnsAsString(allBookData.industryIdentifiers),
      totalPages: allBookData.pageCount.toString(),
      categories: allBookData.categories[0].replaceAll(" / ", ", "),
      language: allBookData.language,
    }

    return book
  } catch (error) {
    console.log(error)
  }
}
