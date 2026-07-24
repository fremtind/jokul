import{C as a}from"./Calendar-DQv9jYX-.js";import"./iframe-BZmcJa8V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Flex-CS_MJFfT.js";import"./SlotComponent-DGcYP4pa.js";import"./mergeRefs-DRRMip4j.js";import"./NativeSelect-CAi8SRtk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B9EYxoa6.js";import"./ArrowDownIcon-4BkPl6DA.js";import"./Icon-B4QrTS4L.js";import"./InputGroup-CVAjUT7W.js";import"./useId-B24-RPn9.js";import"./Label-BiKRDH54.js";import"./SupportLabel-yINM9cBh.js";import"./SuccessIcon-CvA7p0Kz.js";import"./WarningIcon-HsoYDbJw.js";import"./Button-CEjSoeJV.js";import"./usePreviousValue-CxqYLfuA.js";import"./Loader-6ydfcUWu.js";import"./useDelayedRender-DEnoWJ1Z.js";import"./ArrowRightIcon-CTNyMVpH.js";import"./TableCaption-BwjSSRnc.js";import"./tableContext-v3lDyirT.js";import"./Text-DO0fxEm2.js";import"./formatDate-DZfsHyZW.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,o=new Date().toISOString().split("T")[0],m=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0],B={title:"Komponenter/Calendar",component:a,args:{defaultValue:o,onChange:e()}},r={name:"Calendar"},t={name:"Avgrense valgbare datoer",args:{min:o,max:m}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Calendar"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Avgrense valgbare datoer",
  args: {
    min: today,
    max: tomorrow
  }
}`,...t.parameters?.docs?.source}}};const L=["CalendarStory","CalendarStoryMinMax"];export{r as CalendarStory,t as CalendarStoryMinMax,L as __namedExportsOrder,B as default};
