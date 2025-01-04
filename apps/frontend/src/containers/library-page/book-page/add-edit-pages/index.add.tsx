'use client'

import { useSearchParams } from 'next/navigation'
import Step1BookPage from './step1/index';
import Step2BookPage from './step2';
import Step3BookPage from './step3';

export default function BookAddPage() {
  const searchParams = useSearchParams()
  const step = searchParams.get("step")

  switch (step) {
    case "1":
      return <Step1BookPage />
    case "2":
      return <Step2BookPage />
    case "3":
      return <Step3BookPage />
    case "4":
      return "aaa1aa"
    default:
      return <Step1BookPage />
  }
}