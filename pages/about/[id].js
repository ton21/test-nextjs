import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const About = ({ user }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <Layout title='About'>
      <h1>About Page</h1>
      <div>
        <p>user: </p>
        <h3>User details</h3>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => {
    return {
      params: {
        id: String(user.id),
      },
    };
  });
  return { paths: [], fallback: true };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return {
    props: {
      user,
      revalidate: 1,
    },
  };
};

// About.getInitialProps = async ({ query }) => {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${query.id}`
//     );
//     const user = await res.json();
//     return user;
//   } catch (err) {
//     console.log(err);
//   }
// };

export default About;
