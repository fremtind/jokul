import{j as e,r as p}from"./iframe-CaPtmoGU.js";import{F as k}from"./FieldGroup-D4zbCHgG.js";import{S as t,a as l}from"./SegmentedControlButton-E75FaEtW.js";/* empty css               *//* empty css               *//* empty css               */import{L as m,a as c,C as h}from"./ListItem-C1L_yQPX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-U5pO9hlJ.js";import"./Label-l4avpaDB.js";import"./SupportLabel-DQkfx1n_.js";import"./SuccessIcon-CQ2dKSAH.js";import"./Icon-lVLBpDot.js";import"./WarningIcon-z6lRjb0k.js";import"./RadioButton-DO6MebtQ.js";import"./BaseRadioButton-Dm2twXkE.js";const _={title:"Komponenter/SegmentedControl",component:l,subcomponents:{FieldGroup:k,SegmentedControlButton:t},args:{labelProps:{srOnly:!1,variant:"small"}}},n=["Dekker","Dekker ikke"],s={name:"Segmented Control",args:{legend:"Segmented Control"},render:r=>e.jsxs(l,{...r,children:[e.jsx(t,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(t,{value:"Står",name:"basic",children:"Står"}),e.jsx(t,{value:"Sammen",name:"basic",children:"Sammen"})]})},o={name:"Dekningsoversikt",args:{legend:"Velg hva som vises",defaultValue:n[0]},argTypes:{defaultValue:{control:"select",options:[...n,...n.keys()]}},render:r=>{const[i,d]=p.useState(r.defaultValue),g=e.jsxs(m,{children:[e.jsx(c,{children:"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"}),e.jsx(c,{children:"forsvinning og tyveri"})]}),u=e.jsx(m,{children:e.jsx(h,{children:"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"})});return e.jsxs(e.Fragment,{children:[e.jsx(l,{...r,children:n.map(a=>e.jsx(t,{value:a,name:"temavalg",onChange:v=>d(v.target.value),children:a},a))}),e.jsxs("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"},children:[i===n[0]&&g,i===n[1]&&u]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Basic","Dekningsoversikt"];export{s as Basic,o as Dekningsoversikt,G as __namedExportsOrder,_ as default};
