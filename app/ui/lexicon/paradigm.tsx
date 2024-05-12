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
                    case "aj":
                        return <AdjectiveTable lemma={lemma}/>;
                    case "dd":
                    case "dp":
                    case "dq":
                        return <DeterminerTable lemma={lemma}/>;
                    case "vb.a":
                    case "vb.r":
                        return <VerbTable lemma={lemma}/>;
                    case "av":
                        return <AdverbTable lemma={lemma}/>;
                    case "ap":
                    case "fn":
                    case "fw":
                        return <UninflectedTable lemma={lemma}/>;
                    default:
                        return <p>Paradigm undefined for {lemma.id}</p>;
            }})()}
        </div>
    );
}

function AdjectiveTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
            <thead className="pt-3">
                <tr>
                    <th colSpan={3} rowSpan={2}/>
                    <th colSpan={3} className="p-2">singular</th>
                    <th colSpan={3} className="p-2">plural</th>
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
                    <th rowSpan={8} className="bg-gray-50 p-2">positive</th>
                    <th rowSpan={4} className="bg-gray-50 p-2">strong</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----pmsni"/>
                    <FormCell lemma={lemma} morph="----pfsni"/>
                    <FormCell lemma={lemma} morph="----pnsni"/>
                    <FormCell lemma={lemma} morph="----pmpni"/>
                    <FormCell lemma={lemma} morph="----pfpni"/>
                    <FormCell lemma={lemma} morph="----pnpni"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----pmsgi"/>
                    <FormCell lemma={lemma} morph="----pfsgi"/>
                    <FormCell lemma={lemma} morph="----pnsgi"/>
                    <FormCell lemma={lemma} morph="----pxpgi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----pmsdi"/>
                    <FormCell lemma={lemma} morph="----pfsdi"/>
                    <FormCell lemma={lemma} morph="----pnsdi"/>
                    <FormCell lemma={lemma} morph="----pxpdi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----pmsai"/>
                    <FormCell lemma={lemma} morph="----pfsai"/>
                    <FormCell lemma={lemma} morph="----pnsai"/>
                    <FormCell lemma={lemma} morph="----pmpai"/>
                    <FormCell lemma={lemma} morph="----pfpai"/>
                    <FormCell lemma={lemma} morph="----pnpai"/>
                </tr>
                <tr>
                    <th rowSpan={4} className="bg-gray-50 p-2">weak</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----pmsnd"/>
                    <FormCell lemma={lemma} morph="----pfsnd"/>
                    <FormCell lemma={lemma} morph="----pnsnd"/>
                    <FormCell lemma={lemma} morph="----pxpnd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----pmsgd"/>
                    <FormCell lemma={lemma} morph="----pfsgd"/>
                    <FormCell lemma={lemma} morph="----pnsgd"/>
                    <FormCell lemma={lemma} morph="----pxpgd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----pmsdd"/>
                    <FormCell lemma={lemma} morph="----pfsdd"/>
                    <FormCell lemma={lemma} morph="----pnsdd"/>
                    <FormCell lemma={lemma} morph="----pxpdd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----pmsad"/>
                    <FormCell lemma={lemma} morph="----pfsad"/>
                    <FormCell lemma={lemma} morph="----pnsad"/>
                    <FormCell lemma={lemma} morph="----pxpad" colSpan={3}/>
                </tr>
                <tr>
                    <th colSpan={2} rowSpan={4} className="bg-gray-50 p-2">comparative</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----cmsnd"/>
                    <FormCell lemma={lemma} morph="----cfsnd"/>
                    <FormCell lemma={lemma} morph="----cnsnd"/>
                    <FormCell lemma={lemma} morph="----cxpnd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----cmsgd"/>
                    <FormCell lemma={lemma} morph="----cfsgd"/>
                    <FormCell lemma={lemma} morph="----cnsgd"/>
                    <FormCell lemma={lemma} morph="----cxpgd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----cmsdd"/>
                    <FormCell lemma={lemma} morph="----cfsdd"/>
                    <FormCell lemma={lemma} morph="----cnsdd"/>
                    <FormCell lemma={lemma} morph="----cxpdd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----cmsad"/>
                    <FormCell lemma={lemma} morph="----cfsad"/>
                    <FormCell lemma={lemma} morph="----cnsad"/>
                    <FormCell lemma={lemma} morph="----cxpad" colSpan={3}/>
                </tr>
                <tr>
                    <th rowSpan={8} className="bg-gray-50 p-2">superlative</th>
                    <th rowSpan={4} className="bg-gray-50 p-2">strong</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----smsni"/>
                    <FormCell lemma={lemma} morph="----sfsni"/>
                    <FormCell lemma={lemma} morph="----snsni"/>
                    <FormCell lemma={lemma} morph="----smpni"/>
                    <FormCell lemma={lemma} morph="----sfpni"/>
                    <FormCell lemma={lemma} morph="----snpni"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----smsgi"/>
                    <FormCell lemma={lemma} morph="----sfsgi"/>
                    <FormCell lemma={lemma} morph="----snsgi"/>
                    <FormCell lemma={lemma} morph="----sxpgi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----smsdi"/>
                    <FormCell lemma={lemma} morph="----sfsdi"/>
                    <FormCell lemma={lemma} morph="----snsdi"/>
                    <FormCell lemma={lemma} morph="----sxpdi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----smsai"/>
                    <FormCell lemma={lemma} morph="----sfsai"/>
                    <FormCell lemma={lemma} morph="----snsai"/>
                    <FormCell lemma={lemma} morph="----smpai"/>
                    <FormCell lemma={lemma} morph="----sfpai"/>
                    <FormCell lemma={lemma} morph="----snpai"/>
                </tr>
                <tr>
                    <th rowSpan={4} className="bg-gray-50 p-2">weak</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----smsnd"/>
                    <FormCell lemma={lemma} morph="----sfsnd"/>
                    <FormCell lemma={lemma} morph="----snsnd"/>
                    <FormCell lemma={lemma} morph="----sxpnd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----smsgd"/>
                    <FormCell lemma={lemma} morph="----sfsgd"/>
                    <FormCell lemma={lemma} morph="----snsgd"/>
                    <FormCell lemma={lemma} morph="----sxpgd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----smsdd"/>
                    <FormCell lemma={lemma} morph="----sfsdd"/>
                    <FormCell lemma={lemma} morph="----snsdd"/>
                    <FormCell lemma={lemma} morph="----sxpdd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----smsad"/>
                    <FormCell lemma={lemma} morph="----sfsad"/>
                    <FormCell lemma={lemma} morph="----snsad"/>
                    <FormCell lemma={lemma} morph="----sxpad" colSpan={3}/>
                </tr>
                <tr>
                    <th rowSpan={8} className="bg-gray-50 p-2">equative</th>
                    <th rowSpan={4} className="bg-gray-50 p-2">strong</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----emsni"/>
                    <FormCell lemma={lemma} morph="----efsni"/>
                    <FormCell lemma={lemma} morph="----ensni"/>
                    <FormCell lemma={lemma} morph="----empni"/>
                    <FormCell lemma={lemma} morph="----efpni"/>
                    <FormCell lemma={lemma} morph="----enpni"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----emsgi"/>
                    <FormCell lemma={lemma} morph="----efsgi"/>
                    <FormCell lemma={lemma} morph="----ensgi"/>
                    <FormCell lemma={lemma} morph="----expgi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----emsdi"/>
                    <FormCell lemma={lemma} morph="----efsdi"/>
                    <FormCell lemma={lemma} morph="----ensdi"/>
                    <FormCell lemma={lemma} morph="----expdi" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----emsai"/>
                    <FormCell lemma={lemma} morph="----efsai"/>
                    <FormCell lemma={lemma} morph="----ensai"/>
                    <FormCell lemma={lemma} morph="----empai"/>
                    <FormCell lemma={lemma} morph="----efpai"/>
                    <FormCell lemma={lemma} morph="----enpai"/>
                </tr>
                <tr>
                    <th rowSpan={4} className="bg-gray-50 p-2">weak</th>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="----emsnd"/>
                    <FormCell lemma={lemma} morph="----efsnd"/>
                    <FormCell lemma={lemma} morph="----ensnd"/>
                    <FormCell lemma={lemma} morph="----expnd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="----emsgd"/>
                    <FormCell lemma={lemma} morph="----efsgd"/>
                    <FormCell lemma={lemma} morph="----ensgd"/>
                    <FormCell lemma={lemma} morph="----expgd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="----emsdd"/>
                    <FormCell lemma={lemma} morph="----efsdd"/>
                    <FormCell lemma={lemma} morph="----ensdd"/>
                    <FormCell lemma={lemma} morph="----expdd" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="----emsad"/>
                    <FormCell lemma={lemma} morph="----efsad"/>
                    <FormCell lemma={lemma} morph="----ensad"/>
                    <FormCell lemma={lemma} morph="----expad" colSpan={3}/>
                </tr>
            </tbody>
        </table>
    );
}

function AdverbTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
            <tbody className="bg-white">
                <tr>
                    <th className="bg-gray-50 p-2">positive</th>
                    <FormCell lemma={lemma} morph="----p----"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">comparative</th>
                    <FormCell lemma={lemma} morph="----c----"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">superlative</th>
                    <FormCell lemma={lemma} morph="----s----"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">equative</th>
                    <FormCell lemma={lemma} morph="----e----"/>
                </tr>
            </tbody>
        </table>   
    );
}

function DeterminerTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
            <thead className="pt-3">
                <tr>
                    <th rowSpan={2}/>
                    <th colSpan={3}>singular</th>
                    <th colSpan={3}>plural</th>
                </tr>
                <tr>
                    <th>masculine</th>
                    <th>feminine</th>
                    <th>neuter</th>
                    <th>masculine</th>
                    <th>feminine</th>
                    <th>neuter</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr>
                    <th className="bg-gray-50 p-2">nominative</th>
                    <FormCell lemma={lemma} morph="-----msn-"/>
                    <FormCell lemma={lemma} morph="-----fsn-"/>
                    <FormCell lemma={lemma} morph="-----nsn-"/>
                    <FormCell lemma={lemma} morph="-----mpn-"/>
                    <FormCell lemma={lemma} morph="-----fpn-"/>
                    <FormCell lemma={lemma} morph="-----npn-"/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">genitive</th>
                    <FormCell lemma={lemma} morph="-----msg-"/>
                    <FormCell lemma={lemma} morph="-----fsg-"/>
                    <FormCell lemma={lemma} morph="-----nsg-"/>
                    <FormCell lemma={lemma} morph="-----xpg-" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">dative</th>
                    <FormCell lemma={lemma} morph="-----msd-"/>
                    <FormCell lemma={lemma} morph="-----fsd-"/>
                    <FormCell lemma={lemma} morph="-----nsd-"/>
                    <FormCell lemma={lemma} morph="-----xpd-" colSpan={3}/>
                </tr>
                <tr>
                    <th className="bg-gray-50 p-2">accusative</th>
                    <FormCell lemma={lemma} morph="-----msa-"/>
                    <FormCell lemma={lemma} morph="-----fsa-"/>
                    <FormCell lemma={lemma} morph="-----nsa-"/>
                    <FormCell lemma={lemma} morph="-----mpa-"/>
                    <FormCell lemma={lemma} morph="-----fpa-"/>
                    <FormCell lemma={lemma} morph="-----npa-"/>
                </tr>
            </tbody>
        </table>
    );
}

function NounTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
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
        <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
            <tbody className="bg-white">
                <tr>
                    <th className="bg-gray-50 p-2">Not inflected</th>
                    <FormCell lemma={lemma}/>
                </tr>
            </tbody>
        </table>
    );
}

function VerbTable({ lemma }: { lemma: LemmaFull}) {
    return (
        <>
            <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
                <caption className="caption-top">
                    Uninflected forms
                </caption>
                <tbody className="bg-white">
                    <FormRowConditional lemma={lemma} morph="is-------" name="infinitive"/>
                    <FormRowConditional lemma={lemma} morph="it-------" name="preterite infinitive"/>
                    <FormRowConditional lemma={lemma} morph="s--------" name="supinum"/>
                </tbody>
            </table>
            <table className="my-4 grow border-4 rounded-md border-gray-50 bg-gray-50">
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
                "my-4 grow border-4 rounded-md border-gray-50 bg-gray-50",
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

function FormCell({ lemma, morph, colSpan }: { lemma: LemmaFull, morph?: string, colSpan?: number }) {
    const hits = morph ? lemma.forms.filter(form => form.morph == morph) : lemma.forms;
    return (
        <td colSpan={colSpan || 1} className="p-2 border-2 border-gray-50 text-center italic">
            {hits
                .slice().sort((a, b) => a.norm.localeCompare(b.norm))
                .map(form => <span key={form.id}>{form.norm}<br/></span>)}
        </td>
    );
}