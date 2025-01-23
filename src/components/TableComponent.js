import React, { useState } from 'react';
import SingleSelectDropdown from './SingleSelectDropdown';
import MultiSelectDropdown from './MultiSelectDropdown';
import '../styles/Table.css';

const initialSingleSelectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const initialMultiSelectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const TableComponent = () => {
  const [rows, setRows] = useState([
    { singleSelect: null, multiSelect: [] },
  ]);
  const [selectedSingleOptions, setSelectedSingleOptions] = useState([]);

  const handleSingleSelectChange = (selectedOption, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].singleSelect = selectedOption;
    setRows(updatedRows);
    setSelectedSingleOptions([...selectedSingleOptions, selectedOption.value]);
  };

  const handleMultiSelectChange = (selectedOptions, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].multiSelect = selectedOptions;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { singleSelect: null, multiSelect: [] }]);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <SingleSelectDropdown
                  options={initialSingleSelectOptions}
                  selectedValue={row.singleSelect}
                  onChange={(option) => handleSingleSelectChange(option, index)}
                  disabledOptions={selectedSingleOptions}
                />
              </td>
              <td>
                <MultiSelectDropdown
                  options={initialMultiSelectOptions}
                  selectedValues={row.multiSelect}
                  onChange={(options) => handleMultiSelectChange(options, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-btn" onClick={addRow}>+ Add New Row</button>
    </div>
  );
};

export default TableComponent;
