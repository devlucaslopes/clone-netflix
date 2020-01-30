import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 32px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #8a8a8a;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 16px;
`;

export const Separator = styled.View`
  margin-right: 8px;
`;

export const Cover = styled.Image`
  width: 90px;
  height: 140px;
`;
