import { LemmaFull } from "@/app/lib/definitions"
import clsx from "clsx";

export default function Paradigm({ lemma }: { lemma: LemmaFull }) {
    return (
        <div className="justify-center">
            {(() => {
                switch (lemma.pos) {
                    case "nc.m":
                    case "nc.f":
                    case "nc.n":
                    case "np.m":
                    case "np.f":
                    case "np.n":
                        return <NounTable lemma={lemma}/>;
                    case "vb.a":
                        return <VerbTable lemma={lemma}/>;
                    case "ap":
                        return <UninflectedTable lemma={lemma}/>;
                    default:
                        return <p>Paradigm undefined for {lemma.id}</p>;
            }})()}
        </div>
    );
}

function NounTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow w-full border-4 rounded-md border-gray-50 bg-gray-50">
            <thead className="pt-3">
                <tr>
                    <th rowSpan={2}/>
                    <th colSpan={2}>singular</th>
                    <th colSpan={2}>plural</th>
                </tr>
                <tr>
                    <th className="p-2">indefinite</th>
                    <th className="p-2">definite</th>
                    <th className="p-2">indefinite</th>
                    <th className="p-2">definite</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="------sni"/>
                    <FormCell lemma={lemma} morph="------snd"/>
                    <FormCell lemma={lemma} morph="------pni"/>
                    <FormCell lemma={lemma} morph="------pnd"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="------sgi"/>
                    <FormCell lemma={lemma} morph="------sgd"/>
                    <FormCell lemma={lemma} morph="------pgi"/>
                    <FormCell lemma={lemma} morph="------pgd"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="------sdi"/>
                    <FormCell lemma={lemma} morph="------sdd"/>
                    <FormCell lemma={lemma} morph="------pdi"/>
                    <FormCell lemma={lemma} morph="------pdd"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="------sai"/>
                    <FormCell lemma={lemma} morph="------sad"/>
                    <FormCell lemma={lemma} morph="------pai"/>
                    <FormCell lemma={lemma} morph="------pad"/>
                </tr>
            </tbody>
        </table>
    );
}

function UninflectedTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow w-full border-4 rounded-md border-gray-50 bg-gray-50">
            <thead className="pt-3">
                <tr>
                    <th className="p-2">Not inflected</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr>
                    <FormCell lemma={lemma} morph="---------"/>
                </tr>
            </tbody>
        </table>
    );
}

