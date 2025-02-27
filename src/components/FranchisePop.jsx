import React from "react";

const FranchiseDetails = () => {
  const franchiseData = {
    name: "SuperBurger Express",
    companyName: "Global Burger Corp",
    investment: "$250,000 - $500,000",
    franchiseFee: "$50,000",
    roiPeriod: "24-36 months",
    businessType: "Food & Beverage",
    locationsAvailable: "Nationwide",
    spaceRequirement: "1,500 - 2,500 sq ft",
    supportAndTraining: "Comprehensive initial training and ongoing support",
    contactEmail: "franchise@superburger.com",
    contactPhone: "+1 (555) 123-4567",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Franchise Image Section */}
      <div className="relative h-[50vh] bg-blue-500">
        <img
          src="https://source.unsplash.com/random/1600x900/?burger-restaurant"
          alt={franchiseData.name}
          className="w-full h-full object-cover opacity-50"
        />
        <h1 className="absolute bottom-10 left-10 text-5xl font-bold text-white shadow-lg">
          {franchiseData.name}
        </h1>
      </div>

      {/* Franchise Details Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <InfoCard title="Company Name" value={franchiseData.companyName} />
            <InfoCard title="Investment Required" value={franchiseData.investment} />
            <InfoCard title="Franchise Fee" value={franchiseData.franchiseFee} />
            <InfoCard title="ROI Period" value={franchiseData.roiPeriod} />
            <InfoCard title="Business Type" value={franchiseData.businessType} />
          </div>
          <div className="space-y-8">
            <InfoCard title="Locations Available" value={franchiseData.locationsAvailable} />
            <InfoCard title="Minimum Space Requirement" value={franchiseData.spaceRequirement} />
            <InfoCard title="Support & Training" value={franchiseData.supportAndTraining} />
            <InfoCard title="Contact Email" value={franchiseData.contactEmail} />
            <InfoCard title="Contact Phone" value={franchiseData.contactPhone} />
          </div>
        </div>

        {/* Apply Button (Replaced UI button with Tailwind button) */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply for Franchise
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Info Card Component
const InfoCard = ({ title, value }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-gray-800 text-lg font-semibold mb-2">{title}</h3>
    <p className="text-blue-600">{value}</p>
  </div>
);

export default FranchiseDetails;
