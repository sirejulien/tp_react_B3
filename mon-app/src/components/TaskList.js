import Task from './Task';
import './TaskList.css';

const TaskList=(props) => {

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
                                        key={t.id}
                                        task={t} 
                                        modifyTaskHandler={props.modifyTaskHandler}></Task>)}
            </tbody>
        </table>
        
    </div>
)
}

export default TaskList;