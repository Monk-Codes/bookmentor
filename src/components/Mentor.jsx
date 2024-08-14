import mentorDB from "../db/mentors.json";

const Mentor = () => {
 return (
  <div className="bg-blue-300 p-4 rounded-lg shadow-md h-80 overflow-y-scroll">
   <h2 className="text-xl font-bold mb-2">Mentor Dashboard</h2>
   <ul className="list-disc pl-2">
    {mentorDB.length === 0 ? (
     <li>No mentors available</li>
    ) : (
     mentorDB.map((mentor) => (
      <li key={mentor.id} className="mb-2">
       <h3 className="text-md font-semibold">{mentor.name}</h3>
       <p className="text-sm text-gray-800">Area: {mentor.area}</p>
       <p className="text-sm text-gray-800">Available Slots: {mentor.availableSlots.join(", ")}</p>
      </li>
     ))
    )}
   </ul>
  </div>
 );
};

export default Mentor;
