import{r as d,j as r}from"./iframe--4tOxVpk.js";import{C as s,t as c}from"./Calendar-DB4YI5Zd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-D-f_GDLq.js";import"./SlotComponent-CNP2d3em.js";import"./mergeRefs-BwLMIhT4.js";import"./Flex-Bxb-2DU3.js";import"./NativeSelect-BS_XXy6A.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DX5qkjkx.js";import"./ArrowDownIcon-BJZCBD7P.js";import"./Icon-DqOACwrg.js";import"./InputGroup-DKKc3Tw1.js";import"./useId-RoFKxuY7.js";import"./Label-BkS4q7uG.js";import"./SupportLabel-RmxH3HMm.js";import"./SuccessIcon-5WKcaa8S.js";import"./WarningIcon-BILMUuDA.js";import"./Button-DkQjNa1d.js";import"./usePreviousValue-C7eoAqXf.js";import"./Loader-D2vKZqE4.js";import"./useDelayedRender-Z9Hfu1ur.js";import"./ArrowRightIcon-Ba6dTNlu.js";import"./TableCaption-ChZ0d2TY.js";import"./tableContext-Coc1bOUz.js";import"./Text-BUg7nG4j.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
