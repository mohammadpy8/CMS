import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./DetailsModal.css";

const DetailsModal = (props) => {

    const { closeDetailsModalAction, children } = props;
    
    useEffect(() => {

        const checkKey = event => {
            
            if (event.keyCode === 27) {
                closeDetailsModalAction();
            };
        };

        window.addEventListener("keydown", checkKey);

        return () => window.removeEventListener("keydown", checkKey);
    });

  return (
    <div className=" modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>
  );
};

export default DetailsModal;
