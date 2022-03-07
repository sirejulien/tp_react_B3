import './App.css';
import Comp1 from './components/Comp1';
import TaskList from './components/TaskList';
// export défaut: import Compt from './test'; renommage possible du composant, un seul export défaut par fichier
//export nommé: import {Comp2} from './test'; plusieur export nommés possible par fichier {comp1,comp2}
//import {Comp2} from './test';


const App = () => {

const task1 = {
    date: '10/03/2022',
    heure: '11:30',
    titre: 'rdv medecin'
  }
const task2 = {
    date: '15/03/2022',
    heure: '16:45',
    titre: 'revision voiture'
  }
const task3 = {
    date: '18/03/2022',
    heure: '09:15',
    titre: 'tuerie de masse'
  }
  const task4 = {
    date: '21/03/2022',
    heure: '18:00',
    titre: 'aller chercher mamie'
  }

  const myTaskList= [task1,task2,task3,task4]

  handleAddNewTask = (newTask) => {
    // l'idéal c'est d'initialiser un state avec la valeur du tableau de task
    setState((previousState) => {
      return [
        ...previousState,
        newTask
      ]
    })
  }

  return (
    <div className="App">
      <p>Composant app</p>
      <Comp1 maPremiereProps={'Salsifi'} ></Comp1>
      <TaskList taskList={myTaskList} newTaskHandler={handleAddNewTask}></TaskList>
    </div>
  );
}

export default App;
