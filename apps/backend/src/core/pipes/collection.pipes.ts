import { IsOptional, IsNumberString } from 'class-validator'

export class CollectionQueryParams {
  @IsOptional()
  @IsNumberString()
  userId: string
}
