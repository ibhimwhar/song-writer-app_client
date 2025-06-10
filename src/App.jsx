import { Route, Routes } from "react-router"
import Home from "./page/Home"
import ContextContainer from "./component/Context"
import AddNewSong from "./page/AddNewSong"
import View from "./page/View"

const App = () => {

  return (
    <ContextContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new-song" element={<AddNewSong />} />
        <Route path="/add-new-song/:id" element={<View />} />
      </Routes>
    </ContextContainer>
  )
}

export default App


// import { AudioLines } from "lucide-react"