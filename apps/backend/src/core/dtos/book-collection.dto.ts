import { IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateBookCollectionDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @Type(() => Number)
  bookIds: number[]
}
