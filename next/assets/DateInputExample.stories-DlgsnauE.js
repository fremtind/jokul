import{j as e,r as T}from"./iframe-5ERKBJ40.js";import{D as c,a as y}from"./DateInput-Bp7lxLaq.js";/* empty css               */import{C as k}from"./Card-C8Ar7h1u.js";import{F as f}from"./Flex-B2PjP7Jc.js";import{F as j}from"./FieldGroup-BSmlkfmV.js";import{B as F}from"./Button-RYTjL7CZ.js";import{T as w,a as C}from"./TableCaption-BKHDwgmB.js";import{T as v,a as o}from"./TableHeader-C0CnpNqS.js";import{b as s,a as l}from"./TableRow-CAiBLtUz.js";import{T as S}from"./TableBody-DFFejLWI.js";import{G as R}from"./GreenCheckIcon-Or2XZIgB.js";import{T as O}from"./TableFooter-CKmXIySq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./Text-BYYl3p5d.js";import"./Select-DJ7iIP_D.js";import"./InputGroup-CKE_-D43.js";import"./useId-CJwWTVui.js";import"./Label-C_Q2IyCf.js";import"./SupportLabel-CIFf30_1.js";import"./SuccessIcon-B6LytoX1.js";import"./Icon-D5L3ZPM6.js";import"./WarningIcon-DyowYIY8.js";import"./Search-C92ArnSY.js";import"./Title-DRy1_6dv.js";import"./useListNavigation-B90nIS9H.js";import"./ArrowDownIcon-By7T12af.js";import"./CloseIcon-C_HvyncN.js";import"./ArrowRightIcon-DVAMotEt.js";import"./CalendarIcon-dBqo0_Sb.js";import"./SlotComponent-L9km4BNG.js";import"./usePreviousValue-DuaVpP7N.js";import"./Loader-CsMEZqXS.js";import"./useDelayedRender-Bh_n8k8g.js";import"./tableContext-CnO8wN8U.js";import"./ChevronUpIcon-CWZx9jZo.js";const p=({children:n,showOnFocus:t,...r})=>e.jsx("span",{...r,className:`jkl-sr-only${t?" jkl-sr-only--focusable":""}`,children:n});try{p.displayName="ScreenReaderOnly",p.__docgenInfo={description:"",displayName:"ScreenReaderOnly",props:{showOnFocus:{defaultValue:null,description:"",name:"showOnFocus",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:H}=__STORYBOOK_MODULE_TEST__,he={title:"Komponenter/Date Input/Eksempler",component:c,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:H()},parameters:{layout:"padded"},tags:["!autodocs"]},h=["Pio Rasch-Halvorsen","Ole Jørgen Bakken","Jonas Haraldson Hiorthøy","Heidi Stormoen","Kristian Ulvund","Maria Eilertsen","Elise Brenna"],D=["Reiseforsikring","Innboforsikring","Bilforsikring","Husforsikring","Båtforsikring","Uføreforsikring"],x=new Date(2024,0,1).getTime(),N=new Date(2026,5,30).getTime(),i=Array.from({length:50},(n,t)=>{const r=x+Math.random()*(N-x);return{id:t,renewalDate:new Date(r).toISOString().slice(0,10),agreementNumber:String(1e6+Math.floor(Math.random()*9e6)),insuranceName:D[Math.floor(Math.random()*D.length)],caseWorker:h[Math.floor(Math.random()*h.length)],autoRenew:Math.random()<.5}}).sort((n,t)=>n.renewalDate.localeCompare(t.renewalDate)),m={name:"Filtrering av saksliste etter fornyelsesdato",render:()=>{const[n,t]=T.useState("2025-01-01"),[r,g]=T.useState("2025-12-31"),b=i[0].renewalDate,u=i[i.length-1].renewalDate,d=i.filter(a=>(!n||a.renewalDate>=n)&&(!r||a.renewalDate<=r));return e.jsx(k,{padding:"xl",children:e.jsxs(f,{direction:"column",gap:"l",children:[e.jsx(j,{legend:"Vis avtaler som fornyes i perioden",children:e.jsxs(f,{gap:"m",alignItems:"end",children:[e.jsx(c,{label:"Fornyes fra og med",value:n,min:b,max:r||u,onChange:a=>t(a.target.value)}),e.jsx(c,{label:"Fornyes til og med",value:r,min:n||b,max:u,onChange:a=>g(a.target.value)}),e.jsx(F,{variant:"secondary",onClick:()=>{t(""),g("")},disabled:!n&&!r,children:"Nullstill"})]})}),e.jsxs(w,{caption:e.jsx(C,{srOnly:!0,children:"Avtaler som fornyes i valgt periode"}),children:[e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Fornyelsesdato"}),e.jsx(o,{children:"Avtalenummer"}),e.jsx(o,{children:"Forsikring"}),e.jsx(o,{children:"Saksbehandler"}),e.jsx(o,{children:"Fornyes automatisk?"})]})}),e.jsx(S,{children:d.length>0?d.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:y(a.renewalDate,"nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"})}),e.jsx(l,{children:a.agreementNumber}),e.jsx(l,{children:a.insuranceName}),e.jsx(l,{children:a.caseWorker}),e.jsx(l,{children:a.autoRenew?e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(p,{children:"Ja"})]}):"Nei"})]},a.id)):e.jsx(s,{children:e.jsx(l,{colSpan:5,children:"Ingen avtaler fornyes i valgt periode"})})}),e.jsx(O,{children:e.jsx(s,{children:e.jsxs(l,{colSpan:5,children:["Totalt: ",d.length," avtaler"]})})})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
