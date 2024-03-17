/* eslint-disable react/prop-types */ 


export const Button = ({ todoState, onClick }) => {

    const text = todoState ? "Anular" : "Completada!"
    const btnColor = todoState ? "bg-red-500 hover:bg-red-700" : "bg-emerald-500 hover:bg-emerald-700"

    return (
      <button className={`${btnColor} text-white font-bold py-2 px-4 rounded min-w-36`} onClick={onClick}>
        {text}
      </button>
    );
  };
  