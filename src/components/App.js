
import React from "react";
import './../styles/App.css';

const App = () => {
  
const itemList = [
  { name: 'Apple', value: 5, budget: 10 },
  { name: 'Banana', value: 25, budget: 10 },
  { name: 'Papaya', value: 50, budget: 100 },
  { name: 'Orange', value: 60, budget: 55 },
];


  return (
    <div>
       <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td style={{ color: item.value > item.budget ? 'red' : 'green' }}>
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

        {/* Do not remove the main div */}
    </div>
  )
}

export default App;
