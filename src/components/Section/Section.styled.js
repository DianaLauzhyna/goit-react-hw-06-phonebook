import styled from '@emotion/styled';

export const SectionStyle = styled.h2`
margin-bottom: 0.5rem;
font-size: 3rem;
`;

export const PageHeader = styled.h1`
  margin-bottom: 1rem;
  font-size: 4rem;

  &::before {
    content: "☎️";
    margin-right: 1rem;
    vertical-align: 0.5rem;
    font-size: 3rem;
  }
`;
