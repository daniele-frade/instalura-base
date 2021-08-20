import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Title = () => {
  return <h1>Meu Titulo</h1>
}

export default function Home() {
  return <Title />
}
