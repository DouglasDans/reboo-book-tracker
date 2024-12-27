'use client'

import { useSearchParams } from 'next/navigation'
import Step1BookPage from './step1/index';

export default function BookAddPage() {
  const searchParams = useSearchParams()
  const step = searchParams.get("step")

  switch (step) {
    case "1":
      return <Step1BookPage />
    case "2":
      return "aaaaa"
    case "3":
      return "aaaa2a"
    case "4":
      return "aaa1aa"
    default:
      return <Step1BookPage />
  }
}