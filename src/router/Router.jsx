import React from 'react'
import {Routes,Route} from "react-router-dom"
import Index from '../component/Index'

const Router = () => {
  return (
    <Routes>
        <Route path='' element={<Index/>}/>
    </Routes>
  )
}

export default Router