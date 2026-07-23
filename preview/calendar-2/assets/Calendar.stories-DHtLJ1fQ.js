import{r as d,j as r}from"./iframe-CE2TGHfE.js";import{C as s,t as c}from"./Calendar-Dw8yhXLx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-BI1CjxDe.js";import"./SlotComponent-Bk7zUpDR.js";import"./mergeRefs-BdvyopZE.js";import"./Flex-4j0xAmby.js";import"./NativeSelect-D-MYm5lB.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-xYeRx7UE.js";import"./ArrowDownIcon-f5H31lps.js";import"./Icon-AcSprluj.js";import"./InputGroup-CK1cL1ta.js";import"./useId-CZJz2ln4.js";import"./Label-B8XMbroq.js";import"./SupportLabel-YbhWDJ8G.js";import"./SuccessIcon-_X8Y4pi0.js";import"./WarningIcon-Bkss4WIP.js";import"./Button-PrL7W0qK.js";import"./usePreviousValue-BnKm30Ja.js";import"./Loader-ClF7yykp.js";import"./useDelayedRender-DdladrNH.js";import"./ArrowRightIcon-DA4fUutC.js";import"./Text-CcF9mS_P.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    min: today,
    max: tomorrow
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [day, setDay] = useState(today);
    return <>
                <Calendar {...args} value={day} onChange={e => setDay(e.target.value)} />
                <strong>{toNorwegianDateFormat(day)}</strong>
            </>;
  }
}`,...a.parameters?.docs?.source}}};const k=["CalendarStory","CalendarStoryMinMax","CalendarValue"];export{t as CalendarStory,e as CalendarStoryMinMax,a as CalendarValue,k as __namedExportsOrder,b as default};
