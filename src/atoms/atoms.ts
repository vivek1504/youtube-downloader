import { atom } from "recoil";

export const titleAtom = atom({
    key : "titleAtom",
    default : ""
});

export const thumbnailAtom = atom({
    key : "thumbnailAtom",
    default : ""
});

export const loadingAtom = atom({
    key : "loadingAtom",
    default : false
})

export const urlAtom = atom({
    key : "urlAtom",
    default : ""
})