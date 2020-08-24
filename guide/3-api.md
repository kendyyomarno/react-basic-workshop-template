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