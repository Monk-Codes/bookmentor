import Booking from "./components/Booking";
import Mentor from "./components/Mentor";

const App = () => {
 return (
  <div className="min-h-screen bg-zinc-700 items-center">
   <h1 className="text-2xl font-bold text-center p-2 ">Book my Mentor📚</h1>
   <div className=" flex flex-col px-12 py-2 gap-2">
    <Mentor />
    <Booking />
   </div>
  </div>
 );
};

export default App;
