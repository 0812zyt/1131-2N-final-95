import SingleItem_95 from './SingleItem_95'
import { useGroceryContext_95 } from './contextGrocery_95'

const Items_95 = () => {
  const { items } = useGroceryContext_95()
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_95 key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items_95
