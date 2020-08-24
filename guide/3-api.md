## API Guide & Code Snippets

### install 'axios'

`npm install axios --save` or `yarn add axios`

### import axios

```
import axios from 'axios'
```

### GET method in BookService

```
BookService.get = (callback) => {
  const PATH = BASE_URL + BOOKS_PATH

  axios.get(PATH, {
    params: {}
  })
  .then((response) => {
    console.log('response', response)
    if(response.status === 200) {
      callback({
        isSuccess: true,
        data: response.data
      })
    } else {
      callback({
        isSuccess: false
      })
    }
  })
}
```

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