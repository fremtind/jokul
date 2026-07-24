import{r as h,j as e}from"./iframe-DOGnsXL-.js";import{C as g,t as C,a as T}from"./Calendar-BytvsiqG.js";import{F as n}from"./Flex-DNIyskBp.js";import{T as u}from"./Title-CQLy4wW9.js";import{I as v}from"./InputGroup-M7cVebkJ.js";import{T as a}from"./Text-DKKJL132.js";import{H as F}from"./Help-DmWbAiZW.js";import{F as P}from"./FieldGroup-DunWP6dZ.js";import{C as O}from"./Checkbox-BHOHshp8.js";import{C as S}from"./Card-B5mLnJzc.js";import{D as b,a as c,b as d}from"./DescriptionList-BTcnSZyR.js";import{B as H}from"./Button-DatrOgoB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./NativeSelect-D_cG4SvN.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-mwPDrxin.js";import"./ArrowDownIcon-CPLHF5QS.js";import"./Icon-jWDh-j8H.js";import"./ArrowRightIcon-lslvKq_R.js";import"./TableCaption-B56PQDaL.js";import"./tableContext-caB3HG2c.js";import"./formatDate-DZfsHyZW.js";import"./SlotComponent-B83S1Gh5.js";import"./mergeRefs-DJs1BG91.js";import"./useId-Dq6nG81M.js";import"./Label-CpSEfxht.js";import"./SupportLabel-CBHuDz12.js";import"./SuccessIcon-DlRo9NKk.js";import"./WarningIcon-B06b2JL6.js";import"./usePreviousValue-CcjplcU6.js";import"./Loader-B3pRtGCb.js";import"./useDelayedRender-B5jVceKN.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,p=T("2026-07-23"),pe={title:"Komponenter/Calendar/Eksempler",component:g,args:{defaultValue:p,onChange:w()}},r=[{date:"2026-07-21",title:"Feil i applikasjonen",customerDescription:"Får ikke gått inn på mine skadesaker",customerServiceRep:"Ole Jørgen Bakken",highPriority:!0,open:!0},{date:"2026-07-23",title:"Kunde kan ikke logge inn",customerDescription:"Kunde har glemt passord og får ikke logget inn",customerServiceRep:"Kari Nordmann",highPriority:!1,open:!0},{date:"2026-07-20",title:"Kunde har spørsmål om faktura",customerDescription:"Faktura har ikke riktig KID-nummer. Skal jeg betale?",customerServiceRep:"Per Hansen",highPriority:!1,open:!1},{date:"2026-07-23",title:"Kunde har spørsmål om forsikring",customerDescription:"Kunde lurer på om reiseforsikringen dekker avbestilling",customerServiceRep:"Anne Olsen",highPriority:!0,open:!0}].sort((o,i)=>new Date(o.date).getTime()-new Date(i.date).getTime()),s={name:"Bruke kalender for å endre view",parameters:{layout:"padded"},render:o=>{const[i,x]=h.useState(p),[y,f]=h.useState(!1),l=r.filter(t=>t.open&&(!y||t.highPriority)),D=r[0].date,k=r.findLastIndex(t=>t.open)>=0?r[r.findLastIndex(t=>t.open)].date:p,m=l.filter(t=>t.date===i);return e.jsxs(n,{direction:"column",children:[e.jsx(u,{as:"h2",children:"Saker"}),e.jsxs(n,{children:[e.jsxs(n,{as:"aside",direction:"column",style:{minHeight:"80svh"},children:[e.jsx(v,{label:"Velg dato",labelProps:{variant:"large"},children:e.jsx(g,{...o,min:D,max:k,value:i,onChange:t=>{const j=t.target.value;x(j)}})}),e.jsx("hr",{style:{opacity:.5,width:"100%"}}),e.jsxs(a,{children:["Åpne saker: ",l.length,e.jsxs(F,{buttonText:"Mer informasjon",children:[l.filter(t=>t.highPriority).length," ","med høy prioritet"]})]}),e.jsx("hr",{style:{opacity:.5,width:"100%"}}),e.jsx(n,{direction:"column",id:"filters",as:P,legend:"Filter",labelProps:{variant:"large"},children:e.jsx(O,{name:"onlyHighPriority",value:"priority-high-only",onChange:t=>f(t.target.checked),children:"Kun høy prioritet"})})]}),e.jsxs(n,{direction:"column",children:[m.map(t=>e.jsxs(S,{padding:"xl",children:[e.jsxs(n,{direction:"column",as:"hgroup",gap:"xs",children:[e.jsx(u,{as:"h3",size:"m",children:t.title}),e.jsx(a,{children:t.customerDescription})]}),e.jsxs(b,{children:[e.jsx(c,{children:"Sendt"}),e.jsx(d,{children:C(t.date)}),e.jsx(c,{children:"Ansvarlig"}),e.jsx(d,{children:t.customerServiceRep}),e.jsx(c,{children:"Høy prioritet?"}),e.jsx(d,{children:e.jsx(a,{bold:t.highPriority,children:t.highPriority?"Ja":"Nei"})})]}),e.jsx(H,{type:"button","data-size":"small",children:"Se sak"})]},t.date)),m.length===0&&e.jsx(a,{children:"Ingen saker på denne datoen"})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
