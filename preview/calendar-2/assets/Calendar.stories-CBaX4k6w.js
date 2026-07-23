import{r as d,j as r}from"./iframe-D3qkQg-r.js";import{C as s,t as c}from"./Calendar-Zf2847co.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-CXzfspqi.js";import"./SlotComponent-nR3IPEVU.js";import"./mergeRefs-H9zMGHrC.js";import"./Flex-BTFNFt1Q.js";import"./NativeSelect-CvNHUwi2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DHQ8lckF.js";import"./ArrowDownIcon-BtmaQoB9.js";import"./Icon-ChqHTCl8.js";import"./InputGroup-CWDExIfN.js";import"./useId-lfl0CoI0.js";import"./Label-BT9j_3TI.js";import"./SupportLabel-BybGj_LF.js";import"./SuccessIcon-BeJlH9C8.js";import"./WarningIcon-g8tB-bu0.js";import"./Button-73Jz6_99.js";import"./usePreviousValue-BF2c2cxC.js";import"./Loader-BAQsXUie.js";import"./useDelayedRender-BIKH4mRG.js";import"./ArrowRightIcon-DnYJg8zk.js";import"./Text-Dn39eHD5.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const k=["CalendarStory","CalendarStoryMinMax","CalendarValue"];export{t as CalendarStory,e as CalendarStoryMinMax,a as CalendarValue,k as __namedExportsOrder,b as default};
