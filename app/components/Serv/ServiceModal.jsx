// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const services = [
//   "Floor Plan",
//   "3D Elevation",
//   "Structure Drawing",
//   "EPD Drawing",
//   "Interior Design",
//   "Land Scaping",
//   "Walk Through",
//   "Vastu Consulting",
//   "Construction",
//   "Site Supervision",
//   "Home Automation's"
// ];

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default function NestedModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>Services</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <h2 id="parent-modal-title">Available Services</h2>
//           {services.map((service, index) => (
//             <p
//               key={index}
//               id="parent-modal-description"
//               className="text-black pDesign"
//               style={{ margin: "2px" }}
//             >
//               <strong>*</strong> {service}
//             </p>
//           ))}
//           <ChildModal />
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const services = [
  
  "3D Elevation",
  "EPD Drawing",
  "Walk Through",
  "Land Scaping",
  "Floor Plan",
  "Site Supervision",
  "Interior Design",
  "Vastu Consulting",
  "Construction",
  "Home Automation's",
  "Structure Drawing",
];

const tableOneData = [
  { type: "Simplex", basic: "14,999", premium: "18,000", deluxe: "22,000" },
  { type: "Duplex", basic: "18,000", premium: "22,000", deluxe: "30,000" },
  { type: "Triplex", basic: "22,000", premium: "30,000", deluxe: "22,000" }
];

const tableSecondData = [
    { type: "Simplex", basic: "14,999", premium: "18,000", deluxe: "22,000" },
    { type: "Duplex", basic: "18,000", premium: "22,000", deluxe: "30,000" },
    { type: "Triplex", basic: "22,000", premium: "30,000", deluxe: "22,000" }
  ];

function ChildModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600,borderRadius:5 }}>
        
        <h2 id="child-modal-title" className="text-center">Service Details <Button className="ms-5" onClick={handleClose}>Close</Button></h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>* Floor Plan</TableCell>
              <TableCell>* Basic</TableCell>
              <TableCell>* Premium</TableCell>
              <TableCell>* Deluxe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableOneData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>• {row.type}</TableCell>
                <TableCell>{row.basic}</TableCell>
                <TableCell>{row.premium}</TableCell>
                <TableCell>{row.deluxe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Floor Plan</TableCell>
              <TableCell>Unlimited Changes</TableCell>
              <TableCell>Same Day</TableCell>
              <TableCell>Deluxe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableSecondData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>• {row.type}</TableCell>
                <TableCell>{row.basic}</TableCell>
                <TableCell>{row.premium}</TableCell>
                <TableCell>{row.deluxe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        
      </Box>
    </Modal>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [childOpen, setChildOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChildOpen = () => {
    setChildOpen(true);
  };

  const handleChildClose = () => {
    setChildOpen(false);
  };

  return (
    <div>
      <Button className="text-white" onClick={handleOpen}>Services</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400,borderRadius:5 }}>
          
          <h2 className="text-center" id="parent-modal-title" style={{fontFamily:"roboto"}}>Available Services <Button className="text-black ms-3" onClick={handleClose}> ✖ </Button></h2>
          {services.map((service, index) => (
            <Button
              key={index}
              onClick={handleChildOpen}
              style={{ margin: "2px",color:"black" }}
            >
              <strong>• </strong> {service}
            </Button>
          ))}
          <ChildModal
            open={childOpen}
            handleClose={handleChildClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
