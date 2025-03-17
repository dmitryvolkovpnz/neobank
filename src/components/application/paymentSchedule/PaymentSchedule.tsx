import './paymentschedule.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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

    useEffect(() => {
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
            </div>
        </div>

    );
}

export default PaymentSchedule;