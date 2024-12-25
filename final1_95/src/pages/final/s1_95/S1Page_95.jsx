import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_95'
import menu_data from './menu_data'
import MenuItem1_95 from './MenuItem1_95'
const S1Page_95 = () => {
  const [menu, setMenu] = useState(menu_data)
  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div class='title'>
              <h2>S1Page_95</h2>
              <div class='underline'></div>
            </div>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                data-id='all'
                onClick={() => changeMenuFilter('')}
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
              <h1>S1Page_95:ytzhong</h1>{' '}
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem1_95
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
export default S1Page_95
