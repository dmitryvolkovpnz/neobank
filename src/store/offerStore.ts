import {create} from 'zustand';

type OfferT = {
    applicationId?: number;
    requestedAmount: number;
    totalAmount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
};

type OfferStore = {
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

export const offerStore = create<OfferStore>((set) => ({
    offers: [],
    selectedOffer: null,
    isOfferEnabled: false,
    isOffer: false,
    isStep: false,
    isSelected: false,
    setOffers: (offers) => set({offers}),
    selectOffer: (offer) => set({selectedOffer: offer}),
    applyOffer: () => set({isOfferEnabled: true}),
    trueOffer: () => set({isOffer: true}),
    isStep2: () => set({isStep: true}),
    isStep3: () => set({isSelected: true}),
    clearSelectedOffer: () => set({selectedOffer: null}),
}));