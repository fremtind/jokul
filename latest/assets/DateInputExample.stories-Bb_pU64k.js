import{j as e,r as f}from"./iframe-BDcbhYCr.js";import{D as c,a as D}from"./DateInput-4deL2wgt.js";/* empty css               */import{C as k}from"./Card-V9SdGWlR.js";import{F as T}from"./Flex-B2GJ-uWq.js";import{F as j}from"./FieldGroup-CYR_LocQ.js";import{B as F}from"./Button-DTdoEajg.js";import{T as w,a as C}from"./TableCaption-BB_68_49.js";import{T as v,a as o}from"./TableHeader-BYlG5jhN.js";import{b as s,a as l}from"./TableRow-AlwROCbL.js";import{T as S}from"./TableBody-CDveV5xg.js";import{G as R}from"./GreenCheckIcon-Bax1IzH5.js";import{T as O}from"./TableFooter-C3yKD210.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./Text-MZdce8ek.js";import"./Select-BvtJQMyh.js";import"./InputGroup-Blv6KFQs.js";import"./useId-B90AG0Mz.js";import"./Label-CaSwVA32.js";import"./SupportLabel-7Ghv-gEi.js";import"./SuccessIcon-DXnHbuJF.js";import"./Icon-Dis1nrdP.js";import"./WarningIcon-CTcdaRgl.js";import"./Search-D-4WDfIy.js";import"./Title-BOcJdohN.js";import"./useListNavigation-NSS5uV8A.js";import"./ArrowDownIcon-_oLOhN3f.js";import"./CloseIcon-D_QKdMRj.js";import"./ArrowRightIcon-Cc7AHC7Y.js";import"./CalendarIcon-CQHAnMtg.js";import"./SlotComponent-CwbHMHVD.js";import"./usePreviousValue-CPqU4MQH.js";import"./Loader-MfGyibIy.js";import"./useDelayedRender-Dlm7AVeK.js";import"./tableContext-DbTLZz-N.js";import"./ChevronUpIcon-CbjXfBe6.js";const p=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n});try{p.displayName="ScreenReaderOnly",p.__docgenInfo={description:"",displayName:"ScreenReaderOnly",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/screen-reader-only/ScreenReaderOnly.tsx",methods:[],props:{showOnFocus:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/screen-reader-only/types.ts",name:"ScreenReaderOnlyProps"}],description:"",name:"showOnFocus",parent:{fileName:"jokul/packages/jokul/src/components/screen-reader-only/types.ts",name:"ScreenReaderOnlyProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const{fn:N}=__STORYBOOK_MODULE_TEST__,he={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:N()},parameters:{layout:"padded"},tags:["!autodocs"]},h=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],x=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],y=new Date(2024,0,1).getTime(),H=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=y+Math.random()*(H-y);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:x[Math.floor(Math.random()*x.length)],caseWorker:h[Math.floor(Math.random()*h.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=f.useState("2025-01-01"),[r,g]=f.useState("2025-12-31"),u=i[0].renewalDate,b=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(k,{padding:"xl",children:e.jsxs(T,{direction:"column",gap:"l",children:[e.jsx(j,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(T,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:u,max:r||b,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||u,max:b,onChange:a=>g(a.target.value)}),e.jsx(F,{variant:"secondary",onClick:()=>{t(""),g("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(w,{caption:e.jsx(C,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(S,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:D(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(p,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(O,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}},xe=["DateInputRange"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{m as DateInputRange,xe as __namedExportsOrder,he as default};
