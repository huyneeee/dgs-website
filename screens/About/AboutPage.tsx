import React from 'react'
import { TabContent } from './TabContent'

const AboutPage = () => {
  return (
    <main className='flex flex-col w-full container xl:pb-40'>
      <h1 className='heading-1 my-5'>About</h1>
      <TabContent />
    </main>
  )
}

export default AboutPage