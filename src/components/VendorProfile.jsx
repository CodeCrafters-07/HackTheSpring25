// "use client"

// import React, { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const VendorProfile = () => {
//   const [isEditing, setIsEditing] = useState(false)
//   const [vendorData, setVendorData] = useState({
//     companyName: "ABC Pvt Ltd",
//     ownerName: "John Doe",
//     gstNumber: "22AAAAA0000A1Z5",
//     location: "Mumbai, India",
//     email: "vendor@example.com",
//     phone: "+91 9876543210",
//     businessType: "Retail",
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setVendorData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))
//   }

//   const toggleEdit = () => {
//     setIsEditing((prev) => !prev)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Here you would typically send the updated data to your backend
//     console.log("Updated vendor data:", vendorData)
//     setIsEditing(false)
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">Vendor Profile</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="space-y-4">
//           {Object.entries(vendorData).map(([key, value]) => (
//             <div key={key} className="space-y-2">
//               <Label htmlFor={key} className="text-sm font-medium">
//                 {key.charAt(0).toUpperCase() +
//                   key
//                     .slice(1)
//                     .replace(/([A-Z])/g, " $1")
//                     .trim()}
//               </Label>
//               <Input
//                 type="text"
//                 id={key}
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className="w-full"
//               />
//             </div>
//           ))}
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button type="button" variant="outline" onClick={toggleEdit}>
//             {isEditing ? "Cancel" : "Edit"}
//           </Button>
//           {isEditing && <Button type="submit">Save Changes</Button>}
//         </CardFooter>
//       </form>
//     </Card>
//   )
// }

// export default VendorProfile
