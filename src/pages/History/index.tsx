import { HistoryContainer, HistoryList } from './style'

export default function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          {/* Cabeçalho da tabela */}
          <thead>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Início</td>
              <td>Status</td>
            </tr>
          </thead>

          {/* Corpo da tabela */}
          <tbody>
            <tr>
              <td>Leitura Bíblica</td>
              <td>25 Minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
