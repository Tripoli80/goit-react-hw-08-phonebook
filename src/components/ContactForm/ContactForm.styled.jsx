import styled from '@emotion/styled';
const ContactFormAdd = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputName = styled.input`
  margin: 15px;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  transition: all;
  transition-timing-function: cubic-bezier();
  transition-duration: 350ms;
  outline: none;

  :focus,
  :active {
    border: 0;
    box-shadow: 0 0 15px 4px rgba(42, 255, 35, 0.959);
    /* background-color: #dfdfdf; */
    /* color: #535353; */
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  margin: 15px;
  padding: 10px;
  border: none;
  background-color: #51b53f;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);

  /* width:100%; */
  transition-timing-function: cubic-bezier();
  transition-duration: 500ms;
  outline: none;
  :active {
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.8);
  }
  :disabled {
    background-color: #9a9a9a;
  }
`;

// const InputPhone = styled.input``;

export { ContactFormAdd, SubmitBtn, InputName };
