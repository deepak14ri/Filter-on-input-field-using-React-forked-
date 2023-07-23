import './style.css';
import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Deepak Chaudhari', age: 28 },
  { id: 2, name: 'Vivek Gupta', age: 26 },
  { id: 3, name: 'Aarti Kumawat', age: 34 },
];

const FilteredData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredResults = data.filter((item) => {
      const filterByName = item.name.toLowerCase();
      const filterByAge = item.age.toString();
      return (
        filterByName.includes(e.target.value.toLowerCase()) ||
        filterByAge.includes(e.target.value)
      );
    });
    setFilteredData(filteredResults);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search by name here..."
        onChange={handleSearch}
        style={{
          border: '1px solid #ccc',
          padding: '5px',
          marginBottom: '5px',
        }}
      />
      {filteredData.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            padding: '5px',
            marginBottom: '5px',
          }}
        >
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
      <button className="hide-none">Hide Button</button>
    </div>
  );
};

export default FilteredData;
