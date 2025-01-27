import { Injectable } from '@nestjs/common'
import { BookCollectionRepository } from 'src/core/repositories/book-collection.repository'

@Injectable()
export class BookCollectionService {
  constructor(private bookCollection: BookCollectionRepository) {}

  createRelation(bookId: number, collectionId: number) {
    return this.bookCollection.createRelation(bookId, collectionId)
  }

  async createRelationInBatch(collectionId: number, bookIds: number[]) {
    try {
      await Promise.all(
        bookIds.map(async (bookId) => {
          await this.bookCollection.createRelation(bookId, collectionId)
        }),
      )
    } catch (error: unknown | Error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao criar relação de livro: ${error.message}`)
      } else {
        throw new Error('Erro desconhecido ao criar relação de livro')
      }
    }
  }

  deleteRelationByBookId(bookId: number) {
    return this.bookCollection.deleteRelationByBookId(bookId)
  }

  deleteRelationByCollectionId(collectionId: number) {
    return this.bookCollection.deleteRelationByCollectionId(collectionId)
  }
}
