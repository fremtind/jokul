import{r as d,j as r}from"./iframe-B0OXozOR.js";import{C as s,t as c}from"./Calendar-CNfUHr6l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-24QuK2lP.js";import"./SlotComponent-ChLw8j_9.js";import"./mergeRefs-CXgB9xzy.js";import"./Flex-No1ggjxz.js";import"./NativeSelect-P2BD69FX.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CGSeYQxY.js";import"./ArrowDownIcon-BivPSsJ_.js";import"./Icon-D2jnq176.js";import"./InputGroup-Bh11etju.js";import"./useId-lfdxMolr.js";import"./Label-B1ucgc6b.js";import"./SupportLabel-BL1zmUUd.js";import"./SuccessIcon-DHSC7y5g.js";import"./WarningIcon-CMk7LJtk.js";import"./Button-BBnf5C9P.js";import"./usePreviousValue-D3b4jXvv.js";import"./Loader-BM34gmlH.js";import"./useDelayedRender-DFD2dJMI.js";import"./ArrowRightIcon-CGDHW7-W.js";import"./TableCaption-DcMJm9zR.js";import"./tableContext-Bw299sbI.js";import"./Text-CIVY_gVa.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
