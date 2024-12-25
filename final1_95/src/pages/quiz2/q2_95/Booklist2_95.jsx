import Book2_95 from './Book2_95'
import { useBooksContext_95 } from './book2Context_95'

const Booklist2_95 = () => {
  const { books } = useBooksContext_95()
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id, img, title, author } = book
        return <Book2_95 key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

export default Booklist2_95
