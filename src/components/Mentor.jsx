import { useEffect, useState } from "react";

const Mentor = () => {
 const [mentors, setMentors] = useState([]);

 useEffect(() => {
  const fetchMentors = async () => {
   try {
    const response = await fetch("/db/mentors.json");
    const data = await response.json();
    setMentors(data);
   } catch (error) {
    console.error("Error fetching mentor data:", error);
   }
  };

  fetchMentors();
 }, []);

 return (
  <div className="bg-blue-300 p-4 rounded-lg shadow-md h-80 overflow-y-scroll ">
   <h2 className="text-xl font-bold mb-2">Mentor Dashboard</h2>
   <ul className="list-disc pl-2 ">
    {mentors.length === 0 ? (
     <li>No mentors available</li>
    ) : (
     mentors.map((mentor) => (
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
