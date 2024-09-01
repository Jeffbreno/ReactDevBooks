import { useEffect, useState } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { http } from '../../services/http'
import { Thumbnail } from '../Thumbnail'
import { Container, Title, Subtitle } from './Books.styles'

interface Book {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

interface BooksState {
  totalItems: number
  items: Book[]
}

export function Books() {
  const [books, setBooks] = useState<BooksState | null>(null)
  const params = useSearchParams()
  const location = useLocation()

  const [searchParams] = params
  const q = searchParams.get('q')

  useEffect(() => {
    http
      .get(`/v1/volumes?q=${q}&maxResults=20`)
      .then((response) => setBooks(response.data))
  }, [q])

  if (!q) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return (
    <Container>
      <h1>Resultado da sua Busca</h1>
      {books && (
        <ul>
          {books.items.map((book) => (
            <li key={book.id}>
              <Thumbnail
                thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo.title}
                bgColor="#d9d9d9"
              />
              <Title>{book.volumeInfo.title}</Title>
              <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
