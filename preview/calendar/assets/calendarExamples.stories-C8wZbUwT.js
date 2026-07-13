import{j as t}from"./iframe-BXOzOWGo.js";import i,{OnlyDays as d}from"./calendar.stories-BBcPwOon.js";import{F as s}from"./FieldGroup-5IspXmoa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Flex-MyIti3Kc.js";import"./SlotComponent-DNNVx_Ui.js";import"./mergeRefs-DG22XIY-.js";import"./Button-CNj0K-LT.js";import"./usePreviousValue-DIHU020c.js";import"./Loader-DnQUAIA9.js";import"./useDelayedRender-DFKgT_rk.js";import"./ArrowRightIcon-3f3SAuqr.js";import"./Icon-BVknPPAF.js";import"./Text-DEn-ffXU.js";import"./useId-BWpV7ZLy.js";import"./Label-DJ3Bg7BL.js";import"./SupportLabel-_ooaz7jV.js";import"./SuccessIcon-h1CqZYZx.js";import"./WarningIcon-dhUFrDBP.js";const a=new Date,n=new Date(new Date(a).setDate(a.getDate()+7)),C={...i,title:"Komponenter/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,noAccessory:!1},decorators:[o=>t.jsx(s,{legend:"Velg fakturadato",children:t.jsx(o,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:n,min:n},decorators:[o=>t.jsx(s,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
