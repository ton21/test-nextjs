import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const About = ({ id, name, email }) => {
  return (
    <Layout title='About'>
      <h1>About Page</h1>
      <div>
        <p>user: {id}</p>
        <h3>User details</h3>
        <p>{name}</p>
        <p>{email.toLowerCase()}</p>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((post) => `/users/${user.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ query }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${query.id}`
    );
    const user = await res.json();
    return { props: { user } };
  } catch (err) {
    console.log(err);
  }
};

export default About;
