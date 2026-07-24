import{r as T,j as e}from"./iframe-BZmcJa8V.js";import{D as m}from"./_index-tXX193T2.js";import{t as f}from"./Calendar-DQv9jYX-.js";import{C as x}from"./Card-DldbHEgC.js";import{F as b}from"./Flex-CS_MJFfT.js";import{F as h}from"./FieldGroup-K5dhXeny.js";import{T as C,a as j}from"./TableCaption-BwjSSRnc.js";import{T as F,a as o}from"./TableHeader-TAyfFAoL.js";import{T as s,a as t}from"./TableRow-BKsRvLSC.js";import{T as k}from"./TableBody-C9H5L0mT.js";import{G as v}from"./GreenCheckIcon-COZCrJi6.js";import{T as w}from"./TableFooter-Pxch-Y9H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CVAjUT7W.js";import"./useId-B24-RPn9.js";import"./Label-BiKRDH54.js";import"./SupportLabel-yINM9cBh.js";import"./SuccessIcon-CvA7p0Kz.js";import"./Icon-B4QrTS4L.js";import"./WarningIcon-HsoYDbJw.js";import"./Button-CEjSoeJV.js";import"./usePreviousValue-CxqYLfuA.js";import"./Loader-6ydfcUWu.js";import"./useDelayedRender-DEnoWJ1Z.js";import"./CalendarIcon-f5xsRB-o.js";import"./NativeSelect-CAi8SRtk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B9EYxoa6.js";import"./ArrowDownIcon-4BkPl6DA.js";import"./ArrowRightIcon-CTNyMVpH.js";import"./Text-DO0fxEm2.js";import"./formatDate-DZfsHyZW.js";import"./SlotComponent-DGcYP4pa.js";import"./mergeRefs-DRRMip4j.js";import"./tableContext-v3lDyirT.js";import"./ChevronUpIcon-C2mn39Ah.js";const pe={title:"Komponenter/Date Input/Eksempler",component:m,args:{labelProps:{srOnly:!1}},tags:["!autodocs"]},H=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:i=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=H.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(x,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx(m,{...i,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(m,{...i,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:f(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
