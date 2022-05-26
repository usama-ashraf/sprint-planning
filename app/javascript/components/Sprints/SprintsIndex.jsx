import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { Link } from "react-router-dom";
function SprintsIndex() {

    const [sprints, setSprints] = useState([]);

    useEffect(() => {

        const get_sprints = async () => {
            let url = "/api/v1/sprints/index";
            await axios.get(url, {})
                .then(response => {
                    let sprint = response.data.sprints;
                    setSprints(sprint)
                })
                .catch(function (error) {
                    swal('Oops!', 'Something Went Wrong!', 'error')
                })
        }
        get_sprints()

    }, []);

    return (
        <div>
            <h1>Sprints</h1>
            <Link
                to="/sprints/create"
                className="btn btn-lg custom-button custom-button-tick"
                role="button"
            >
                Create Sprint
            </Link>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">start date</th>
                        <th scope="col">end date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sprints.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>
                                <td><Link
                                    to= {`/sprints/${item.id}`}
                                    className="btn btn-lg custom-button"
                                    role="button"
                                >
                                    Show
                                </Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SprintsIndex;