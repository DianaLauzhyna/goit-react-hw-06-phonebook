import PropTypes from 'prop-types';
import {  SectionStyle, PageHeader } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
<>
      <PageHeader>{title}</PageHeader>
      {children}
  </>
  );
};

export const SectionHeader = ({title}) => {
  return (
    <SectionStyle>{title}</SectionStyle>
  )
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

SectionHeader.propTypes ={
  title: PropTypes.string.isRequired,
}


