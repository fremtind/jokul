import{r as h,j as e}from"./iframe-Bs2ZEwwT.js";import{C as g,t as C,a as T}from"./Calendar-NcUEQuF4.js";import{F as n}from"./Flex-BRpAonZ5.js";import{T as u}from"./Title-5IAXNFIB.js";import{I as v}from"./InputGroup-CpKsJGCn.js";import{T as a}from"./Text-Du1HvY2t.js";import{H as F}from"./Help-I3frJ9xT.js";import{F as P}from"./FieldGroup-CKKMdmhd.js";import{C as O}from"./Checkbox-BTgjjVNW.js";import{C as S}from"./Card-D7KmuBBz.js";import{D as b,a as c,b as d}from"./DescriptionList-BxG0oFSp.js";import{B as H}from"./Button-BmmzBNH9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./NativeSelect-G6jGPmAZ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D-W4J-GQ.js";import"./ArrowDownIcon-B3Y5W5C0.js";import"./Icon-C7s4gIxg.js";import"./ArrowRightIcon-5xQEZZ9q.js";import"./TableCaption-BmI2YfQ-.js";import"./tableContext-DzJjgAYg.js";import"./formatDate-DZfsHyZW.js";import"./SlotComponent-C-RR4lsL.js";import"./mergeRefs-XO6I4NKo.js";import"./useId-CVc_TE9Z.js";import"./Label-BaAE2F6s.js";import"./SupportLabel-DD1h3dlP.js";import"./SuccessIcon-Gd7hNHf-.js";import"./WarningIcon-D--lXmJJ.js";import"./usePreviousValue-l7ugWeuV.js";import"./Loader-D0qJ6omB.js";import"./useDelayedRender-D_khDUEd.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,p=T("2026-07-23"),pe={title:"Komponenter/Calendar/Eksempler",component:g,args:{defaultValue:p,onChange:w()}},r=[{date:"2026-07-21",title:"Feil i applikasjonen",customerDescription:"Får ikke gått inn på mine skadesaker",customerServiceRep:"Ole Jørgen Bakken",highPriority:!0,open:!0},{date:"2026-07-23",title:"Kunde kan ikke logge inn",customerDescription:"Kunde har glemt passord og får ikke logget inn",customerServiceRep:"Kari Nordmann",highPriority:!1,open:!0},{date:"2026-07-20",title:"Kunde har spørsmål om faktura",customerDescription:"Faktura har ikke riktig KID-nummer. Skal jeg betale?",customerServiceRep:"Per Hansen",highPriority:!1,open:!1},{date:"2026-07-23",title:"Kunde har spørsmål om forsikring",customerDescription:"Kunde lurer på om reiseforsikringen dekker avbestilling",customerServiceRep:"Anne Olsen",highPriority:!0,open:!0}].sort((o,i)=>new Date(o.date).getTime()-new Date(i.date).getTime()),s={name:"Bruke kalender for å endre view",parameters:{layout:"padded"},render:o=>{const[i,x]=h.useState(p),[y,f]=h.useState(!1),l=r.filter(t=>t.open&&(!y||t.highPriority)),D=r[0].date,k=r.findLastIndex(t=>t.open)>=0?r[r.findLastIndex(t=>t.open)].date:p,m=l.filter(t=>t.date===i);return e.jsxs(n,{direction:"column",children:[e.jsx(u,{as:"h2",children:"Saker"}),e.jsxs(n,{children:[e.jsxs(n,{as:"aside",direction:"column",style:{minHeight:"80svh"},children:[e.jsx(v,{label:"Velg dato",labelProps:{variant:"large"},children:e.jsx(g,{...o,min:D,max:k,value:i,onChange:t=>{const j=t.target.value;x(j)}})}),e.jsx("hr",{style:{opacity:.5,width:"100%"}}),e.jsxs(a,{children:["Åpne saker: ",l.length,e.jsxs(F,{buttonText:"Mer informasjon",children:[l.filter(t=>t.highPriority).length," ","med høy prioritet"]})]}),e.jsx("hr",{style:{opacity:.5,width:"100%"}}),e.jsx(n,{direction:"column",id:"filters",as:P,legend:"Filter",labelProps:{variant:"large"},children:e.jsx(O,{name:"onlyHighPriority",value:"priority-high-only",onChange:t=>f(t.target.checked),children:"Kun høy prioritet"})})]}),e.jsxs(n,{direction:"column",children:[m.map(t=>e.jsxs(S,{padding:"xl",children:[e.jsxs(n,{direction:"column",as:"hgroup",gap:"xs",children:[e.jsx(u,{as:"h3",size:"m",children:t.title}),e.jsx(a,{children:t.customerDescription})]}),e.jsxs(b,{children:[e.jsx(c,{children:"Sendt"}),e.jsx(d,{children:C(t.date)}),e.jsx(c,{children:"Ansvarlig"}),e.jsx(d,{children:t.customerServiceRep}),e.jsx(c,{children:"Høy prioritet?"}),e.jsx(d,{children:e.jsx(a,{bold:t.highPriority,children:t.highPriority?"Ja":"Nei"})})]}),e.jsx(H,{type:"button","data-size":"small",children:"Se sak"})]},t.date)),m.length===0&&e.jsx(a,{children:"Ingen saker på denne datoen"})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Bruke kalender for å endre view",
  parameters: {
    layout: "padded"
  },
  render: args => {
    const [day, setDay] = useState(today);
    const [onlyHighPriority, setOnlyHighPriority] = useState(false);
    const activeCases = cases.filter(c => c.open && (!onlyHighPriority || c.highPriority));
    const dateOfFirstCase = cases[0].date;
    const dateOfLastCase = cases.findLastIndex(c => c.open) >= 0 ? cases[cases.findLastIndex(c => c.open)].date : today;
    const casesOnDate = activeCases.filter(c => c.date === day);
    return <Flex direction="column">
                <Title as="h2">Saker</Title>
                <Flex>
                    <Flex as="aside" direction="column" style={{
          minHeight: "80svh"
        }}>
                        <InputGroup label="Velg dato" labelProps={{
            variant: "large"
          }}>
                            <Calendar {...args} min={dateOfFirstCase} max={dateOfLastCase} value={day} onChange={e => {
              const newDay = e.target.value;
              setDay(newDay);
            }} />
                        </InputGroup>
                        <hr style={{
            opacity: 0.5,
            width: "100%"
          }} />
                        <Text>
                            Åpne saker: {activeCases.length}
                            <Help buttonText="Mer informasjon">
                                {activeCases.filter(c => c.highPriority).length}{" "}
                                med høy prioritet
                            </Help>
                        </Text>
                        <hr style={{
            opacity: 0.5,
            width: "100%"
          }} />
                        <Flex direction="column" id="filters" as={FieldGroup} legend="Filter" labelProps={{
            variant: "large"
          }}>
                            <Checkbox name="onlyHighPriority" value="priority-high-only" onChange={e => setOnlyHighPriority(e.target.checked)}>
                                Kun høy prioritet
                            </Checkbox>
                        </Flex>
                    </Flex>
                    <Flex direction="column">
                        {casesOnDate.map(caseInfo => <Card padding="xl" key={caseInfo.date}>
                                <Flex direction="column" as="hgroup" gap="xs">
                                    <Title as="h3" size="m">
                                        {caseInfo.title}
                                    </Title>
                                    <Text>{caseInfo.customerDescription}</Text>
                                </Flex>

                                <DescriptionList>
                                    <DescriptionTerm>Sendt</DescriptionTerm>
                                    <DescriptionDetail>
                                        {toNorwegianDateFormat(caseInfo.date)}
                                    </DescriptionDetail>
                                    <DescriptionTerm>Ansvarlig</DescriptionTerm>
                                    <DescriptionDetail>
                                        {caseInfo.customerServiceRep}
                                    </DescriptionDetail>
                                    <DescriptionTerm>
                                        Høy prioritet?
                                    </DescriptionTerm>
                                    <DescriptionDetail>
                                        <Text bold={caseInfo.highPriority}>
                                            {caseInfo.highPriority ? "Ja" : "Nei"}
                                        </Text>
                                    </DescriptionDetail>
                                </DescriptionList>

                                <Button type="button" data-size="small">
                                    Se sak
                                </Button>
                            </Card>)}
                        {casesOnDate.length === 0 && <Text>Ingen saker på denne datoen</Text>}
                    </Flex>
                </Flex>
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};const me=["CalendarView"];export{s as CalendarView,me as __namedExportsOrder,pe as default};
