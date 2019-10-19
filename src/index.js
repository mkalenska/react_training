// Import react and reactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// Double quotes for JSX code and single quotes for JS
// Use className when need class in JSX
const App = () => {
  // JSX cannot show JS objects; can show strings, integers, arrays
  const btnText = "Click me!!";
  const lblText = { text: "Enter name:" };

  return (
    <div>
      <label htmlFor="name" className="label">
        {lblText.text}
      </label>
      <input id="name" type="text" />
      <button style= {{ backgroundColor: 'blue', color: 'white' }}>
        {btnText}
      </button>
    </div>
  );
};


// Take a react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
