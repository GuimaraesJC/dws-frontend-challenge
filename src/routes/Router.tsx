import { BrowserRouter, Routes, Route } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import PostList from '../pages/PostList'
import PostDetail from '../pages/PostDetail'
import NotFound from '../pages/NotFound'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router