function VerbTable({ lemma }: { lemma: LemmaFull}) {
    return (
        <>
            <table className="my-4 border-4 rounded-md border-gray-50 bg-gray-50">
                <caption className="caption-top">
                    Uninflected forms
                </caption>
                <tbody className="bg-white">
                    <FormRowConditional lemma={lemma} morph="is-------" name="infinitive"/>
                    <FormRowConditional lemma={lemma} morph="it-------" name="preterite infinitive"/>
                    <FormRowConditional lemma={lemma} morph="s--------" name="supinum"/>
                </tbody>
            </table>
            <table className="my-4 grow w-full border-4 rounded-md border-gray-50 bg-gray-50">
                <caption className="caption-top">
                    Finite forms
                </caption>
                <thead>
                    <tr>
                        <th colSpan={2} rowSpan={2} className="p-2"/>
                        <th colSpan={2} className="p-2">present</th>
                        <th colSpan={2} className="p-2">preterite</th>
                        <th rowSpan={2} className="p-2">imperative</th>
                    </tr>
                    <tr>
                        <th className="p-2">indicative</th>
                        <th className="p-2">optative</th>
                        <th className="p-2">indicative</th>
                        <th className="p-2">optative</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <th rowSpan={3} className="bg-gray-50 p-2">singular</th>
                        <th className="bg-gray-50 p-2">1st</th>
                        <FormCell lemma={lemma} morph="fsi1--s--"/>
                        <FormCell lemma={lemma} morph="fso1--s--"/>
                        <FormCell lemma={lemma} morph="fti1--s--"/>
                        <FormCell lemma={lemma} morph="fto1--s--"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">2nd</th>
                        <FormCell lemma={lemma} morph="fsi2--s--"/>
                        <FormCell lemma={lemma} morph="fso2--s--"/>
                        <FormCell lemma={lemma} morph="fti2--s--"/>
                        <FormCell lemma={lemma} morph="fto2--s--"/>
                        <FormCell lemma={lemma} morph="fsp2--s--"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">3rd</th>
                        <FormCell lemma={lemma} morph="fsi3--s--"/>
                        <FormCell lemma={lemma} morph="fso3--s--"/>
                        <FormCell lemma={lemma} morph="fti3--s--"/>
                        <FormCell lemma={lemma} morph="fto3--s--"/>
                    </tr>
                    <tr>
                        <th rowSpan={3} className="bg-gray-50 p-2">plural</th>
                        <th className="bg-gray-50 p-2">1st</th>
                        <FormCell lemma={lemma} morph="fsi1--p--"/>
                        <FormCell lemma={lemma} morph="fso1--p--"/>
                        <FormCell lemma={lemma} morph="fti1--p--"/>
                        <FormCell lemma={lemma} morph="fto1--p--"/>
                        <FormCell lemma={lemma} morph="fsp1--p--"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">2nd</th>
                        <FormCell lemma={lemma} morph="fsi2--p--"/>
                        <FormCell lemma={lemma} morph="fso2--p--"/>
                        <FormCell lemma={lemma} morph="fti2--p--"/>
                        <FormCell lemma={lemma} morph="fto2--p--"/>
                        <FormCell lemma={lemma} morph="fsp2--p--"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">3rd</th>
                        <FormCell lemma={lemma} morph="fsi3--p--"/>
                        <FormCell lemma={lemma} morph="fso3--p--"/>
                        <FormCell lemma={lemma} morph="fti3--p--"/>
                        <FormCell lemma={lemma} morph="fto3--p--"/>
                    </tr>
                </tbody>
            </table>
            <table className={clsx(
                "my-4 grow w-full border-4 rounded-md border-gray-50 bg-gray-50",
                {
                    "hidden": !lemma.forms.filter(form => form.morph.match(/^r/)).length
                }
            )}>
                <caption className="caption-top">Resultative</caption>
                <thead>
                    <tr>
                        <th colSpan={2} rowSpan={2}/>
                        <th colSpan={3} className="p-2">strong</th>
                        <th colSpan={3} className="p-2">weak</th>
                    </tr>
                    <tr>
                        <th className="p-2">masculine</th>
                        <th className="p-2">feminine</th>
                        <th className="p-2">neuter</th>
                        <th className="p-2">masculine</th>
                        <th className="p-2">feminine</th>
                        <th className="p-2">neuter</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <th rowSpan={4} className="bg-gray-50 p-2">singular</th>
                        <th className="bg-gray-50 p-2">nominative</th>
                        <FormCell lemma={lemma} morph="r---pmsni"/>
                        <FormCell lemma={lemma} morph="r---pfsni"/>
                        <FormCell lemma={lemma} morph="r---pnsni"/>
                        <FormCell lemma={lemma} morph="r---pmsnd"/>
                        <FormCell lemma={lemma} morph="r---pfsnd"/>
                        <FormCell lemma={lemma} morph="r---pnsnd"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">genitive</th>
                        <FormCell lemma={lemma} morph="r---pmsgi"/>
                        <FormCell lemma={lemma} morph="r---pfsgi"/>
                        <FormCell lemma={lemma} morph="r---pnsgi"/>
                        <FormCell lemma={lemma} morph="r---pmsgd"/>
                        <FormCell lemma={lemma} morph="r---pfsgd"/>
                        <FormCell lemma={lemma} morph="r---pnsgd"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">dative</th>
                        <FormCell lemma={lemma} morph="r---pmsdi"/>
                        <FormCell lemma={lemma} morph="r---pfsdi"/>
                        <FormCell lemma={lemma} morph="r---pnsdi"/>
                        <FormCell lemma={lemma} morph="r---pmsdd"/>
                        <FormCell lemma={lemma} morph="r---pfsdd"/>
                        <FormCell lemma={lemma} morph="r---pnsdd"/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">accusative</th>
                        <FormCell lemma={lemma} morph="r---pmsai"/>
                        <FormCell lemma={lemma} morph="r---pfsai"/>
                        <FormCell lemma={lemma} morph="r---pnsai"/>
                        <FormCell lemma={lemma} morph="r---pmsad"/>
                        <FormCell lemma={lemma} morph="r---pfsad"/>
                        <FormCell lemma={lemma} morph="r---pnsad"/>
                    </tr>
                    <tr>
                        <th rowSpan={4} className="bg-gray-50 p-2">plural</th>
                        <th className="bg-gray-50 p-2">nominative</th>
                        <FormCell lemma={lemma} morph="r---pmpni"/>
                        <FormCell lemma={lemma} morph="r---pfpni"/>
                        <FormCell lemma={lemma} morph="r---pnpni"/>
                        <FormCell lemma={lemma} morph="r---pxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">genitive</th>
                        <FormCell lemma={lemma} morph="r---pxpgi" colSpan={3}/>
                        <FormCell lemma={lemma} morph="r---pxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">dative</th>
                        <FormCell lemma={lemma} morph="r---pxpdi" colSpan={3}/>
                        <FormCell lemma={lemma} morph="r---pxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <th className="bg-gray-50 p-2">accusative</th>
                        <FormCell lemma={lemma} morph="r---pmpai"/>
                        <FormCell lemma={lemma} morph="r---pfpai"/>
                        <FormCell lemma={lemma} morph="r---pnpai"/>
                        <FormCell lemma={lemma} morph="r---pxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function FormRowConditional ({ lemma, morph, name }: { lemma: LemmaFull, morph: string, name: string }) {
    const line = (
        <tr>
            <th className="bg-gray-50 p-2">{name}</th>
            <FormCell lemma={lemma} morph={morph}/>
        </tr>
    );
    return lemma.forms.filter(form => form.morph == morph).length ? line : null;
}

function FormCell({ lemma, morph, colSpan }: { lemma: LemmaFull, morph: string, colSpan?: number }) {
    const hits = lemma.forms.filter(form => form.morph == morph);
    return (
        <td colSpan={colSpan || 1} className="p-2 border-2 border-gray-50 text-center italic">
            {hits.map(form => <span key={form.id}>{form.norm}<br/></span>)}
        </td>
    );
}