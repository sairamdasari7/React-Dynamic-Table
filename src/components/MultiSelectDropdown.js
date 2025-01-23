import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState(options);

  const handleAddOption = () => {
    if (inputValue.trim()) {
      const newOption = { value: inputValue, label: inputValue };
      setDropdownOptions([...dropdownOptions, newOption]);
      setInputValue('');
    }
  };

  return (
    <div>
      <Select
        options={dropdownOptions}
        value={selectedValues}
        onChange={onChange}
        isMulti
        placeholder="Select options"
      />
      <div className="add-option">
        <input
          type="text"
          placeholder="Add new item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddOption}>+ Add</button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
