import{C as a}from"./Calendar-BoB-E3U2.js";import"./iframe-BELzo5jQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Card-kFt9uPMB.js";import"./SlotComponent-qhBa_G8i.js";import"./mergeRefs-CLhL7P9s.js";import"./Flex-eyfV_MjD.js";import"./NativeSelect-fS9iB0Iw.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BPQFDCQO.js";import"./ArrowDownIcon-D14adkiu.js";import"./Icon-DhocsGnY.js";import"./InputGroup-yHjcp_cN.js";import"./useId-V0PEyoa6.js";import"./Label-tZDkTdl2.js";import"./SupportLabel-BTAbZyJJ.js";import"./SuccessIcon-Cb8O67fh.js";import"./WarningIcon-kCAmoZg1.js";import"./Button-B8gPkXHA.js";import"./usePreviousValue-Cpq2RwFz.js";import"./Loader-ce1EiKjc.js";import"./useDelayedRender-BwEpNWwT.js";import"./ArrowRightIcon-Cf3-A239.js";import"./TableCaption-Bb3ZahN2.js";import"./tableContext-BIWhmyAZ.js";import"./Text-Bxec4ddL.js";import"./formatDate-DZfsHyZW.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],m=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],L={title:"Komponenter/Calendar",component:a,args:{defaultValue:o,onChange:e()}},r={name:"Calendar"},t={name:"Avgrense valgbare datoer",args:{min:o,max:m}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Calendar"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Avgrense valgbare datoer",
  args: {
    min: today,
    max: tomorrow
  }
}`,...t.parameters?.docs?.source}}};const R=["CalendarStory","CalendarStoryMinMax"];export{r as CalendarStory,t as CalendarStoryMinMax,R as __namedExportsOrder,L as default};
