import { Outlet } from 'react-router'

function WithSidebarLayout() {
  return (
    <>
      <aside>Menu lateral</aside>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default WithSidebarLayout;