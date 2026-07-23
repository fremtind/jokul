import{r as d,j as r}from"./iframe-B0Kr074j.js";import{C as s,t as c}from"./Calendar-DVjUuyx1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-C_q2sBQ2.js";import"./SlotComponent-By1-k6ne.js";import"./mergeRefs-AGUMaxBe.js";import"./Flex-BCAOrAo2.js";import"./NativeSelect-1xO3LGoR.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CioALd1d.js";import"./ArrowDownIcon-CAbe_XGp.js";import"./Icon-BERwx20O.js";import"./InputGroup-CGzDfhT6.js";import"./useId-EVF01UfS.js";import"./Label-BgjVgtFb.js";import"./SupportLabel-oWOVe8Gf.js";import"./SuccessIcon-Bz-gAu-M.js";import"./WarningIcon-kPtZuz2C.js";import"./Button-CwzLL4pp.js";import"./usePreviousValue-Cxpws-cS.js";import"./Loader-BQ6Dn9I3.js";import"./useDelayedRender-cZCxUvLc.js";import"./ArrowRightIcon-D68LjijD.js";import"./TableCaption-5hT9IEhX.js";import"./tableContext-hc0h6hq4.js";import"./Text-xyPIEdET.js";import"./formatDate-DZfsHyZW.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],u=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],q={title:"Komponenter/Date/Calendar",component:s,args:{defaultValue:o,onChange:l()}},t={},a={args:{min:o,max:u}},e={render:m=>{const[n,i]=d.useState(o);return r.jsxs(r.Fragment,{children:[r.jsx(s,{...m,value:n,onChange:p=>i(p.target.value)}),r.jsx("strong",{children:c(n)})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
