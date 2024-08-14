import { useState, useEffect } from "react";
import mentorDB from "../db/mentors.json";

const durations = [30, 45, 60];

const Booking = () => {
 const [mentors, setMentors] = useState([]);
 const [selectedMentorId, setSelectedMentorId] = useState("");
 const [selectedMentor, setSelectedMentor] = useState(null);
 const [selectedDuration, setSelectedDuration] = useState(durations[0]);
 const [selectedSlot, setSelectedSlot] = useState("");

 useEffect(() => {
  // Set mentors from mentorDB
  setMentors(mentorDB);
 }, []);

 useEffect(() => {
  if (selectedMentorId) {
   const mentor = mentorDB.find((m) => m.id === parseInt(selectedMentorId));
   setSelectedMentor(mentor);
   setSelectedSlot(""); // Reset selected slot when mentor changes
  } else {
   setSelectedMentor(null);
   setSelectedSlot("");
  }
 }, [selectedMentorId]);

 const handleBookAppointment = () => {
  if (!selectedMentor) {
   alert("Please select a mentor.");
   return;
  }
  if (!selectedSlot) {
   alert("Please select a time slot.");
   return;
  }

  // Handle booking logic here
  console.log("Booking appointment with:", selectedMentor.name);
  console.log("Duration:", selectedDuration, "minutes");
  console.log("Selected Slot:", selectedSlot);

  // Calculate payment
  const payment = calculatePayment(selectedDuration);
  console.log("Total payment:", payment);

  // Redirect to the payment page
  window.open("/payment", "_blank");
 };

 const calculatePayment = (duration) => {
  const baseRate = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
  return baseRate;
 };

 return (
  <div className="bg-blue-400 p-4 h-80 w-full rounded-lg shadow-md flex flex-col justify-center relative ">
   <div className="p-4 justify-center flex flex-col relative">
    <h2 className="text-xl font-bold mb-2">Book Appointment</h2>
    <div className="">
     <label className="block mb-2 font-semibold">Select Mentor:</label>
     <select value={selectedMentorId} onChange={(e) => setSelectedMentorId(e.target.value)} className="w-3/5 p-2 border-gray-300 rounded outline-none">
      <option value="">-- Select a Mentor --</option>
      {mentors.map((mentor) => (
       <option key={mentor.id} value={mentor.id}>
        {mentor.name} - {mentor.area}
       </option>
      ))}
     </select>
    </div>
    {selectedMentor && (
     <div className="mb-2">
      <label className="block mb-2 font-semibold">Select Time Slot:</label>
      <div className="flex flex-wrap gap-2">
       {selectedMentor.availableSlots.length === 0 ? (
        <p>No available slots</p>
       ) : (
        selectedMentor.availableSlots.map((slot, index) => (
         <button key={index} onClick={() => setSelectedSlot(slot)} className={`p-2 border rounded ${selectedSlot === slot ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}>
          {slot}
         </button>
        ))
       )}
      </div>
     </div>
    )}
    <div className="mb-2">
     <label className="block mb-2 font-semibold">Select Duration:</label>
     <select value={selectedDuration} onChange={(e) => setSelectedDuration(Number(e.target.value))} className="w-3/5 p-2 border-gray-300 rounded outline-none">
      {durations.map((duration) => (
       <option key={duration} value={duration}>
        {duration} minutes
       </option>
      ))}
     </select>
    </div>
    <button onClick={handleBookAppointment} className="w-36 font-medium bg-blue-500 text-white rounded">
     Book Appointment
    </button>
   </div>
  </div>
 );
};

export default Booking;
