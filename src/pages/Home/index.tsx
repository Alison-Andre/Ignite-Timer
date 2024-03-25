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

export default function Home() {
  // Trabalhando as validações com o Zod

  // Schema de validação
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(3, 'O nome é muito curto para uma atividade'),
    minutesAmount: zod
      .number()
      .min(10, 'O tempo é muito curto para uma atividade'),
  })

  // Typagem
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

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

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
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <Button disabled={isValidSubimit} type="submit">
          <Play />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
