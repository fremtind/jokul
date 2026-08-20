import{j as e,r as T}from"./iframe-CyrJbBlo.js";import{D as c,a as y}from"./DateInput-odadLREs.js";/* empty css               */import{C as k}from"./Card-wII7D4i5.js";import{F as u}from"./Flex-Byj1CJ6K.js";import{F as j}from"./FieldGroup-DDMfY21Q.js";import{B as w}from"./Button-B-DtqlXv.js";import{T as F,a as C}from"./TableCaption-Dj2b3k2H.js";import{T as v,a as o}from"./TableHeader-DtJUxbrf.js";import{b as s,a as l}from"./TableRow-5f-W1aUu.js";import{T as R}from"./TableBody-DBwAEnHw.js";import{G as N}from"./GreenCheckIcon-m4Kt48eD.js";import{T as S}from"./TableFooter-kGfN1Oj_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-Byii7RZs.js";import"./NativeSelect-DyHQ2Tcs.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DK4EbfDk.js";import"./ArrowDownIcon-D6ZHvxPf.js";import"./Icon-BYjPRixs.js";import"./InputGroup-DI6lz_u7.js";import"./useId-neBOdzM_.js";import"./Label-BemHmtrl.js";import"./SupportLabel-dJKsD1aS.js";import"./SuccessIcon-Cw02K339.js";import"./WarningIcon-CQqoM3EL.js";import"./ArrowRightIcon-rqK0k60M.js";import"./mergeRefs-CT5vwrg5.js";import"./CalendarIcon-ClOnpxeo.js";import"./SlotComponent-CUzbrRlE.js";import"./usePreviousValue-DInnFQmh.js";import"./Loader-C0s6KtRr.js";import"./useDelayedRender-C6CUE9CL.js";import"./tableContext-CeJ6gmHv.js";import"./ChevronUpIcon--gGswejP.js";const x=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n});x.__docgenInfo={description:"",methods:[],displayName:"ScreenReaderOnly",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},showOnFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const{fn:H}=__STORYBOOK_MODULE_TEST__,ue={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:H()},parameters:{layout:"padded"},tags:["!autodocs"]},f=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],h=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],D=new Date(2024,0,1).getTime(),O=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=D+Math.random()*(O-D);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:h[Math.floor(Math.random()*h.length)],caseWorker:f[Math.floor(Math.random()*f.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=T.useState("2025-01-01"),[r,p]=T.useState("2025-12-31"),g=i[0].renewalDate,b=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(k,{padding:"xl",children:e.jsxs(u,{direction:"column",gap:"l",children:[e.jsx(j,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(u,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:g,max:r||b,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||g,max:b,onChange:a=>p(a.target.value)}),e.jsx(w,{variant:"secondary",onClick:()=>{t(""),p("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(F,{caption:e.jsx(C,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(R,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:y(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(x,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(S,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["DateInputRange"];export{m as DateInputRange,fe as __namedExportsOrder,ue as default};
