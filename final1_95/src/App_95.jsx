import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  HomeLayout_95,
  HomePage_95,
  BlogStaticPage_95,
  BlogNodePage_95,
  BlogSupaPage_95,
  BlogSupaPage2_95,
} from './pages'

import { P1Page_95, P2Page_95, P3Page_95, P4Page_95 } from './pages/mid_95'

import BooksPage1_95 from './pages/quiz2/q1_95/BooksPage1_95'
import BooksPage2_95 from './pages/quiz2/q2_95/BooksPage2_95'
import GroceryPage_95 from './pages/quiz2/q3_95/GroceryPage_95'
import BlogJsonPage_95 from './pages/quiz2/q4_95/BlogJsonPage_95'

import S1Page_95 from './pages/final/s1_95/S1Page_95'
import S2Page_95 from './pages/final/s2_95/S2Page_95'
import S3Page_95 from './pages/final/s3_95/S3Page_95'
import S4Page_95 from './pages/final/s4_95/S4Page_95'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_95 />,
    children: [
      {
        index: true,
        element: <HomePage_95 />,
      },
      {
        path: 'static_95',
        element: <BlogStaticPage_95 />,
      },
      {
        path: 'node_95',
        element: <BlogNodePage_95 />,
      },
      {
        path: 'supa_95',
        element: <BlogSupaPage_95 />,
      },
      {
        path: 'supa2_95',
        element: <BlogSupaPage2_95 />,
      },
    ],
  },
  {
    path: '/mid_95',
    element: <HomeLayout_95 />,
    children: [
      {
        path: 'p1_95',
        element: <P1Page_95 />,
      },
      {
        path: 'p2_95',
        element: <P2Page_95 />,
      },
      {
        path: 'p3_95',
        element: <P3Page_95 />,
      },
      {
        path: 'p4_95',
        element: <P4Page_95 />,
      },
    ],
  },
  {
    path: '/quiz2',
    element: <HomeLayout_95 />,
    children: [
      {
        path: 'q1_95',
        element: <BooksPage1_95 />,
      },
      {
        path: 'q2_95',
        element: <BooksPage2_95 />,
      },
      {
        path: 'q3_95',
        element: <GroceryPage_95 />,
      },
      {
        path: 'q4_95',
        element: <BlogJsonPage_95 />,
      },
    ],
  },
  {
    path: '/final',
    element: <HomeLayout_95 />,
    children: [
      {
        path: 's1_95',
        element: <S1Page_95 />,
      },
      {
        path: 's2_95',
        element: <S2Page_95 />,
      },
      {
        path: 's3_95',
        element: <S3Page_95 />,
      },
      {
        path: 's4_95',
        element: <S4Page_95 />,
      },
    ],
  },
])

const App_95 = () => {
  return <RouterProvider router={router} />
}

export default App_95
