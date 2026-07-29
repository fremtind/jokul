import{r as T,j as e}from"./iframe-DSmbHPAN.js";import{D as i,a as x}from"./_index-DLLczs5-.js";import{C as f}from"./Card-BhipzCtf.js";import{F as b}from"./Flex-DSSWQ7S6.js";import{F as h}from"./FieldGroup-BcCrUovy.js";import{T as C,a as j}from"./TableCaption-BtcFmG45.js";import{T as F,a as o}from"./TableHeader-DeWarKJ3.js";import{T as s,a as t}from"./TableRow-CDc2N9A7.js";import{T as k}from"./TableBody-7dkVuXhZ.js";import{G as v}from"./GreenCheckIcon-DycHlio7.js";import{T as w}from"./TableFooter--_2NQNpj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-u9lwYaSA.js";import"./NativeSelect-BY0k2Otc.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CKXnQrCq.js";import"./ArrowDownIcon-riFVLHU8.js";import"./Icon-CXGEY-5-.js";import"./InputGroup-Dv5MqIEg.js";import"./useId-BqnN0Zcx.js";import"./Label-jurifqgh.js";import"./SupportLabel-Cdbif_TY.js";import"./SuccessIcon-XM7XfDyy.js";import"./WarningIcon-E1iDheLx.js";import"./Button-Dqdjp27D.js";import"./usePreviousValue-DCUFEM92.js";import"./Loader-Dbs6ORoh.js";import"./useDelayedRender-Cr07E68K.js";import"./ArrowRightIcon-RhgGMTZY.js";import"./CalendarIcon-B1FBcGA1.js";import"./SlotComponent-hSV_d9WT.js";import"./mergeRefs-Bi2dp4Z7.js";import"./tableContext-BeIzfWVK.js";import"./ChevronUpIcon-C2HVgK5d.js";const de={title:"Komponenter/Date Input/Eksempler",component:i,args:{description:"Velg dato",errorLabel:"effef",labelProps:{srOnly:!1}},tags:["!autodocs"]},y=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:m=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=y.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(f,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx("div",{style:{height:"250px"}}),e.jsx(i,{...m,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(i,{...m,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:x(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
