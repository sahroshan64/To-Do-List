import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

// eslint-disable-next-line react/prop-types
const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  // eslint-disable-next-line react/prop-types
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      // eslint-disable-next-line react/prop-types
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;