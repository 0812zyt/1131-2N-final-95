import MenuItem3_95 from './MenuItem3_95'
import menu_data from './menu_data'

const MenuList3_95 = ({ menu }) => {
  return (
    <div className='section-center'>
      <div className='menu-demo'>
        <h1>S3Page_95:ytzhong</h1>{' '}
        {menu?.map((item) => {
          const { id, img, title, price, category, descrip } = item
          return (
            <MenuItem3_95
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
      </div>{' '}
    </div>
  )
}
export default MenuList3_95
