import localFont from "next/font/local";

export const andron = localFont({
    src: [
        {
            path: "./fonts/andron-mega-corpus-regular.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./fonts/andron-mega-corpus-italic.woff",
            weight: "400",
            style: "italic"
        },
        {
            path: "./fonts/andron-mega-corpus-semibold.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./fonts/andron-mega-corpus-semibold-italic.woff",
            weight: "700",
            style: "italic"
        }
    ]
});

export const calibri = localFont({
    src: [
        {
            path: "./fonts/calibri.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./fonts/calibrii.woff",
            weight: "400",
            style: "italic"
        },
        {
            path: "./fonts/calibrib.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./fonts/calibriz.woff",
            weight: "700",
            style: "italic"
        }
    ]
});