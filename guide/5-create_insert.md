## "Create" Feature Guide & Code Snippets

### render method

```
render = () => {
    return (
      <div>
        <h1>Create</h1>
        <table>
          <tbody>
            <tr>
              <td>
                Title
              </td>
              <td>
                <input type = "text" value = "" required/>
              </td>
            </tr>

            <tr>
              <td>
                Author
              </td>
              <td>
                <input type = "text" value = "" required/>
              </td>
            </tr>

            <tr>
              <td>
                Date
              </td>
              <td>
                <input type = "text" value = "" required/>
              </td>
            </tr>
          </tbody>
        </table>

        <input type = "submit" value = "submit"/>
      </div>
    )
  }
```

### prepare API

```
BookService.create = (title, author, date, callback) => {
  const PATH = BASE_URL + BOOKS_PATH

  axios.post(PATH, {
    title: title,
    author: author,
    date: date
  })
  .then((response) => {
    console.log('response', response)
    if(response.status === 201) {
      callback({
        isSuccess: true,
        message: response.data.message,
        data: response.data.data
      })
    } else {
      callback({
        isSuccess: false
      })
    }
  })
}
```

### input states

```
this.state = {
  title: '',
  author: '',
  date: ''
}
```

### handling input events

```
handleTitleChange = (event) => {
  this.setState({
    title: event.target.value
  })
}

handleAuthorChange = (event) => {
  this.setState({
    author: event.target.value
  })
}

handleDateChange = (event) => {
  this.setState({
    date: event.target.value
  })
}
```

### calling BookService

```
handleSubmit = (event) => {
  event.preventDefault()

  const { title, author, date } = this.state

  BookService.create(title, author, date, (res) => {
    if(res.isSuccess) {
      const alertMessage = res.message + "\ndata: " + JSON.stringify(res.data)
      alert(alertMessage)
      this.resetStates()
      this.props.history.push('/')
    } else {
      alert('error!')
    }
  })
}
```

### reset states
```
resetStates = () => {
  this.setState({
    title: '',
    author: '',
    date: ''
  })
}
```

### add routes in header

```
<div>
  <a href = { CREATE_PATH } className = 'menu-action'>Create</a>
</div>
```