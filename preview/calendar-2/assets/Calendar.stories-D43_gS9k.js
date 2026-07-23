import{r as d,j as r}from"./iframe-BanOjaEs.js";import{C as s,t as c}from"./Calendar-DfckY74w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-CZLpQ-fn.js";import"./SlotComponent-DVFIp14B.js";import"./mergeRefs-CUuohrjO.js";import"./Flex-D7Ytb0vp.js";import"./NativeSelect-vW0c9Dzm.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BUEnr9Ej.js";import"./ArrowDownIcon-Bl977yvH.js";import"./Icon-CA5u8Mvo.js";import"./InputGroup-BIcbJb0X.js";import"./useId-FcO9o6PO.js";import"./Label-B_vjq8Vw.js";import"./SupportLabel-B2g2JXfD.js";import"./SuccessIcon-DV2_OQ-b.js";import"./WarningIcon-BEPNRUWf.js";import"./Button-BLG2zX00.js";import"./usePreviousValue-DIc7_7qT.js";import"./Loader-BcqR_1wm.js";import"./useDelayedRender-Ch19V4tE.js";import"./ArrowRightIcon-Bw2zOfnV.js";import"./TableCaption-vjbKHkn_.js";import"./tableContext-YnGnvJEI.js";import"./Text-Dnur5ON2.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
