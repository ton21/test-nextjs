import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

const Header = styled.div`
  background-color: #f55;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background: #fff;
    color: #f55;
  }
  transition: all 0.3s ease;
`;

function Nav() {
  const router = useRouter();
  const doLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard'); // isso é um redirecionamento
  };
  return (
    <Header>
      <Link href='/'>
        <HeaderLink title='Home'>Home</HeaderLink>
      </Link>
      <Link href='/contact'>
        <HeaderLink title='Contact'>Contact</HeaderLink>
      </Link>
      <HeaderLink title='Contact' onClick={doLogin}>
        Login
      </HeaderLink>
    </Header>
  );
}

export default Nav;
