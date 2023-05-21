import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch } from 'react-redux';
import { toggleSelectedTodo } from 'redux/todoSlice';
import { editTodo } from 'redux/operations';
import { useTodosState } from 'redux/selectors';

export const EditForm = () => {
  const dispatch = useDispatch();
  const { selectedTodo } = useTodosState();

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value;

    dispatch(editTodo({ id: selectedTodo.id, value }));
    dispatch(toggleSelectedTodo());
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={() => dispatch(toggleSelectedTodo())}>
        <MdOutlineCancel size="16px" />
      </BtnEdit>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        defaultValue={selectedTodo.value}
      />
    </SearchFormStyled>
  );
};
