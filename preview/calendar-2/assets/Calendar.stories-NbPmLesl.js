import{r as d,j as r}from"./iframe-HSLlGUaS.js";import{C as s,t as c}from"./Calendar-CCn1ySsw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DnuadO4-.js";import"./SlotComponent-CdxKj9bs.js";import"./mergeRefs-B4VXoFz5.js";import"./Flex-DKhA7r6e.js";import"./NativeSelect-JUGzxJuP.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bb4sdqVt.js";import"./ArrowDownIcon-BwcAGBNj.js";import"./Icon-BvzDlFHd.js";import"./InputGroup-DDsnGG5D.js";import"./useId-AHNz34ey.js";import"./Label-662ei-IR.js";import"./SupportLabel-BTFNf5kQ.js";import"./SuccessIcon-3uSFdK-V.js";import"./WarningIcon-DGkoKlcd.js";import"./Button-HWG-pZwQ.js";import"./usePreviousValue-B4gjzJ1h.js";import"./Loader-rRfKF8_5.js";import"./useDelayedRender-JMfosgXp.js";import"./ArrowRightIcon-DkBqdvQC.js";import"./TableCaption-Chxw-cTV.js";import"./tableContext-Cj_GpzSN.js";import"./Text-DoXrUJNn.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
