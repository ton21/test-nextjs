import React, { useState } from 'react';

const ListItem = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const handleItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((match) => {
      return match.toUpperCase().includes(searchValue.toUpperCase());
    });
    setFilteredItems(matchingItems);
  };
  return (
    <>
      <input onChange={handleItems} />
      <ul {...props}>
        {filteredItems.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
};
const About = () => {
  const items = ['Julio', 'Carlos', 'Zeca', 'Marla'];
  return (
    <>
      <h1>About</h1>
      <ListItem items={items} />
    </>
  );
};

export default About;
