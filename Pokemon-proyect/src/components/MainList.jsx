import { Todo } from "./Todo.jsx"

export const MainList = () => {

    const todos = [
        {
          id: 1,
          name: "Completar informe mensual",
          isCompleted: false
        },
        {
          id: 2,
          name: "Ir al supermercado",
          isCompleted: true
        },
        {
          id: 3,
          name: "Hacer ejercicio",
          isCompleted: false
        },
        {
          id: 4,
          name: "Llamar al cliente X",
          isCompleted: false
        },
        {
          id: 5,
          name: "Preparar cena",
          isCompleted: true
        },
        {
          id: 6,
          name: "Revisar correos electrónicos",
          isCompleted: false
        },
        {
          id: 7,
          name: "Estudiar para el examen de matemáticas",
          isCompleted: false
        },
        {
          id: 8,
          name: "Llevar el coche al taller",
          isCompleted: true
        },
        {
          id: 9,
          name: "Hacer la compra semanal",
          isCompleted: false
        },
        {
          id: 10,
          name: "Limpiar la casa",
          isCompleted: true
        }
      ];

    return(

        <section className="w-[32rem] h-full py-5 rounded-md bg-emerald-800 flex flex-col items-center">
            {
                todos.map((todo) => {
                    return(
                        <Todo 
                            key={todo.id}
                            name={todo.name}
                            isCompleted={todo.isCompleted}
                        />
                    )
                })
            }
        </section>

    )

}