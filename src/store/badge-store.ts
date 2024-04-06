import { create } from "zustand";

export type BadgeStore = {
  id: string;
  name: string;
  email: string;
  eventTitle: string;
  checkInURL: string;
  image?: string;
};

type StateProps = {
  data: BadgeStore;
};

export const useBadgeStore = create((set) => ({}));
