// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { List as PaperList } from 'react-native-paper';

const StyledList = styled(PaperList.Section)`
  background-color: #fff;
  border-radius: 16px;
  margin-vertical: 8px;
`;

export function List<T>({ data, renderItem, ...props }: FlatListProps<T>) {
  return (
    <StyledList>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_: T, i: number) => i.toString()}
        {...props}
      />
    </StyledList>
  );
}