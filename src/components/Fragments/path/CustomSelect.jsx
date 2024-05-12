import { useState } from "react";


function CustomSelect({options, handleSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label:"Pilih",
    value:""
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // console.log(option);
    handleSelect(option)
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    return (
        
        <div className="custom-select w-100  fs-14">
          <div className="select-selected fs-12 ps-0" onClick={toggleDropdown}>
              {selectedOption.label}
          </div>
          <div className={`select-items ${isOpen ? "" : "select-hide"} border fs-12`}>
            {
              options.map((option) => (
                <div key={option.label} onClick={() => handleOptionClick(option)}>{option.label}</div>
              ))
            }
              
          </div>
        </div>
    );
}

export default CustomSelect;
