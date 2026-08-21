import{j as e,r as T}from"./iframe-DkWzlxd-.js";import{D as c,a as x}from"./DateInput-DYAUUPSX.js";/* empty css               */import{C as y}from"./Card-D9d_S_jz.js";import{F as f}from"./Flex-DgR9zN_l.js";import{F as k}from"./FieldGroup-flbewP91.js";import{B as j}from"./Button-CMyYvT5D.js";import{T as C,a as F}from"./TableCaption-ldJX5fQc.js";import{T as v,a as o}from"./TableHeader-Bsz70fge.js";import{b as s,a as l}from"./TableRow-CaXbOCQJ.js";import{T as w}from"./TableBody-BcJffRoG.js";import{G as S}from"./GreenCheckIcon-DHPqGozL.js";import{T as R}from"./TableFooter-Cimx1cfv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-DH-bTwj1.js";import"./Select-yOdxAp59.js";import"./mergeRefs-DlasLgYa.js";import"./InputGroup-CaFfjJS8.js";import"./useId-Bh0TjDrf.js";import"./Label-B0iIqUDx.js";import"./SupportLabel-Ec81dW36.js";import"./SuccessIcon-DfDVkpsR.js";import"./Icon-CEH0yyGC.js";import"./WarningIcon-BBmxHX54.js";import"./Search-BdVYKL7R.js";import"./Title-DPAsKNfk.js";import"./useListNavigation-DHfgsgU5.js";import"./ArrowDownIcon-vWdr9GWX.js";import"./CloseIcon-B-YCyNQI.js";import"./ArrowRightIcon-BuDahATq.js";import"./CalendarIcon-CxfZUyFg.js";import"./SlotComponent-H_cWLzDU.js";import"./usePreviousValue-DJEfkI-V.js";import"./Loader-rp8cfTm2.js";import"./useDelayedRender-Da02rP2Z.js";import"./tableContext-DlwjkdNw.js";import"./ChevronUpIcon-C9DHhBuG.js";const H=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n}),{fn:N}=__STORYBOOK_MODULE_TEST__,he={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:N()},parameters:{layout:"padded"},tags:["!autodocs"]},u=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],h=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],D=new Date(2024,0,1).getTime(),O=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=D+Math.random()*(O-D);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:h[Math.floor(Math.random()*h.length)],caseWorker:u[Math.floor(Math.random()*u.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=T.useState("2025-01-01"),[r,p]=T.useState("2025-12-31"),g=i[0].renewalDate,b=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(y,{padding:"xl",children:e.jsxs(f,{direction:"column",gap:"l",children:[e.jsx(k,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(f,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:g,max:r||b,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||g,max:b,onChange:a=>p(a.target.value)}),e.jsx(j,{variant:"secondary",onClick:()=>{t(""),p("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(C,{caption:e.jsx(F,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(w,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:x(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx(H,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(R,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
