import{r as d,j as r}from"./iframe-Cp86lBAL.js";import{C as s,t as c}from"./Calendar-DuJkf7Ga.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DR8yQa4e.js";import"./SlotComponent-COkUhzmn.js";import"./mergeRefs-ezjkseJ9.js";import"./Flex-CIlRHfFb.js";import"./NativeSelect-BWWmgChY.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BQtC_bec.js";import"./ArrowDownIcon-DrZIGO7_.js";import"./Icon-BnvmPiPE.js";import"./InputGroup-BOiNL0Js.js";import"./useId-DXjpdJol.js";import"./Label-CJ3rQXbU.js";import"./SupportLabel-IjFg-Rlk.js";import"./SuccessIcon-BswGm4f1.js";import"./WarningIcon-CWRGLn1z.js";import"./Button-DzV8GKxh.js";import"./usePreviousValue-DwJZHjF4.js";import"./Loader-px0NaIZT.js";import"./useDelayedRender-B1quFjY1.js";import"./ArrowRightIcon-hmii2h3u.js";import"./TableCaption-DClG7yvI.js";import"./tableContext-_jEmExo2.js";import"./Text-htP-kGxf.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
