import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CountDownContainer,
  Separetor,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <form action="">
        {/* Inputs */}
        <FormContainer>
          <label htmlFor="task">Vou trabalar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">Durante</label>
          <input type="minutesAmount" />

          <span>Minutos</span>
        </FormContainer>
        {/* Inputs */}
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
