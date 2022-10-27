import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px;
  background-color: hotpink;
  font-size: 15px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 280px;
  overflow: scroll;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
