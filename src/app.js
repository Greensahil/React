console.log('App.js is running!');

// JSX - JavaScript XML


const app ={
  title :"Main Title",
  options:['one','two']
}


const onFormSubmit= (e)=>{
  e.preventDefault()

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = ''
  }

  
reRenderDom()

}


const removeAll = ()=>{
  app.options = [];
  reRenderDom()

}






var appRoot = document.getElementById('app');


  





const reRenderDom = ()=>{

  var template = (
    <div>
      <h1>{app.title}</h1>
      <p>This is some info</p>
      <p>{app.options.length}</p>
      <ol>
        <button onClick = {removeAll}>Remove All</button> 
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit = {onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

reRenderDom()

