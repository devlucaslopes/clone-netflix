import React from 'react';

import Header from '../../components/Header';
import Movies from '../../components/Movies';

import {Container} from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Movies />
      <Movies />
    </Container>
  );
}
