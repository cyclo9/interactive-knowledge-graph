import { useState, useEffect, useRef } from "react"
import styles from "../styles/popup.module.css"
import Task from "./Task";

import { readTaskList, updateTaskList } from "../pages/api/routes";
import { generateId } from "../lib/id";

export default function Popup(props) {
    const id = useRef("");
    const [label, setLabel] = useState("");
    const [tasks, setTasks] = useState([]);
    const color = useRef(null);

    // * useEffect
    useEffect(() => {
        id.current = props.node.key;
        setLabel(props.node.label);

        async function fetchData() {
            const res = await readTaskList(id.current);
            setTasks(res);
        }
        fetchData();
        
        color.current.style.backgroundColor = props.node.color;
    }, [])

    // * ### Add Tasks ###
    function addTask() {
        const newId = generateId(Math.pow(2, 8));
        const newTask = {
            id: newId,
            data: "",
            status: 0
        }
        setTasks([newTask, ...tasks]);

        updateTaskList(id.current, [newTask, ...tasks]);
        console.log("C-T:", { id: newId });
    }

    // * ### Update Task Data ###
    function updateTaskData(taskId, taskData) {
        const tasksCopy = tasks;
        for (let i = 0; i < tasksCopy.length; i++) {
            if (tasksCopy[i].id == taskId) {
                tasksCopy[i].data = taskData;
            }
        }
        setTasks([...tasksCopy]);

        updateTaskList(id.current, [...tasksCopy]);
        console.log("U-T:", { id: taskId })
    }

    // * ### Update Task Status ###
    function updateTaskStatus(taskId) {
        const tasksCopy = tasks;
        for (let i = 0; i < tasksCopy.length; i++) {
            if (tasksCopy[i].id == taskId) {
                switch (tasksCopy[i].status) {
                    case 0:
                        tasksCopy[i].status = 1
                        break;
                    case 1:
                        tasksCopy[i].status = 0
                        break;
                }
            }
        }
        setTasks([...tasksCopy]);

        updateTaskList(id.current, [...tasksCopy]);
        console.log("U-T:", { id: taskId });
    }

    // * ### Delete Tasks ###
    function deleteTask(taskId) {
        const tasksCopy = tasks;
        for (let i = 0; i < tasksCopy.length; i++) {
            if (tasksCopy[i].id == taskId) {
                tasksCopy.splice(i, 1);
            }
        }
        setTasks([...tasksCopy]);
        
        updateTaskList(id.current, [...tasksCopy]);
        console.log("D-T:", { id: taskId });
    }

    return (
        <>
            <div className={styles.superposition}>
                <div className={styles.popup}>
                    <div className={styles.navWrapper}>
                        {/* // * ### Cool Node Label ### */}
                        <h1 ref={color} className={styles.label}>{label}</h1>
                        {/* // * ### Close Button ### */}
                        <button className={styles.close} type="button" onClick={props.handlePopup}>
                            <svg width={40} height={40}>
                                <path d="m10.458 32.625-3.083-3.083L16.917 20l-9.542-9.542 3.083-3.083 9.542 9.5 9.542-9.5 3.083 3.083L23.083 20l9.542 9.542-3.083 3.083L20 23.083Z"/>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.grid}>
                        {/* // * ### Entries ### */}
                        <div className={styles.ioWrapper} style={{borderRight: "2px solid black"}}>
                            <span>Entries</span>
                        </div>
                        {/* //* ### Tasks ### */}
                        <div className={styles.ioWrapper} style={{ borderLeft: "2px solid black" }}>
                            <div className={styles.io}>
                                <span>Tasks</span>
                                <div className={styles.addWrapper}>
                                    <button className={styles.add} type="button" onClick={addTask}>
                                        <svg width={24} height={24}>
                                            <path d="M10.425 19.575v-6h-6v-3.15h6v-6h3.15v6h6v3.15h-6v6Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.tasksWrapper}>
                                {
                                    tasks.map((task) => <Task
                                        key={task.id}
                                        id={task.id}
                                        data={task.data}
                                        status={task.status}
                                        handleUpdateTaskData={updateTaskData}
                                        handleUpdateTaskStatus={updateTaskStatus}
                                        handleDeleteTask={deleteTask}
                                    />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}