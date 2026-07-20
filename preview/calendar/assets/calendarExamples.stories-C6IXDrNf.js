import{j as e,r as m}from"./iframe-BHUqeWkC.js";import{O as x,m as F,C as d}from"./calendar.stories-CfBghJdH.js";import{f as h}from"./utils-BJNJLcJU.js";import{F as l}from"./FieldGroup-DOG0EK2x.js";import{F as u}from"./Flex-B3EUgeyT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-CN4gIY5k.js";import"./usePreviousValue-BEiqzHLS.js";import"./Loader-Dh9KFd-I.js";import"./useDelayedRender-DEoVvsVh.js";import"./ArrowRightIcon-CfHnKXHZ.js";import"./Icon-CvhnRJgX.js";import"./Text-DiBV1ovu.js";import"./useId-DOOtjp30.js";import"./Label-Cwa_0Yyr.js";import"./SupportLabel-DjpV8O8d.js";import"./SuccessIcon-DQzjzMMI.js";import"./WarningIcon-BsFHRMKL.js";import"./SlotComponent-CCgHegiO.js";import"./mergeRefs-BspG3kwc.js";const p=new Date,c=h(new Date(new Date(p).setDate(p.getDate()+7))),K={...F,title:"Komponenter/DatePicker/Calendar/Eksempler"},n={name:"Velg fakturadato",args:{...x.args,styleOptions:{hideOutline:!0,hideNavigation:!0,hideWeekdayLabels:!0}},decorators:[t=>e.jsx(l,{legend:"Velg fakturadato",children:e.jsx(t,{})})]},o={name:"Velg dato for henting",args:{value:void 0,defaultValue:c,min:c},decorators:[t=>e.jsx(l,{legend:"Velg dato for henting",description:"Du kan velge å få den utlevert fra i dag",form:"test",children:e.jsx(t,{})})]},s={name:"Til og fra dato",args:{},render:t=>{const[r,g]=m.useState(t.min),[a,f]=m.useState(t.max);return e.jsxs(u,{direction:"column",children:[e.jsx(l,{legend:"Filtrer mellom datoer",children:e.jsxs(u,{children:[e.jsx(d,{...t,name:"from",max:a,value:r,onChange:(D,i)=>{g(i)}}),e.jsx(d,{...t,name:"to",min:r,value:a,onChange:(D,i)=>{f(i)}})]})}),r&&a?e.jsxs("p",{children:["Mellom ",r," til ",a]}):e.jsx("p",{children:"Ingen datoer valgt"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Til og fra dato",
  args: {},
  render: args => {
    const [fromDate, setFromDate] = useState(args.min);
    const [toDate, setToDate] = useState(args.max);
    return <Flex direction="column">
                <FieldGroup legend="Filtrer mellom datoer">
                    <Flex>
                        <Calendar {...args} name="from" max={toDate} value={fromDate} onChange={(e, date) => {
            setFromDate(date);
          }} />
                        <Calendar {...args} name="to" min={fromDate} value={toDate} onChange={(e, date) => {
            setToDate(date);
          }} />
                    </Flex>
                </FieldGroup>

                {fromDate && toDate ? <p>
                        Mellom {fromDate} til {toDate}
                    </p> : <p>Ingen datoer valgt</p>}
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};const R=["DayPickerOnly","CalendarField","ToAndFrom"];export{o as CalendarField,n as DayPickerOnly,s as ToAndFrom,R as __namedExportsOrder,K as default};
