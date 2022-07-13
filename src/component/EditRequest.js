
import React, { useState, useEffect } from 'react';



import './Table.css'

function EditRequest() {
    const [sid, setID] = useState('');
    const [sname, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [phonenumber, setPhonenuber] = useState('');
    const [data, getData] = useState([])

    const URL = 'http://172.17.12.99:8000/getdata';

    useEffect(() => {
        fetchData()
        getUsers()
    }, [])



    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
                setID(response[0].sid)
                setName(response[0].sname)
                setDepartment(response[0].department)
                setPhonenuber(response[0].phonenumber)
            })

    }

    function getUsers() {
        fetch(URL).then((result) => {
            result.json().then((response) => {
                //console.warn(resp)
                console.log(response);
                getData(response);



            })
        })
    }

    function deleteUSer(sid) {
        fetch(`http://172.17.12.99:8000/delete/${sid}`, { method: 'DELETE' })
            .then((result) => {
                result.json().then((resp) => {

                    console.log(resp)
                })
                getUsers()
            });

    }
    function selectedUSer(item) {
        console.log("function called", item)
        // let item =item
        setID(item.sid)
        setName(item.sname)
        setDepartment(item.department)
        setPhonenuber(item.phonenumber)

    }
    function update() {

        let blog = { sid, sname, department, phonenumber }

        fetch(' http://172.17.12.99:8000/putdata', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
            .then((result) => {
                result.json().then((resp) => {

                    console.log(resp)
                })
                getUsers()
            });
    }


    return (
        <div>
            <div>
                <h1>Details of an Employees</h1>
                <div className='formdata'>
                    <h2>updating Details</h2>
                    <input type="text" value={sid} onChange={(e) => setID(e.target.value)} /><br></br><br></br>
                    <input type="text" value={sname} onChange={(e) => setName(e.target.value)} /><br></br><br></br>
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} /><br></br><br></br>
                    <input type="text" value={phonenumber} onChange={(e) => setPhonenuber(e.target.value)} /><br></br><br></br>
                    <button onClick={() => update()}>updateUser</button>
                </div>
                <form>
                {/* <Link to="/post"><button type='button'> ADD {Post}</button></Link> */}
                <tbody>
                    <tr>
                        <th>StudentID </th>
                        <th>StudentName </th>
                        <th>Department </th>
                        <th>PhoneNumber</th>
                        <th> Deleting Employees</th>
                    </tr>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.sid}</td>
                            <td>{item.sname}</td>
                            <td>{item.department}</td>
                            <td>{item.phonenumber}</td>

                            <td > <button onClick={() => deleteUSer(item.sid)} > Delete</button>  </td>

                            <td> <button onClick={() => selectedUSer(item)}> update</button> </td>

                        </tr>
                    ))}
                </tbody>
</form>
            </div>

        </div>

    );
}

export default EditRequest;







