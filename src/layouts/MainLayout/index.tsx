import { Outlet } from 'react-router'

import Topbar from '../../components/Topbar'
import BackgroundBlobs from '../../components/BackgroundBlobs'

function MainLayout() {
  return (
    <>
      <Topbar />
      <BackgroundBlobs />
      <Outlet />
    </>
  )
}

export default MainLayout