// import { Button } from "@mui/material";
// import { useEmployees } from "../store/state";

// export default function Employees() {
//   const employees = useEmployees((state) => state.employees);
//   const removeEmployee = useEmployees((state) => state.removeEmployee);

//   return (
//     <div className="text-center m-8">
//       {employees.map((employee) => (
//         <div key={employee.id}>
//           {employee.name}
//           <Button
//             variant="outlined"
//             onClick={() => removeEmployee(employee.id)}
//           >
//             Delete
//           </Button>
//         </div>
//       ))}
//     </div>
//   );
// }