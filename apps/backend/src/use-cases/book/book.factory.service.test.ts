import { Test, TestingModule } from '@nestjs/testing'
import { Book } from 'src/core/entities'
import { BookFactoryService } from './book.factory.service'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'

describe('BookFactoryService', () => {
  let bookFactoryService: BookFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [BookFactoryService],
    }).compile()

    bookFactoryService = app.get<BookFactoryService>(BookFactoryService)
  })

  describe('createNewBook', () => {
    it('should create a new book with all fields', () => {
      const createBookDto: CreateBookDto = {
        title: 'New Book',
        isbn_10: '1234567890',
        isbn_13: '123-1234567890',
        totalPages: 300,
        pagesRead: 50,
        publicationDate: new Date(),
        description: 'A new book description',
        status: 'IN_PROGRESS',
        coverImage: 'cover.jpg',
        highlightColor: '#FFFFFF',
        language: 'en',
        userId: 1,
        publisherId: 1,
      }
      const book: Book = bookFactoryService.createNewBook(createBookDto)
      expect(book).toEqual(expect.objectContaining(createBookDto))
    })

    it('should create a new book with only required fields', () => {
      const createBookDto: CreateBookDto = {
        title: 'New Book',
        totalPages: 300,
        pagesRead: 50,
        status: 'IN_PROGRESS',
        userId: 1,
      }
      const book: Book = bookFactoryService.createNewBook(createBookDto)
      expect(book).toEqual(
        expect.objectContaining({
          title: 'New Book',
          totalPages: 300,
          pagesRead: 50,
          status: 'IN_PROGRESS',
          userId: 1,
          isbn_10: null,
          isbn_13: null,
          publicationDate: null,
          description: null,
          coverImage: null,
          highlightColor: null,
          language: null,
          publisherId: null,
        }),
      )
    })
  })

  describe('updateNewBook', () => {
    it('should update an existing book with all fields', () => {
      const updateBookDto: UpdateBookDto = {
        title: 'Updated Book',
        isbn_10: '0987654321',
        isbn_13: '321-0987654321',
        totalPages: 400,
        pagesRead: 100,
        publicationDate: new Date(),
        description: 'An updated book description',
        status: 'COMPLETED',
        coverImage: 'updated_cover.jpg',
        highlightColor: '#000000',
        language: 'es',
        publisherId: 2,
      }
      const book: Book = bookFactoryService.updateNewBook(updateBookDto)
      expect(book).toEqual(expect.objectContaining(updateBookDto))
    })

    it('should update an existing book with only required fields', () => {
      const updateBookDto: UpdateBookDto = {
        title: 'Updated Book',
        totalPages: 400,
        pagesRead: 100,
        status: 'COMPLETED',
      }
      const book: Book = bookFactoryService.updateNewBook(updateBookDto)
      expect(book).toEqual(
        expect.objectContaining({
          title: 'Updated Book',
          totalPages: 400,
          pagesRead: 100,
          status: 'COMPLETED',
          isbn_10: null,
          isbn_13: null,
          publicationDate: null,
          description: null,
          coverImage: null,
          highlightColor: null,
          language: null,
          publisherId: null,
        }),
      )
    })
  })
})
