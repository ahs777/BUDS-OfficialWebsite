import React from 'react'
import { useSelector } from 'react-redux'

function LandingPage() {
const msg=useSelector(state=>state.landing.msg)
console.log('basil'+msg)
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default LandingPage