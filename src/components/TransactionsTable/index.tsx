import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Software development</td>
            <td className="deposit">$5,000.00</td>
            <td>Development</td>
            <td>Feb, 20th 2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-$1,475.00</td>
            <td>Housing</td>
            <td>Feb, 1st 2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}