"use server"

import api from "../api.config"
import { Collection, CollectionRequest } from "../api.types"

export async function getAllCollectionsByUserId(
  userId: number,
): Promise<Collection[]> {
  return await api.get(`/collection?userId=${userId}`)
}

export async function getCollectionById(collectionId: number): Promise<Collection> {
  return await api.get(`/collection/${collectionId}`)
}

export async function createNewCollection(
  collection: CollectionRequest,
): Promise<Collection> {
  return await api.post(`/collection`, collection)
}

export async function addBooksOnCollection(
  collectionId: number,
  bookIds: { bookIds: Array<number> },
): Promise<Collection> {
  return await api.post(`/collection/${collectionId}`, bookIds)
}
