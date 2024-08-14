import { useLocation } from "react-router-dom";

const Payments = () => {
 const location = useLocation();

 // Extract state passed from Booking component
 const { selectedMentor, selectedDuration, isPreferredMentor } = location.state || {};

 // Calculate base payment
 const basePayment = selectedDuration === 30 ? 2000 : selectedDuration === 45 ? 3000 : 4000;

 // Additional charge for preferred mentor
 const preferredMentorCharge = isPreferredMentor ? 1000 : 0;

 // Total payment
 const totalPayment = basePayment + preferredMentorCharge;

 return (
  <div className="flex flex-col items-center justify-center h-96 mt-8 relative">
   <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center max-w-md w-full">
    <h1 className="text-2xl font-bold mb-4">Payment Summary</h1>
    <p className="mb-2">Mentor: {selectedMentor ? selectedMentor.name : "Not Selected"}</p>
    <p className="mb-2">Duration: {selectedDuration} minutes</p>
    {isPreferredMentor && <p className="mb-2 text-red-500">Preferred Mentor Charge: ₹1000</p>}
    <p className="mb-4 font-bold text-lg">Total Payment: ₹{totalPayment}</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Proceed to Payment</button>
   </div>
  </div>
 );
};

export default Payments;
