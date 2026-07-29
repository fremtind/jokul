import{r as T,j as e}from"./iframe-tfIYmcKY.js";import{D as i,a as x}from"./_index-Dfa3jcLc.js";import{C as f}from"./Card-zpvdgZUj.js";import{F as b}from"./Flex-Cc12rgj7.js";import{F as h}from"./FieldGroup-DJMDSwkR.js";import{T as C,a as j}from"./TableCaption-D0ZADO6b.js";import{T as F,a as o}from"./TableHeader-D6pBj1X2.js";import{T as s,a as t}from"./TableRow-C7qQdPAL.js";import{T as k}from"./TableBody-DeZWHWLZ.js";import{G as v}from"./GreenCheckIcon-ux94Hnhv.js";import{T as w}from"./TableFooter-3l4-xX-o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-CeiCWu0_.js";import"./NativeSelect-D9yqgFJF.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-cbwAmKMj.js";import"./ArrowDownIcon-BsJLELzX.js";import"./Icon-3NNtBsJI.js";import"./InputGroup-PqOnVYzJ.js";import"./useId-DUakEgQr.js";import"./Label--QxdZ_YV.js";import"./SupportLabel-Bf4ZgvA8.js";import"./SuccessIcon-CzahbezD.js";import"./WarningIcon-BQHmraDc.js";import"./Button-DlB2akMW.js";import"./usePreviousValue-BPiKMR4b.js";import"./Loader-D3IPKFyC.js";import"./useDelayedRender-PDnGje90.js";import"./ArrowRightIcon-tUtLM2_L.js";import"./CalendarIcon-Btg7SuGX.js";import"./SlotComponent-rkGjgAuz.js";import"./mergeRefs-V90Ujw1V.js";import"./tableContext-BApP0IpZ.js";import"./ChevronUpIcon-DTPYfsY_.js";const de={title:"Komponenter/Date Input/Eksempler",component:i,args:{description:"Velg dato",errorLabel:"effef",labelProps:{srOnly:!1}},tags:["!autodocs"]},y=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:m=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=y.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(f,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx("div",{style:{height:"2000px"}}),e.jsx(i,{...m,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(i,{...m,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:x(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
                        <div style={{
            height: "2000px"
          }}></div>
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
}`,...l.parameters?.docs?.source}}};const pe=["DateInputRange"];export{l as DateInputRange,pe as __namedExportsOrder,de as default};
