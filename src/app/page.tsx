'use client'
import StampButton from '@/components/atoms/StampButton'
import { type FC } from 'react'

const Page: FC = () => {
  return (
    <main>
      <div className='flex h-screen items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>Hello World</h1>
          <StampButton onClick={() => {}}>テスト</StampButton>
        </div>
      </div>
    </main>
  )
}

export default Page
