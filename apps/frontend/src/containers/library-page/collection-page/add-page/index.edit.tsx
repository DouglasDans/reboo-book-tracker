'use client'

import { useSearchParams } from 'next/navigation'
import Step1CollectionData from './step1'
import Step2CollectionBooks from './step2'

export default function CollectionEditPage() {
  const searchParams = useSearchParams()
  const step = searchParams.get("step")

  switch (step) {
    case "1":
      return <Step1CollectionData deleteButton />
    case "2":
      return <Step2CollectionBooks />
    default:
      return <Step1CollectionData deleteButton />
  }
}