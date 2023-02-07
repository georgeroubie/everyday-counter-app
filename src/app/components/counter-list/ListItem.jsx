import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import _Icons from '../icons/Icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.large};
  padding: ${({ theme: { spacing } }) => `${spacing.normal} ${spacing.large}`};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
  user-select: none;
`;

const Text = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  flex-shrink: 0;
  min-width: 0;
`;

const Icons = styled(_Icons)`
  width: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { fontSize } }) => fontSize.normal};
`;

const ListItem = ({ id, name }) => {
  const { state, updateCounters } = useContext(AppContext);
  const { list } = state;

  function deleteListItem() {
    const updatedList = list.filter((item) => item.id !== id);
    updateCounters(updatedList);
  }

  return (
    <Wrapper>
      <Text>{name}</Text>
      <Button onClick={deleteListItem}>
        <Icons type="Trash" />
      </Button>
    </Wrapper>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
