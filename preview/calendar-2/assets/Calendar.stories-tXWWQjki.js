import{r as d,j as r}from"./iframe-DBOX4npm.js";import{C as s,t as c}from"./Calendar-BO_N5axI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-C48wlsCG.js";import"./SlotComponent-B3Yrisxs.js";import"./mergeRefs-BF4WNyQd.js";import"./Flex-CzuCouWw.js";import"./NativeSelect-Gi6Edvap.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-fMDn4F_p.js";import"./ArrowDownIcon-9y_eYOZs.js";import"./Icon-wECCRuo5.js";import"./InputGroup-C_hiqMSC.js";import"./useId-DPOGVVSZ.js";import"./Label-Caao2mPN.js";import"./SupportLabel-B4BKRvxt.js";import"./SuccessIcon-CBK7Ec6Y.js";import"./WarningIcon-BqdHMACm.js";import"./Button-PhtY_tv5.js";import"./usePreviousValue-vNMJZgc9.js";import"./Loader-DHHufDdd.js";import"./useDelayedRender-DJxlgyMu.js";import"./ArrowRightIcon-lxkCbPGm.js";import"./TableCaption-B3q-KRSK.js";import"./tableContext-DvEvCT0t.js";import"./Text-DhyYs0uF.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
