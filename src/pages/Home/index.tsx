import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CountDownContainer,
  Separetor,
  Button,
  TaskInput,
  MinutesAmount,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <form action="">
        {/* Inputs */}
        <FormContainer>
          <label htmlFor="task">Vou trabalar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Vou trabalhar em"
            list="task-suggetions"
          />

          {/* Lista de sugestões */}
          <datalist id="task-suggetions">
            <option value="Estudar" />
            <option value="Leitura" />
            <option value="Praticar" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="+ ou -"
            step={5}
            min={5}
            max={60}
          />

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

        <Button disabled type="submit">
          <Play />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
