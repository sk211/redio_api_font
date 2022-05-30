import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Show = () => {
    const [data, setData] = useState()
    let history = useHistory()

    useEffect(() => {
        fetch("http://localhost:5000/read")
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 401) {
                    history("/creact");
                }
            })
            .then((data) => setData(data));
    }, []);
    return (
        <div>
            <table>
                <th>id</th>
                <th>name</th>
                <th>Station</th>
                <tr>
                    <td>${data._id}</td>
                    <td>${data.name}</td>
                    <td>${data.station}</td>
                </tr>
            </table>

        </div>
    );
}

export default Show;
