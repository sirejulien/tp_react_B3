import Task from './Task';
import './TaskList.css';

const TaskList=(props) => {
return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Tache</th>
                </tr>
            </thead>
            <tbody>
            {props.taskList.map(t => <Task task = {t} ></Task>)}
            </tbody>
        </table>
)
}

export default TaskList;