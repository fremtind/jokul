import{r as d,j as r}from"./iframe-Cp07xSmx.js";import{C as s,t as c}from"./Calendar-CVnmJL5J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-BzZNA-px.js";import"./SlotComponent-BN4OncKp.js";import"./mergeRefs-DveSDJ_e.js";import"./Flex-CsiBVy-2.js";import"./NativeSelect-B6kifMk-.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-MWXri696.js";import"./ArrowDownIcon-3tbyM_au.js";import"./Icon-s9meQJjp.js";import"./InputGroup-C3xGlDVa.js";import"./useId-aQD7Wi8L.js";import"./Label-C1R2znUG.js";import"./SupportLabel-D8eTd6ZF.js";import"./SuccessIcon-DV6mJFuV.js";import"./WarningIcon-CKDm5_9y.js";import"./Button-Ds1Wz7I6.js";import"./usePreviousValue-CxbS1Cv8.js";import"./Loader-BnPL5fgi.js";import"./useDelayedRender-BnDsBb8_.js";import"./ArrowRightIcon-B69cn81b.js";import"./Text-C0n0dOZ7.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
