import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration';
import React, { useState, useEffect } from "react"

const TestPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let ignore = false; 

        const getTodos = async () => {
            setTodos([]);
            await getDocs(collection(db, "portfolio_entries"))
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        if(!ignore){
                        setTodos(todos => [...todos, doc.data()])
                        }
                    })
                    console.log("stuff",todos)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }

        getTodos();

        return () => {
            console.log('i fire once');
            ignore = true;
        };

        
    }, [])



    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });

    return (
        <>
            
            { todos.map(todo =>
            <ul key={todo.title}>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <img src={todo.image} />
                <video id='videoPlayer' autoPlay loop muted >
                    <source src={todo.video} type="video/mp4" />
                </video>
                
            </ul>
            )}
        </>
    )
};

export default TestPage