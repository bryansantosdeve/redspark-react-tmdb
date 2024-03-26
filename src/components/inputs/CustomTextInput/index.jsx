import { CustomInputTextStyled } from './styles';

function CustomTextInput({ placeholder }) {
  return (
    <>
      <CustomInputTextStyled type='text' placeholder={placeholder} />
    </>
  );
}

export default CustomTextInput;
