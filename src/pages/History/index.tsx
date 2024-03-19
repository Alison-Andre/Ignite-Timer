import { HistoryContainer, HistoryList, Status } from './style'

export default function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          {/* Cabeçalho da tabela */}
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Corpo da tabela */}
          <tbody>
            <tr>
              <td>Leitura Bíblica</td>
              <td>25 Minutos</td>
              <td>Há cerca de 2 dias</td>
              <td>
                <Status statusColors="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Revisão</td>
              <td>25 Minutos</td>
              <td>Há cerca de 1 dias</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Estudo</td>
              <td>25 Minutos</td>
              <td>Há cerca de 4 dias</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
