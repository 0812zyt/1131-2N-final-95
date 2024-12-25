import Wrapper from '../../../assets/wrappers/Books_95'
import Booklist2_95 from './Booklist2_95'
import { BooksContextProvider_95 } from './book2Context_95'

const BooksPage2_95 = () => {
  return (
    <BooksContextProvider_95>
      <Wrapper>
        <Booklist2_95 />
      </Wrapper>
    </BooksContextProvider_95>
  )
}
export default BooksPage2_95
