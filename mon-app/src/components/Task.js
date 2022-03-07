const Task=(props) => {
return (
        <tr>
            <td>{props.task.date}</td>
            <td>{props.task.heure}</td>
            <td>{props.task.titre}</td>
        </tr>
)
}

export default Task;