import{r as d,j as r}from"./iframe-DXmxd_y0.js";import{C as s,t as c}from"./Calendar-CFuX2gpg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-CmJIAnYl.js";import"./SlotComponent-BjQUKYMC.js";import"./mergeRefs-D3yO6uyu.js";import"./Flex-CYpuDxJZ.js";import"./NativeSelect-B-tU9Q72.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BGUOLmPU.js";import"./ArrowDownIcon-uxkp1y0E.js";import"./Icon-DGZU5bVl.js";import"./InputGroup-PcTxdm2h.js";import"./useId-TdKZOOCS.js";import"./Label-ByK2DaKk.js";import"./SupportLabel-CiJyRhpW.js";import"./SuccessIcon-BrM_3dxT.js";import"./WarningIcon-CPDstyYC.js";import"./Button-Qq0cWUcS.js";import"./usePreviousValue-DvPVIu60.js";import"./Loader-6Rc0PDVY.js";import"./useDelayedRender-DcHF7lCb.js";import"./ArrowRightIcon-DVE1v72z.js";import"./TableCaption-BM0v-98M.js";import"./tableContext-BhFuNMvM.js";import"./Text-Bq-F5rpb.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
