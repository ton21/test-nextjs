import React, { useState } from 'react';
import Layout from '../components/Layout';

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
    <Layout title='About'>
      <h1>About</h1>
      <ListItem items={items} />
    </Layout>
  );
};

export default About;
