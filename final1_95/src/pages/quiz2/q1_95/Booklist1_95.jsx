import Book1_95 from './Book1_95'
import books_data from './booklist_data'

// console.log('books_data', books_data);

const Booklist1_95 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book
        return <Book1_95 key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

export default Booklist1_95
