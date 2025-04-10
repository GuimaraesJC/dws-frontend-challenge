import { BrowserRouter, Routes, Route } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import WithSidebarLayout from '../layouts/WithSidebarLayout'
import PostList from '../pages/PostList'
import PostDetail from '../pages/PostDetail'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<WithSidebarLayout />}>
            <Route path="/" element={<PostList />} />
          </Route>
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router