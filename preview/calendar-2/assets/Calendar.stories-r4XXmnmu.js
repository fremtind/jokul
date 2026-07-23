import{r as d,j as r}from"./iframe-e2zLSOxq.js";import{C as s,t as c}from"./Calendar-BWA1sGzS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DtXLPYpS.js";import"./SlotComponent-C2Bnb50H.js";import"./mergeRefs-DQvja3sh.js";import"./Flex-D5jzCgAD.js";import"./NativeSelect-CqbL6U23.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-UuBo1A3L.js";import"./ArrowDownIcon-3tAKY0SE.js";import"./Icon-CEgxKMcZ.js";import"./InputGroup-DzXyDJ1B.js";import"./useId-Bs_ZDihn.js";import"./Label-CqXXG26D.js";import"./SupportLabel-DAyT_rWa.js";import"./SuccessIcon-5mWPYXSc.js";import"./WarningIcon-COHbmbIq.js";import"./Button-CiCMg6as.js";import"./usePreviousValue-CATS8D4c.js";import"./Loader-C0Du0khY.js";import"./useDelayedRender-D7CaKDVe.js";import"./ArrowRightIcon-io4pb5KY.js";import"./TableCaption-DLIT2nNX.js";import"./tableContext-CSpdF8aX.js";import"./Text-C0TpU2SD.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    min: today,
    max: tomorrow
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [day, setDay] = useState(today);
    return <>
                <Calendar {...args} value={day} onChange={e => setDay(e.target.value)} />
                <strong>{toNorwegianDateFormat(day)}</strong>
            </>;
  }
}`,...e.parameters?.docs?.source}}};const z=["CalendarStory","CalendarStoryMinMax","CalendarValue"];export{t as CalendarStory,a as CalendarStoryMinMax,e as CalendarValue,z as __namedExportsOrder,q as default};
