import{r as T,j as e}from"./iframe-DYWdyUxL.js";import{D as m}from"./_index-CfV6VsNk.js";import{t as f}from"./Calendar-BytSchfp.js";import{C as x}from"./Card-CsN_ShNe.js";import{F as b}from"./Flex-B6x7hKNj.js";import{F as h}from"./FieldGroup-CfC7YfgY.js";import{T as C,a as j}from"./TableCaption-CrnlPEt9.js";import{T as F,a as o}from"./TableHeader-gDENSiLI.js";import{T as s,a as t}from"./TableRow-BZJwfRRH.js";import{T as k}from"./TableBody-DmWpcCM0.js";import{G as v}from"./GreenCheckIcon-CvlJTIK1.js";import{T as w}from"./TableFooter-DfN6bvP9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B-3C8N3t.js";import"./useId-BOzEIjuC.js";import"./Label-C_9a0mP0.js";import"./SupportLabel-CetoG6I3.js";import"./SuccessIcon-Dw5XGk7M.js";import"./Icon-DdnKr8pm.js";import"./WarningIcon-xab_nx70.js";import"./Button-Cdj6mRlf.js";import"./usePreviousValue-CB25HRsc.js";import"./Loader-Dup7Vdtm.js";import"./useDelayedRender-DiAgrzgK.js";import"./CalendarIcon-Bn7GOgIi.js";import"./NativeSelect-C_KXOiev.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DB2sIgkz.js";import"./ArrowDownIcon-D2heZ4T3.js";import"./ArrowRightIcon-B8sabrxS.js";import"./Text-C7ULA8C5.js";import"./formatDate-DZfsHyZW.js";import"./SlotComponent-5FM_70NU.js";import"./mergeRefs-DaEXLW6U.js";import"./tableContext-BwZXTt37.js";import"./ChevronUpIcon-COTIsffM.js";const pe={title:"Komponenter/Date Input/Eksempler",component:m,args:{labelProps:{srOnly:!1}},tags:["!autodocs"]},H=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:i=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=H.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(x,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx(m,{...i,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(m,{...i,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:f(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Filtrering til og fra dato",
  parameters: {
    layout: "padded"
  },
  args: {
    label: ""
  },
  render: args => {
    const [fromDate, setFromDate] = useState<string>("2025-01-01");
    const [toDate, setToDate] = useState<string>("2026-12-31");
    const filteredCustomers = exampleCustomerData.filter(customer => {
      const customerDate = new Date(customer.createdDate);
      const from = fromDate ? new Date(fromDate) : null;
      const to = toDate ? new Date(toDate) : null;
      return (!from || customerDate >= from) && (!to || customerDate <= to);
    });
    return <Card padding="xl">
                <Flex direction="column" gap="m">
                    <Flex as={FieldGroup} gap="m" legend={"Filtrer kunder etter opprettet dato"} alignItems="end">
                        <DateInput {...args} label="Fra dato" max={toDate} value={fromDate} onChange={e => setFromDate(e.target.value)} />
                        <DateInput {...args} label="Til dato" min={fromDate} value={toDate} onChange={e => setToDate(e.target.value)} />
                    </Flex>
                    <Table caption={<TableCaption srOnly>
                                Eksempel på kundedata
                            </TableCaption>}>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Opprettet dato</TableHeader>
                                <TableHeader>Fornavn</TableHeader>
                                <TableHeader>Etternavn</TableHeader>
                                <TableHeader>
                                    Har brukt reiseforsikringen?
                                </TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredCustomers.map(customer => <TableRow key={customer.createdDate}>
                                    <TableCell>
                                        {toNorwegianDateFormat(customer.createdDate, "no", {
                  month: "numeric",
                  year: "2-digit",
                  day: "2-digit"
                })}
                                    </TableCell>
                                    <TableCell>{customer.firstName}</TableCell>
                                    <TableCell>{customer.lastName}</TableCell>
                                    <TableCell>
                                        {customer.usedTravelInsurance ? <GreenCheckIcon /> : null}
                                    </TableCell>
                                </TableRow>)}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={4}>
                                    Totalt: {filteredCustomers.length} kunder
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Flex>
            </Card>;
  }
}`,...l.parameters?.docs?.source}}};const ce=["DateInputRange"];export{l as DateInputRange,ce as __namedExportsOrder,pe as default};
