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

function PrescoringForm() {
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
      .min(15000, 'Min amount 15000')
      .max(600000, 'Max amount 600000')
      .required('Amount required'),
    term: Yup.number()
      .oneOf([6, 12, 18, 24], 'Error term')
      .required('The term is required'),
    firstName: Yup.string().required('Name required'),
    lastName: Yup.string().required('Last name is required'),
    middleName: Yup.string().nullable(),
    email: Yup.string().email('Invalid email format').required('Email required'),
    birthdate: Yup.date()
      .required('Date of birth is required')
      .test('age', 'The client must be at least 18 years old.', value => {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18;
      }),
    passportSeries: Yup.string()
      .matches(/^\d{4}$/, 'The passport series must consist of 4 digits.')
      .required('Passport series is mandatory'),
    passportNumber: Yup.string()
      .matches(/^\d{6}$/, 'The passport number must consist of 6 digits.')
      .required('Passport number is required'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Sending data:', values);
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
                          <div className='form-field__range'>
                            <Label htmlFor="amount">{values.amount}</Label><br />
                            <Field 
                              name="amount" 
                              type="range" 
                              min={15000} 
                              max={600000} 
                              step={1000}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("amount", Number(e.target.value))}
                            />
                            <div className='form-field__minMax'>
                                <span>15 000</span>
                                <span>600 000</span>
                            </div>
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
          <div className='customizeyourcard__formtitle'>Contact Information</div>
                <div className='customizeyourcard__formcontent'>
                    <div className='form-field'>
                      <Label htmlFor="lastName">Your last name</Label>
                      <Field 
                          name="lastName" 
                          placeholder="For Example Doe" 
                          className={errors.lastName && touched.lastName ? "error-input" : ""}
                      />
                      {errors.lastName && touched.lastName ? (
                          <div className="error-icon">
                            <img src="img/Close_round_fill.svg" alt=""/>
                          </div>
                      ) : null}
                      <ErrorMessage name="lastName" component="div" className="error-message"/>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="firstName">Your first name</Label>
                      <Field 
                          name="firstName" 
                          placeholder="For Example Jhon"
                          className={errors.firstName && touched.firstName ? "error-input" : ""}
                      />
                      {errors.firstName && touched.firstName ? (
                          <div className="error-icon"><img src="img/Close_round_fill.svg" alt=""/></div>
                      ) : null}
                      <ErrorMessage name="firstName" component="div" className="error-message"/>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="middleName">Your patronymic</Label>
                      <Field name="middleName" placeholder="For Example Victorovich"/>
                    </div>
                    
                    <div className='form-field'>
                      <Label htmlFor="term">Select term</Label>
                      <Field as="select" name="term">
                        <option value={6}>6 months</option>
                        <option value={12}>12 months</option>
                        <option value={18}>18 months</option>
                        <option value={24}>24 months</option>
                      </Field>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="email">Your email</Label>
                      <Field 
                          name="email" 
                          type="email" 
                          placeholder="test@gmail.com" 
                          className={errors.email && touched.email ? "error-input" : ""}
                      />
                      {errors.email && touched.email ? (
                          <div className="error-icon">
                            <img src="img/Close_round_fill.svg" alt=""/>
                          </div>
                      ) : null}
                      <ErrorMessage name="email" component="div" className="error-message"/>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="birthdate">Your date of birth</Label>
                      <Field 
                          name="birthdate" 
                          type="date" 
                          placeholder="Select Date and Time"
                          className={errors.birthdate && touched.birthdate ? "error-input" : ""}
                      />
                      <ErrorMessage name="birthdate" component="div" className="error-message"/>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="passportSeries">Your passport series</Label>
                      <Field 
                          name="passportSeries" 
                          placeholder="0000"
                          className={errors.passportSeries && touched.passportSeries ? "error-input" : ""}
                      />
                      {errors.passportSeries && touched.passportSeries ? (
                        <div className="error-icon">
                          <img src="img/Close_round_fill.svg" alt=""/>
                        </div>
                      ) : null}
                      <ErrorMessage name="passportSeries" component="div" className="error-message"/>
                    </div>

                    <div className='form-field'>
                      <Label htmlFor="passportNumber">Your passport number</Label>
                      <Field 
                          name="passportNumber" 
                          placeholder="000000"
                          className={errors.passportNumber && touched.passportNumber ? "error-input" : ""}
                      />
                      {errors.passportNumber && touched.passportNumber ? (
                          <div className="error-icon">
                            <img src="img/Close_round_fill.svg" alt=""/>
                          </div>
                      ) : null}
                      <ErrorMessage name="passportNumber" component="div" className="error-message" />
                    </div>
                </div>
                <div className='form__button'>
                      <Button>Continue</Button>
                </div>
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