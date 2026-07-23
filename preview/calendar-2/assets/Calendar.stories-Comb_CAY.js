import{r as d,j as r}from"./iframe-BLfSbMip.js";import{C as s,t as c}from"./Calendar-D6n4rIv-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DIyciptq.js";import"./SlotComponent-Bw2ZBOOb.js";import"./mergeRefs-BkbtBOxs.js";import"./Flex-BfX0C04c.js";import"./NativeSelect-DXa46s9s.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-COW2aL7l.js";import"./ArrowDownIcon-B4jln_4g.js";import"./Icon-B1Vvpv6j.js";import"./InputGroup-EavSCUJZ.js";import"./useId-CUhDxd68.js";import"./Label-htxqXN36.js";import"./SupportLabel-C5Vpvx_O.js";import"./SuccessIcon-CbIOa2po.js";import"./WarningIcon-eUf4iAe5.js";import"./Button-WheCa2XA.js";import"./usePreviousValue-DDDQYDyI.js";import"./Loader-DaIlVznZ.js";import"./useDelayedRender-5ykCYusz.js";import"./ArrowRightIcon-BrH64Kh2.js";import"./Text-DXvCmFah.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
