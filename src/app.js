console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;

const addOne = ()=>{
 count++
 renderCounterApp();
}

const minusOne = ()=>{
  count--
  renderCounterApp();
}

const reset = ()=>{
  count = 0
  renderCounterApp();
}







var appRoot = document.getElementById('app');


const  renderCounterApp = ()=>{
  const templateTwo = (
    <div>
      <h1>
        Count : {count}
        <button onClick={addOne} className="button">+1</button>
        <button onClick={minusOne} className="button">-1</button>
        <button onClick={reset} className="button">reset</button>
      </h1>
    </div>
  )
  
  ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();