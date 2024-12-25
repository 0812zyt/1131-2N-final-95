import Form_95 from './Form_95'
import Items_95 from './Items_95'
import { GroceryContextProvider_95 } from './contextGrocery_95'
import Wrapper from '../../../assets/wrappers/Grocery_95'

const GroceryPage_95 = () => {
  return (
    <GroceryContextProvider_95>
      <Wrapper>
        <section className='section-center'>
          <Form_95 />
          <Items_95 />
        </section>
      </Wrapper>
    </GroceryContextProvider_95>
  )
}

export default GroceryPage_95
