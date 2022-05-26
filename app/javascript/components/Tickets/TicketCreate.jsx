import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import Select from 'react-select'
import { Link, useHistory } from "react-router-dom";
function TicketCreate() {
    const history = useHistory();
    const [ticket, setTicket] = useState({
        name: '',
        description: '',
        sprint_id: '',
    })
    const [selectOptions, setSelectOptions] = useState([])

    const ticketInputsHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setTicket(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const ticketOptionInputsHandler = (event) => {
        
        let value = event.value;
        setTicket(prevValue => {
            return {
                ...prevValue,
                sprint_id: value
            }
        })
    }

    useEffect(() => {

        const get_sprints_options = async () => {
            let url = "/api/v1/sprints/select_options";
            await axios.get(url, {})
                .then(response => {
                    let options = response.data.options;
                    const selectOptions = options.map(d => ({
                        "value": d.id,
                        "label": d.name
                    }))
                    setSelectOptions(selectOptions)
                })
        }
        get_sprints_options()

    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (ticket.name !== "" && ticket.description !== "" && ticket.sprint_id !== "") {
            createApiHandler();
        } else {
            swal('Error!', 'Please fill out the fields', 'error');
        }
    }

    const createApiHandler = async () => {
        let data = {
            name: ticket.name,
            description: ticket.description,
            sprint_id: ticket.sprint_id,
        }
        
        const url = "/api/v1/tickets/create"
        await axios.post(url, {
            data
        })
            .then(response => {
                swal('Thank you!', 'Created successfully', 'success')
                history.push('/tickets')
            })
    }

    return (
        <div>
            <form>
                <div className="row py-4 d-flex justify-content-center">
                    <div className="col-lg-9 ">
                        <div className="p-md-5 p-4 bg-white est_form_main rounded est_box_shadow">
                            <div>
                                <h5 className="m-0 ">Create Ticktet</h5>
                            </div>
                            <hr className="mb-lg-5" />

                            <div className="row mb-3">
                                <div className="col-xl-4">
                                    <input className="est_form_input p-2 rounded mb-3 w-100" type="text" placeholder="Ticket Name" value={ticket.name} name="name" required onChange={ticketInputsHandler} />
                                </div>
                                <div className="col-xl-4">
                                    <input className="est_form_input p-2 rounded mb-3 w-100" type="text" placeholder="Ticket Description" value={ticket.description} name="description" required onChange={ticketInputsHandler} />
                                </div>
                                <Select options={selectOptions} required onChange={ticketOptionInputsHandler} name="sprint_id" />
                            </div>
                            <div className="offset d-flex justify-content-end p-0 my-4">
                                <button className="btn btn-secondary est_button border-0 mx-1" onClick={formSubmitHandler} >
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

export default TicketCreate;