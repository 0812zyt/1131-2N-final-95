import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_95'
import menu_data from './menu_data'
import MenuItem2_95 from './MenuItem2_95'
const S2Page_95 = () => {
  const [menu, setMenu] = useState(menu_data)
  const [category, setCategory] = useState('')
  const fetchMenuFromSupabase = async () => {
    try {
      let filteredMenu = []

      if (category === 'all') {
        filteredMenu = menu_data
      } else if (category === 'breakfast') {
        filteredMenu = menu_data.filter((item) => item.category === 'breakfast')
      } else if (category === 'lunch') {
        filteredMenu = menu_data.filter((item) => item.category === 'lunch')
      } else if (category === 'dessert') {
        filteredMenu = menu_data.filter((item) => item.category === 'dessert')
      } else if (category === 'shakes') {
        filteredMenu = menu_data.filter((item) => item.category === 'shakes')
      }

      setMenu(filteredMenu)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuFromSupabase()
  }, [category])
  const changeMenuFilter = (category) => {
    setCategory(category)
  }
  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div class='title'>
              <h2>S2Page_95_ytzhong</h2>
              <div class='underline'></div>
            </div>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                data-id='all'
                onClick={() => changeMenuFilter('all')}
              >
                all
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='breakfast'
                onClick={() => changeMenuFilter('breakfast')}
              >
                breakfast
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='lunch'
                onClick={() => changeMenuFilter('lunch')}
              >
                lunch
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='dessert'
                onClick={() => changeMenuFilter('dessert')}
              >
                dessert
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='shakes'
                onClick={() => changeMenuFilter('shakes')}
              >
                shakes
              </button>
            </div>
            <div className='menu-demo'>
              <h1>S2Page_95:ytzhong</h1>{' '}
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem2_95
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default S2Page_95
