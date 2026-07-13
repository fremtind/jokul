import{j as t}from"./iframe-C6c0I4sO.js";import s,{OnlyDays as d}from"./calendar.stories-CC7Ss2oY.js";import{F as i}from"./FieldGroup-B7jws5X6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJNJLcJU.js";import"./clsx-B-dksMZM.js";import"./Flex-Bca8qIcx.js";import"./SlotComponent-l5s7sPI4.js";import"./mergeRefs-B_jEu1Ue.js";import"./Button-xRW_Iq4e.js";import"./usePreviousValue-ChSKcGrh.js";import"./Loader-BiNyratp.js";import"./useDelayedRender-DbJWureZ.js";import"./ArrowRightIcon-CKhwSC9-.js";import"./Icon-DhZ_2Gun.js";import"./Text-fRBVez0p.js";import"./useId-CRVymwtD.js";import"./Label-CuXi5aop.js";import"./SupportLabel-DoPr4dLE.js";import"./SuccessIcon-CX0rj3xA.js";import"./WarningIcon-QdUhx_bs.js";const n=new Date,o=new Date(new Date(n).setDate(n.getDate()+7)).toDateString(),C={...s,title:"Komponenter/DatePicker/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[a=>t.jsx(i,{legend:"Velg fakturadato",children:t.jsx(a,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:o,min:o},decorators:[a=>t.jsx(i,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(a,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
