import { createContext, useContext, useState } from 'react'
import books_data from './booklist_data'

// console.log('books_data', books_data);

const BooksContext_95 = createContext()

export const BooksContextProvider_95 = ({ children }) => {
  const [books, setBooks] = useState(books_data)

  return (
    <BooksContext_95.Provider value={{ books }}>
      {children}
    </BooksContext_95.Provider>
  )
}

export const useBooksContext_95 = () => {
  return useContext(BooksContext_95)
}
