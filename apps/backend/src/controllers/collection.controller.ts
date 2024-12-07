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
} from '@nestjs/common'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'
import { CollectionQueryParams } from 'src/core/pipes/collection.pipes'
import { CollectionService } from 'src/use-cases/collection'

@Controller('api/v1/collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.createCollection(createCollectionDto)
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
