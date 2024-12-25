import { Outlet } from 'react-router-dom'

import Navbar_95 from '../components/Navbar_95'

const HomeLayout_95 = () => {
  return (
    <>
      <Navbar_95 />
      <Outlet />
    </>
  )
}

export default HomeLayout_95
