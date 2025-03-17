import React, {useEffect, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "./scoringFrom.scss";
import Button from '../../ui/button/Button';
import axios from "axios";
import {useParams} from "react-router-dom";
import {offerStore} from "../../../store/offerStore";
import AppSucces from "../succes/AppSucces";

interface FormValues {
    gender: 'MALE' | 'FEMALE';
    maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
    dependentAmount: number;
    passportIssueDate: string | Date;
    passportIssueBranch: string;
    employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
    employerINN: number;
    salary: number;
    position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
    workExperienceTotal: number;
    workExperienceCurrent: number;
}

function ScoringForm() {

    const {isStep2, isStep} = offerStore();

    const initialValues: FormValues = {
        gender: 'MALE',
        maritalStatus: 'SINGLE',
        dependentAmount: 0,
        passportIssueDate: '',
        passportIssueBranch: '',
        employmentStatus: 'EMPLOYED',
        employerINN: 0,
        salary: 0,
        position: 'WORKER',
        workExperienceTotal: 0,
        workExperienceCurrent: 0,
    };

    const validationSchema = Yup.object({
        gender: Yup.mixed().oneOf(['MALE', 'FEMALE'], 'Gender is required').required('Gender is required'),
        maritalStatus: Yup.mixed().oneOf(['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'], 'Marital status is required').required('Marital status is required'),
        dependentAmount: Yup.number().required('Dependent amount is required').min(0, 'Amount must be at least 0'),
        passportIssueDate: Yup.date()
            .max(new Date(), 'Passport issue date cannot be in the future')
            .required('Passport issue date is required'),
        employmentStatus: Yup.mixed().oneOf(['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'], 'Employment status is required').required('Employment status is required'),
        employerINN: Yup.string()
            .matches(/^\d{12}$/, 'Employer INN must be 12 digits')
            .required('Employer INN is required'),
        salary: Yup.number().min(0, 'Salary cannot be negative').required('Salary is required'),
        position: Yup.mixed().oneOf(['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'], 'Position is required').required('Position is required'),
        workExperienceTotal: Yup.number().max(99, 'Work experience cannot exceed 99 years').required('Total work experience is required'),
        workExperienceCurrent: Yup.number().max(99, 'Current work experience cannot exceed 99 years').required('Current work experience is required'),
    });

    const applicationId = useParams().applicationId;


    const handleSubmit = async (values: FormValues) => {
        try {
            const payload = {
                gender: values.gender,
                maritalStatus: values.maritalStatus,
                dependentAmount: values.dependentAmount,
                passportIssueDate: values.passportIssueDate,
                passportIssueBranch: values.passportIssueBranch,
                employment: {
                    employmentStatus: values.employmentStatus,
                    employerINN: values.employerINN.toString(),
                    salary: values.salary,
                    position: values.position,
                    workExperienceTotal: values.workExperienceTotal,
                    workExperienceCurrent: values.workExperienceCurrent
                },
                account: "11223344556677889900"
            };

            const response = await axios.put(`http://localhost:8080/application/registration/${applicationId}`, payload);

            if (response.status === 200) {
                localStorage.setItem("isStep2", "true");
                if (values) {
                    isStep2();
                }
                console.log('Request successful');
            }
        } catch (err) {
            console.log('Error submitting form:', err);
        }
    };


    const isStep2true = () => {
    };

    useEffect(() => {
        const step2 = localStorage.getItem("isStep2");
        if (step2) {
            isStep2();
        }
    }, []);

    if (isStep) {
        return <AppSucces/>;
    }

    return (
        <div className="customizeyourcard shadow">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({values, errors, touched, setFieldValue}) => (
                    <Form>
                        <div className='customizeyourcard__content' id="applyForm">
                            <div className='customizeyourcard__firstcontent'>
                                <div className='customizeyourcard__header'>
                                    <div className='customizeyourcard__title'>Customize your card</div>
                                    <div className='customizeyourcard__step'>Step 2 of 5</div>
                                </div>
                            </div>
                        </div>

                        <div className='customizeyourcard__formtitle'>Personal Information</div>
                        <div className='customizeyourcard__formcontent'>
                            {/* Gender */}
                            <div className='form-field'>
                                <Label htmlFor="gender">Gender</Label>
                                <Field as="select" name="gender">
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="maritalStatus">Marital Status</Label>
                                <Field as="select" name="maritalStatus">
                                    <option value="SINGLE">Single</option>
                                    <option value="MARRIED">Married</option>
                                    <option value="DIVORCED">Divorced</option>
                                    <option value="WIDOW_WIDOWER">Widow/Widower</option>
                                </Field>
                                <ErrorMessage name="maritalStatus" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="dependentAmount">Dependent Amount</Label>
                                <Field as="select" name="dependentAmount">
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3+</option>
                                </Field>
                                <ErrorMessage name="dependentAmount" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="passportIssueDate">Passport Issue Date</Label>
                                <Field name="passportIssueDate" type="date"
                                       className={errors.passportIssueDate && touched.passportIssueDate ? "error-input" : ""}/>
                                <ErrorMessage name="passportIssueDate" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="passportIssueBranch">Passport Issue Branch</Label>
                                <Field name="passportIssueBranch" placeholder="123456"
                                       className={errors.passportIssueBranch && touched.passportIssueBranch ? "error-input" : ""}/>
                                <ErrorMessage name="passportIssueBranch" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="employmentStatus">Employment Status</Label>
                                <Field as="select" name="employmentStatus">
                                    <option value="UNEMPLOYED">Unemployed</option>
                                    <option value="SELF_EMPLOYED">Self-employed</option>
                                    <option value="EMPLOYED">Employed</option>
                                    <option value="BUSINESS_OWNER">Business Owner</option>
                                </Field>
                                <ErrorMessage name="employmentStatus" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="employerINN">Employer INN</Label>
                                <Field name="employerINN" placeholder="123456789012"
                                       className={errors.employerINN && touched.employerINN ? "error-input" : ""}/>
                                <ErrorMessage name="employerINN" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="salary">Salary</Label>
                                <Field name="salary" type="number"
                                       className={errors.salary && touched.salary ? "error-input" : ""}/>
                                <ErrorMessage name="salary" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="position">Position</Label>
                                <Field as="select" name="position">
                                    <option value="WORKER">Worker</option>
                                    <option value="MID_MANAGER">Mid Manager</option>
                                    <option value="TOP_MANAGER">Top Manager</option>
                                    <option value="OWNER">Owner</option>
                                </Field>
                                <ErrorMessage name="position" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="workExperienceTotal">Total Work Experience (years)</Label>
                                <Field name="workExperienceTotal" type="number" max="99"
                                       className={errors.workExperienceTotal && touched.workExperienceTotal ? "error-input" : ""}/>
                                <ErrorMessage name="workExperienceTotal" component="div" className="error-message"/>
                            </div>

                            <div className='form-field'>
                                <Label htmlFor="workExperienceCurrent">Current Work Experience (years)</Label>
                                <Field name="workExperienceCurrent" type="number" max="99"
                                       className={errors.workExperienceCurrent && touched.workExperienceCurrent ? "error-input" : ""}/>
                                <ErrorMessage name="workExperienceCurrent" component="div" className="error-message"/>
                            </div>
                        </div>

                        <div className='form__button'>
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const Label = ({children, ...props}: React.HTMLProps<HTMLLabelElement>) => {
    return <label {...props}>{children}</label>;
};

export default ScoringForm;