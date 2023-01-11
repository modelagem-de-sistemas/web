import { Container } from './styles';

function TextInput(props: ITextInput): JSX.Element {
  const { handleBlur, onChange, data, error, value } = props;

  return (
    <Container>
      <label htmlFor={data.id}>{data.label}</label>
      <input
        type={data.type}
        id={data.id}
        placeholder={data.placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        disabled={data.disabled}
        onBlur={() => handleBlur()}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

interface ITextInput {
  data: IFormMakerInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  value: any;
  error: any;
}

export default TextInput;
