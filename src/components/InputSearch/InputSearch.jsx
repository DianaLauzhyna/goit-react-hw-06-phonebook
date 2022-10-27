import PropTypes from 'prop-types';

import { Label, Input, Span } from 'components/InputName/Input.styled';

const InputSearch = ({ nameSearch, onSearchName }) => {
  return (
    <Label>
      <Span>{nameSearch}</Span>
      <Input
        type="text"
        placeholder="Search by name"
        onChange={e => onSearchName(e.target.value)}
      ></Input>
    </Label>
  );
};

InputSearch.propTypes = {
  nameSearch: PropTypes.string.isRequired,
  onSearchName: PropTypes.func.isRequired,
};
export default InputSearch;
