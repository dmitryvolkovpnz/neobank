import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './prescoringForm.scss';
import Button from '../../ui/button/Button';

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
      .min(15000, 'Минимальная сумма 15000')
      .max(600000, 'Максимальная сумма 600000')
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
    console.log('Отправка данных:', values);
  };

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form>

        <div className='customizeyourcard__content'>
                  <div className='customizeyourcard__firstcontent'>
                    <div className='customizeyourcard__header'>
                      <div className='customizeyourcard__title'>Customize your card</div>
                      <div className='customizeyourcard__step'>Step 1 of 5</div>
                    </div>
                      <div className='customizeyourcard__select'> 
                        <div className='customizeyourcard__step'>Select amount</div>
                          <div className='form-field'>
                            <Label htmlFor="amount">{values.amount}</Label>
                            <br />
                            <Field 
                              name="amount" 
                              type="range" 
                              min={15000} 
                              max={600000} 
                              step={1000}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("amount", Number(e.target.value))}
                            />
                            {errors.amount && touched.amount ? (
                                <div style={{ color: 'red' }}>{errors.amount}</div>
                            ) : null}
                          </div>
                      </div>
                  </div>
                  <hr className='customizeyourcard__mainline' />
                  <div className='customizeyourcard__subheader'>
                    <div className='customizeyourcard__subtitle'>You have chosen the amount</div>
                    <div className='customizeyourcard__step'>{values.amount} ₽</div>
                    <hr className='customizeyourcard__line' />
                  </div>
          </div>
                <div className='customizeyourcard__formcontent'>
                    <div className='form-field'>
                      <Label htmlFor="term">Select term</Label>
                      <Field as="select" name="term">
                        <option value={6}>6 месяцев</option>
                        <option value={12}>12 месяцев</option>
                        <option value={18}>18 месяцев</option>
                        <option value={24}>24 месяца</option>
                      </Field>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="firstName">Your first name</Label>
                      <Field name="firstName" />
                      <ErrorMessage name="firstName" component="div" className="error-message"/>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="lastName">Your last name</Label>
                      <Field name="lastName" />
                      <ErrorMessage name="lastName" component="div" className="error-message"/>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="middleName">Your patronymic</Label>
                      <Field name="middleName" />
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="email">Your email</Label>
                      <Field name="email" type="email" />
                      <ErrorMessage name="email" component="div" className="error-message"/>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="birthdate">Your date of birth</Label>
                      <Field name="birthdate" type="date" />
                      <ErrorMessage name="birthdate" component="div" className="error-message"/>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="passportSeries">Your passport series</Label>
                      <Field name="passportSeries" />
                      <ErrorMessage name="passportSeries" component="div" className="error-message"/>
                    </div>
                    <div className='form-field'>
                      <Label htmlFor="passportNumber">Your passport number</Label>
                      <Field name="passportNumber" />
                      <ErrorMessage name="passportNumber" component="div" className="error-message"/>
                    </div>
                </div>
          <Button>Continue</Button>
        </Form>
      )}
    </Formik>
    </>
  );
};

const Label = ({ children, ...props }: React.HTMLProps<HTMLLabelElement>) => {
  return <label {...props}>{children}</label>;
};

export default PrescoringForm;