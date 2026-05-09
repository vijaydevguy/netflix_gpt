"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const LogoutConfirmModal = ({
  visible,
  onHide,
  onConfirm,
  title = "Confirm Logout",
  message = "Are you sure you want to log out?",
}) => {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      dismissableMask={true}
      draggable={false}
      dismissableMask={true}
      blockScroll={true}
      resizable={false}
      header={title}
      style={{ width: "400px" }}
      modal
      maskStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }} // backdrop black 20%
      contentStyle={{
        background: "#ffffff", // ✅ modal content white
        color: "#000000",
        borderRadius: "8px",
        padding: "1.5rem",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)", // subtle shadow
      }}
    >
      <p className="mb-6">{message}</p>
      <div className="flex justify-end gap-3">
        <Button
          label="No"
          icon="pi pi-times"
          className="p-button-text"
          onClick={onHide}
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          className="p-button-danger"
          onClick={onConfirm}
        />
      </div>
    </Dialog>
  );
};

export default LogoutConfirmModal;
