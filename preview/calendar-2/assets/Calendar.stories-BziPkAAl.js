import{r as d,j as r}from"./iframe-BcD9GcZD.js";import{C as s,t as c}from"./Calendar-Cp0Gck5R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-uOID55zS.js";import"./SlotComponent-Btcm6jvF.js";import"./mergeRefs-LeLNpsZ-.js";import"./Flex-HaaDzfaK.js";import"./NativeSelect-DTYaQ4E0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cf2dRUql.js";import"./ArrowDownIcon-YHVuHWh3.js";import"./Icon-inwkS7hI.js";import"./InputGroup-DfBKE4u_.js";import"./useId-BU_x9pLF.js";import"./Label-CWctKa4l.js";import"./SupportLabel-BHMJeESa.js";import"./SuccessIcon-DwSiPtvA.js";import"./WarningIcon-C1csXuA_.js";import"./Button-e4q9teLB.js";import"./usePreviousValue-n5Op5Yii.js";import"./Loader-C6VY7HYq.js";import"./useDelayedRender-sX3oCVh_.js";import"./ArrowRightIcon-BkNDb_f8.js";import"./TableCaption-CpKO9Grv.js";import"./tableContext-C-drMd9i.js";import"./Text-CGEtWBJE.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
