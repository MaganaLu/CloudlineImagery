import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration';
import React, { useState, useEffect } from "react"

const TestPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();

        console.log('i fire once');
    }, [todos])

    const getTodos = async () => {
        await getDocs(collection(db, "portfolio_entries"))
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    setTodos(todos => [...todos, doc.data()])
                })
                console.log("stuff",todos)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });

    return (
        <>
            <h1>words</h1>
            { todos.map(todo =>
            <>
                <h1 key={todo.title}>{todo.title}</h1>
                <h1 key={todo.description}>{todo.description}</h1>
                <img src={todo.image} />
                <video key={todo.video} id='videoPlayer' autoPlay loop muted >
                    <source src={todo.video} type="video/mp4" />
                </video>
                
            </>
            )}
        </>
    )
};

export default TestPage