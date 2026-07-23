import{r as d,j as r}from"./iframe-C7JtmNjI.js";import{C as s,t as c}from"./Calendar-BXBT9n2j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-Bqz-Y0G9.js";import"./SlotComponent-C-yQDUCc.js";import"./mergeRefs-RjMaoQwM.js";import"./Flex-CHYXUWzg.js";import"./NativeSelect-Ss4ZqW0D.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-LQR4IStw.js";import"./ArrowDownIcon-DaT_ifMA.js";import"./Icon-BwlU2V2q.js";import"./InputGroup-7Q_VoBUI.js";import"./useId-CS9Tv6Mb.js";import"./Label-BW3whWWF.js";import"./SupportLabel-DcAQj_fV.js";import"./SuccessIcon-437Q59-v.js";import"./WarningIcon-sVKsCHzA.js";import"./Button-Cnib3Fjp.js";import"./usePreviousValue-CZ4k7EBK.js";import"./Loader-SsyxUECd.js";import"./useDelayedRender-DTJMl0oq.js";import"./ArrowRightIcon-CBfDa873.js";import"./TableCaption-21jaXR3x.js";import"./tableContext-BLRmw0Uh.js";import"./Text-DsmfEPcP.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
