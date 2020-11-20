import React, { useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home = ({ users }) => {
  return (
    <Layout title='Home'>
      <div>
        <h2>Home</h2>
      </div>
      <div className='users'>
        <ul className='users-list'>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <style jsx>
          {`
            .users-list li {
              font-family: 'Poppins', sans-serif;
              color: #555;
              display: block;
              font-size: 14px;
            }
          `}
        </style>
      </div>
      {/* <Image src='/img/cyber.jpg' width='200' height='200' alt='Cyber' /> */}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    // console.log(users);
    return { users };
  } catch (err) {
    console.log(err);
  }
};

export default Home;
