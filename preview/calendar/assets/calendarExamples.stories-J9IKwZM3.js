import{j as t}from"./iframe-DtR4IeDC.js";import d,{OnlyDays as i}from"./calendar.stories-Dw0S0kXO.js";import{F as s}from"./FieldGroup-DBc4e2uR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Flex-8Ziw3g66.js";import"./SlotComponent-Dd3JR44I.js";import"./mergeRefs-5ukaVgEN.js";import"./Button-Bu5jRL7_.js";import"./usePreviousValue-DEB71QFo.js";import"./Loader-BLPI6cwE.js";import"./useDelayedRender-C1uXgwHn.js";import"./ArrowRightIcon-Zi10tcX3.js";import"./Icon-090sEyNP.js";import"./Text-6ThvhIY_.js";import"./useId-BypAmoXi.js";import"./Label-CVc8k_pc.js";import"./SupportLabel-BE5ZC0Fe.js";import"./SuccessIcon-YqObsPMx.js";import"./WarningIcon-BONq29A0.js";const a=new Date,n=new Date(a.setDate(a.getDate()+7)),E={...d,title:"Komponenter/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...i.args,noAccessory:!1},decorators:[o=>t.jsx(s,{legend:"Velg fakturadato",children:t.jsx(o,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:n,disableBeforeDate:n},decorators:[o=>t.jsx(s,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    disableBeforeDate: nextWeek
  },
  decorators: [Story => {
    return <FieldGroup legend="Velg dato for henting" description="Du kan velge å få den utlevert fra i dag" form="test">
                    <Story />
                </FieldGroup>;
  }]
}`,...r.parameters?.docs?.source}}};const W=["DayPickerOnly","CalendarField"];export{r as CalendarField,e as DayPickerOnly,W as __namedExportsOrder,E as default};
