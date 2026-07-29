import{r as T,j as e}from"./iframe-C5Zwonuo.js";import{D as i,a as x}from"./_index-C-EzYYo_.js";import{C as f}from"./Card-DrADaC1Z.js";import{F as b}from"./Flex-DKYjZmuQ.js";import{F as h}from"./FieldGroup-CGhoNVcf.js";import{T as C,a as j}from"./TableCaption-D1Z2ODUM.js";import{T as F,a as o}from"./TableHeader-D3CfZyPc.js";import{T as s,a as t}from"./TableRow-DsB9ruZ6.js";import{T as k}from"./TableBody-X5g0NWgB.js";import{G as v}from"./GreenCheckIcon-C6AC1AMi.js";import{T as w}from"./TableFooter-Di-_bpjq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-Dg4lvHes.js";import"./NativeSelect-BNEgollk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bd41ZGtC.js";import"./ArrowDownIcon-CaQ2p2CD.js";import"./Icon-ByfFX6IZ.js";import"./InputGroup-CNogIbvc.js";import"./useId-n1Z0GKIB.js";import"./Label-raY0cVIX.js";import"./SupportLabel-CIPFQgbg.js";import"./SuccessIcon-BWoaZ5DS.js";import"./WarningIcon-DX5VYoXw.js";import"./Button-BRqUw2Ea.js";import"./usePreviousValue-IZYveHHb.js";import"./Loader-dpa9z90z.js";import"./useDelayedRender-BH-SW3uM.js";import"./ArrowRightIcon-C0-0Pabg.js";import"./CalendarIcon-CDVTHrIv.js";import"./SlotComponent-Ca5ipsfM.js";import"./mergeRefs-DjO_LR_x.js";import"./tableContext-CqS2-sUW.js";import"./ChevronUpIcon-DF3YD5Cz.js";const de={title:"Komponenter/Date Input/Eksempler",component:i,args:{description:"Velg dato",errorLabel:"effef",labelProps:{srOnly:!1}},tags:["!autodocs"]},y=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:m=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=y.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(f,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx("div",{style:{height:"250px"}}),e.jsx(i,{...m,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(i,{...m,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:x(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            height: "250px"
          }} />
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
