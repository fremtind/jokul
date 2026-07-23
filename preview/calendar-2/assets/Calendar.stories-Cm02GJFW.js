import{r as d,j as r}from"./iframe-DrBWRhvb.js";import{C as s,t as c}from"./Calendar-DnDyKib_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-D90-Y1o0.js";import"./SlotComponent-D5TFORnD.js";import"./mergeRefs-B-5dmWeR.js";import"./Flex-B53Lbq8d.js";import"./NativeSelect-CbhSz9C0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DwFmV9Dx.js";import"./ArrowDownIcon-Cj1aS1Rz.js";import"./Icon-CqoybaBr.js";import"./InputGroup-BNcrQ_5g.js";import"./useId-BPXmfBeh.js";import"./Label-0V216ryY.js";import"./SupportLabel-BNhglhh_.js";import"./SuccessIcon-DetzCQbr.js";import"./WarningIcon-CbPVRqGf.js";import"./Button-DP03VoF5.js";import"./usePreviousValue-D_fFL0Je.js";import"./Loader-BuuFeKMh.js";import"./useDelayedRender-DlF2S4YI.js";import"./ArrowRightIcon-DYIcHc-Q.js";import"./TableCaption-CouuJOh4.js";import"./tableContext-CirUzNFN.js";import"./Text-CearldpP.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
