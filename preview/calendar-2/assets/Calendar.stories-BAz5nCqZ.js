import{r as d,j as r}from"./iframe-_FbqnM0t.js";import{C as s,t as c}from"./Calendar-Bj_Bn4FZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-jYtQ0sef.js";import"./SlotComponent-uqUteRuV.js";import"./mergeRefs-B6F2ecWK.js";import"./Flex-BMronpXF.js";import"./NativeSelect-eJHB9kxv.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-JmnsMlZB.js";import"./ArrowDownIcon-BHVujfqP.js";import"./Icon-DQEQLOwb.js";import"./InputGroup-CH2jbWG8.js";import"./useId-BazUWtdC.js";import"./Label-DvCKCHCr.js";import"./SupportLabel-B3pYR1lf.js";import"./SuccessIcon-BV3Ybpgs.js";import"./WarningIcon-DzHBKJ9H.js";import"./Button-BG_iH0eJ.js";import"./usePreviousValue-DQsDZLi6.js";import"./Loader-dntcr9VU.js";import"./useDelayedRender-DXEUWubj.js";import"./ArrowRightIcon-BjUBI6Rg.js";import"./TableCaption-CXIPIQuv.js";import"./tableContext-CFUcUP-V.js";import"./Text-j7h9P65a.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
