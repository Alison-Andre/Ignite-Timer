// Estilos e Icones
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

// Bibliotecas
import { useForm } from 'react-hook-form'
// Biblioteca de validação
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

export default function Home() {
  // Trabalhando as validações com o Zod

  // Schema de validação
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(3, 'O nome é muito curto para uma atividade'),
    minutesAmount: zod
      .number()
      .min(10, 'O tempo é muito curto para uma atividade'),
  })

  // Tipagem
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  // Importando as funções do hookForm
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  // Observa o valor do campo 'task'
  const task = watch('task')

  const isValidSubimit = !task

  // Ciclos
  interface Cycle {
    id: string
    task: string
    minutesAmount: number
  }

  // Estado que armazena a lista de ciclos
  const [cycles, setCycles] = useState<Cycle[]>([])

  // Estado com o ciclo atual
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  // Estado para armazenar os segundos do countdown
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  // Responsável por lidar com a criação de um novo ciclo
  function handleCreateNewCycle(data: NewCycleFormData) {
    // Formato do ciclo
    const newCycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
  }

  // Busca o ciclo ativo atualmente
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)

  // Lógica do countdow

  // Converte o ciclo atual de minutos para segundos
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  // Armazena os segundos que já se passaram
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // Converte para exibir em tela monutos e segundos
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  // Quando os minutos ficarem abaixo de 10 adiciona um 0, 09, 08 ...
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        {/* Inputs */}
        <FormContainer>
          <label htmlFor="task">Vou trabalar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Vou trabalhar em"
            list="task-suggetions"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>Minutos</span>
        </FormContainer>
        {/* Inputs */}
        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separetor>:</Separetor>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <Button disabled={isValidSubimit} type="submit">
          <Play />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
