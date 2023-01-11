import { useState, useEffect } from 'react';

import { Container, DatePickerContainer } from './styles';

function DateInput(props: IDateInput): JSX.Element {
  const { handleBlur, onChange, data, error, value } = props;
  const [startDate, setStartDate] = useState<Date | null | undefined>(value);

  useEffect(() => {
    if (startDate) {
      onChange({
        target: {
          id: data.id,
          value: startDate
        }
      });
    }
  }, [startDate]);

  return (
    <Container>
      <label htmlFor={data.id}>{data.label}</label>

      <DatePickerContainer
        selected={startDate}
        onChange={(date: any) => date && setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        onBlur={() => handleBlur()}
      />

      {error && <span>{error}</span>}
    </Container>
  );
}

interface IDateInput {
  data: IFormMakerInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  value: any;
  error: any;
}

export default DateInput;
