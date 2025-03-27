import './dosumentsign.scss';
import React, {useState} from "react";
import DocSvg from "../../ui/docSvg/docSvg";
import {useParams} from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../../../utils/const/const';

function DocumentSign() {
    const applicationId = useParams().applicationId;

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/document/${applicationId}/sign`);
            if (response.status === 200) {
                localStorage.setItem("isDocumentSign", "true");
                console.log('Request successful');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='container'>
            <div className="dosumentSign">
                <div className="dosumentSign__title">Signing of documents</div>
                <div className="dosumentSign__text">
                    Information on interest rates under bank deposit agreements with individuals. Center for
                    Corporate
                    Information Disclosure. Information of
                    a professional participant in the securities market. Information about persons under whose
                    control
                    or significant influence the Partner
                    Banks are. By leaving an application, you agree to the processing of personal data, obtaining
                    information, obtaining access to a credit
                    history, using an analogue of a handwritten signature, an offer, a policy regarding the
                    processing
                    of personal data, a form of consent to the
                    processing of personal data.
                </div>
                <div className="dosumentSign__content">
                    <div className='dosumentSign__img'>
                        <DocSvg/>
                    </div>
                    <span>Information on your card</span>
                </div>
                <div className="dosumentSign__btngroup">
                    <label className="dosumentSign__checkbox">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        I agree
                    </label>

                    <button
                        className='button dosumentSign__btn'
                        onClick={() => handleSubmit()}
                        disabled={!isChecked}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DocumentSign;