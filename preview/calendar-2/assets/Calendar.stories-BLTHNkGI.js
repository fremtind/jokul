import{r as d,j as r}from"./iframe-DarWBN5d.js";import{C as s,t as c}from"./Calendar-ZT4M-Uui.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-DFg2YoKT.js";import"./SlotComponent-DvF9RFlP.js";import"./mergeRefs-Be0jPi6E.js";import"./Flex-BoCcgND2.js";import"./NativeSelect-ZysOViBJ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-OTs32h5y.js";import"./ArrowDownIcon-epRSrtit.js";import"./Icon-BjQr04ax.js";import"./InputGroup-DnZRfZKj.js";import"./useId-BpJf4wXY.js";import"./Label-DVtXELzE.js";import"./SupportLabel-DIfi0VSP.js";import"./SuccessIcon-tCuuDXkp.js";import"./WarningIcon-Df_pdorf.js";import"./Button-BxnfNHUp.js";import"./usePreviousValue-Df2vQ4ME.js";import"./Loader-DPS1KJ24.js";import"./useDelayedRender-DfwQAglt.js";import"./ArrowRightIcon-CogRhhy7.js";import"./Text-BeCkajf2.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],g=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],b={title:"Komponenter/Date Inputs/Calendar",component:s,args:{defaultValue:o,description:"Kortet er gyldig i 3 måneder fra denne datoen",onChange:l()}},t={},e={args:{min:o,max:g}},a={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
