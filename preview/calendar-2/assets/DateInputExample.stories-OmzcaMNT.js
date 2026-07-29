import{r as T,j as e}from"./iframe-B-gsrB7C.js";import{D as i,a as x}from"./_index-Dd8VYBUR.js";import{C as f}from"./Card-TGbIHPs6.js";import{F as b}from"./Flex-CeIppJ9R.js";import{F as h}from"./FieldGroup-2qf1_t-q.js";import{T as C,a as j}from"./TableCaption-Dip8lL_L.js";import{T as F,a as o}from"./TableHeader-CcRQsw17.js";import{T as s,a as t}from"./TableRow-DlxcxVbB.js";import{T as k}from"./TableBody-BnTYbL31.js";import{G as v}from"./GreenCheckIcon-BPXfihvh.js";import{T as w}from"./TableFooter-B8qZfv60.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-CHYEhKP6.js";import"./NativeSelect-n6mL7b9p.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BpZ8p85S.js";import"./ArrowDownIcon-C1v_7lX0.js";import"./Icon--6LHf8Va.js";import"./InputGroup-IsDzZS2x.js";import"./useId-BeLfunr9.js";import"./Label-BEC1Bhzu.js";import"./SupportLabel-Dl6vDL7o.js";import"./SuccessIcon-DN2c95Z4.js";import"./WarningIcon-DCRptmS4.js";import"./Button-CB8OIQ63.js";import"./usePreviousValue-BtetFu4T.js";import"./Loader-BPiyrU50.js";import"./useDelayedRender-CnHgPfma.js";import"./ArrowRightIcon-CQU4TfpL.js";import"./CalendarIcon-Igsf8m0H.js";import"./SlotComponent-DUws_h2B.js";import"./mergeRefs-fauIwjzm.js";import"./tableContext-kSNlUC4v.js";import"./ChevronUpIcon-9Sc-QQSG.js";const de={title:"Komponenter/Date Input/Eksempler",component:i,args:{description:"Velg dato",errorLabel:"effef",labelProps:{srOnly:!1}},tags:["!autodocs"]},y=[{createdDate:"2025-10-20",firstName:"Ole Jørgen",lastName:"Bakken",usedTravelInsurance:!0},{createdDate:"2025-10-21",firstName:"Kari",lastName:"Nordmann"},{createdDate:"2025-10-22",firstName:"Per",lastName:"Hansen"}],l={name:"Filtrering til og fra dato",parameters:{layout:"padded"},args:{label:""},render:m=>{const[r,D]=T.useState("2025-01-01"),[n,g]=T.useState("2026-12-31"),d=y.filter(a=>{const p=new Date(a.createdDate),c=r?new Date(r):null,u=n?new Date(n):null;return(!c||p>=c)&&(!u||p<=u)});return e.jsx(f,{padding:"xl",children:e.jsxs(b,{direction:"column",gap:"m",children:[e.jsxs(b,{as:h,gap:"m",legend:"Filtrer kunder etter opprettet dato",alignItems:"end",children:[e.jsx("div",{style:{height:"2000px"}}),e.jsx(i,{...m,label:"Fra dato",max:n,value:r,onChange:a=>D(a.target.value)}),e.jsx(i,{...m,label:"Til dato",min:r,value:n,onChange:a=>g(a.target.value)})]}),e.jsxs(C,{caption:e.jsx(j,{srOnly:!0,children:"Eksempel på kundedata"}),children:[e.jsx(F,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Opprettet dato"}),e.jsx(o,{children:"Fornavn"}),e.jsx(o,{children:"Etternavn"}),e.jsx(o,{children:"Har brukt reiseforsikringen?"})]})}),e.jsx(k,{children:d.map(a=>e.jsxs(s,{children:[e.jsx(t,{children:x(a.createdDate,"no",{month:"numeric",year:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.firstName}),e.jsx(t,{children:a.lastName}),e.jsx(t,{children:a.usedTravelInsurance?e.jsx(v,{}):null})]},a.createdDate))}),e.jsx(w,{children:e.jsx(s,{children:e.jsxs(t,{colSpan:4,children:["Totalt: ",d.length," kunder"]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
