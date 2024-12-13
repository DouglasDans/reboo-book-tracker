import { IsInt, IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateBookCollectionDto {
  @IsInt()
  @Type(() => Number)
  collectionId: number

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @Type(() => Number)
  bookIds: number[]
}
