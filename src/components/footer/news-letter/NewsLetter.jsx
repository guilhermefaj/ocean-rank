
import { useForm } from 'react-hook-form';
import { NewsletterWrapper,Title,Form,InputWrapper,Input, Button,Label, CheckboxWrapper, Checkbox } from './newsLetterStyles';
import { FaEnvelope, FaUser } from 'react-icons/fa';



const Newsletter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (!data.accepted) {
      alert('Por favor, aceite para receber notícias.');
      return;
    }
    alert(`Obrigado por se inscrever, ${data.name}!`);
  };

  return (
    <NewsletterWrapper>
      <Title>Assine nossa Newsletter</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <FaUser size={20} style={{ marginRight: '10px', color: '#007bff' }} />
          <Input
            type="text"
            placeholder="Nome"
            {...register('name', { required: 'Nome é obrigatório' })}
          />
        </InputWrapper>
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <InputWrapper>
          <FaEnvelope size={20} style={{ marginRight: '10px', color: '#007bff' }} />
          <Input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email inválido',
              },
            })}
          />
        </InputWrapper>
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            {...register('accepted', { required: 'Você deve aceitar para receber notícias' })}
          />
          <Label htmlFor="accept"> Aceito receber notícias</Label>
        </CheckboxWrapper>
        {errors.accepted && <p style={{ color: 'red' }}>{errors.accepted.message}</p>}
        <Button type="submit">Cadastrar</Button>
      </Form>
    </NewsletterWrapper>
  );
};

export default Newsletter;
