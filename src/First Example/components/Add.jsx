// import Button from "@mui/material/Button";
// import { useState } from "react";
// import { useEmployees } from "../store/state";
// import TextField from "@mui/material/TextField";

// export default function Add() {
//   const employees = useEmployees((state) => state.employees);
//   const addEmployee = useEmployees((state) => state.addEmployee);
//   const [id, setId] = useState();
//   const [name, setName] = useState();

//   function addIfValid() {
//     const employee = employees.find((e) => e.id === id);
//     if (employee) {
//       alert("Employee already exists");
//       return;
//     }
//     addEmployee({ id, name });
//   }

//   return (
//     <div className="text-center">
//       <form>
//         <TextField
//           id="outlined-basic"
//           label="Id"
//           variant="outlined"
//           type="number"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Name"
//           variant="outlined"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Button variant="contained" onClick={addIfValid}>
//           Add
//         </Button>
//       </form>
//     </div>
//   );
// }