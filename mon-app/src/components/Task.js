import { useState } from "react"

const Task=(props) => {

    const handleTaskModify = (event) => {
        event.preventDefault()
        console.log(event)
        props.modifyTaskHandler(props.task.id,inputValue)
    }

    const [inputValue,setInputValue] = useState('')

    const handleChangeInput = (event) => {
        setInputValue(event.target.value)
        console.log('inputValue: ',inputValue)
    }

    return (
        <tr>
            <td>{props.task.date}</td>
            <td>{props.task.heure}</td>
            <td>{props.task.titre}</td>
            <td>
            <form onSubmit={handleTaskModify}>
            <input value={inputValue} onChange={handleChangeInput}></input>
            <button type="submit">Modifier Tache</button>
            </form>
            </td>
        </tr>
)

}

export default Task;