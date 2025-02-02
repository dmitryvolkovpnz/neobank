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
    setOffers: (offers: OfferT[]) => void;
    selectOffer: (offer: OfferT) => void;
    applyOffer: () => void;
    clearSelectedOffer: () => void;
};

export const offerStore = create<OfferStore>((set) => ({
    offers: [],
    selectedOffer: null,
    isOfferEnabled: false,
    setOffers: (offers) => set({ offers }),
    selectOffer: (offer) => set({ selectedOffer: offer }),
    applyOffer: () => set({ isOfferEnabled: true }),
    clearSelectedOffer: () => set({ selectedOffer: null }),
}));