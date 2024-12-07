import { Test, TestingModule } from '@nestjs/testing'
import { Collection } from 'src/core/entities'
import { CollectionFactoryService } from './collection.factory.service'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'

describe('CollectionFactoryService', () => {
  let collectionFactoryService: CollectionFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CollectionFactoryService],
    }).compile()

    collectionFactoryService = app.get<CollectionFactoryService>(
      CollectionFactoryService,
    )
  })

  describe('createNewCollection', () => {
    it('should create a new collection with all fields', () => {
      const createCollectionDto: CreateCollectionDto = {
        name: 'New Collection',
        backgroundColors: '#FFFFFF',
        userId: 1,
      }
      const collection: Collection =
        collectionFactoryService.createNewCollection(createCollectionDto)
      expect(collection).toEqual(expect.objectContaining(createCollectionDto))
    })
  })

  describe('updateNewCollection', () => {
    it('should update an existing collection with all fields', () => {
      const updateCollectionDto: UpdateCollectionDto = {
        name: 'Updated Collection',
        backgroundColors: '#000000',
        userId: 2,
      }
      const collection: Collection =
        collectionFactoryService.updateNewCollection(updateCollectionDto)
      expect(collection).toEqual(expect.objectContaining(updateCollectionDto))
    })
  })
})
