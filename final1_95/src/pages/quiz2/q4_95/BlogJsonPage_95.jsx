import { useState, useEffect } from 'react'
import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import Wrapper from '../../../assets/wrappers/Blog_95'

import blogData from './blogData_95'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem(list))
  } else {
    list = []
  }
  return list
}

const setLocalStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const BlogJsonPage_95 = () => {
  const [name, setName] = useState('YiTing Zhong')
  const [id, setId] = useState(212410095)
  const [blogs, setBlogs] = useState(defaultList)

  const removeItem = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setLocalStorage(newBlogs)
    setBlogs(newBlogs)
    toast.warning('blog removed')
  }

  const reloadBlogs = () => {
    setBlogs(blogData)
    setLocalStorage(blogData)
    toast.success('blogs reloaded')
  }

  const clearBlogs = () => {
    setBlogs([])
    setLocalStorage([])
    toast.warning('blogs all cleared')
  }

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>latest blogs from Local Json</h2>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs?.map((blog) => {
            const { id, title, img, category, descrip } = blog
            return (
              <article key={id} className='blog'>
                <img src={img} alt='Coffee photo' className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {category}
                    {category === 'lifestyle' ? (
                      <FaMugSaucer />
                    ) : category === 'travel' ? (
                      <FaGlobe />
                    ) : (
                      ''
                    )}
                  </span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <div className='item-control'>
                    <a href='#'>read more</a>
                    <div className='btn-container'>
                      <button
                        type='button'
                        className='delete-btn'
                        onClick={() => removeItem(id)}
                      >
                        {' '}
                        delete{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className='btn-control'>
          <button className='btn clear-btn' onClick={clearBlogs}>
            clear all blogs
          </button>
          <button className='btn reload-btn' onClick={reloadBlogs}>
            reload all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogJsonPage_95
