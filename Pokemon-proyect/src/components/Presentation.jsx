export const Presentation = () => {

    return(

      <header className="flex justify-center items-center gap-3">
        <div>
          <h1 className="text-3xl font-bold">
            Francisco <span className="text-emerald-500 uppercase">Castagnaro</span>
          </h1>
          <h2 className="text-3xl font-bold">
            To-Do APP<span className="text-emerald-500">!</span>
          </h2>
        </div>
        <div className="w-40 h-auto rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src="./src/assets/Pancho.jpg" alt="francisco-foto" /> 
        </div>
      </header>
        
    )

}