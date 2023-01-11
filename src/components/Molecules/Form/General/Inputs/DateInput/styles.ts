import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-family: "Assistant" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #666666;
    margin-bottom: 0.2rem;
  }

  > span {
    font-family: "Assistant" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #f26852;
    margin-top: 0.2rem;
  }
`;

export const DatePickerContainer = styled(DatePicker)`
  padding: 0.8rem;
  background: #ffffff;
  border: 1px solid #939598;
  border-radius: 5px;
  width: 100%;
`;
