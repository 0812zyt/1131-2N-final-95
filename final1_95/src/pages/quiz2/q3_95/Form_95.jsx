import { useState } from 'react'
import { useGroceryContext_95 } from './contextGrocery_95'

const Form_95 = () => {
  const [newItemName, setNewItemName] = useState('')
  const { addItem } = useGroceryContext_95()

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItemName)
    setNewItemName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery -- 123456789</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form_95
