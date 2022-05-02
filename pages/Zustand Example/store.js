import create from 'zustand'

const useStore = create(set => ({
  people: ['Priya','Prathima','Nikki'],
  addPeople: (person) => set(state => ({ people:[...state.people ,person] })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore