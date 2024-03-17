import { Presentation } from "./components/Presentation.jsx"
import { MainList } from './components/MainList.jsx'

function App() {

  return (
    <main className="flex flex-col justify-center items-center gap-3 m-2">
      <Presentation />
      <MainList />
    </main>
  )
}

export default App
