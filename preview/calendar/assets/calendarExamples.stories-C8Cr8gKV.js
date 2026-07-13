import{j as t}from"./iframe-DpjkOQ8O.js";import s,{OnlyDays as d}from"./calendar.stories-HO1aaPou.js";import{F as i}from"./FieldGroup-C35LZeJO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJNJLcJU.js";import"./clsx-B-dksMZM.js";import"./Flex-CIFxqWc4.js";import"./SlotComponent-WIccmPKj.js";import"./mergeRefs-rft622dS.js";import"./Button-D4bZJgPx.js";import"./usePreviousValue-Cr_iwZZg.js";import"./Loader-Dgr2NoCQ.js";import"./useDelayedRender-Cl0Dx5VG.js";import"./ArrowRightIcon-lspLtLXm.js";import"./Icon-DoYTsjUc.js";import"./Text-Fwh8Ym0b.js";import"./useId-DTRRMGag.js";import"./Label-AbhwbM_A.js";import"./SupportLabel-DMvh_9pM.js";import"./SuccessIcon-Bq1f-G08.js";import"./WarningIcon-7DjkdTtF.js";const n=new Date,o=new Date(new Date(n).setDate(n.getDate()+7)).toDateString(),C={...s,title:"Komponenter/DatePicker/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[a=>t.jsx(i,{legend:"Velg fakturadato",children:t.jsx(a,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:o,min:o},decorators:[a=>t.jsx(i,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(a,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
