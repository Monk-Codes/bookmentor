import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./components/Booking";
import Mentor from "./components/Mentor";
import Payments from "./components/Payments";

const App = () => {
 return (
  <Router>
   <div className="min-h-screen bg-zinc-700 flex flex-col items-center">
    <h1 className="text-2xl font-bold text-center p-2">Book my Mentor📚</h1>
    <div className="max-w-5xl w-full flex flex-col px-12 py-2 gap-2 mt-4">
     <Routes>
      <Route
       path="/"
       element={
        <>
         <Mentor />
         <Booking />
        </>
       }
      />
      <Route path="/payment" element={<Payments />} />
     </Routes>
    </div>
   </div>
  </Router>
 );
};

export default App;
