import { Container, SubmitContent } from './styles';
import FormMaker from '@components/Form/FormMaker';
import { Validator } from '@utils/validators/validator';
import { IFormMakerInput } from '@utils/interfaces/form.types';
import { DialogFormButton } from '@components/Form/FormMaker/Buttons/DialogFormButton/styles';
import { GrayFormButton } from '@components/Form/FormMaker/Buttons/GrayFormButton/styles';
import { ICompleteSignupRequest, ICompleteSignupResponse } from '@utils/interfaces/completeSignup.types';
import { toyyyyMMddString } from '@utils/date';
import { postCompleteSignUp } from '@services/completeSignUp.service';

function ComplementsDialogPFForm(props: IComplementsDialogPFForm): JSX.Element {
  const { closeDialog, nextStep } = props;

  const form: IFormMakerInput[][] = [
    [
      {
        id: 'name',
        label: 'Nome completo',
        type: 'text',
        placeholder: 'Nome completo',
        initialValue: props.data.fullName,
        validation: Validator.string().nullable(),
        disabled: true
      }
    ],
    [
      {
        id: 'document',
        label: 'RG',
        type: 'text',
        placeholder: 'Insira seu RG',
        initialValue: props.data?.rg,
        validation: Validator.string().nullable(),
        flex: 1,
        disabled: true
      },
      {
        id: 'rgIssuer',
        label: 'Órgão emissor do RG',
        type: 'text',
        placeholder: 'SIGLA',
        initialValue: props.data?.rgIssuer,
        validation: Validator.string().nullable(),
        required: true,
        flex: 1,
        disabled: false
      }
    ],
    [
      {
        id: 'birthDate',
        label: 'Data de nascimento',
        type: 'date',
        placeholder: 'dd/mm/aaaa',
        validation: Validator.date().nullable(),
        required: true,
        initialValue: props.data?.birthDate ? new Date(props.data?.birthDate) : null,
        disabled: false
      }
    ],
    [
      {
        id: 'nationality',
        label: 'Nacionalidade',
        type: 'text',
        placeholder: 'Nacionalidade',
        validation: Validator.string().nullable(),
        required: true,
        initialValue: props.data?.nationality,
        flex: 1
      },
      {
        id: 'naturalness',
        label: 'Naturalidade',
        type: 'text',
        placeholder: 'Naturalidade',
        validation: Validator.string().nullable(),
        initialValue: props.data?.naturalness,
        required: true,
        disabled: false,
        flex: 1
      }
    ]
  ];

  const onSubmit = async (data: any): Promise<void> => {
    const formData: ICompleteSignupRequest = {
      ...data,
      step: 1,
      type: props.data.type,
      dealId: props.data.dealId,
      birthDate: data.birthDate ? toyyyyMMddString(data.birthDate) : null
    };

    await postCompleteSignUp(formData)
      .then(() => {
        nextStep();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <FormMaker
        title="Dados Pessoais"
        data={form}
        onSubmit={onSubmit}
        SubmitComponent={({ submit, disabled }) => (
          <SubmitContent>
            <DialogFormButton type="submit" disabled={disabled} onClick={() => submit()}>
              Próximo
            </DialogFormButton>

            <GrayFormButton
              type="submit"
              onClick={() => {
                submit();
                closeDialog();
              }}
            >
              Cadastrar depois
            </GrayFormButton>
          </SubmitContent>
        )}
      />
    </Container>
  );
}

interface IComplementsDialogPFForm {
  nextStep: () => void;
  closeDialog: () => void;
  data: ICompleteSignupResponse;
}

export default ComplementsDialogPFForm;
