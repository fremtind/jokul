import{j as e,r as k}from"./iframe-B4gZtcdG.js";import{F as p}from"./FieldGroup-BMLXAqps.js";import{S as t,a as l}from"./_index-BCv8lgTX.js";/* empty css               *//* empty css               */import{L as m,a as c,C as h}from"./ListItem-CVPzh-wj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ObM7Lq-m.js";import"./Label-yB2xeEuV.js";import"./SupportLabel-ZuPVdxS-.js";import"./WarningIcon-BqN2MMND.js";import"./Icon-DN5QmmSY.js";import"./RadioButton-CRvNrIXQ.js";import"./BaseRadioButton-cO3Dqf0K.js";const T={title:"Komponenter/SegmentedControl",component:l,subcomponents:{FieldGroup:p,SegmentedControlButton:t},args:{labelProps:{srOnly:!1,variant:"small"}}},n=["Dekker","Dekker ikke"],r={name:"Segmented Control",args:{legend:"Segmented Control"},render:s=>e.jsxs(l,{...s,children:[e.jsx(t,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(t,{value:"Står",name:"basic",children:"Står"}),e.jsx(t,{value:"Sammen",name:"basic",children:"Sammen"})]})},o={name:"Dekningsoversikt",args:{legend:"Velg hva som vises",defaultValue:n[0]},argTypes:{defaultValue:{control:"select",options:[...n,...n.keys()]}},render:s=>{const[i,d]=k.useState(s.defaultValue),g=e.jsxs(m,{children:[e.jsx(c,{children:"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"}),e.jsx(c,{children:"forsvinning og tyveri"})]}),u=e.jsx(m,{children:e.jsx(h,{children:"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"})});return e.jsxs(e.Fragment,{children:[e.jsx(l,{...s,children:n.map(a=>e.jsx(t,{value:a,name:"temavalg",onChange:v=>d(v.target.value),children:a},a))}),e.jsxs("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"},children:[i===n[0]&&g,i===n[1]&&u]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Segmented Control"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="basic" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="basic">
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="basic">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Dekningsoversikt",
  args: {
    legend: "Velg hva som vises",
    defaultValue: coverageChoices[0]
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: [...coverageChoices, ...coverageChoices.keys()]
    }
  },
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    const dekkesListe = <List>
                <CheckListItem>
                    avtalt erstatning hvis hunder dør eller må avlives som følge
                    av ulykke eller sykdom
                </CheckListItem>
                <CheckListItem>forsvinning og tyveri</CheckListItem>
            </List>;
    const dekkesIkkeListe = <List>
                <CrossListItem>
                    hvis hunden må avlives på grunn av atferdsproblemer, for
                    eksempel nervøsitet eller aggresjon
                </CrossListItem>
            </List>;
    return <>
                <SegmentedControl {...args}>
                    {coverageChoices.map(choice => <SegmentedControlButton value={choice} key={choice} name="temavalg" onChange={e => setValue(e.target.value)}>
                            {choice}
                        </SegmentedControlButton>)}
                </SegmentedControl>
                <div style={{
        maxWidth: "60ch",
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        marginBlockStart: "24px"
      }}>
                    {value === coverageChoices[0] && dekkesListe}
                    {value === coverageChoices[1] && dekkesIkkeListe}
                </div>
            </>;
  }
}`,...o.parameters?.docs?.source}}};const W=["Basic","Dekningsoversikt"];export{r as Basic,o as Dekningsoversikt,W as __namedExportsOrder,T as default};
