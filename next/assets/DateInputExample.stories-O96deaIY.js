import{j as e,r as f}from"./iframe-Pz3CvQ1w.js";import{D as c,a as D}from"./DateInput-BaTrobKG.js";/* empty css               */import{C as k}from"./Card-DsyXMcRg.js";import{F as T}from"./Flex-DlQI-SYy.js";import{F as j}from"./FieldGroup-RN6dm28r.js";import{B as F}from"./Button-CFxPgOyk.js";import{T as w,a as C}from"./TableCaption-CFxymEqa.js";import{T as v,a as o}from"./TableHeader-BGVEGyRN.js";import{b as s,a as l}from"./TableRow-CX_OjZHL.js";import{T as S}from"./TableBody-3G9WHvsk.js";import{G as R}from"./GreenCheckIcon-DAvNwA8v.js";import{T as O}from"./TableFooter-Cl2u_oLg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./types-BlFGa32c.js";import"./formatDate-Dke5WO_s.js";import"./Text-DUvOdW3x.js";import"./Select-DoJYuRwf.js";import"./InputGroup-BraIi4FO.js";import"./useId-D9xx20W4.js";import"./Label-DYyptjG4.js";import"./SupportLabel-C2Eygo69.js";import"./SuccessIcon-B0Ut6YTe.js";import"./Icon-D_klMMdD.js";import"./WarningIcon-ASdC7XCR.js";import"./Search-DWHhc5Hl.js";import"./Title-scu6qIXy.js";import"./useListNavigation-U647nVVv.js";import"./ArrowDownIcon-BECGotNC.js";import"./CloseIcon-YRi6gnF0.js";import"./ArrowLeftIcon-C5CJEeHN.js";import"./ArrowRightIcon-C2SAQz9v.js";import"./CalendarIcon-8VAw34UF.js";import"./SlotComponent-3v9UArJ6.js";import"./usePreviousValue-zjQRGqy1.js";import"./Loader-C4UXvRMJ.js";import"./useDelayedRender-CrrBdMCB.js";import"./tableContext-DVNHxNtN.js";import"./ChevronUpIcon-BYmV6Vho.js";const p=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n});try{p.displayName="ScreenReaderOnly",p.__docgenInfo={description:"",displayName:"ScreenReaderOnly",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/screen-reader-only/ScreenReaderOnly.tsx",methods:[],props:{showOnFocus:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/screen-reader-only/types.ts",name:"ScreenReaderOnlyProps"}],description:"",name:"showOnFocus",parent:{fileName:"jokul/packages/jokul/src/components/screen-reader-only/types.ts",name:"ScreenReaderOnlyProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const{fn:N}=__STORYBOOK_MODULE_TEST__,ye={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:N()},parameters:{layout:"padded"},tags:["!autodocs"]},h=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],x=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],y=new Date(2024,0,1).getTime(),H=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=y+Math.random()*(H-y);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:x[Math.floor(Math.random()*x.length)],caseWorker:h[Math.floor(Math.random()*h.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=f.useState("2025-01-01"),[r,g]=f.useState("2025-12-31"),u=i[0].renewalDate,b=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(k,{padding:"xl",children:e.jsxs(T,{direction:"column",gap:"l",children:[e.jsx(j,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(T,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:u,max:r||b,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||u,max:b,onChange:a=>g(a.target.value)}),e.jsx(F,{variant:"secondary",onClick:()=>{t(""),g("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(w,{caption:e.jsx(C,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(S,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:D(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(p,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(O,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}},De=["DateInputRange"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{m as DateInputRange,De as __namedExportsOrder,ye as default};
