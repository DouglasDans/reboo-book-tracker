import { Test, TestingModule } from '@nestjs/testing'
import { ReadingSession } from 'src/core/entities'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { CreateReadingSessionDto, UpdateReadingSessionDto } from 'src/core/dtos'

describe('ReadingSessionFactoryService', () => {
  let readingSessionFactoryService: ReadingSessionFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ReadingSessionFactoryService],
    }).compile()

    readingSessionFactoryService = app.get<ReadingSessionFactoryService>(
      ReadingSessionFactoryService,
    )
  })

  describe('createNewReadingSession', () => {
    it('should create a new reading session with all fields', () => {
      const createReadingSessionDto: CreateReadingSessionDto = {
        startDate: new Date(),
        endDate: new Date(),
        pagesRead: 50,
        bookId: 1,
        userId: 1,
      }
      const readingSession: ReadingSession =
        readingSessionFactoryService.createNewReadingSession(
          createReadingSessionDto,
        )
      expect(readingSession).toEqual(
        expect.objectContaining(createReadingSessionDto),
      )
    })
  })

  describe('updateNewReadingSession', () => {
    it('should update an existing reading session with all fields', () => {
      const updateReadingSessionDto: UpdateReadingSessionDto = {
        startDate: new Date(),
        endDate: new Date(),
        pagesRead: 100,
        bookId: 2,
        userId: 2,
      }
      const readingSession: ReadingSession =
        readingSessionFactoryService.updateNewReadingSession(
          updateReadingSessionDto,
        )
      expect(readingSession).toEqual(
        expect.objectContaining(updateReadingSessionDto),
      )
    })
  })
})
