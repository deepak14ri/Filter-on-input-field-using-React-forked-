import React, { useEffect, useState } from "react";

const FilteredData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredField, setFilteredField] = useState([]);

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setData(data);
        setFilteredField(data);
      })
      .catch((error) => {
        console.log("Data fetching error:", error);
      });
  }, []);

  const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }, 2000);
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filterResults = data.filter((item) => {
      const filterByName = item.name.toLowerCase();
      const filterByEmail = item.email.toLowerCase().toString();
      return (
        filterByName.includes(e.target.value.toLowerCase()) ||
        filterByEmail.includes(e.target.value.toLowerCase())
      );
    });
    setFilteredField(filterResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search here.."
        style={{
          border: "1px solid #ccc",
          padding: "5px",
          marginBottom: "10px"
        }}
        onChange={handleSearch}
      />
      {filteredField.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            marginBottom: "10px"
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
