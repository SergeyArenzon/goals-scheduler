import React from 'react';
import "./Modal.css"

export default function Modal({setShowModal, children}) {
  return (
    <div className="modal" onClick={() => setShowModal(false)}>
        {children}
    </div>
  )
}
