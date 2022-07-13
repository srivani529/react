
import React, { useState, useEffect } from 'react';

import '../Table.css'

import { Link } from 'react-router-dom';
import Post from '../PostRequest';

function TableData() {
    const [data, getData] = useState([])
    const URL = 'http://172.17.12.99:8000/getdata';

    useEffect(() => {
        fetchData()
    }, [])

const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }


    return (
        <>
            <h1>Details of an Employees</h1>
            <Link to="/post"><button type='button'> ADD {Post}</button></Link>

            <tbody>
                <tr>
                    <th>StudentID </th>
                    <th>StudentName </th>

                    <th>Department </th>

                    <th>PhoneNumber</th>

                    <th> updating Employees</th>
                    <th> Deleting Employees</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.sid}</td>
                        <td>{item.sname}</td>
                        <td>{item.department}</td>
                        <td>{item.phonenumber}</td>

                        <td >
                            <button>Edit</button>
                        </td>
                        <td >
                            <button> Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>



        </>
    );
}

export default TableData;