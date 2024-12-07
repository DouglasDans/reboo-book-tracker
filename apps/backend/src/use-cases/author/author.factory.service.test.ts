import { Test, TestingModule } from '@nestjs/testing'
import { AuthorFactoryService } from './author.factory.service'
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos'
import { Author } from 'src/core/entities'

describe('AuthorFactoryService', () => {
  let authorFactoryService: AuthorFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AuthorFactoryService],
    }).compile()

    authorFactoryService = app.get<AuthorFactoryService>(AuthorFactoryService)
  })

  describe('createNewAuthor', () => {
    it('should create a new author', () => {
      const createAuthorDto: CreateAuthorDto = { name: 'New Author' }
      const author: Author =
        authorFactoryService.createNewAuthor(createAuthorDto)
      expect(author).toEqual({ name: 'New Author' })
    })
  })

  describe('updateNewAuthor', () => {
    it('should update an existing author', () => {
      const updateAuthorDto: UpdateAuthorDto = { name: 'Updated Author' }
      const author: Author =
        authorFactoryService.updateNewAuthor(updateAuthorDto)
      expect(author).toEqual({ name: 'Updated Author' })
    })
  })
})
