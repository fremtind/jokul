import{r as d,j as r}from"./iframe-B9kJZceo.js";import{C as s,t as c}from"./Calendar-CdBXE5t1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-qMW5JB_C.js";import"./SlotComponent-BgdTKR5g.js";import"./mergeRefs-CReJslxz.js";import"./Flex-L3KborQX.js";import"./NativeSelect-Cjg6_niO.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DUKhggi8.js";import"./ArrowDownIcon-UFCKx2iI.js";import"./Icon-C9KgRYQm.js";import"./InputGroup-uxo4ytBA.js";import"./useId-DSBbTZ7r.js";import"./Label-C5Yg6SgH.js";import"./SupportLabel-DVHOsnJ-.js";import"./SuccessIcon-bOMSkm-h.js";import"./WarningIcon-Cx1rEU8g.js";import"./Button-DfQpDe3z.js";import"./usePreviousValue-C0v6jYaT.js";import"./Loader-DT-35wtN.js";import"./useDelayedRender-BhZA4pXa.js";import"./ArrowRightIcon-BNTwp_5v.js";import"./TableCaption-BbSlXPdu.js";import"./tableContext-n8I0cJVt.js";import"./Text-DQY6jcsN.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
