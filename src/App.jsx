import Booking from "./components/Booking";
import Mentor from "./components/mentor";

const App = () => {
 return (
  <div className="min-h-screen bg-zinc-700 p-4">
   <h1 className="text-xl font-bold text-center mb-4">Book my Mentor📚</h1>
   <div className=" flex justify-center items-center p-2 gap-2 ">
    <Mentor />
    <Booking />
   </div>
  </div>
 );
};

export default App;
