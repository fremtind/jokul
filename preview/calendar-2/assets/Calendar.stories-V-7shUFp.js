import{r as d,j as r}from"./iframe-j1IZglm2.js";import{C as s,t as c}from"./Calendar-ClD24lSc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-CxvqUmre.js";import"./SlotComponent-DQvNJY0d.js";import"./mergeRefs-BLtTXsiw.js";import"./Flex-BSBuruli.js";import"./NativeSelect-sfG53Dbw.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-AJWWyElE.js";import"./ArrowDownIcon-DEAsdP2b.js";import"./Icon-Ci0v7dEm.js";import"./InputGroup-CUTyktgB.js";import"./useId-DBvmfo0A.js";import"./Label-tpeiC-u4.js";import"./SupportLabel-B1D5mG-Z.js";import"./SuccessIcon-BPInm2zU.js";import"./WarningIcon-CjHP1Pcg.js";import"./Button-cS7KMsit.js";import"./usePreviousValue-DtSbpPlV.js";import"./Loader-_-P6QC8P.js";import"./useDelayedRender-DUa8pYr6.js";import"./ArrowRightIcon-Cji6IMT_.js";import"./Text-uspmYzoh.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
