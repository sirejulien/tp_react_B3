import { useState } from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import TaskList from './components/TaskList';
// export défaut: import Compt from './test'; renommage possible du composant, un seul export défaut par fichier
//export nommé: import {Comp2} from './test'; plusieur export nommés possible par fichier {comp1,comp2}
//import {Comp2} from './test';


const App = () => {

const task1 = {
    id: 1,
    date: '10/03/2022',
    heure: '11:30',
    titre: 'rdv medecin'
  }
const task2 = {
    id: 2,
    date: '15/03/2022',
    heure: '16:45',
    titre: 'revision voiture'
  }
const task3 = {
    id: 3,
    date: '18/03/2022',
    heure: '09:15',
    titre: 'tuerie de masse'
  }
  const task4 = {
    id: 4,
    date: '21/03/2022',
    heure: '18:00',
    titre: 'aller chercher mamie'
  }

  const [myTaskList,setMyTaskList] = useState([task1,task2,task3,task4])

  const handleModifyTask = (idTaskToModify,newTaskName) => {
    // l'idéal c'est d'initialiser un state avec la valeur du tableau de task

    // récupérer l'id de la tache à modifier 

    // parcourir le tableau de tache et modifier la tache qui correspond à l'id récupéré

    // retourner nouveau tableau mis à jour et le passer en paramètre du setState
      setMyTaskList( (previousState) => {
        const newState = previousState.map(t => {
          if (t.id === idTaskToModify) {
            return {...t, titre: newTaskName}
          } else {
            return t
          }
        })
        return newState
      }
      )
  }

  return (
    <div className="App">
      <p>Composant app</p>
      <Comp1 maPremiereProps={'Salsifi'} ></Comp1>
      <TaskList taskList={myTaskList} modifyTaskHandler={handleModifyTask}></TaskList>
    </div>
  );
}

export default App;
