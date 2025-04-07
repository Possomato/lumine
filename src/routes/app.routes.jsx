import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Feed } from '../pages/Feed'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Feed />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Routes>
  )
}