import { InputHTMLAttributes } from 'react'

import SearchIcon from '../../icons/serach.svg?react'
import { Container } from './SearchBox.styles'

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBox(props: SearchBoxProps) {
  return (
    <Container>
      <SearchIcon />
      <input placeholder="Qual livro você quer buscar" {...props} />
    </Container>
  )
}
