import { Test, TestingModule } from '@nestjs/testing'
import { Publisher } from 'src/core/entities'
import { PublisherFactoryService } from './publisher.factory.service'
import { CreatePublisherDto, UpdatePublisherDto } from 'src/core/dtos'

describe('PublisherFactoryService', () => {
  let publisherFactoryService: PublisherFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PublisherFactoryService],
    }).compile()

    publisherFactoryService = app.get<PublisherFactoryService>(
      PublisherFactoryService,
    )
  })

  describe('createNewPublisher', () => {
    it('should create a new publisher with all fields', () => {
      const createPublisherDto: CreatePublisherDto = {
        name: 'New Publisher',
      }
      const publisher: Publisher =
        publisherFactoryService.createNewPublisher(createPublisherDto)
      expect(publisher).toEqual(expect.objectContaining(createPublisherDto))
    })
  })

  describe('updateNewPublisher', () => {
    it('should update an existing publisher with all fields', () => {
      const updatePublisherDto: UpdatePublisherDto = {
        name: 'Updated Publisher',
      }
      const publisher: Publisher =
        publisherFactoryService.updateNewPublisher(updatePublisherDto)
      expect(publisher).toEqual(expect.objectContaining(updatePublisherDto))
    })
  })
})
