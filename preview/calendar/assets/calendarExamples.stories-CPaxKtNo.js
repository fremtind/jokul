import{j as t}from"./iframe-BI_O4Haf.js";import s,{OnlyDays as d}from"./calendar.stories-DmGHN4wX.js";import{F as i}from"./FieldGroup-BLSuxhN7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJNJLcJU.js";import"./clsx-B-dksMZM.js";import"./Flex-B9qZsFWK.js";import"./SlotComponent-BrPgS2wR.js";import"./mergeRefs-ChOZp9rd.js";import"./Button-RVgZu2bk.js";import"./usePreviousValue-DbcYQEhc.js";import"./Loader-Df66y34l.js";import"./useDelayedRender-CtelVvOQ.js";import"./ArrowRightIcon-D_ti27KA.js";import"./Icon-zZeSCmwQ.js";import"./Text-CNy5pCPE.js";import"./useId-BLdODDqZ.js";import"./Label-CV6paTMh.js";import"./SupportLabel-Baqqd0b1.js";import"./SuccessIcon-D_VN2RoI.js";import"./WarningIcon-vIUFNvZh.js";const n=new Date,o=new Date(new Date(n).setDate(n.getDate()+7)).toDateString(),C={...s,title:"Komponenter/DatePicker/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[a=>t.jsx(i,{legend:"Velg fakturadato",children:t.jsx(a,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:o,min:o},decorators:[a=>t.jsx(i,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(a,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
