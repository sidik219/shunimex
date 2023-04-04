import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Animepage from "./Pages/Animepage"
import Detailpage from "./Pages/Detailpage"
import Jadwalpage from "./Pages/Jadwalpage"
import Notfoundpage from "./Pages/Notfoundpage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animepage" element={<Animepage />} />
        <Route path="/detailpage" element={<Detailpage />} />
        <Route path="/jadwalpage" element={<Jadwalpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </Router>
  )
}

export default App
