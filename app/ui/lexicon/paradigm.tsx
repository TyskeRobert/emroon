import { LemmaFull } from "@/app/lib/definitions"
import clsx from "clsx";
import { FormLink } from "@/app/ui/links";

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
                    case "pi":
                    case "pq":
                        return <DeterminerTable lemma={lemma}/>;
                    case "pe":
                        return <PronounTable lemma={lemma}/>;
                    case "vb.a":
                    case "vb.r":
                        return <VerbTable lemma={lemma}/>;
                    case "av":
                        return <AdverbTable lemma={lemma}/>;
                    case "ap":
                    case "cc":
                    case "cs":
                    case "ex":
                    case "fn":
                    case "fw":
                    case "im":
                        return <UninflectedTable lemma={lemma}/>;
                    default:
                        return <p>Paradigm undefined for {lemma.id}</p>;
            }})()}
        </div>
    );
}

function AdjectiveTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <>
            <ParadigmTable 
                condition={/^----p....$/} 
                lemma={lemma} 
                caption="Positive"
                size="full"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2} rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="strong" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----pmsni"/>
                        <FormCell lemma={lemma} morph="----pfsni"/>
                        <FormCell lemma={lemma} morph="----pnsni"/>
                        <FormCell lemma={lemma} morph="----pmpni"/>
                        <FormCell lemma={lemma} morph="----pfpni"/>
                        <FormCell lemma={lemma} morph="----pnpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----pmsgi"/>
                        <FormCell lemma={lemma} morph="----pfsgi"/>
                        <FormCell lemma={lemma} morph="----pnsgi"/>
                        <FormCell lemma={lemma} morph="----pxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----pmsdi"/>
                        <FormCell lemma={lemma} morph="----pfsdi"/>
                        <FormCell lemma={lemma} morph="----pnsdi"/>
                        <FormCell lemma={lemma} morph="----pxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----pmsai"/>
                        <FormCell lemma={lemma} morph="----pfsai"/>
                        <FormCell lemma={lemma} morph="----pnsai"/>
                        <FormCell lemma={lemma} morph="----pmpai"/>
                        <FormCell lemma={lemma} morph="----pfpai"/>
                        <FormCell lemma={lemma} morph="----pnpai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="weak" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----pmsnd"/>
                        <FormCell lemma={lemma} morph="----pfsnd"/>
                        <FormCell lemma={lemma} morph="----pnsnd"/>
                        <FormCell lemma={lemma} morph="----pxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----pmsgd"/>
                        <FormCell lemma={lemma} morph="----pfsgd"/>
                        <FormCell lemma={lemma} morph="----pnsgd"/>
                        <FormCell lemma={lemma} morph="----pxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----pmsdd"/>
                        <FormCell lemma={lemma} morph="----pfsdd"/>
                        <FormCell lemma={lemma} morph="----pnsdd"/>
                        <FormCell lemma={lemma} morph="----pxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----pmsad"/>
                        <FormCell lemma={lemma} morph="----pfsad"/>
                        <FormCell lemma={lemma} morph="----pnsad"/>
                        <FormCell lemma={lemma} morph="----pxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----p...i$/} 
                lemma={lemma} 
                caption="Strong positive" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----pmsni"/>
                        <FormCell lemma={lemma} morph="----pfsni"/>
                        <FormCell lemma={lemma} morph="----pnsni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----pmsgi"/>
                        <FormCell lemma={lemma} morph="----pfsgi"/>
                        <FormCell lemma={lemma} morph="----pnsgi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----pmsdi"/>
                        <FormCell lemma={lemma} morph="----pfsdi"/>
                        <FormCell lemma={lemma} morph="----pnsdi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----pmsai"/>
                        <FormCell lemma={lemma} morph="----pfsai"/>
                        <FormCell lemma={lemma} morph="----pnsai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----pmpni"/>
                        <FormCell lemma={lemma} morph="----pfpni"/>
                        <FormCell lemma={lemma} morph="----pnpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----pxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----pxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----pmpai"/>
                        <FormCell lemma={lemma} morph="----pfpai"/>
                        <FormCell lemma={lemma} morph="----pnpai"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----p...d$/} 
                lemma={lemma} 
                caption="Weak positive" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----pmsnd"/>
                        <FormCell lemma={lemma} morph="----pfsnd"/>
                        <FormCell lemma={lemma} morph="----pnsnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----pmsgd"/>
                        <FormCell lemma={lemma} morph="----pfsgd"/>
                        <FormCell lemma={lemma} morph="----pnsgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----pmsdd"/>
                        <FormCell lemma={lemma} morph="----pfsdd"/>
                        <FormCell lemma={lemma} morph="----pnsdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----pmsad"/>
                        <FormCell lemma={lemma} morph="----pfsad"/>
                        <FormCell lemma={lemma} morph="----pnsad"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----pxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----pxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----pxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----pxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----c....$/} 
                lemma={lemma} 
                caption="Comparative"
                size="full"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" rowSpan={2}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----cmsnd"/>
                        <FormCell lemma={lemma} morph="----cfsnd"/>
                        <FormCell lemma={lemma} morph="----cnsnd"/>
                        <FormCell lemma={lemma} morph="----cxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----cmsgd"/>
                        <FormCell lemma={lemma} morph="----cfsgd"/>
                        <FormCell lemma={lemma} morph="----cnsgd"/>
                        <FormCell lemma={lemma} morph="----cxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----cmsdd"/>
                        <FormCell lemma={lemma} morph="----cfsdd"/>
                        <FormCell lemma={lemma} morph="----cnsdd"/>
                        <FormCell lemma={lemma} morph="----cxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----cmsad"/>
                        <FormCell lemma={lemma} morph="----cfsad"/>
                        <FormCell lemma={lemma} morph="----cnsad"/>
                        <FormCell lemma={lemma} morph="----cxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable
                condition={/^----c....$/} 
                lemma={lemma} 
                caption="Comparative"
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----cmsnd"/>
                        <FormCell lemma={lemma} morph="----cfsnd"/>
                        <FormCell lemma={lemma} morph="----cnsnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----cmsgd"/>
                        <FormCell lemma={lemma} morph="----cfsgd"/>
                        <FormCell lemma={lemma} morph="----cnsgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----cmsdd"/>
                        <FormCell lemma={lemma} morph="----cfsdd"/>
                        <FormCell lemma={lemma} morph="----cnsdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----cmsad"/>
                        <FormCell lemma={lemma} morph="----cfsad"/>
                        <FormCell lemma={lemma} morph="----cnsad"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----cxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----cxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----cxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----cxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----s....$/} 
                lemma={lemma} 
                caption="Superlative"
                size="full"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2} rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="strong" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----smsni"/>
                        <FormCell lemma={lemma} morph="----sfsni"/>
                        <FormCell lemma={lemma} morph="----snsni"/>
                        <FormCell lemma={lemma} morph="----smpni"/>
                        <FormCell lemma={lemma} morph="----sfpni"/>
                        <FormCell lemma={lemma} morph="----snpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----smsgi"/>
                        <FormCell lemma={lemma} morph="----sfsgi"/>
                        <FormCell lemma={lemma} morph="----snsgi"/>
                        <FormCell lemma={lemma} morph="----sxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----smsdi"/>
                        <FormCell lemma={lemma} morph="----sfsdi"/>
                        <FormCell lemma={lemma} morph="----snsdi"/>
                        <FormCell lemma={lemma} morph="----sxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----smsai"/>
                        <FormCell lemma={lemma} morph="----sfsai"/>
                        <FormCell lemma={lemma} morph="----snsai"/>
                        <FormCell lemma={lemma} morph="----smpai"/>
                        <FormCell lemma={lemma} morph="----sfpai"/>
                        <FormCell lemma={lemma} morph="----snpai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="weak" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----smsnd"/>
                        <FormCell lemma={lemma} morph="----sfsnd"/>
                        <FormCell lemma={lemma} morph="----snsnd"/>
                        <FormCell lemma={lemma} morph="----sxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----smsgd"/>
                        <FormCell lemma={lemma} morph="----sfsgd"/>
                        <FormCell lemma={lemma} morph="----snsgd"/>
                        <FormCell lemma={lemma} morph="----sxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----smsdd"/>
                        <FormCell lemma={lemma} morph="----sfsdd"/>
                        <FormCell lemma={lemma} morph="----snsdd"/>
                        <FormCell lemma={lemma} morph="----sxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----smsad"/>
                        <FormCell lemma={lemma} morph="----sfsad"/>
                        <FormCell lemma={lemma} morph="----snsad"/>
                        <FormCell lemma={lemma} morph="----sxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----s...i$/} 
                lemma={lemma} 
                caption="Strong superlative" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----smsni"/>
                        <FormCell lemma={lemma} morph="----sfsni"/>
                        <FormCell lemma={lemma} morph="----snsni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----smsgi"/>
                        <FormCell lemma={lemma} morph="----sfsgi"/>
                        <FormCell lemma={lemma} morph="----snsgi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----smsdi"/>
                        <FormCell lemma={lemma} morph="----sfsdi"/>
                        <FormCell lemma={lemma} morph="----snsdi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----smsai"/>
                        <FormCell lemma={lemma} morph="----sfsai"/>
                        <FormCell lemma={lemma} morph="----snsai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----smpni"/>
                        <FormCell lemma={lemma} morph="----sfpni"/>
                        <FormCell lemma={lemma} morph="----snpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----sxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----sxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----smpai"/>
                        <FormCell lemma={lemma} morph="----sfpai"/>
                        <FormCell lemma={lemma} morph="----snpai"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----s...d$/} 
                lemma={lemma} 
                caption="Weak superlative" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----smsnd"/>
                        <FormCell lemma={lemma} morph="----sfsnd"/>
                        <FormCell lemma={lemma} morph="----snsnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----smsgd"/>
                        <FormCell lemma={lemma} morph="----sfsgd"/>
                        <FormCell lemma={lemma} morph="----snsgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----smsdd"/>
                        <FormCell lemma={lemma} morph="----sfsdd"/>
                        <FormCell lemma={lemma} morph="----snsdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----smsad"/>
                        <FormCell lemma={lemma} morph="----sfsad"/>
                        <FormCell lemma={lemma} morph="----snsad"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----sxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----sxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----sxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----sxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----e....$/} 
                lemma={lemma} 
                caption="Equative"
                size="full"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2} rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="strong" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----emsni"/>
                        <FormCell lemma={lemma} morph="----efsni"/>
                        <FormCell lemma={lemma} morph="----ensni"/>
                        <FormCell lemma={lemma} morph="----empni"/>
                        <FormCell lemma={lemma} morph="----efpni"/>
                        <FormCell lemma={lemma} morph="----enpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----emsgi"/>
                        <FormCell lemma={lemma} morph="----efsgi"/>
                        <FormCell lemma={lemma} morph="----ensgi"/>
                        <FormCell lemma={lemma} morph="----expgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----emsdi"/>
                        <FormCell lemma={lemma} morph="----efsdi"/>
                        <FormCell lemma={lemma} morph="----ensdi"/>
                        <FormCell lemma={lemma} morph="----expdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----emsai"/>
                        <FormCell lemma={lemma} morph="----efsai"/>
                        <FormCell lemma={lemma} morph="----ensai"/>
                        <FormCell lemma={lemma} morph="----empai"/>
                        <FormCell lemma={lemma} morph="----efpai"/>
                        <FormCell lemma={lemma} morph="----enpai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="weak" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="----emsnd"/>
                        <FormCell lemma={lemma} morph="----efsnd"/>
                        <FormCell lemma={lemma} morph="----ensnd"/>
                        <FormCell lemma={lemma} morph="----expnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="----emsgd"/>
                        <FormCell lemma={lemma} morph="----efsgd"/>
                        <FormCell lemma={lemma} morph="----ensgd"/>
                        <FormCell lemma={lemma} morph="----expgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="----emsdd"/>
                        <FormCell lemma={lemma} morph="----efsdd"/>
                        <FormCell lemma={lemma} morph="----ensdd"/>
                        <FormCell lemma={lemma} morph="----expdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="----emsad"/>
                        <FormCell lemma={lemma} morph="----efsad"/>
                        <FormCell lemma={lemma} morph="----ensad"/>
                        <FormCell lemma={lemma} morph="----expad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----e...i$/} 
                lemma={lemma} 
                caption="Strong equative" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----emsni"/>
                        <FormCell lemma={lemma} morph="----efsni"/>
                        <FormCell lemma={lemma} morph="----ensni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----emsgi"/>
                        <FormCell lemma={lemma} morph="----efsgi"/>
                        <FormCell lemma={lemma} morph="----ensgi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----emsdi"/>
                        <FormCell lemma={lemma} morph="----efsdi"/>
                        <FormCell lemma={lemma} morph="----ensdi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----emsai"/>
                        <FormCell lemma={lemma} morph="----efsai"/>
                        <FormCell lemma={lemma} morph="----ensai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----empni"/>
                        <FormCell lemma={lemma} morph="----efpni"/>
                        <FormCell lemma={lemma} morph="----enpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----expgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----expdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----empai"/>
                        <FormCell lemma={lemma} morph="----efpai"/>
                        <FormCell lemma={lemma} morph="----enpai"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                condition={/^----e...d$/} 
                lemma={lemma} 
                caption="Weak equative" 
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----emsnd"/>
                        <FormCell lemma={lemma} morph="----efsnd"/>
                        <FormCell lemma={lemma} morph="----ensnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----emsgd"/>
                        <FormCell lemma={lemma} morph="----efsgd"/>
                        <FormCell lemma={lemma} morph="----ensgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----emsdd"/>
                        <FormCell lemma={lemma} morph="----efsdd"/>
                        <FormCell lemma={lemma} morph="----ensdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----emsad"/>
                        <FormCell lemma={lemma} morph="----efsad"/>
                        <FormCell lemma={lemma} morph="----ensad"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="----expnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="----expgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="----expdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="----expad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
        </>
    );
}

function AdverbTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <>
            <ParadigmTable size="full">
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="positive"/>
                        <FormCell lemma={lemma} morph="----p----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="comparative"/>
                        <FormCell lemma={lemma} morph="----c----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="superlative"/>
                        <FormCell lemma={lemma} morph="----s----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="equative"/>
                        <FormCell lemma={lemma} morph="----e----"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable size="small">
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="pos"/>
                        <FormCell lemma={lemma} morph="----p----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="com"/>
                        <FormCell lemma={lemma} morph="----c----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="sup"/>
                        <FormCell lemma={lemma} morph="----s----"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="equ"/>
                        <FormCell lemma={lemma} morph="----e----"/>
                    </tr>
                </tbody>
            </ParadigmTable>
        </>
    );
}

function DeterminerTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <>
            <ParadigmTable lemma={lemma} condition={/^-----xpx-$/}>
                <tbody className="bg-white">
                    <tr>
                        <th className="bg-gray-50 p-2">Not inflected</th>
                        <FormCell lemma={lemma} morph="-----xpx-"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                lemma={lemma} 
                condition={/^-----xpx-$/} 
                exclude={true}
                size="full"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="-----msn-"/>
                        <FormCell lemma={lemma} morph="-----fsn-"/>
                        <FormCell lemma={lemma} morph="-----nsn-"/>
                        <FormCell lemma={lemma} morph="-----mpn-"/>
                        <FormCell lemma={lemma} morph="-----fpn-"/>
                        <FormCell lemma={lemma} morph="-----npn-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="-----msg-"/>
                        <FormCell lemma={lemma} morph="-----fsg-"/>
                        <FormCell lemma={lemma} morph="-----nsg-"/>
                        <FormCell lemma={lemma} morph="-----xpg-" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="-----msd-"/>
                        <FormCell lemma={lemma} morph="-----fsd-"/>
                        <FormCell lemma={lemma} morph="-----nsd-"/>
                        <FormCell lemma={lemma} morph="-----xpd-" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="-----msa-"/>
                        <FormCell lemma={lemma} morph="-----fsa-"/>
                        <FormCell lemma={lemma} morph="-----nsa-"/>
                        <FormCell lemma={lemma} morph="-----mpa-"/>
                        <FormCell lemma={lemma} morph="-----fpa-"/>
                        <FormCell lemma={lemma} morph="-----npa-"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable
                lemma={lemma} 
                condition={/^-----xpx-$/} 
                exclude={true}
                size="small"
            >
                <thead className="pt-3">
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="-----msn-"/>
                        <FormCell lemma={lemma} morph="-----fsn-"/>
                        <FormCell lemma={lemma} morph="-----nsn-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="-----msg-"/>
                        <FormCell lemma={lemma} morph="-----fsg-"/>
                        <FormCell lemma={lemma} morph="-----nsg-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="-----msd-"/>
                        <FormCell lemma={lemma} morph="-----fsd-"/>
                        <FormCell lemma={lemma} morph="-----nsd-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="-----msa-"/>
                        <FormCell lemma={lemma} morph="-----fsa-"/>
                        <FormCell lemma={lemma} morph="-----nsa-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="-----mpn-"/>
                        <FormCell lemma={lemma} morph="-----fpn-"/>
                        <FormCell lemma={lemma} morph="-----npn-"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="-----xpg-" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="-----xpd-" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="-----mpa-"/>
                        <FormCell lemma={lemma} morph="-----fpa-"/>
                        <FormCell lemma={lemma} morph="-----npa-"/>
                    </tr>
                </tbody>
            </ParadigmTable>
        </>
    );
}

function NounTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <ParadigmTable>
            <thead className="pt-3">
                <tr>
                    <ParadigmHead rowSpan={2}/>
                    <ParadigmHead label="singular" colSpan={2}/>
                    <ParadigmHead label="plural" colSpan={2}/>
                </tr>
                <tr>
                    <ParadigmHead label="indefinite"/>
                    <ParadigmHead label="definite"/>
                    <ParadigmHead label="indefinite"/>
                    <ParadigmHead label="definite"/>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr>
                    <ParadigmHead label="nominative"/>
                    <FormCell lemma={lemma} morph="------sni"/>
                    <FormCell lemma={lemma} morph="------snd"/>
                    <FormCell lemma={lemma} morph="------pni"/>
                    <FormCell lemma={lemma} morph="------pnd"/>
                </tr>
                <tr>
                    <ParadigmHead label="genitive"/>
                    <FormCell lemma={lemma} morph="------sgi"/>
                    <FormCell lemma={lemma} morph="------sgd"/>
                    <FormCell lemma={lemma} morph="------pgi"/>
                    <FormCell lemma={lemma} morph="------pgd"/>
                </tr>
                <tr>
                    <ParadigmHead label="dative"/>
                    <FormCell lemma={lemma} morph="------sdi"/>
                    <FormCell lemma={lemma} morph="------sdd"/>
                    <FormCell lemma={lemma} morph="------pdi"/>
                    <FormCell lemma={lemma} morph="------pdd"/>
                </tr>
                <tr>
                    <ParadigmHead label="accusative"/>
                    <FormCell lemma={lemma} morph="------sai"/>
                    <FormCell lemma={lemma} morph="------sad"/>
                    <FormCell lemma={lemma} morph="------pai"/>
                    <FormCell lemma={lemma} morph="------pad"/>
                </tr>
            </tbody>
        </ParadigmTable>
    );
}

function PronounTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <ParadigmTable>
            <tbody className="bg-white">
                <tr>
                    <ParadigmHead label="nominative"/>
                    <FormCell lemma={lemma} morph="-------n-"/>
                </tr>
                <tr>
                    <ParadigmHead label="genitive"/>
                    <FormCell lemma={lemma} morph="-------g-"/>
                </tr>
                <tr>
                    <ParadigmHead label="dative"/>
                    <FormCell lemma={lemma} morph="-------d-"/>
                </tr>
                <tr>
                    <ParadigmHead label="accusative"/>
                    <FormCell lemma={lemma} morph="-------a-"/>
                </tr>
            </tbody>
        </ParadigmTable>
    );
}

function UninflectedTable({ lemma }: { lemma: LemmaFull }) {
    return (
        <ParadigmTable>
            <tbody className="bg-white">
                <tr>
                    <ParadigmHead label="Not inflected"/>
                    <FormCell lemma={lemma}/>
                </tr>
            </tbody>
        </ParadigmTable>
    );
}

function VerbTable({ lemma }: { lemma: LemmaFull}) {
    return (
        <>
            <ParadigmTable caption="Uninflected forms">
                <tbody className="bg-white">
                    <FormRowConditional lemma={lemma} morph="is-------" name="infinitive"/>
                    <FormRowConditional lemma={lemma} morph="it-------" name="preterite infinitive"/>
                    <FormRowConditional lemma={lemma} morph="s--------" name="supinum"/>
                </tbody>
            </ParadigmTable>
            <ParadigmTable caption="Finite forms" size="full">
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2} rowSpan={2}/>
                        <ParadigmHead label="present" colSpan={2}/>
                        <ParadigmHead label="preterite" colSpan={2}/>
                        <ParadigmHead label="imperative" rowSpan={2}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="indicative"/>
                        <ParadigmHead label="optative"/>
                        <ParadigmHead label="indicative"/>
                        <ParadigmHead label="optative"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="singular" rowSpan={3}/>
                        <ParadigmHead label="1st"/>
                        <FormCell lemma={lemma} morph="fsi1--s--"/>
                        <FormCell lemma={lemma} morph="fso1--s--"/>
                        <FormCell lemma={lemma} morph="fti1--s--"/>
                        <FormCell lemma={lemma} morph="fto1--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2nd"/>
                        <FormCell lemma={lemma} morph="fsi2--s--"/>
                        <FormCell lemma={lemma} morph="fso2--s--"/>
                        <FormCell lemma={lemma} morph="fti2--s--"/>
                        <FormCell lemma={lemma} morph="fto2--s--"/>
                        <FormCell lemma={lemma} morph="fsp2--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3rd"/>
                        <FormCell lemma={lemma} morph="fsi3--s--"/>
                        <FormCell lemma={lemma} morph="fso3--s--"/>
                        <FormCell lemma={lemma} morph="fti3--s--"/>
                        <FormCell lemma={lemma} morph="fto3--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="plural" rowSpan={3}/>
                        <ParadigmHead label="1st"/>
                        <FormCell lemma={lemma} morph="fsi1--p--"/>
                        <FormCell lemma={lemma} morph="fso1--p--"/>
                        <FormCell lemma={lemma} morph="fti1--p--"/>
                        <FormCell lemma={lemma} morph="fto1--p--"/>
                        <FormCell lemma={lemma} morph="fsp1--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2nd"/>
                        <FormCell lemma={lemma} morph="fsi2--p--"/>
                        <FormCell lemma={lemma} morph="fso2--p--"/>
                        <FormCell lemma={lemma} morph="fti2--p--"/>
                        <FormCell lemma={lemma} morph="fto2--p--"/>
                        <FormCell lemma={lemma} morph="fsp2--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3rd"/>
                        <FormCell lemma={lemma} morph="fsi3--p--"/>
                        <FormCell lemma={lemma} morph="fso3--p--"/>
                        <FormCell lemma={lemma} morph="fti3--p--"/>
                        <FormCell lemma={lemma} morph="fto3--p--"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable caption="Present" size="small">
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="ind"/>
                        <ParadigmHead label="opt"/>
                        <ParadigmHead label="ipv"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={3}/>
                        <ParadigmHead label="1"/>
                        <FormCell lemma={lemma} morph="fsi1--s--"/>
                        <FormCell lemma={lemma} morph="fso1--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2"/>
                        <FormCell lemma={lemma} morph="fsi2--s--"/>
                        <FormCell lemma={lemma} morph="fso2--s--"/>
                        <FormCell lemma={lemma} morph="fsp2--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3"/>
                        <FormCell lemma={lemma} morph="fsi3--s--"/>
                        <FormCell lemma={lemma} morph="fso3--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={3}/>
                        <ParadigmHead label="1"/>
                        <FormCell lemma={lemma} morph="fsi1--p--"/>
                        <FormCell lemma={lemma} morph="fso1--p--"/>
                        <FormCell lemma={lemma} morph="fsp1--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2"/>
                        <FormCell lemma={lemma} morph="fsi2--p--"/>
                        <FormCell lemma={lemma} morph="fso2--p--"/>
                        <FormCell lemma={lemma} morph="fsp2--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3"/>
                        <FormCell lemma={lemma} morph="fsi3--p--"/>
                        <FormCell lemma={lemma} morph="fso3--p--"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable caption="Preterite" size="small">
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="ind"/>
                        <ParadigmHead label="opt"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={3}/>
                        <ParadigmHead label="1"/>
                        <FormCell lemma={lemma} morph="fti1--s--"/>
                        <FormCell lemma={lemma} morph="fto1--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2"/>
                        <FormCell lemma={lemma} morph="fti2--s--"/>
                        <FormCell lemma={lemma} morph="fto2--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3"/>
                        <FormCell lemma={lemma} morph="fti3--s--"/>
                        <FormCell lemma={lemma} morph="fto3--s--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={3}/>
                        <ParadigmHead label="1"/>
                        <FormCell lemma={lemma} morph="fti1--p--"/>
                        <FormCell lemma={lemma} morph="fto1--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="2"/>
                        <FormCell lemma={lemma} morph="fti2--p--"/>
                        <FormCell lemma={lemma} morph="fto2--p--"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="3"/>
                        <FormCell lemma={lemma} morph="fti3--p--"/>
                        <FormCell lemma={lemma} morph="fto3--p--"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                lemma={lemma} 
                condition={/^r---p....$/} 
                caption="Resultative positive"
                size="full"
            >
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2} rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="strong" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="r---pmsni"/>
                        <FormCell lemma={lemma} morph="r---pfsni"/>
                        <FormCell lemma={lemma} morph="r---pnsni"/>
                        <FormCell lemma={lemma} morph="r---pmpni"/>
                        <FormCell lemma={lemma} morph="r---pfpni"/>
                        <FormCell lemma={lemma} morph="r---pnpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="r---pmsgi"/>
                        <FormCell lemma={lemma} morph="r---pfsgi"/>
                        <FormCell lemma={lemma} morph="r---pnsgi"/>
                        <FormCell lemma={lemma} morph="r---pxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="r---pmsdi"/>
                        <FormCell lemma={lemma} morph="r---pfsdi"/>
                        <FormCell lemma={lemma} morph="r---pnsdi"/>
                        <FormCell lemma={lemma} morph="r---pxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="r---pmsai"/>
                        <FormCell lemma={lemma} morph="r---pfsai"/>
                        <FormCell lemma={lemma} morph="r---pnsai"/>
                        <FormCell lemma={lemma} morph="r---pmpai"/>
                        <FormCell lemma={lemma} morph="r---pfpai"/>
                        <FormCell lemma={lemma} morph="r---pnpai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="weak" rowSpan={4}/>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="r---pmsnd"/>
                        <FormCell lemma={lemma} morph="r---pfsnd"/>
                        <FormCell lemma={lemma} morph="r---pnsnd"/>
                        <FormCell lemma={lemma} morph="r---pxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="r---pmsgd"/>
                        <FormCell lemma={lemma} morph="r---pfsgd"/>
                        <FormCell lemma={lemma} morph="r---pnsgd"/>
                        <FormCell lemma={lemma} morph="r---pxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="r---pmsdd"/>
                        <FormCell lemma={lemma} morph="r---pfsdd"/>
                        <FormCell lemma={lemma} morph="r---pnsdd"/>
                        <FormCell lemma={lemma} morph="r---pxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="r---pmsad"/>
                        <FormCell lemma={lemma} morph="r---pfsad"/>
                        <FormCell lemma={lemma} morph="r---pnsad"/>
                        <FormCell lemma={lemma} morph="r---pxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                lemma={lemma} 
                condition={/^r---p...i$/} 
                caption="Resultative strong positive" 
                size="small"
            >
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="r---pmsni"/>
                        <FormCell lemma={lemma} morph="r---pfsni"/>
                        <FormCell lemma={lemma} morph="r---pnsni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="r---pmsgi"/>
                        <FormCell lemma={lemma} morph="r---pfsgi"/>
                        <FormCell lemma={lemma} morph="r---pnsgi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="r---pmsdi"/>
                        <FormCell lemma={lemma} morph="r---pfsdi"/>
                        <FormCell lemma={lemma} morph="r---pnsdi"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="r---pmsai"/>
                        <FormCell lemma={lemma} morph="r---pfsai"/>
                        <FormCell lemma={lemma} morph="r---pnsai"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="r---pmpni"/>
                        <FormCell lemma={lemma} morph="r---pfpni"/>
                        <FormCell lemma={lemma} morph="r---pnpni"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="r---pxpgi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="r---pxpdi" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="r---pmpai"/>
                        <FormCell lemma={lemma} morph="r---pfpai"/>
                        <FormCell lemma={lemma} morph="r---pnpai"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable 
                lemma={lemma} 
                condition={/^r---p...d$/} 
                caption="Resultative weak positive" 
                size="small"
            >
                <thead>
                    <tr>
                        <ParadigmHead colSpan={2}/>
                        <ParadigmHead label="m"/>
                        <ParadigmHead label="f"/>
                        <ParadigmHead label="n"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="sg" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="r---pmsnd"/>
                        <FormCell lemma={lemma} morph="r---pfsnd"/>
                        <FormCell lemma={lemma} morph="r---pnsnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="r---pmsgd"/>
                        <FormCell lemma={lemma} morph="r---pfsgd"/>
                        <FormCell lemma={lemma} morph="r---pnsgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="r---pmsdd"/>
                        <FormCell lemma={lemma} morph="r---pfsdd"/>
                        <FormCell lemma={lemma} morph="r---pnsdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="r---pmsad"/>
                        <FormCell lemma={lemma} morph="r---pfsad"/>
                        <FormCell lemma={lemma} morph="r---pnsad"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="pl" rowSpan={4}/>
                        <ParadigmHead label="nom"/>
                        <FormCell lemma={lemma} morph="r---pxpnd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="gen"/>
                        <FormCell lemma={lemma} morph="r---pxpgd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dat"/>
                        <FormCell lemma={lemma} morph="r---pxpdd" colSpan={3}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="acc"/>
                        <FormCell lemma={lemma} morph="r---pxpad" colSpan={3}/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable lemma={lemma} condition={/^p---.....$/} caption="Participle">
                <thead>
                    <tr>
                        <ParadigmHead rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" rowSpan={2}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="p----msnd"/>
                        <FormCell lemma={lemma} morph="p----fsnd"/>
                        <FormCell lemma={lemma} morph="p----nsnd"/>
                        <FormCell lemma={lemma} morph="p----xpnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="p----msgd"/>
                        <FormCell lemma={lemma} morph="p----fsgd"/>
                        <FormCell lemma={lemma} morph="p----nsgd"/>
                        <FormCell lemma={lemma} morph="p----xpgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="p----msdd"/>
                        <FormCell lemma={lemma} morph="p----fsdd"/>
                        <FormCell lemma={lemma} morph="p----nsdd"/>
                        <FormCell lemma={lemma} morph="p----xpdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="p----msad"/>
                        <FormCell lemma={lemma} morph="p----fsad"/>
                        <FormCell lemma={lemma} morph="p----nsad"/>
                        <FormCell lemma={lemma} morph="p----xpad"/>
                    </tr>
                </tbody>
            </ParadigmTable>
            <ParadigmTable lemma={lemma} condition={/^g---.....$/} caption="Gerundive">
                <thead>
                    <tr>
                        <ParadigmHead rowSpan={2}/>
                        <ParadigmHead label="singular" colSpan={3}/>
                        <ParadigmHead label="plural" rowSpan={2}/>
                    </tr>
                    <tr>
                        <ParadigmHead label="masculine"/>
                        <ParadigmHead label="feminine"/>
                        <ParadigmHead label="neuter"/>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <ParadigmHead label="nominative"/>
                        <FormCell lemma={lemma} morph="g----msnd"/>
                        <FormCell lemma={lemma} morph="g----fsnd"/>
                        <FormCell lemma={lemma} morph="g----nsnd"/>
                        <FormCell lemma={lemma} morph="g----xpnd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="genitive"/>
                        <FormCell lemma={lemma} morph="g----msgd"/>
                        <FormCell lemma={lemma} morph="g----fsgd"/>
                        <FormCell lemma={lemma} morph="g----nsgd"/>
                        <FormCell lemma={lemma} morph="g----xpgd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="dative"/>
                        <FormCell lemma={lemma} morph="g----msdd"/>
                        <FormCell lemma={lemma} morph="g----fsdd"/>
                        <FormCell lemma={lemma} morph="g----nsdd"/>
                        <FormCell lemma={lemma} morph="g----xpdd"/>
                    </tr>
                    <tr>
                        <ParadigmHead label="accusative"/>
                        <FormCell lemma={lemma} morph="g----msad"/>
                        <FormCell lemma={lemma} morph="g----fsad"/>
                        <FormCell lemma={lemma} morph="g----nsad"/>
                        <FormCell lemma={lemma} morph="g----xpad"/>
                    </tr>
                </tbody>
            </ParadigmTable>
        </>
    )
}

