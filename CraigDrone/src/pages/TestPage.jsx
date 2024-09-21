import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration';
import React, { useState, useEffect } from "react";
import PortfolioCardComponent from "../components/PortfolioCardComponent";

const TestPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let ignore = false;

        const getTodos = async () => {
            setTodos([]);
            await getDocs(collection(db, "portfolio_entries"))
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        if (!ignore) {
                            setTodos(todos => [...todos, doc.data()])
                        }
                    })
                    console.log("stuff", todos)
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

    return (
        <>

            {todos.map(todo =>
                

                <ul key={todo.title}>
                    <PortfolioCardComponent title = {todo.title} date = {todo.date} image={todo.image}/>

                </ul>
            )}
        </>
    )
};

export default TestPage