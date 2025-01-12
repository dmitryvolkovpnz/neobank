import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './prescoringForm.scss';

interface FormValues {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  email: string;
  birthdate: string | Date;
  passportSeries: string;
  passportNumber: string;
}

const PrescoringForm: React.FC = () => {
  const initialValues: FormValues = {
    amount: 0,
    term: 6,
    firstName: '',
    lastName: '',
    middleName: null,
    email: '',
    birthdate: '',
    passportSeries: '',
    passportNumber: '',
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .min(1000, 'Минимальная сумма 1000')
      .max(100000, 'Максимальная сумма 100000')
      .required('Сумма обязательна'),
    term: Yup.number()
      .oneOf([6, 12, 18, 24], 'Неверный термин')
      .required('Термин обязателен'),
    firstName: Yup.string().required('Имя обязательно'),
    lastName: Yup.string().required('Фамилия обязательна'),
    middleName: Yup.string().nullable(),
    email: Yup.string().email('Неверный формат электронной почты').required('Email обязателен'),
    birthdate: Yup.date()
      .required('Дата рождения обязательна')
      .test('age', 'Клиент должен быть не младше 18 лет', value => {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18;
      }),
    passportSeries: Yup.string()
      .matches(/^\d{4}$/, 'Серия паспорта должна состоять из 4 цифр')
      .required('Серия паспорта обязательна'),
    passportNumber: Yup.string()
      .matches(/^\d{6}$/, 'Номер паспорта должен состоять из 6 цифр')
      .required('Номер паспорта обязателен'),
  });

  const handleSubmit = (values: FormValues) => {
    // Здесь может быть код для отправки данных на сервер
    console.log('Отправка данных:', values);
    // Показать индикатор загрузки
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
            <div className='form-field'>
                <Label htmlFor="amount">Сумма</Label>
                <Field name="amount" type="number" />
                {errors.amount && touched.amount ? (
                    <div style={{ color: 'red' }}>{errors.amount}</div>
                ) : null}
            </div>
            <div className='form-field'>
                <Label htmlFor="term">Срок</Label>
                    <Field as="select" name="term">
                        <option value={6}>6 месяцев</option>
                        <option value={12}>12 месяцев</option>
                        <option value={18}>18 месяцев</option>
                        <option value={24}>24 месяца</option>
                    </Field>
            </div>
            <div className='form-field'>
                <Label htmlFor="firstName">Имя</Label>
                <Field name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="lastName">Фамилия</Label>
                <Field name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="middleName">Отчество</Label>
                <Field name="middleName" />
                <ErrorMessage name="middleNam" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="email">Email</Label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="birthdate">Дата рождения</Label>
                <Field name="birthdate" type="date" />
                <ErrorMessage name="birthdate" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="passportSeries">Серия паспорта</Label>
                <Field name="passportSeries" />
                <ErrorMessage name="passportSeries" component="div" className="error-message"/>
            </div>
            <div className='form-field'>
                <Label htmlFor="passportNumber">Номер паспорта</Label>
                <Field name="passportNumber" />
                <ErrorMessage name="passportNumber" component="div" className="error-message"/>
            </div>
          <button type="submit" className="submit-button">Отправить</button>
        </Form>
      )}
    </Formik>
  );
};

const Label = ({ children, ...props }: React.HTMLProps<HTMLLabelElement>) => {
  return <label {...props}>{children}</label>;
};

export default PrescoringForm;