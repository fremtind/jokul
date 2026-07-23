import{r as d,j as r}from"./iframe-B_a7fdWG.js";import{C as s,t as c}from"./Calendar-CTPkagm9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-Beah5ds-.js";import"./SlotComponent-DZSAm9H2.js";import"./mergeRefs-CX_-d4Se.js";import"./Flex-mY32RR_t.js";import"./NativeSelect-DWP2XwCG.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DuZTMXqx.js";import"./ArrowDownIcon-AZxK2IIv.js";import"./Icon-KT0PYLjZ.js";import"./InputGroup-D9SRKVq1.js";import"./useId-Cg-rCeCz.js";import"./Label-Dy-n_Pco.js";import"./SupportLabel-B6mrXGXk.js";import"./SuccessIcon-BmR8FREg.js";import"./WarningIcon-BpavfUXs.js";import"./Button-CFD3M9m2.js";import"./usePreviousValue-BGOvSBhw.js";import"./Loader-DiQlMj4v.js";import"./useDelayedRender-D4o9BMHN.js";import"./ArrowRightIcon-BYs7B_cS.js";import"./TableCaption-K__MeALv.js";import"./tableContext-sO9tXXuT.js";import"./Text-Dgu0V24K.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const z=["CalendarStory","CalendarStoryMinMax","CalendarValue"];export{t as CalendarStory,e as CalendarStoryMinMax,a as CalendarValue,z as __namedExportsOrder,q as default};
