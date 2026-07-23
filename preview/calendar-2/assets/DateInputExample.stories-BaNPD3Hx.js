import{r as T,j as e}from"./iframe-CoW--EkS.js";import{D as m}from"./_index-BQaHOEgx.js";import{t as f}from"./Calendar-DIXq4KgA.js";import{C as x}from"./Card-DZ3ZirID.js";import{F as b}from"./Flex-Dm_53I22.js";import{F as h}from"./FieldGroup-ImESbl6T.js";import{T as C,a as j}from"./TableCaption-BNaLp-Lr.js";import{T as F,a as o}from"./TableHeader-D2KgsU5m.js";import{T as s,a as r}from"./TableRow-Cs4Y4sK_.js";import{T as k}from"./TableBody-KLsU8w7Q.js";import{G as v}from"./GreenCheckIcon-b0nTEsfg.js";import{T as w}from"./TableFooter-ABNOHXs1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-njUlHXiR.js";import"./useId-DzyH_aNV.js";import"./Label-DrfxShLH.js";import"./SupportLabel-CW-yiuaL.js";import"./SuccessIcon-BI8pqagt.js";import"./Icon-kbo-3oi0.js";import"./WarningIcon-B6wGOzoV.js";import"./Button-B9uJfvKP.js";import"./usePreviousValue-DYEnE7Ib.js";import"./Loader-BwEgdT3o.js";import"./useDelayedRender-CQbZp11g.js";import"./CalendarIcon-ByDkUQFD.js";import"./NativeSelect-BOE9VKI5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dyi9nBKr.js";import"./ArrowDownIcon-CTVwfuR0.js";import"./ArrowRightIcon-CWbIXESB.js";import"./Text-Ct9EUA-V.js";import"./formatDate-DZfsHyZW.js";import"./SlotComponent-_ZN0yv-3.js";import"./mergeRefs-CaHfFmdf.js";import"./tableContext-Bm75NTZ_.js";import"./ChevronUpIcon-r06_atfd.js";const pe={title:"Komponenter/Date Input/Eksempler",component:m,args:{labelProps:{srOnly:!1}},tags:["!autodocs"]},H=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:i=>{const[t,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=H.filter(a=>{const p=new Date(a.createdDate),c=t?new Date(t):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(x,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx(m,{...i,label:"Fra dato",min:t,max:n,value:t,onChange:a=>D(a.target.value)}),e.jsx(m,{...i,label:"Til dato",min:t,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(r,{children:f(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(r,{children:a.firstName}),e.jsx(r,{children:a.lastName}),e.jsx(r,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(r,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
                        <DateInput {...args} label="Fra dato" min={fromDate} max={toDate} value={fromDate} onChange={e => setFromDate(e.target.value)} />
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
