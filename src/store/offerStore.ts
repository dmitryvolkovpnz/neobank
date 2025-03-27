import {create} from 'zustand';
import { OfferStore } from '../utils/types';

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