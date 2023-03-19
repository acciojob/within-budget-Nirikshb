
import React from "react";
import './../styles/App.css';

const App = () => {
  
const itemList = [
  { name: 'Apple', value: 20, budget: 10 },
  { name: 'Banana', value: 5, budget: 10 },
  { name: 'Papaya', value: 15, budget: 10 },
  { name: 'Orange', value: 12, budget: 10 },
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
