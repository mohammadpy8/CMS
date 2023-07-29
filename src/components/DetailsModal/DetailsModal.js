import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./DetailsModal.css";

const DetailsModal = (props) => {

    const { closeDetailsModalAction } = props;
    
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
        <MdClose
          className="close-icon"
          onClick={() => closeDetailsModalAction()}
        />
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>لپ تاپ</td>
              <td>12,000,000</td>
              <td>91%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsModal;
