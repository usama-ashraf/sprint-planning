import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";
function SprintCreate() {
    const history = useHistory();
    const [sprint, setSprint] = useState({
        name: '',
        start_date: '',
        end_date: '',
    })
    const sprintInputsHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setSprint(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const formSubmitHandler =  (e) => {
        e.preventDefault();
        createApiHandler();
    }

    const createApiHandler = async () => {
        let data = {
            name: sprint.name,
            start_date: sprint.start_date,
            end_date: sprint.end_date,
        }
        const url = "/api/v1/sprints/create"
       await axios.post(url, {
            data
        })
        .then(response => {
            swal('Thank you!', 'Created successfully', 'success')
            history.push('/sprints')
        })
    }

    return (
        <div>
            <form>
                <div className="row py-4 d-flex justify-content-center">
                    <div className="col-lg-9 ">
                        <div className="p-md-5 p-4 bg-white est_form_main rounded est_box_shadow">
                            <div>
                                <h5 className="m-0 ">Create Estimation</h5>
                            </div>
                            <hr className="mb-lg-5" />

                            <div className="row mb-3">
                                <div className="col-xl-4">
                                    <input className="est_form_input p-2 rounded mb-3 w-100" type="text" placeholder="Sprint Name" value={sprint.name} name="name" required onChange={sprintInputsHandler} />
                                </div>
                                <div className="col-xl-4">
                                    <input className="est_form_input p-2 rounded mb-3 w-100 text-secondary" type="date" name="start_date" value={sprint.start_date} required onChange={sprintInputsHandler} />
                                </div>
                                <div className="col-xl-4">
                                    <input className="est_form_input p-2 rounded mb-3 w-100 text-secondary" type="date" name="end_date" value={sprint.end_date} required onChange={sprintInputsHandler} />
                                </div>
                            </div>
                            <div className="offset d-flex justify-content-end p-0 my-4">
                                <button className="btn btn-secondary est_button border-0 mx-1" onClick={formSubmitHandler}>
                                    <span>Save</span>
                                    <i className="fa fa-check-circle ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SprintCreate;