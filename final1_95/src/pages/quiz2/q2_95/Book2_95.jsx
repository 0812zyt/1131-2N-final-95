const Book2_95 = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} />
      <div className='bookinfo'>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div>
    </article>
  )
}

export default Book2_95