import { Test, TestingModule } from '@nestjs/testing'
import { User } from 'src/core/entities'
import { UserFactoryService } from './user.factory.service'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'
import { AuthService } from '../auth'

describe('UserFactoryService', () => {
  let userFactoryService: UserFactoryService
  let authService: AuthService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UserFactoryService,
        {
          provide: AuthService,
          useValue: {
            hashPassword: jest.fn().mockResolvedValue('hashedPassword'),
          },
        },
      ],
    }).compile()

    userFactoryService = app.get<UserFactoryService>(UserFactoryService)
    authService = app.get<AuthService>(AuthService)
  })

  describe('createNewUser', () => {
    it('should create a new user with all fields', async () => {
      const createUserDto: CreateUserDto = {
        name: 'New User',
        email: 'user@example.com',
        bio: 'A new user bio',
        profileImage: 'profile.jpg',
        google_id: 'google123',
        password: 'password123',
      }
      const user: User = await userFactoryService.createNewUser(createUserDto)
      expect(user).toEqual(
        expect.objectContaining({
          name: 'New User',
          email: 'user@example.com',
          bio: 'A new user bio',
          profileImage: 'profile.jpg',
          googleId: 'google123',
          password: 'hashedPassword',
        }),
      )
    })
  })

  describe('updateNewUser', () => {
    it('should update an existing user with all fields', async () => {
      const updateUserDto: UpdateUserDto = {
        name: 'Updated User',
        email: 'updated@example.com',
        bio: 'An updated user bio',
        profileImage: 'updated_profile.jpg',
        google_id: 'google456',
        password: 'newpassword123',
      }
      const user: User = await userFactoryService.updateNewUser(updateUserDto)
      expect(user).toEqual(
        expect.objectContaining({
          name: 'Updated User',
          email: 'updated@example.com',
          bio: 'An updated user bio',
          profileImage: 'updated_profile.jpg',
          googleId: 'google456',
          password: 'hashedPassword',
        }),
      )
    })
  })
})
