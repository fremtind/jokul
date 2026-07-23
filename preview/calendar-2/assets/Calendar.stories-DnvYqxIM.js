import{r as d,j as r}from"./iframe-DsFvwtmB.js";import{C as s,t as c}from"./Calendar-Bx2YH5ZO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-D8tlw1HB.js";import"./SlotComponent-8hobiRci.js";import"./mergeRefs-BteIhjc7.js";import"./Flex-GzztkmiE.js";import"./NativeSelect-pjc1ta2F.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B5RtkyQD.js";import"./ArrowDownIcon-BfHYGGDB.js";import"./Icon-BwiYdpf_.js";import"./InputGroup-BrsFFmgt.js";import"./useId-D0ansuuF.js";import"./Label-Ca8MWNgF.js";import"./SupportLabel-Bso0QtMV.js";import"./SuccessIcon-C49mgmjy.js";import"./WarningIcon-CT0Gh7HA.js";import"./Button-Dj1rZNtL.js";import"./usePreviousValue-BPPJV1uR.js";import"./Loader-CewrsiEx.js";import"./useDelayedRender-Dq1HltyD.js";import"./ArrowRightIcon-BPP6NpO-.js";import"./TableCaption-CgL0hvPU.js";import"./tableContext-CdYuBryS.js";import"./Text-rRlRsHwm.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
