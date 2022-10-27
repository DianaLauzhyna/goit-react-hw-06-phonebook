import PropTypes from 'prop-types';
import { SectionStyled, TitleSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
