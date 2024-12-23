import { Injectable } from '@nestjs/common'
import { CollectionRepository } from '../../core/repositories/collection.repository'
import { CollectionFactoryService } from './collection.factory.service'
import { Collection } from 'src/core/entities'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'
import { BookCollectionService } from '../book-collection/book-collection.service'

@Injectable()
export class CollectionService {
  constructor(
    private collection: CollectionRepository,
    private collectionFactory: CollectionFactoryService,
    private bookCollectionService: BookCollectionService,
  ) {}

  getAllCollections(): Promise<Collection[]> {
    return this.collection.findAll()
  }

  getAllCollectionsByUserId(userId: number): Promise<Collection[]> {
    return this.collection.findAllByUserId(userId)
  }

  getCollectionById(id: number): Promise<Collection> {
    return this.collection.findById(id)
  }

  createCollection(
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    const collection =
      this.collectionFactory.createNewCollection(createCollectionDto)
    return this.collection.create(collection)
  }

  updateCollection(
    collectionId: number,
    updateCollectionDto: UpdateCollectionDto,
  ) {
    const collection =
      this.collectionFactory.updateNewCollection(updateCollectionDto)
    return this.collection.update(collectionId, collection)
  }

  async deleteCollection(collectionId: number) {
    await this.bookCollectionService.deleteRelationByCollectionId(collectionId)

    return this.collection.delete(collectionId)
  }
}
