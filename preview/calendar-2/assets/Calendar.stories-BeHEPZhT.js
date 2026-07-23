import{r as d,j as r}from"./iframe-Cwc-6VXE.js";import{C as s,t as c}from"./Calendar-Mc7TIzRM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DTGZN9iY.js";import"./SlotComponent-ZeAGNLNQ.js";import"./mergeRefs-BEmLTIOw.js";import"./Flex-CICXvqNs.js";import"./NativeSelect-DrcYAfvq.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-XYrjaUia.js";import"./ArrowDownIcon-xBSjicaM.js";import"./Icon-BkdH1r15.js";import"./InputGroup-DYWDAiay.js";import"./useId-C9SbrvJj.js";import"./Label-C6LEfVxu.js";import"./SupportLabel-BJYcqK2S.js";import"./SuccessIcon-BCYaqfcj.js";import"./WarningIcon-CvQLlBDK.js";import"./Button-QEdW5VW7.js";import"./usePreviousValue-dFVuayYA.js";import"./Loader-B6AXpeVj.js";import"./useDelayedRender-BgqLqed0.js";import"./ArrowRightIcon-DrTTLeJf.js";import"./TableCaption-DYE5U7qa.js";import"./tableContext--tFJwGzq.js";import"./Text-GI7blYLk.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
