import logo from "./logo.svg"
import "./App.css"
import VideoCall from "./components/videocall"
import CreateMeeting from "./components/createmeeting"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateMeeting />}></Route>
        <Route path="/room" element={<VideoCall />}></Route>
      </Routes>
    </Router>
  )
}

export default App
