import { useState, useEffect } from 'react'

// let api_url = `http://localhost:3000/api/blog_95`

import { supabase } from '../db/clientSupabase'
import Blog_95 from '../components/Blog_95'

import Wrapper from '../assets/wrappers/Blog_95'

const BlogSupaPage2_95 = () => {
  const [name, setName] = useState('Hsingtai Chung')
  const [id, setId] = useState(123456789)
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('blog_95').select('*')
      // const response = await fetch(api_url)
      // const data = await response.json()
      console.log('supabase blogs', data)
      setBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromSupabase()
  }, [])

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>latest blogs from Supabase</h2>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs?.map((blog) => {
            const { id, title, img, category, descrip } = blog
            return (
              <Blog_95
                key={id}
                title={title}
                img={img}
                category={category}
                descrip={descrip}
              />
            )
          })}
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogSupaPage2_95
