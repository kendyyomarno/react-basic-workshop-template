import React from 'react'
import './home.css'
import Card from '../../components/Card'
import BookService from '../../services/BookService'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    books : []
  }

  componentDidMount = () => {
    BookService.get((res) => {
      if(res.isSuccess) {
        this.processGetBooksResponse(res.data)
      } else {
        alert('failed to fetch!')
      }
    })
  }

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

  render = () => {
    return (
      <div className = 'grid-container'>
        { this.renderCards() }
      </div>
    )
  }
}

export default Home
