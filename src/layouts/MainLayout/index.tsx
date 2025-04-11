import { Outlet } from 'react-router'

import Topbar from '../../components/Topbar'

function MainLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  )
}

export default MainLayout