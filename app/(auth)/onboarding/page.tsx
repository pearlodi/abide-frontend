import Signup from '@/src/views/auth/signup/Index'
import { Suspense } from 'react'

const page = () => {
  return <Suspense fallback={null}><Signup/></Suspense>
}

export default page