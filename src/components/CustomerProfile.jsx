import React, { useState, useEffect } from "react";

const CustomerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [customerData, setCustomerData] = useState({
    fullName: "Jane Doe",
    email: "customer@example.com",
    phone: "+91 9876543210",
    address: "Pune, India",
    membershipStatus: "Gold Member",
  });

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedCustomerData = JSON.parse(localStorage.getItem("customerProfile"));
    if (savedCustomerData) setCustomerData(savedCustomerData);
  }, []);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("customerProfile", JSON.stringify(customerData));
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Customer Profile</h2>
      <div className="bg-white p-5 rounded-xl shadow-md">
        {Object.keys(customerData).map((key) => (
          <div key={key} className="mb-3">
            <label className="text-gray-700 font-medium block capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              name={key}
              value={customerData[key]}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${isEditing ? "border-blue-500" : "border-gray-300"} rounded-md focus:outline-none`}
            />
          </div>
        ))}

        <div className="flex justify-between mt-4">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
              Edit
            </button>
          ) : (
            <>
              <button onClick={handleSave} className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-500">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600">
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
