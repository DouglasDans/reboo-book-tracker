"use server"

import { FormCollection } from "@/types/forms.types"
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

export async function updateCollection(collection: CollectionRequest) {
  return await api.patch(`/collection/${collection.id}`, collection)
}

export async function deleteCollectionById(collectionId: number) {
  return await api.delete(`/collection/${collectionId}`)
}
