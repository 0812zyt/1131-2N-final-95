import { useGroceryContext_95 } from './contextGrocery_95'

const SingleItem_95 = ({ item }) => {
  const { removeItem, editItem } = useGroceryContext_95()
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  )
}
export default SingleItem_95
