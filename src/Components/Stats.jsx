function Stats({bendrasKMkiekis, scootersCount}) {

return (
    
    <table className="table table-sm stats">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Paspirtuku kiekis</th>
      <th scope="col">Bandras km kiekis</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{scootersCount}</td>
      <td>{bendrasKMkiekis}</td>
    </tr>
  </tbody>
</table>
)
   
}

export default Stats;