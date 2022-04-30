import create from "zustand";

export const useEmployees = create((set) => ({
  employees: [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
    {
      id: 3,
      name: "Jack Doe",
    },
    {
      id: 4,
      name: "Jill Doe",
    },
  ],

  addEmployee: (employee) =>
    set((state) => ({ employees: state.employees.concat(employee) })),

  removeEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((employee) => employee.id !== id),
    })),
}));