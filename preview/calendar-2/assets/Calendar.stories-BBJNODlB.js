import{r as d,j as r}from"./iframe-DY9Ch4Nd.js";import{C as s,t as c}from"./Calendar-BgdRc1Kd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-ZZzGImmk.js";import"./SlotComponent-B0UZ3R2F.js";import"./mergeRefs-oHzAQV1k.js";import"./Flex-FdNf9mDi.js";import"./NativeSelect-CSNFarka.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B2fF7eLu.js";import"./ArrowDownIcon-BRe29B6y.js";import"./Icon-CTcgQjwD.js";import"./InputGroup-CFIWiByb.js";import"./useId-BDCaMSA7.js";import"./Label-DRB4vOZS.js";import"./SupportLabel-CkQEI1fg.js";import"./SuccessIcon-CIlsZM9e.js";import"./WarningIcon-DCcE-kez.js";import"./Button-DDpHrUbz.js";import"./usePreviousValue-BySBvO33.js";import"./Loader-KQbaJGx2.js";import"./useDelayedRender-DZDCUOGC.js";import"./ArrowRightIcon-DNriBwg5.js";import"./Text-DxyYDlw0.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
