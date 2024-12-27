import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateCollectionDto {
  @IsString()
  name: string

  @IsString()
  backgroundColors: string

  @IsInt()
  userId: number

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @Type(() => Number)
  books?: number[]
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
  @IsOptional()
  @IsInt()
  id?: number
}
