import Task from './Task';
import './TaskList.css';

const TaskList=(props) => {

    
    let newTaskDate
    let newTaskHeure
    let newTaskTitre


return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Tache</th>
                </tr>
            </thead>
            <tbody>
            {props.taskList.map(t => <Task
                                        task={t} 
                                        newTaskHandler={props.newTaskHandler}
                                        newTask={[newTaskDate,newTaskHeure,newTaskTitre]}></Task>)}
            <tr>
                <td colSpan='3'></td>
                <td><button>Créer nouvelle tache</button></td>
            </tr>
            </tbody>
        </table>
        <form>
        <div>
        <label for="date">Date: </label>
        <input type="date" name="date" id="date" value={newTaskDate}/>
        </div>
        <div>
        <label for="name">Heure: </label>
        <input type="time" name="heure" id="heure" value={newTaskHeure}/>
        </div>
        <div>
        <label for="titre">Tache: </label>
        <input type="text" name="titre" id="titre" value={newTaskTitre} />
        </div>
</form>
    </div>
)
}

export default TaskList;