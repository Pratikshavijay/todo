import { useState } from "react";
function Todo() {
    const [input, setInput] = useState("")
    const [listTask, setListTask] = useState([])
    const itemEvent = (event) => {
        setInput(event.target.value)
    };
    const listEvent = () => {
        setListTask((previousTask) => {
            return [...previousTask, input]
        })
        setInput("")
    };
    const deleteEvent = (id) => {
        console.log(id)
        const updateItem = listTask.filter((a, index) => {
            return index !== id
        })
        setListTask(updateItem)
    }

    return (
        <>
            <div className="show">
                <h2>TO-DO-LIST</h2>
                <input type="text" placeholder="ADD TASK HERE" size="40" onChange={itemEvent} value={input} />
                <button onClick={listEvent}>ADD MORE </button>
            </div>
            {
                listTask.map((a, index) => {
                    return (
                        <h4>{a}<button className="new" onClick={() => deleteEvent(index)}>delete</button></h4>
                    )

                })
            }

        </>
    );
}

export default Todo;