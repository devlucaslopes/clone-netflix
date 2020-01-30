import React from 'react';

import MovieCoverOne from '../../assets/imgs/movie1.png';
import MovieCoverTwo from '../../assets/imgs/movie2.png';
import MovieCoverThree from '../../assets/imgs/movie3.png';
import MovieCoverFour from '../../assets/imgs/movie4.png';

import {Container, Title, List, Separator, Cover} from './styles';

const DATA = [
  {
    url: MovieCoverOne,
  },
  {
    url: MovieCoverTwo,
  },
  {
    url: MovieCoverThree,
  },
  {
    url: MovieCoverFour,
  },
];

export default function Movies() {
  return (
    <Container>
      <Title>Continue assistindo</Title>
      <List
        data={DATA}
        horizontal
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <Cover source={item.url} />}
      />
    </Container>
  );
}
