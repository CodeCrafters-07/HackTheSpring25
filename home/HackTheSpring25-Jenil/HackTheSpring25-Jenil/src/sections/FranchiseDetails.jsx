import React from "react";
import { useLocation } from "react-router-dom";
import BurgerImage from "../assets/BurgerBanner.png";

const FranchiseDetails = () => {
  const location = useLocation();
  const franchiseData = location.state?.franchise || {};

  // Default values if not available in franchiseData
  const details = {
    name: franchiseData.name || "SuperBurger Express",
    companyName: franchiseData.companyName || "Global Burger Corp",
    investment: franchiseData.investment || "25,00,000 - 50,00,000",
    franchiseFee: franchiseData.franchiseFee || "1,00,000",
    roiPeriod: franchiseData.roiPeriod || "24-36 months",
    businessType: franchiseData.category || "Food & Beverage",
    locationsAvailable: franchiseData.location || "Mumbai, Delhi, Bangalore",
    spaceRequirement: franchiseData.spaceRequirement || "1,500 - 2,500 sq ft",
    supportAndTraining: franchiseData.supportAndTraining || "Comprehensive initial training and ongoing support",
    contactEmail: franchiseData.contactEmail || "franchise@superburger.com",
    contactPhone: franchiseData.contactPhone || "+91 8200176230",
    domain: franchiseData.domain || "Not Available",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-blue-900">
      {/* Banner Section */}
      <div className="relative h-[50vh] rounded-xl shadow-lg overflow-hidden mt-20">
        <img
          src={franchiseData.image || BurgerImage}
          alt={details.name}
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Franchise Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="space-y-6">
          <InfoCard title="Company Name" value={details.companyName} />
          <InfoCard title="Investment Required" value={details.investment} />
          <InfoCard title="Franchise Fee" value={details.franchiseFee} />
          <InfoCard title="ROI Period" value={details.roiPeriod} />
          <InfoCard title="Business Type" value={details.businessType} />
          <InfoCard title="Domain" value={details.domain} /> {/* Domain Added */}
        </div>
        <div className="space-y-6">
          <InfoCard title="Locations Available" value={details.locationsAvailable} />
          <InfoCard title="Minimum Space Requirement" value={details.spaceRequirement} />
          <InfoCard title="Support & Training" value={details.supportAndTraining} />
          <InfoCard title="Contact Email" value={details.contactEmail} />
          <InfoCard title="Contact Phone" value={details.contactPhone} />
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-300">
          Apply for Franchise
        </button>
      </div>
    </div>
  );
};

// Info Card Component
const InfoCard = ({ title, value }) => (
  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-lg">{value}</p>
  </div>
);

export default FranchiseDetails;
