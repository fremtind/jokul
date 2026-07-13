import{j as t}from"./iframe-DKXds6Bc.js";import s,{OnlyDays as d}from"./calendar.stories-B8bQ2_KG.js";import{F as i}from"./FieldGroup-dlpehogg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJNJLcJU.js";import"./clsx-B-dksMZM.js";import"./Flex-C4OanvC7.js";import"./SlotComponent-q8dHA5KV.js";import"./mergeRefs-COSqbnyz.js";import"./Button-DU0dVGg8.js";import"./usePreviousValue-DcO24_s3.js";import"./Loader-D0OnpI4b.js";import"./useDelayedRender-ByXoHYiA.js";import"./ArrowRightIcon-6GRyOWEu.js";import"./Icon-6Q63kTk8.js";import"./Text-Cv24Vd_p.js";import"./useId-VjUiN0FY.js";import"./Label-C3HLdcuY.js";import"./SupportLabel-q5UaxbFK.js";import"./SuccessIcon-BYeiP-dj.js";import"./WarningIcon-DU6aghug.js";const n=new Date,o=new Date(new Date(n).setDate(n.getDate()+7)).toDateString(),C={...s,title:"Komponenter/DatePicker/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[a=>t.jsx(i,{legend:"Velg fakturadato",children:t.jsx(a,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:o,min:o},decorators:[a=>t.jsx(i,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(a,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
