import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import { useHistory } from 'react-router';

const Show = () => {
    const [data, setData] = useState([])
    const [control, setControl] = useState(false);

    // let history = useHistory()
    // console.log("this is new data", data)

    useEffect(() => {
        fetch("http://localhost:5000/show")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/show/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert("data delete successfully");
                } else {
                    setControl(false);
                }
            });
        // console.log(id)
    };
    return (
        <div>
            <h2>get data {data.length}</h2>
            <Table width="500px" striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Station Name</th>
                        <th>station code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.map((datas, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{datas._id}</td>
                                <td>{datas.name}</td>
                                <td>{datas.station}</td>
                                <td >
                                    <button className="btn btn-warning btn-sm mr-2">Edit</button>
                                    <button onClick={() => handleDelete(datas._id)}
                                        className="btn bg-danger p-2 btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    ))
                }
            </Table>

        </div >

    );
}

export default Show;
