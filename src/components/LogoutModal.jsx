"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const LogoutConfirmModal = ({
  visible = false,
  onHide,
  onConfirm,
  title = "Confirm Logout",
  message = "Are you sure you want to log out?",
}) => {
  return (
    <Dialog
      header={title}
      visible={visible}
      onHide={onHide}
      draggable={false}
      resizable={false}
      dismissableMask={true}
      blockScroll={true}
      style={{ width: "90vw", maxWidth: "400px" }}
      modal
      /* Styling the Backdrop */
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      /* Styling the Modal Body */
      contentStyle={{
        background: "#181818", // Darker background to match your screenshot
        color: "#ffffff",
        padding: "1.5rem 2rem",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
      /* Styling the Header Area */
      headerStyle={{
        background: "#181818",
        color: "#ffffff",
        borderBottom: "none",
        padding: "1.5rem 2rem 0 2rem",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div className="flex flex-col gap-6">
        <p className="text-gray-400 text-base m-0">{message}</p>

        <div className="flex justify-end gap-3 mt-2">
          <Button
            label="Cancel"
            icon="pi pi-times"
            onClick={onHide}
            className="p-button-text p-button-plain text-white hover:bg-white/10 px-3"
            style={{ fontSize: "0.9rem" }}
          />
          <Button
            label="Log Out"
            icon="pi pi-check"
            onClick={onConfirm}
            className="bg-red-600 border-none hover:bg-red-700 px-4 py-2"
            style={{ borderRadius: "4px", fontSize: "0.9rem" }}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default LogoutConfirmModal;

// "use client";
// import React from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";

// const LogoutConfirmModal = ({
//   visible,
//   onHide,
//   onConfirm,
//   title = "Confirm Logout",
//   message = "Are you sure you want to log out?",
// }) => {
//   return (
//     <Dialog
//       visible={visible}
//       onHide={onHide}
//       dismissableMask={true}
//       draggable={false}
//       dismissableMask={true}
//       blockScroll={true}
//       resizable={false}
//       header={title}
//       style={{ width: "400px" }}
//       modal
//       maskStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }} // backdrop black 20%
//       contentStyle={{
//         background: "#ffffff", // ✅ modal content white
//         color: "#000000",
//         borderRadius: "8px",
//         padding: "1.5rem",
//         boxShadow: "0 5px 20px rgba(0,0,0,0.15)", // subtle shadow
//       }}
//     >
//       <p className="mb-6">{message}</p>
//       <div className="flex justify-end gap-3">
//         <Button
//           label="No"
//           icon="pi pi-times"
//           className="p-button-text"
//           onClick={onHide}
//         />
//         <Button
//           label="Yes"
//           icon="pi pi-check"
//           className="p-button-danger"
//           onClick={onConfirm}
//         />
//       </div>
//     </Dialog>
//   );
// };

// export default LogoutConfirmModal;
