import React, { useState, useEffect } from 'react';

const FilteredData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('fetching data error.');
        }
        const data = await response.json();
        setData(data);
        setFilteredItem(data);
      } catch (error) {
        console.log('Fetching data error', message.error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filteredResults = data.filter((item) => {
      const filterByName = item.name.toLowerCase();
      const filterByEmail = item.email.toLowerCase().toString();
      return (
        filterByName.includes(e.target.value) ||
        filterByEmail.includes(e.target.value)
      );
    });
    setFilteredItem(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="search here..."
        onChange={handleSearch}
        style={{
          margin: '0',
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
        }}
      />
      {filteredItem.map((item) => (
        <div
          value={item.id}
          style={{
            margin: '0',
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredData;
