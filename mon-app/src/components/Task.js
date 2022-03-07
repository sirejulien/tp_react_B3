import { useState } from "react"

const Task=(props) => {

    const [date,setDate] = useState(props.task.date)
    const [heure,setHeure] = useState(props.task.heure)
    const [titre,setTitre] = useState(props.task.titre)
    
    const addTaskHandler = (newTask) => {
        props.newTaskHandler(newTask)
    }

    const handleClickToModifyTask = () => {
        setDate(props.newTask[1])
        setHeure(props.newTask[2])
        setTitre(props.newTask[3])
    }

    return (
        <tr>
            <td>{date}</td>
            <td>{heure}</td>
            <td>{titre}</td>
            <td><button onClick={handleClickToModifyTask}>Modifier Tache</button></td>
        </tr>
)

}

export default Task;