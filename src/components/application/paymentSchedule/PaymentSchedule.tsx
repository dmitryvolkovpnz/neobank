import './paymentschedule.scss'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {offerStore} from "../../../store/offerStore";
import StepMessage from "../stepMessage/StepMessage";

type TPayment = {
    id: number;
    number: number;
    date: string;
    debtPayment: number;
    interestPayment: number;
    remainingDebt: number;
    totalPayment: number;
}

function PaymentSchedule() {
    const applicationId = useParams().applicationId;
    const [paymets, setPaymets] = useState<TPayment[]>([]);
    const {isStep3, isSelected} = offerStore();

    const handleSelect = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/document/${applicationId}`);
            if (response.status === 200) {
                localStorage.setItem("isPaymentSelect", "true");
                isStep3();
                console.log('Request successful');
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {

        const isSelected = localStorage.getItem("isPaymentSelect");
        if (isSelected) {
            isStep3();
        }
        const fetchDocData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/admin/application/${applicationId}`);
                setPaymets(response.data.credit.paymentSchedule);
                console.log('Request successful');
            } catch (error) {
                console.log(error);
            }
        }
        fetchDocData();
    }, []);

    if (isSelected) {
        return (
            <StepMessage/>
        )
    }

    return (
        <div className="container">
            <div className="customizeyourcard shadow">
                <table className="payment-schedule-table">
                    <thead>
                    <tr>
                        <th className="payment-schedule-table__headText">NUMBER</th>
                        <th className="payment-schedule-table__headText">DATE</th>
                        <th className="payment-schedule-table__headText">TOTAL PAYMENT</th>
                        <th className="payment-schedule-table__headText">INTEREST PAYMENT</th>
                        <th className="payment-schedule-table__headText">DEBT PAYMENT</th>
                        <th className="payment-schedule-table__headText">REMAINING DEBT</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paymets.map((payment) => {
                        const formattedDate = new Date(payment.date).toLocaleDateString("ru-RU", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        }).replace(/\./g, '-');

                        return (

                            <tr key={payment.id}>
                                <td className="payment-schedule-table__contentText">{payment.number}</td>
                                <td className="payment-schedule-table__contentText">{formattedDate}</td>
                                <td className="payment-schedule-table__contentText">{payment.totalPayment}</td>
                                <td className="payment-schedule-table__contentText">{payment.interestPayment}</td>
                                <td className="payment-schedule-table__contentText">{payment.debtPayment}</td>
                                <td className="payment-schedule-table__contentText">{payment.remainingDebt}</td>
                            </tr>
                        )
                            ;
                    })}
                    </tbody>
                </table>
                <button className='button' onClick={() => handleSelect()}>
                    Select
                </button>
            </div>
        </div>

    );
}

export default PaymentSchedule;