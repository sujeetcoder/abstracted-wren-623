import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<h1>Hello</h1>}></Route>
    </Routes>
  )
}

export default AllRoutes