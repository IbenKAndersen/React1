//2.a Add a new file and paste in the code
import React, {useState} from "react";
 
//2.b Change MemberTable to render a table of members passed in via props.
function MemberTable({ members }) {
  return (
    <table>
      <thead>
          <tr>
              <th>Name</th>
              <th>Age</th>
          </tr>
      </thead>
      <tbody>
          {members.map((member, index) => (
              <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
              </tr>
          ))}
      </tbody>
    </table>
  );
}
 
//2.c Add the missing part in MemberDemo to use MemberTable and pass down members to it
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <ul><MemberTable members={props.members} /></ul>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
