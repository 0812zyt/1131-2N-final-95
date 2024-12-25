import { useState, useEffect } from 'react'
import menu_data from './menu_data'

const FilterButtons3_95 = () => {
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
  )
}
export default FilterButtons3_95
