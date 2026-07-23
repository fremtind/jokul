import{r as d,j as r}from"./iframe-BlkAP_jQ.js";import{C as s,t as c}from"./Calendar-Cv1qSjBN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-TSZ6TbOg.js";import"./SlotComponent-DZHKpnYC.js";import"./mergeRefs-Bqn8AB8k.js";import"./Flex-C-ngpIph.js";import"./NativeSelect-VGR84mtw.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BCCIaKV4.js";import"./ArrowDownIcon-BV03hHSS.js";import"./Icon-C8TLXgYp.js";import"./InputGroup-Bk9GzIGJ.js";import"./useId-aRFHW7k-.js";import"./Label-po9PXHFb.js";import"./SupportLabel-C7XEKdm9.js";import"./SuccessIcon-CQqO5Fx4.js";import"./WarningIcon-BKtD-fbp.js";import"./Button-Dlr_Npxw.js";import"./usePreviousValue-CrT4VU3P.js";import"./Loader-CgB3Sk4-.js";import"./useDelayedRender-CLfO9GGE.js";import"./ArrowRightIcon-D-3YipTK.js";import"./Text-BGFGxTGA.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
