export type TPayment = {
    id: number;
    number: number;
    date: string;
    debtPayment: number;
    interestPayment: number;
    remainingDebt: number;
    totalPayment: number;
}

export type TItem = {
    title: string;
    urlToImage: string;
    url: string;
    description: string;
}

export type OfferT = {
    applicationId?: number;
    requestedAmount: number;
    totalAmount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
};

export type OfferStore = {
    offers: OfferT[];
    selectedOffer: OfferT | null;
    isOfferEnabled: boolean;
    isOffer: boolean;
    isStep: boolean;
    isSelected: boolean;
    setOffers: (offers: OfferT[]) => void;
    selectOffer: (offer: OfferT) => void;
    applyOffer: () => void;
    trueOffer: () => void;
    isStep2: () => void;
    isStep3: () => void;
    clearSelectedOffer: () => void;
};