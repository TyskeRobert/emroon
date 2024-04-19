import localFont from "next/font/local";

export const andron = localFont({
    src: [
        {
            path: "./webfonts/andron-mega-corpus-regular.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./webfonts/andron-mega-corpus-italic.woff",
            weight: "400",
            style: "italic"
        },
        {
            path: "./webfonts/andron-mega-corpus-semibold.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./webfonts/andron-mega-corpus-semibold-italic.woff",
            weight: "700",
            style: "italic"
        }
    ]
});

export const calibri = localFont({
    src: [
        {
            path: "./webfonts/calibri.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "./webfonts/calibrii.woff",
            weight: "400",
            style: "italic"
        },
        {
            path: "./webfonts/calibrib.woff",
            weight: "700",
            style: "normal"
        },
        {
            path: "./webfonts/calibriz.woff",
            weight: "700",
            style: "italic"
        }
    ]
});