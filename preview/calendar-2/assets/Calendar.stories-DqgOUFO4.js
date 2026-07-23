import{r as d,j as r}from"./iframe-DXtd7ZLs.js";import{C as s,t as c}from"./Calendar-DtNEEw0R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-BSAXDmV-.js";import"./SlotComponent-DVzDZLzn.js";import"./mergeRefs-Brm-Ssyg.js";import"./Flex-_l42_KjK.js";import"./NativeSelect-C0hnbHH5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CtTK_Jb1.js";import"./ArrowDownIcon-UmTJ_rUH.js";import"./Icon-DhJkfN19.js";import"./InputGroup-BO5mxtj5.js";import"./useId-lY7SW1FK.js";import"./Label-Cn0bjoaP.js";import"./SupportLabel-DlG5bd5s.js";import"./SuccessIcon-PY1NNQ4H.js";import"./WarningIcon-BTPcNa1G.js";import"./Button-CmppnUCT.js";import"./usePreviousValue-D6ZvhIW5.js";import"./Loader-Blv3ueW-.js";import"./useDelayedRender-Ya6-B6fq.js";import"./ArrowRightIcon-BrZU_dCS.js";import"./TableCaption-B6AApID4.js";import"./tableContext-Bxqd3HTb.js";import"./Text-DT3NxfdM.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
