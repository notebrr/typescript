import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Person from "./Person";

interface Person {
    id: number;
    name: string;
    age: number;
    city: string;
}

function App() {
    const [people, setPeople] = useState<Person[]>([]);
    const [name, setName] = useState<string>("Type a name");

    useEffect(() => {
        fetch("http://127.0.0.1:3008/person")
            .then((response) => response.json())
            .then((data) => setPeople(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="App">
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <Person name={name} age={2} email={"ee@gmail.com"} />
            <table>
                {people.map((person) => {
                    return (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.city}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default App;
