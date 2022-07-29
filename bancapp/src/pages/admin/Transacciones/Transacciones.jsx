import React, { Fragment, useEffect, useState } from "react";
import "./../../../assets/tailwind.css";

function Transacciones() {
    const [users, setusers] = useState([]);
    const [filtro, setFiltro] = useState();
    async function getUsers() {
        const informacion = await fetch(
            `https://jsonplaceholder.typicode.com/users`
        );
        const users = await informacion.json();
        setusers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <table>
            <input placeholder="Buscar"></input> <br />
            <thead>
            <th>
                <td>Nombre</td>
                <td>Email</td>
                <td>Telefóno</td>
            </th>
            </thead>
            {users.map((item) => {
                return (
                    <tr key={item}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td> 

                    </tr>

                )
                
            })}
        </table>
    );
}

export default Transacciones;
