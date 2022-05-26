import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { Link } from "react-router-dom";

function TicketsIndex() {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {

        const get_tickets = async () => {
            let url = "/api/v1/tickets/index";
            await axios.get(url, {})
                .then(response => {
                    let tickets = response.data.tickets;
                    setTickets(tickets)
                })
                .catch(function (error) {
                    swal('Oops!', 'Something Went Wrong!', 'error')
                })
        }
        get_tickets()

    }, []);

    return (
        <div>
            <h1>All Tickets</h1>
            <Link
                to="/tickets/create"
                className="btn btn-lg custom-button custom-button-tick"
                role="button"
            >
                Create Ticket
            </Link>
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

export default TicketsIndex;