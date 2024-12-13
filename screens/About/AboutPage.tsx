import React from 'react'
import { TabContent } from './TabContent'

const AboutPage = () => {
  return (
    <main className='flex flex-col w-full container xl:pb-40'>
      <h3 className='xl:text-6xl font-bold my-5'>About</h3>
      <TabContent />
    </main>
  )
}

export default AboutPage