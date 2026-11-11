import{j as e,r as S}from"./iframe-DVdARoXG.js";import{F as h}from"./FieldGroup-9iCvLvXP.js";import{S as n,a as s}from"./SegmentedControlButton-BfhoeNjT.js";/* empty css               *//* empty css               *//* empty css               */import{L as g,C as c,a as C}from"./ListItem-DDMD5n0X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-dfs2t7lU.js";import"./Label-Cr8FRJ8N.js";import"./SupportLabel-CTIdXkD-.js";import"./SuccessIcon-DliUF6gI.js";import"./Icon-Sy3tFS9h.js";import"./WarningIcon-DRDdMsBw.js";import"./RadioButton-CnEsQQwI.js";import"./BaseRadioButton-C50pYcTf.js";const _={title:"Komponenter/SegmentedControl",component:s,subcomponents:{FieldGroup:h,SegmentedControlButton:n},args:{labelProps:{srOnly:!1,variant:"small"}}},r=["Dekker","Dekker ikke"],o={name:"Segmented Control",args:{legend:"Segmented Control"},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"basic",children:"Står"}),e.jsx(n,{value:"Sammen",name:"basic",children:"Sammen"})]})},l={args:{legend:"Hele kontrollen er disabled"},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{value:"Vi",name:"disabled",defaultChecked:!0,disabled:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"disabled",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"disabled",disabled:!0,children:"Sammen"})]})},i={name:"Enkelt valg disabled",args:{legend:"Ett av valgene er utilgjengelig"},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{value:"Vi",name:"partial",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"partial",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"partial",children:"Sammen"})]})},a={name:"Dekningsoversikt",args:{legend:"Velg hva som vises",defaultValue:r[0]},argTypes:{defaultValue:{control:"select",options:[...r,...r.keys()]}},render:t=>{const[m,u]=S.useState(t.defaultValue),v=e.jsxs(g,{children:[e.jsx(c,{children:"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"}),e.jsx(c,{children:"forsvinning og tyveri"})]}),k=e.jsx(g,{children:e.jsx(C,{children:"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"})});return e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,children:r.map(d=>e.jsx(n,{value:d,name:"temavalg",onChange:p=>u(p.target.value),children:d},d))}),e.jsxs("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"},children:[m===r[0]&&v,m===r[1]&&k]})]})}},G=["Basic","Disabled","EnkeltValgDisabled","Dekningsoversikt"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Hele kontrollen er disabled"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="disabled" defaultChecked disabled>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="disabled" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="disabled" disabled>
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Enkelt valg disabled",
  args: {
    legend: "Ett av valgene er utilgjengelig"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="partial" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="partial" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="partial">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...a.parameters?.docs?.description}}};export{o as Basic,a as Dekningsoversikt,l as Disabled,i as EnkeltValgDisabled,G as __namedExportsOrder,_ as default};
