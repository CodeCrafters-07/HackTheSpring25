import { useState } from "react";
import { Menu , MenuButton , MenuItem , MenuItems } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { franchises } from "../export.js";

const Franchise = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const categories = Array.from(new Set(franchises.map((f) => f.category)));
  const locations = Array.from(new Set(franchises.map((f) => f.location)));

  return (
    <div className="bg-white min-h-screen p-6">
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
                <MenuItem key={cat} as="div" className="p-2 cursor-pointer data-[active]:bg-gray-200" onClick={() => setSearch(cat)} >
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
                <MenuItem key={loc} as="div" className="p-2 cursor-pointer data-[active]:bg-gray-200" onClick={() => setLocation(loc)} >
                    {loc}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {franchises
            .filter((franchise) =>
              (search === "" ||
                franchise.name.toLowerCase().includes(search.toLowerCase()) ||
                franchise.category.toLowerCase().includes(search.toLowerCase())) &&
              (location === "" || franchise.location.toLowerCase().includes(location.toLowerCase()))
            )
            .map((franchise) => (
              <div key={franchise.id} className="bg-[#f8f9fa] border border-[#ddd] rounded-lg overflow-hidden shadow-md">
                <img src={franchise.image} alt={franchise.name} className="w-full h-[260px] object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-Blue">{franchise.name}</h2>
                  <p className="text-sm text-gray-400 mb-2">{franchise.description}</p>
                  <div className="flex justify-between text-sm text-Black">
                    <span className="font-medium">{franchise.category}</span>
                    <span>{franchise.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Franchise