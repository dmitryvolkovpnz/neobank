import { create } from 'zustand';

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
    setOffers: (offers: OfferT[]) => void;
    selectOffer: (offer: OfferT) => void;
    applyOffer: () => void;
    trueOffer: () => void;
    clearSelectedOffer: () => void;
};

export const offerStore = create<OfferStore>((set) => ({
    offers: [],
    selectedOffer: null,
    isOfferEnabled: false,
    isOffer: false,
    setOffers: (offers) => set({ offers }),
    selectOffer: (offer) => set({ selectedOffer: offer }),
    applyOffer: () => set({ isOfferEnabled: true }),
    trueOffer: () => set({ isOffer: true }),
    clearSelectedOffer: () => set({ selectedOffer: null }),
}));