import { CollectionRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Collection } from 'src/core/entities'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaCollectionRepository implements CollectionRepository {
  constructor(private prisma: PrismaService) {}

  create(item: Collection): Promise<Collection> {
    return this.prisma.collection.create({
      data: {
        name: item.name,
        backgroundColors: item.backgroundColors,
        userId: item.userId,
      },
    })
  }

  findAll(): Promise<Collection[]> {
    return this.prisma.collection.findMany()
  }

  findAllByUserId(userId: number): Promise<Collection[]> {
    return this.prisma.collection.findMany({
      where: { userId },
    })
  }

  findById(id: number): Promise<Collection> {
    return this.prisma.collection.findUnique({
      where: { id },
      include: { books: { select: { book: true } } },
    })
  }

  update(id: number, item: Collection): Promise<Collection> {
    return this.prisma.collection.update({
      where: { id },
      data: {
        name: item.name,
        backgroundColors: item.backgroundColors,
        userId: item.userId,
      },
    })
  }

  delete(id: number): Promise<Collection> {
    return this.prisma.collection.delete({
      where: { id },
    })
  }
}
