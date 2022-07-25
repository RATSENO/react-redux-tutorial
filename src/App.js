import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainers from "./containers/TodosContainers";

const App = () =>{
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr/>
      <TodosContainers></TodosContainers>
    </div>
  )
};

export default App;