import React from 'react';
import Select from 'react-select';

const SingleSelectDropdown = ({ options, selectedValue, onChange, disabledOptions }) => {
  const filteredOptions = options.filter(option => !disabledOptions.includes(option.value));

  return (
    <Select
      options={filteredOptions}
      value={selectedValue}
      onChange={onChange}
      isSearchable
      placeholder="Select an option"
    />
  );
};

export default SingleSelectDropdown;
