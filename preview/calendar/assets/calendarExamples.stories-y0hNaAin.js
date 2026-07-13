import{j as t}from"./iframe-BexQfyWH.js";import i,{OnlyDays as d}from"./calendar.stories-Bwhdogy-.js";import{F as s}from"./FieldGroup-CT2AAyep.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Flex-CRKokY0T.js";import"./SlotComponent-CzjPnB3w.js";import"./mergeRefs-O-s_ZNVy.js";import"./Button-DDbeUI4T.js";import"./usePreviousValue-Bv_r3NNP.js";import"./Loader-BD1LXNFC.js";import"./useDelayedRender-rlSU-o2h.js";import"./ArrowRightIcon-CQvYFJIT.js";import"./Icon-BCY1HP59.js";import"./Text-odVzqvwi.js";import"./useId-BtdtUNx-.js";import"./Label-CeipaYE-.js";import"./SupportLabel-DJaRj9eR.js";import"./SuccessIcon-CIq8qZ6v.js";import"./WarningIcon-CjQxkrer.js";const a=new Date,n=new Date(new Date(a).setDate(a.getDate()+7)),C={...i,title:"Komponenter/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,noAccessory:!1},decorators:[o=>t.jsx(s,{legend:"Velg fakturadato",children:t.jsx(o,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:n,min:n},decorators:[o=>t.jsx(s,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Velg fakturadato",
  args: {
    ...OnlyDays.args,
    noAccessory: false
  },
  decorators: [Story => {
    return <FieldGroup legend="Velg fakturadato">
                    <Story />
                </FieldGroup>;
  }]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Velg dato for henting",
  args: {
    value: undefined,
    defaultValue: nextWeek,
    min: nextWeek
  },
  decorators: [Story => {
    return <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert fra i dag" form="test">
                    <Story />
                </FieldGroup>;
  }]
}`,...r.parameters?.docs?.source}}};const E=["DayPickerOnly","CalendarField"];export{r as CalendarField,e as DayPickerOnly,E as __namedExportsOrder,C as default};
