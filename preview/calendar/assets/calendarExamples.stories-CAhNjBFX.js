import{j as t}from"./iframe-DlRo0Od7.js";import s,{OnlyDays as d}from"./calendar.stories-CyJaBf4r.js";import{F as i}from"./FieldGroup-DP5kbr4H.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJNJLcJU.js";import"./clsx-B-dksMZM.js";import"./Flex-DufZ0qUO.js";import"./SlotComponent-BDwOEl1l.js";import"./mergeRefs-CJOSvazQ.js";import"./Button-CHg3in3f.js";import"./usePreviousValue-LsRDvOQh.js";import"./Loader-tIky59E3.js";import"./useDelayedRender-DkTKoGur.js";import"./ArrowRightIcon-D-6a01xh.js";import"./Icon-BBrWGALT.js";import"./Text-CAveR0fO.js";import"./useId-BPwG8gBN.js";import"./Label-deQsbfoU.js";import"./SupportLabel-D4p0OA7v.js";import"./SuccessIcon-D0yrAfMB.js";import"./WarningIcon-BL41_E24.js";const n=new Date,o=new Date(new Date(n).setDate(n.getDate()+7)).toDateString(),C={...s,title:"Komponenter/DatePicker/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[a=>t.jsx(i,{legend:"Velg fakturadato",children:t.jsx(a,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:o,min:o},decorators:[a=>t.jsx(i,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(a,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Velg fakturadato",
  args: {
    ...OnlyDays.args,
    styleOptions: {
      hideOutline: true,
      hideNavigation: true,
      hideWeekdayLabels: true
    }
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
