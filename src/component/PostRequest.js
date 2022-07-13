import React from "react";
import { useState } from "react";

function Post() {
  const [sid, setID] = useState('');
  const [sname, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [phonenumber, setPhonenuber] = useState('');
  

  let handleSubmit =  (e) => {
 
e.preventDefault();
    let blog={sid,sname,department,phonenumber}
    console.log(blog)
      fetch("http://172.17.12.99:8000/postdata", {
        method: "POST",
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json',
  },
        body: JSON.stringify(blog)
        })
.then(()=>
{
console.log("data added successfully")
})

}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={sid}
          placeholder="ID"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="text"
          value={sname}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={department}
          placeholder="Department"
          onChange={(e) => setDepartment(e.target.value)}
        />
    

            <input
          type="text"
          value={phonenumber}
          placeholder="PhoneNumber"
          onChange={(e) => setPhonenuber(e.target.value)}
        />

        <button type="submit">Create</button>

   
      </form>
    </div>
  );
}

export default Post;