import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";

function SprintShow() {
    const [tickets, setTickets] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {

        const get_tickets = async () => {
            let sprint_id = window.location.pathname.split("/")[2]
            let url = "/api/v1/tickets/index";
            await axios.get(url, {
                params: { id: sprint_id }
            })
                .then(response => {
                    debugger
                    let tickets = response.data.tickets;
                    let name = response.data.sprint_name;
                    setTickets(tickets)
                    setName(name)
                })
                .catch(function (error) {
                    swal('Oops!', 'Something Went Wrong!', 'error')
                })
        }
        get_tickets()

    }, []);

    return (
        <div>
            <h1>Tickets {name ? name : ""}</h1>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        tickets.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SprintShow;