function FormRowConditional ({ 
    lemma, 
    morph, 
    name 
}: { 
    lemma: LemmaFull, 
    morph: string, 
    name: string 
}) {
    const line = (
        <tr>
            <ParadigmHead label={name}/>
            <FormCell lemma={lemma} morph={morph}/>
        </tr>
    );
    return lemma.forms.filter(form => form.morph == morph).length ? line : null;
}

function FormCell({ 
    lemma, 
    morph, 
    colSpan 
}: { 
    lemma: LemmaFull, 
    morph?: string, 
    colSpan?: number 
}) {
    const hits = morph ? lemma.forms.filter(form => form.morph == morph) : lemma.forms;
    return (
        <td colSpan={colSpan || 1} className="p-2 border-2 border-gray-50 text-center italic">
            {hits
                .slice().sort((a, b) => a.norm.localeCompare(b.norm))
                .map(form => 
                    <span key={form.id}>
                        <FormLink form={form} icon={false}/>
                        <br/>
                    </span>
                )}
        </td>
    );
}

function ParadigmHead({ 
    label, 
    colSpan, 
    rowSpan 
}: { 
    label?: string, 
    colSpan?: number, 
    rowSpan?: number 
}) {
    return (
        <th colSpan={colSpan || 1} rowSpan={rowSpan || 1} className="bg-gray-50 p-2">{label}</th>
    );
}

function ParadigmTable({ 
    children, 
    lemma, 
    condition, 
    exclude,
    caption,
    size
}: { 
    children: React.ReactNode, 
    lemma?: LemmaFull, 
    condition?: RegExp,
    exclude?: boolean,
    caption?: string,
    size?: "small" | "full"
}) {
    const hide = condition && !exclude && !lemma?.forms.filter(
        form => form.morph.match(condition || /^.........$/)
    ).length;
    return (
        <table className={clsx(
            "my-4 min-w-[200px] border-4 border-gray-50 bg-gray-50",
            {
                "hidden md:table": size && size == "full" && !hide,
                "md:hidden": size && size == "small" && !hide,
                "hidden": hide
            }
        )}>
            {caption ? <Caption label={caption}/> : null}
            {children}
        </table>
    );
}

function Caption({ label }: { label: string }) {
    return (
        <caption className="caption-top p-1 rounded-t-full bg-gray-400 text-white font-bold">
            {label}
        </caption>
    );
}