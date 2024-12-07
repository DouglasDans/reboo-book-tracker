import { Test, TestingModule } from '@nestjs/testing'
import { Category } from 'src/core/entities'
import { CategoryFactoryService } from './category-factory.service'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/core/dtos'

describe('CategoryFactoryService', () => {
  let categoryFactoryService: CategoryFactoryService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CategoryFactoryService],
    }).compile()

    categoryFactoryService = app.get<CategoryFactoryService>(
      CategoryFactoryService,
    )
  })

  describe('createNewCategory', () => {
    it('should create a new category with all fields', () => {
      const createCategoryDto: CreateCategoryDto = {
        name: 'New Category',
      }
      const category: Category =
        categoryFactoryService.createNewCategory(createCategoryDto)
      expect(category).toEqual(expect.objectContaining(createCategoryDto))
    })
  })

  describe('updateNewCategory', () => {
    it('should update an existing category with all fields', () => {
      const updateCategoryDto: UpdateCategoryDto = {
        name: 'Updated Category',
      }
      const category: Category =
        categoryFactoryService.updateNewCategory(updateCategoryDto)
      expect(category).toEqual(expect.objectContaining(updateCategoryDto))
    })
  })
})
