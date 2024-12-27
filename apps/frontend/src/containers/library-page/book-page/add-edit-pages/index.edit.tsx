'use client'

import { useSearchParams } from 'next/navigation'
import Step1BookPage from './step1/index';

export default function CollectionAddPage() {
  const searchParams = useSearchParams()
  const step = searchParams.get("step")

  switch (step) {
    case "1":
      return <Step1BookPage />
    case "2":
      return "aaaaa"
    default:
      return <Step1BookPage />
  }
}