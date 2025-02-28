import 'react'
import Navbar from './Navbar'
import TransparentCard from './FrontendBody'

export const FullBody = () => {
  return (
    <div className ='bg-gradient-to-br from-black to-blue-900'>
        <Navbar />
        <TransparentCard />
    </div>
  )
}
