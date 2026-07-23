import{r as d,j as r}from"./iframe-1P0v6r39.js";import{C as s,t as c}from"./Calendar-DzMKXJU3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-Csl2k1Hm.js";import"./SlotComponent-C4sVb3oF.js";import"./mergeRefs-EaP4YK-6.js";import"./Flex-vBIa5ViZ.js";import"./NativeSelect-DKDbAq8p.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BrrOn-3M.js";import"./ArrowDownIcon-CxMyfmt6.js";import"./Icon-D_uGLux1.js";import"./InputGroup-CztomP7j.js";import"./useId-D1hy5zeW.js";import"./Label-gFgBaCtP.js";import"./SupportLabel-BMeqVcYX.js";import"./SuccessIcon-C3e5AFLg.js";import"./WarningIcon-uyCANl96.js";import"./Button-BsTTJoEe.js";import"./usePreviousValue-DHKIFQSW.js";import"./Loader-Dau7yegm.js";import"./useDelayedRender--OFbxPF4.js";import"./ArrowRightIcon-ClROYMm7.js";import"./Text-C5MmSy8m.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
