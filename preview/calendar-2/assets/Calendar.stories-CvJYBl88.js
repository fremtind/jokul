import{r as d,j as r}from"./iframe-DNahjSPM.js";import{C as s,t as c}from"./Calendar-C4wQV-hs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DQ6ZDuZB.js";import"./SlotComponent-BKlsXEdz.js";import"./mergeRefs-D9X7gLQw.js";import"./Flex-ecyLc3BO.js";import"./NativeSelect-FTL3dfxo.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Djwt-U6a.js";import"./ArrowDownIcon-Us5_pEEd.js";import"./Icon-CmlxtFEB.js";import"./InputGroup-B0qW3rjz.js";import"./useId-B4kgALxq.js";import"./Label-Cktc1ykF.js";import"./SupportLabel-CRlKg2AJ.js";import"./SuccessIcon-Bys_aSKR.js";import"./WarningIcon-Dj_rySZ9.js";import"./Button-Ce6Z8z1o.js";import"./usePreviousValue-C0t-Cy-6.js";import"./Loader-D2JQwdui.js";import"./useDelayedRender-bUd0MxQw.js";import"./ArrowRightIcon-DCqNoP5j.js";import"./Text-BwaSTAVm.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
