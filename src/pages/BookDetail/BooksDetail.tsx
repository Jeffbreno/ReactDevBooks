import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { http } from '../../services/http'
import {
  BackButton,
  Container,
  Content,
  Description,
  SpinnerContainer,
  SubTitulo
} from './BooksDetail.styles'
import { Thumbnail } from '../Thumbnail'
import { Title } from '../Books/Books.styles'
import ReactHtmlParser from 'react-html-parser'
import ArrowLeftIcon from '../../icons/arrow-left.svg?react'
import { Spinner } from '../../components/Spinner'

export interface BookState {
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

export function BooksDetail() {
  const [book, setBook] = useState<BookState | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const { bookId } = params

  useEffect(() => {
    http.get(`/v1/volumes/${bookId}`).then((response) => setBook(response.data))
  }, [bookId])

  return (
    <Container>
      {book ? (
        <>
          <BackButton onClick={handleGoBack}>
            <ArrowLeftIcon />
          </BackButton>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />
          <Content>
            <Title>{book.volumeInfo.title}</Title>
            <SubTitulo>{book.volumeInfo.subtitle}</SubTitulo>
            <Description>
              {ReactHtmlParser(book.volumeInfo.description)}
            </Description>
          </Content>
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  )
}
