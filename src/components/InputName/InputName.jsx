import PropTypes from 'prop-types';

import { Label, Span, Input } from './Input.styled';
const InputName = ({
  mainTitle,
  type,
  name,
  title,
  pattern,
  handleChange,
  value,
}) => (
  <Label>
    <Span>{mainTitle}</Span>
    <Input
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      value={value}
      onChange={handleChange}
      required
    />
  </Label>
);
InputName.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default InputName;
