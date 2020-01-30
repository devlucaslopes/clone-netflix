import React from 'react';

import NetflixLogo from '../../assets/imgs/logo.png';

import {Container, Img} from './styles';

export default function Header() {
  return (
    <Container>
      <Img source={NetflixLogo} />
    </Container>
  );
}
