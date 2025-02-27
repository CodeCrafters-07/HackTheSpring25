import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { startups } from "../export.js"; // Import startups data

const Startup = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Using startups data directly without manual replacement
  const updatedStartups = startups.map((startup) => ({
    ...startup,
    name: startup.name,
    category: startup.category,
    location: startup.location,
  }));

  const categories = Array.from(new Set(updatedStartups.map((s) => s.category)));
  const locations = Array.from(new Set(updatedStartups.map((s) => s.location)));

  return (
    <div className="bg-white min-h-screen mt-20 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {/* Category Search */}
          <Menu as="div" className="relative w-72">
            <div>
              <input
                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-Blue"
                placeholder="Search by Name or Category"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <MenuButton className="absolute right-3 top-3 w-5 h-5 text-Black cursor-pointer">
                <HiChevronDown onClick={() => setSearch("")} />
              </MenuButton>
            </div>
            <MenuItems className="absolute bg-white border rounded-lg shadow-lg mt-1 w-72 z-10">
              {categories.map((cat) => (
                <MenuItem
                  key={cat}
                  as="div"
                  className="p-2 cursor-pointer data-[active]:bg-gray-200"
                  onClick={() => setSearch(cat)}
                >
                  {cat}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          {/* Location Search */}
          <Menu as="div" className="relative w-72">
            <div>
              <input
                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-Blue"
                placeholder="Select a Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <MenuButton className="absolute right-3 top-3 w-5 h-5 text-Black cursor-pointer">
                <HiChevronDown onClick={() => setLocation("")} />
              </MenuButton>
            </div>
            <MenuItems className="absolute bg-white border rounded-lg shadow-lg mt-1 w-72 z-10">
              {locations.map((loc) => (
                <MenuItem
                  key={loc}
                  as="div"
                  className="p-2 cursor-pointer data-[active]:bg-gray-200"
                  onClick={() => setLocation(loc)}
                >
                  {loc}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        {/* Startup Listings with Images */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {updatedStartups
            .filter(
              (startup) =>
                (search === "" ||
                  startup.name.toLowerCase().includes(search.toLowerCase()) ||
                  startup.category.toLowerCase().includes(search.toLowerCase())) &&
                (location === "" || startup.location.toLowerCase().includes(location.toLowerCase()))
            )
            .map((startup) => (
              <div
                key={startup.id}
                className="bg-[#f8f9fa] border border-[#ddd] rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => navigate(`/startup/${startup.id}`)}
              >
                {/* Image Section */}
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-[200px] object-cover"
                />

                {/* Details Section */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-Blue">{startup.name}</h2>
                  <p className="text-sm text-gray-400 mb-2">{startup.description}</p>
                  <div className="flex justify-between text-sm text-Black">
                    <span className="font-medium">{startup.category}</span>
                    <span>{startup.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Startup;