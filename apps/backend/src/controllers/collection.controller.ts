import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'
import { CreateBookCollectionDto } from 'src/core/dtos/book-collection.dto'
import { CollectionQueryParams } from 'src/core/pipes/collection.pipes'
import { BookCollectionService } from 'src/use-cases/book-collection'
import { CollectionService } from 'src/use-cases/collection'

@Controller('api/v1/collection')
export class CollectionController {
  constructor(
    private readonly collectionService: CollectionService,
    private readonly bookCollectionService: BookCollectionService,
  ) {}

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.createCollection(createCollectionDto)
  }

  @Post(':id')
  async addBooksIntoCollection(
    @Param('id', ParseIntPipe) collectionId: number,
    @Body() createBookCollectionDto: CreateBookCollectionDto,
  ) {
    try {
      return await this.bookCollectionService.createRelationInBatch(
        collectionId,
        createBookCollectionDto.bookIds,
      )
    } catch (error: unknown | Error) {
      if (error instanceof Error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
      } else {
        throw new HttpException(
          'Erro desconhecido',
          HttpStatus.INTERNAL_SERVER_ERROR,
        )
      }
    }
  }

  @Get()
  find(@Query() collectionQueryParams: CollectionQueryParams) {
    if (collectionQueryParams.userId) {
      return this.collectionService.getAllCollectionsByUserId(
        parseInt(collectionQueryParams.userId),
      )
    }
    return this.collectionService.getAllCollections()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.getCollectionById(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionService.updateCollection(id, updateCollectionDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.deleteCollection(id)
  }
}
