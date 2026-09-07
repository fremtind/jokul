import{j as e,r as T}from"./iframe-C6rf_d7E.js";import{D as c,a as y}from"./DateInput-BZcKkedD.js";/* empty css               */import{C as k}from"./Card-BjkAEz1f.js";import{F as u}from"./Flex-IBBXwRC9.js";import{F as j}from"./FieldGroup-m2GkBpGT.js";import{B as w}from"./Button-CRWeHiKQ.js";import{T as F,a as C}from"./TableCaption-D7yVhnJu.js";import{T as v,a as o}from"./TableHeader-qPyf5ehA.js";import{b as s,a as l}from"./TableRow-C5cuSb3P.js";import{T as R}from"./TableBody-Ts-BnXlh.js";import{G as N}from"./GreenCheckIcon-DE19xXRM.js";import{T as S}from"./TableFooter-Da73Pqhr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-Wjo9Wygp.js";import"./Select-HWgugI2F.js";import"./mergeRefs-CHirAEc0.js";import"./InputGroup-CdTBgkCz.js";import"./useId-BVN_B9yL.js";import"./Label-DB2khCh1.js";import"./SupportLabel-CMRZ8oPs.js";import"./SuccessIcon-DHzDEgFM.js";import"./Icon-BAhoDBmB.js";import"./WarningIcon-hh2PdGt-.js";import"./Search-jKQyB1Oh.js";import"./Title-J9vvbeaQ.js";import"./useListNavigation-D46sOu7p.js";import"./ArrowDownIcon-DAtWkvhJ.js";import"./CloseIcon-CCA0huwI.js";import"./ArrowRightIcon-CQpSVx3K.js";import"./CalendarIcon-NkyG20Bg.js";import"./SlotComponent-GH3InyFW.js";import"./usePreviousValue-xoF_26zy.js";import"./Loader-R0-GRMxQ.js";import"./useDelayedRender-DYOKzVIW.js";import"./tableContext-Cq39P8fX.js";import"./ChevronUpIcon-Za8jAkYu.js";const x=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n});x.__docgenInfo={description:"",methods:[],displayName:"ScreenReaderOnly",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},showOnFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const{fn:H}=__STORYBOOK_MODULE_TEST__,he={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:H()},parameters:{layout:"padded"},tags:["!autodocs"]},f=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],h=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],D=new Date(2024,0,1).getTime(),O=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=D+Math.random()*(O-D);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:h[Math.floor(Math.random()*h.length)],caseWorker:f[Math.floor(Math.random()*f.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=T.useState("2025-01-01"),[r,p]=T.useState("2025-12-31"),g=i[0].renewalDate,b=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(k,{padding:"xl",children:e.jsxs(u,{direction:"column",gap:"l",children:[e.jsx(j,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(u,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:g,max:r||b,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||g,max:b,onChange:a=>p(a.target.value)}),e.jsx(w,{variant:"secondary",onClick:()=>{t(""),p("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(F,{caption:e.jsx(C,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(R,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:y(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(x,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(S,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Filtrering av saksliste etter fornyelsesdato",
  render: () => {
    const [fromDate, setFromDate] = useState<string>("2025-01-01");
    const [toDate, setToDate] = useState<string>("2025-12-31");
    const earliestDate = exampleAgreements[0].renewalDate;
    const latestDate = exampleAgreements[exampleAgreements.length - 1].renewalDate;

    // ISO-strenger (yyyy-mm-dd) sorterer likt kronologisk og alfabetisk,
    // så datoene kan sammenlignes direkte uten å parse dem først.
    const filteredAgreements = exampleAgreements.filter(agreement => (!fromDate || agreement.renewalDate >= fromDate) && (!toDate || agreement.renewalDate <= toDate));
    return <Card padding="xl">
                <Flex direction="column" gap="l">
                    <FieldGroup legend="Vis avtaler som fornyes i perioden">
                        <Flex gap="m" alignItems="end">
                            <DateInput label="Fornyes fra og med" value={fromDate} min={earliestDate} // ikke før første fornyelse
            max={toDate || latestDate} // ikke etter sluttdato, ev. siste fornyelse
            onChange={e => setFromDate(e.target.value)} />
                            <DateInput label="Fornyes til og med" value={toDate} min={fromDate || earliestDate} // ikke før startdato, ev. første fornyelse
            max={latestDate} // ikke etter siste fornyelse
            onChange={e => setToDate(e.target.value)} />
                            <Button variant="secondary" onClick={() => {
              setFromDate("");
              setToDate("");
            }} disabled={!fromDate && !toDate}>
                                Nullstill
                            </Button>
                        </Flex>
                    </FieldGroup>

                    <Table caption={<TableCaption srOnly>
                                Avtaler som fornyes i valgt periode
                            </TableCaption>}>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Fornyelsesdato</TableHeader>
                                <TableHeader>Avtalenummer</TableHeader>
                                <TableHeader>Forsikring</TableHeader>
                                <TableHeader>Saksbehandler</TableHeader>
                                <TableHeader>Fornyes automatisk?</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAgreements.length > 0 ? filteredAgreements.map(agreement => <TableRow key={agreement.id}>
                                        <TableCell>
                                            {toNorwegianDateFormat(agreement.renewalDate, "nb-NO", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric"
                })}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.agreementNumber}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.insuranceName}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.caseWorker}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.autoRenew ? <>
                                                    <GreenCheckIcon />
                                                    <ScreenReaderOnly>
                                                        Ja
                                                    </ScreenReaderOnly>
                                                </> : "Nei"}
                                        </TableCell>
                                    </TableRow>) : <TableRow>
                                    <TableCell colSpan={5}>
                                        Ingen avtaler fornyes i valgt periode
                                    </TableCell>
                                </TableRow>}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>
                                    Totalt: {filteredAgreements.length} avtaler
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Flex>
            </Card>;
  }
}`,...m.parameters?.docs?.source}}};const De=["DateInputRange"];export{m as DateInputRange,De as __namedExportsOrder,he as default};
