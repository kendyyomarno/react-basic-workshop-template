## Parse API Guide & Code Snippets

### call from Home page

```
BookService.get((res) => {
  if(res.isSuccess) {
    this.processGetBooksResponse(res.data)
  } else {
    alert('failed to fetch!')
  }
})
```

### parse response

```
processGetBooksResponse = (data) => {
  const books = data.data
  let toState = books.map((b) => {
    return {
      isbn: b.isbn,
      title: b.title,
      author: b.author,
      publishedDate: b.published_date,
      rating: {
        score: b.rating.score,
        outOf: b.rating.out_of
      },
      imageUrl: b.image_url
    }
  })

  this.setState({
    books: toState
  }, () => {
    console.log('state', this.state)
  })
}
```

### render cards

```
renderCards = () => {
  const { books } = this.state
  let display = []
  books.forEach((b) => {
    display.push(
      <Card
        key = { b.title }
        imgUrl = { b.imageUrl }
        title = { b.title }
        author = { b.author }
        publishedYear = { b.publishedDate }
        rating = { b.rating }
      />
    )  
  })
  return display
}
```
