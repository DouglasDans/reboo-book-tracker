"use server"

import api from "../api.config"
import { Collection } from "../api.types"

export async function getAllCollectionsByUserId(
  userId: number,
): Promise<Collection[]> {
  return await api.get(`/collection?userId=${userId}`)
}

export async function getCollectionById(collectionId: number): Promise<Collection> {
  return await api.get(`/collection/${collectionId}`)
}
