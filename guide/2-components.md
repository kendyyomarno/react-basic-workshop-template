## Components Guide & Code Snippets

### create new `Card` directory in components

1. create new directory `components/Card`
2. create `index.jsx`
3. create `card.css`
4. create and export class

```
import React from 'react'
import './card.css'

class Card extends React.Component {

  render = () => {
    return (
      <div className = 'card'>
        <img src = "url" alt = "title" style = {{ width: '200px', height: '200px' }}/>
        <div className = 'text-container'>
          <p style = {{ fontSize: '16px', fontWeight: 'bold' }}>title</p>
          <p style = {{ fontSize: '14px' }}>Author: author</p>
          <p style = {{ fontSize: '14px' }}>Published: publishedYear</p>
          <p style = {{ fontSize: '14px' }}>Rating: rating</p>
        </div>
      </div>
    )
  }
}

export default Card
```

```
.card {
  /* flex-basis: calc(33% - 20px); */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 0 12px 24px;
  min-width: 0;
}

img {
  border-radius: 5px 5px 0 0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.text-container {
  padding: 2px 16px;
  margin: 0 auto;
}
```

### call Card in Home page

```
import Card from '../../components/Card'
```

### filling in the card component, passing data through props

```
<Card
  key = "title"
  imgUrl = "imageUrl"
  title = "title"
  author = "author"
  publishedYear = "publishedDate"
  rating = "rating"
/>
```

### filling in the Card component, passing data through props

```
const { imgUrl, title, author, publishedYear, rating } = this.props
```

```
<img src = { imgUrl } alt = { title } style = {{ width: '200px', height: '200px' }}/>
<div className = 'text-container'>
  <p style = {{ fontSize: '16px', fontWeight: 'bold' }}>{ title }</p>
  <p style = {{ fontSize: '14px' }}>Author: { author }</p>
  <p style = {{ fontSize: '14px' }}>Published: { publishedYear }</p>
  <p style = {{ fontSize: '14px' }}>Rating: { rating }</p>
</div>
```
