//Bibliotecas
import React, { useState, useEffect } from 'react'; //Importar o react pra que o código reconheça a sintaxe e trate ela da forma que ela deve ser tratada
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {fetchTasks} from './service/index'
import Context from './Context';
import './App.css'; //Importar css

//Componentes
import AddTask from './components/AddTask';
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from './components/TaskDetails';

const App = () => {
  //Forma com HTML puro: return <h1> Hello world </h1>
  
  //Outra forma:
  //const message = "Hello world!";
  //return <h1>{message}</h1>;
  //Uso de javascript dentro do html
  //let message = "Hello World!";
  //Tudo do componente deve ser renderizado em uma div só
  // let [message, setMessage] = useState('Hello World!');
  // //message = componente
  // //setMessage = vai ser chamado pra alterar o valor de message
  // //Como parametro do useState(parametro) coloca-se o valor inicial do message
  
  // return (
  //   //Fragment = tira o nome div da tag e se torna <></>
  //   //Ou seja, <></> = <div></div>
  //   <>
  //     <div className='container'>{message}</div>
  //     <button onClick = {() => setMessage ("Hello!")}> Mudar Mensagem </button>
  //   </>
  // );
  

  //State = o estado do componente, ou uma variável que guarda um valor
  let [tasks, setTasks] = useState([
    {
    id: "1",
    title: "Estudar Programação",
    completed: false,
  },
  {
    id: "2",
    title: "Ler livros",
    completed: true,
  }]);
  //Componente é rederizado quando o valor dele é alterado ou quando as props dele são alteradas
  const [description, setDescription] = useState("");


  const newTasks = async () => {
    const newTasks = await fetchTasks();
    setTasks(newTasks);
  }

useEffect(() => {
  newTasks();
}, []) //[] = Só executa o que estiver dentro do useEffect quando o component for montado a primeira vez

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false
      },
      ...tasks,  
  ];
  setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return ({...task, completed: !task.completed});
      } else {
        return task;
      }  
  });
  setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const delTask = tasks.filter(task => task.id !== taskId);
    setTasks(delTask);    
  }

return (
  <Router>
    <Context.Provider>
    <div className='container'>
      <Header/>
      {/* O exact serve pra dizer que os componentes só serão carregados exatamente na página com o '/', caso o contrário eles carregariam em qualquer página, como por exemplo, localhost:3000/2020 ou localhost:3000/Myl*/}
      <Route path="/" exact render = { () => (
        <>
          <AddTask handleTaskAddition = {handleTaskAddition} />
          <Tasks tasks = {tasks} 
          handleTaskClick = {handleTaskClick} 
          handleTaskDeletion = {handleTaskDeletion} 
          description={description}
          setDescription={setDescription}/>
        </>
      )}/>
      {/*Para renderizar uma função, com vários componentes, usa-se "render", mas para renderizar um único componente usa-se "component" como no exemplo a seguir */}
      <Route path="/:taskTitle" exact render = { () => (
        <TaskDetails/>)}/>
    </div>
    </Context.Provider>
  </Router>
);
};

export default App; //Exportar componente para que ele seja chamado