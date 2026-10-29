import BiblePage from '@/src/views/views/bible/Index'
import { Suspense } from 'react'

const page = () => {
  return <Suspense fallback={null}><BiblePage/></Suspense>
}

export default page
