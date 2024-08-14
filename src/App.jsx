import Booking from "./components/Booking";
import Mentor from "./components/Mentor";

const App = () => {
 return (
  <div className="min-h-screen p-4 bg-zinc-700">
   <h1 className="text-2xl font-bold text-center p-2">Book my Mentor📚</h1>
   <div className=" flex flex-col px-24 py-2 gap-3 ">
    <Mentor />
    <Booking />
   </div>
  </div>
 );
};

export default App;
