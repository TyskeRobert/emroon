export const partsOfSpeech = new Map([
    ["aj", "adjective"],
    ["ap", "apposition"],
    ["av", "general adverb"],
    ["cc", "conjunction"],
    ["cs", "subjunction"],
    ["dd", "demonstrative determiner"],
    ["dp", "possessive determiner"],
    ["dq", "quantifier"],
    ["ex", "exclamation"],
    ["fn", "foreign name"],
    ["fw", "foreign word"],
    ["im", "infinitive marker"],
    ["nc.f", "feminine noun"],
    ["nc.m", "masculine noun"],
    ["nc.n", "neuter noun"],
    ["np.f", "feminine name"],
    ["np.m", "masculine name"],
    ["np.n", "neuter name"],
    ["pe", "personal pronoun"],
    ["pi", "indefinite pronoun"],
    ["pq", "interrogative pronoun"],
    ["vb.a", "active verb"],
    ["vb.r", "reflexive verb"]
]);

const states = new Map([
    ["f", {short: "fin", full: "finite"}],
    ["i", {short: "inf", full: "infinitive"}],
    ["s", {short: "spn", full: "supinum"}],
    ["r", {short: "res", full: "resultative"}],
    ["p", {short: "ptc", full: "participle"}],
    ["g", {short: "ger", full: "gerundive"}]
]);

const tenses = new Map([
    ["s", {short: "prs", full: "present"}],
    ["t", {short: "prt", full: "preterite"}]
]);

const moods = new Map([
    ["i", {short: "ind", full: "indicative"}],
    ["o", {short: "opt", full: "optative"}],
    ["p", {short: "ipv", full: "imperative"}]
]);

const grades = new Map([
    ["p", {short: "pos", full: "positive"}],
    ["c", {short: "com", full: "comparative"}],
    ["s", {short: "sup", full: "superlative"}],
    ["e", {short: "equ", full: "equative"}]
]);

const genders = new Map([
    ["m", {short: "m", full: "masculine"}],
    ["f", {short: "f", full: "feminine"}],
    ["n", {short: "n", full: "neuter"}],
    ["x", {short: "x", full: "unspecified"}]
]);

const numbers = new Map([
    ["s", {short: "sg", full: "singular"}],
    ["p", {short: "pl", full: "plural"}]
]);

const cases = new Map([
    ["n", {short: "nom", full: "nominative"}],
    ["g", {short: "gen", full: "genitive"}],
    ["d", {short: "dat", full: "dative"}],
    ["a", {short: "acc", full: "accusative"}],
    ["x", {short: "x", full: "unspecified"}]
]);

const nominalSpecificities = new Map([
    ["i", {short: "idt", full: "indetermined"}],
    ["d", {short: "det", full: "determined"}]
]);

const adjectivalSpecificities = new Map([
    ["i", {short: "st", full: "strong"}],
    ["d", {short: "wk", full: "weak"}]
]);

export function prettifyMorph(pos: string, morph: string): string {
    const a = [];
    switch (pos) {
        case "aj":
            if (morph[4] != "p")
                a.push(grades.get(morph[4])?.short);
            a.push(cases.get(morph[7])?.short);
            a.push(numbers.get(morph[6])?.short);
            if (morph[5] != "x")
                a.push(genders.get(morph[5])?.short);
            if (morph[8] == "d" && morph[4] != "c")
                a.push(adjectivalSpecificities.get(morph[8])?.short);
            break;
        case "av":
            a.push(grades.get(morph[4])?.short);
            break;
        case "dd":
        case "dq":
        case "pi":
        case "pq":
            if (morph[7] != "x")
                a.push(cases.get(morph[7])?.short);
            a.push(numbers.get(morph[6])?.short);
            if (morph[5] != "x")
                a.push(genders.get(morph[5])?.short);
            break;
        case "nc.m":
        case "nc.f":
        case "nc.n":
        case "np.m":
        case "np.f":
        case "np.n":
            a.push(cases.get(morph[7])?.short);
            a.push(numbers.get(morph[6])?.short);
            if (morph[8] == "d")
                a.push(nominalSpecificities.get(morph[8])?.short);
            break;
        case "pe":
            a.push(cases.get(morph[7])?.short);
            break;
        case "vb.a":
        case "vb.r":
            if (morph[0] != "f")
                a.push(states.get(morph[0])?.short);
            switch (morph[0]) {
                case "f":
                    a.push(morph[3] + numbers.get(morph[6])?.short);
                    a.push(moods.get(morph[2])?.short);
                    if (morph[2] != "p")
                        a.push(tenses.get(morph[1])?.short);
                    break;
                case "i":
                    if (morph[1] == "t")
                        a.push(tenses.get(morph[1])?.short);
                    break;
                case "r":
                    a.push(prettifyMorph("aj", morph));
                    break;
                case "p":
                case "g":
                    a.push(cases.get(morph[7])?.short);
                    a.push(numbers.get(morph[6])?.short);
                    if (morph[5] != "x")
                        a.push(genders.get(morph[5])?.short);
                    break;
            }
            break;
        case "ap":
        case "cc":
        case "cs":
        case "ex":
        case "fn":
        case "fw":
        case "im":
            return "-";
        default:
            return morph || "";
    }
    return a.join(".");
}