import React from "react";
import { useLocation } from "react-router-dom";
import DefaultImage from "../assets/StartUpBannerCommon.jpg"; // Placeholder image

const StartupDetails = () => {
  const location = useLocation();
  const startupData = location.state?.startup || {};

  // Default values if not available in startupData
  const details = {
    name: startupData.name || "TechSpark Innovations",
    founder: startupData.founder || "Labh Patel",
    investment: startupData.investment || "10,00,000 - 50,00,000",
    fundingStage: startupData.fundingStage || "Series A",
    industry: startupData.category || "Technology",
    locationsAvailable: startupData.location || "Mumbai, Delhi, Bangalore",
    teamSize: startupData.teamSize || "10-50 employees",
    supportAndGuidance: startupData.supportAndGuidance || "Business mentorship and networking opportunities",
    contactEmail: startupData.contactEmail || "contact@techspark.com",
    contactPhone: startupData.contactPhone || "+91 8200176230",
    website: startupData.website || "Not Available",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-blue-900">
      {/* Banner Section */}
      <div className="relative h-[50vh] rounded-xl shadow-lg overflow-hidden mt-20">
        {/* Paste startup banner image URL here */}
        <img src={startupData.image || DefaultImage} alt={details.name} className="w-full h-full object-cover brightness-75" />
      </div>

      {/* Startup Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="space-y-6">
          <InfoCard title="Founder" value={details.founder} />
          <InfoCard title="Investment Required" value={details.investment} />
          <InfoCard title="Funding Stage" value={details.fundingStage} />
          <InfoCard title="Industry" value={details.industry} />
          <InfoCard title="Website" value={details.website} />
        </div>
        <div className="space-y-6">
          <InfoCard title="Locations Available" value={details.locationsAvailable} />
          <InfoCard title="Team Size" value={details.teamSize} />
          <InfoCard title="Support & Guidance" value={details.supportAndGuidance} />
          <InfoCard title="Contact Email" value={details.contactEmail} />
          <InfoCard title="Contact Phone" value={details.contactPhone} />
        </div>
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

export default StartupDetails;
