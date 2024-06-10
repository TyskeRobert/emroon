export default function FormalAnalysis({ morph } : { morph: string }) {
    if (!morph || morph == "---------") return null;
    const state = (s => {
        switch (s) {
            case "f":
                return "finite";
            case "i":
                return "infinitive";
            case "r":
                return "resultative";
            case "s":
                return "supinum";
            case "p":
                return "participle";
            case "g":
                return "gerundive";
            default:
                return "";
        }
    })(morph[0]);

    const tense = (s => {
        switch (s) {
            case "s":
                return "present";
            case "t":
                return "preterite";
            default:
                return "";
        }
    })(morph[1]);

    const mood = (s => {
        switch (s) {
            case "i":
                return "indicative";
            case "o":
                return "optative";
            case "p":
                return "imperative";
            default:
                return "";
        }
    })(morph[2]);

    const person = (s => {
        switch (s) {
            case "1":
                return "1st";
            case "2":
                return "2nd";
            case "3":
                return "3rd";
            default:
                return "";
        }
    })(morph[3]);

    const grade = (s => {
        switch (s) {
            case "p":
                return "positive";
            case "c":
                return "comparative";
            case "s":
                return "superlative";
            case "e":
                return "equative";
            default:
                return "";
        }
    })(morph[4]);

    const gender = (s => {
        switch (s) {
            case "m":
                return "masculine";
            case "f":
                return "feminine";
            case "n":
                return "neuter";
            case "x":
                return "unspecified";
            default:
                return "";
        }
    })(morph[5]);

    const number = (s => {
        switch (s) {
            case "s":
                return "singular";
            case "p":
                return "plural";
            default:
                return "";
        }
    })(morph[6]);

    const casus = (s => {
        switch (s) {
            case "n":
                return "nominative";
            case "g":
                return "genitive";
            case "d":
                return "dative";
            case "a":
                return "accusative";
            case "x":
                return "unspecified";
            default:
                return "";
        }
    })(morph[7]);

    const specificity = (s => {
        switch (s) {
            case "i":
                return "indefinite";
            case "d":
                return "definite";
            default:
                return "";
        }
    })(morph[8]);

    return (
        <table>
            <tbody>
                <CategoryRow label="State" value={state}/>
                <CategoryRow label="Tense" value={tense}/>
                <CategoryRow label="Mood" value={mood}/>
                <CategoryRow label="Person" value={person}/>
                <CategoryRow label="Grade" value={grade}/>
                <CategoryRow label="Gender" value={gender}/>
                <CategoryRow label="Number" value={number}/>
                <CategoryRow label="Case" value={casus}/>
                <CategoryRow label="Specificity" value={specificity}/>
            </tbody>
        </table>
    )
}

function CategoryRow({ label, value }: { label: string, value: string }) {
    return value ? (
        <tr key={label}>
            <th>{label}:</th>
            <td>{value}</td>
        </tr>
    ) : null;
}