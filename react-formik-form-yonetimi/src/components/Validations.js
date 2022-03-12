import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir e-posta giriniz!')
    .required('Bu alan zorunludur!'),
  password: yup
    .string()
    .min(5, 'En az 5 karakter girilmelidir!')
    .required('Bu alan zorunludur!'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Parolanızla eşleşmemektedir!')
    .required('Bu alan zorunludur!'),
});
export default validations;
