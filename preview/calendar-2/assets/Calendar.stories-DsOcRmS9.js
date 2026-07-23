import{r as d,j as r}from"./iframe-Ches63Cb.js";import{C as s,t as c}from"./Calendar-CpV0L4TU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-Cfts_ins.js";import"./SlotComponent--BqNjFKH.js";import"./mergeRefs-TFS7xXDg.js";import"./Flex-BfWlIkSn.js";import"./NativeSelect-CtkrP67I.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CDRRchZU.js";import"./ArrowDownIcon-DLrENIKh.js";import"./Icon-ClB2F21G.js";import"./InputGroup-CV2T6niQ.js";import"./useId-C_z22xL3.js";import"./Label-Cm4Sx8Uo.js";import"./SupportLabel-Bc5ychMY.js";import"./SuccessIcon-BWZsJm9Y.js";import"./WarningIcon-CWN6JUkl.js";import"./Button--gBo5gKh.js";import"./usePreviousValue-jPBEO_Eg.js";import"./Loader-DfPUrU0Y.js";import"./useDelayedRender-Cwz3oBbZ.js";import"./ArrowRightIcon-Dp_6z71m.js";import"./TableCaption-CPGPZh-W.js";import"./tableContext-BSQXJJab.js";import"./Text-DTp_Lu_q.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
