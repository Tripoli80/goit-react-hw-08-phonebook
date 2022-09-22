import styled from '@emotion/styled';


const ContactFormFilter = styled.form`
margin-top: 20px;

display: flex;
flex-direction: column;
`;

const InputSearchName = styled.input`  margin: 15px;
padding: 10px;
border: 0;
box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
transition: all;
transition-timing-function: cubic-bezier();
transition-duration: 350ms;
outline:none;

:focus ,:focus{
border: 0;
  box-shadow: 0 0 15px 4px rgba(255, 35, 35, 0.959);
  background-color: #ffefbc;
  /* color: #535353; */
}`
// const InputPhone = styled.input``;
const LableSearchName = styled.label`

font-size:10px`

export { ContactFormFilter, LableSearchName,InputSearchName };
