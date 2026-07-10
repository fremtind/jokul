import{j as t}from"./iframe-jR_QKpJn.js";import i,{OnlyDays as d}from"./calendar.stories-BSZ25aid.js";import{F as s}from"./FieldGroup-CmPhjOd1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Flex-CewpwCjP.js";import"./SlotComponent-BmGJ6vd5.js";import"./mergeRefs-jip3TPOH.js";import"./Button-CT9Xbp7X.js";import"./usePreviousValue-CaPP4WgE.js";import"./Loader-AUKWdQYd.js";import"./useDelayedRender-wxBFHHvf.js";import"./ArrowRightIcon-fdtpj4wk.js";import"./Icon-B4HG5nD5.js";import"./Text-BffiMEMS.js";import"./useId-BSrcV0qG.js";import"./Label-DkZU00cL.js";import"./SupportLabel-Dv0bynpO.js";import"./SuccessIcon-u_OiM3Ej.js";import"./WarningIcon-tduY0H83.js";const a=new Date,n=new Date(a.setDate(a.getDate()+7)),E={...i,title:"Komponenter/Calendar/Eksempler"},e={name:"Velg fakturadato",args:{...d.args,noAccessory:!1},decorators:[o=>t.jsx(s,{legend:"Velg fakturadato",children:t.jsx(o,{})})]},r={name:"Velg dato for henting",args:{value:void 0,defaultValue:n,min:n},decorators:[o=>t.jsx(s,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:t.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const W=["DayPickerOnly","CalendarField"];export{r as CalendarField,e as DayPickerOnly,W as __namedExportsOrder,E as default};
