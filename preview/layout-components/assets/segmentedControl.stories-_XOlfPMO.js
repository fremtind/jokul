import{R as e,r as p}from"./index-siqcju79.js";import{F as k}from"./FieldGroup-jrp1MMow.js";import{S as n,a as l}from"./_index-CBPR-Hwz.js";/* empty css               *//* empty css               */import{L as i,a as c,C}from"./ListItem-NaF9gf-H.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./RadioButton-BEaJQk1K.js";import"./BaseRadioButton-BbIdBf1s.js";const T={title:"Komponenter/SegmentedControl",component:l,subcomponents:{FieldGroup:k,SegmentedControlButton:n},parameters:{layout:"centered"},args:{labelProps:{srOnly:!1,variant:"small"}},tags:["autodocs"]},t=["Dekker","Dekker ikke"],a={name:"Segmented Control",args:{legend:"Segmented Control"},render:r=>e.createElement(l,{...r},e.createElement(n,{value:"Vi",name:"basic"},"Vi"),e.createElement(n,{value:"Står",name:"basic"},"Står"),e.createElement(n,{value:"Sammen",name:"basic"},"Sammen"))},o={name:"Dekningsoversikt",args:{legend:"Velg hva som vises",defaultValue:t[0]},argTypes:{defaultValue:{control:"select",options:[...t,...t.keys()]}},render:r=>{const[m,g]=p.useState(r.defaultValue),u=e.createElement(i,null,e.createElement(c,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(c,null,"forsvinning og tyveri")),d=e.createElement(i,null,e.createElement(C,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"));return e.createElement(e.Fragment,null,e.createElement(l,{...r},t.map(s=>e.createElement(n,{value:s,key:s,name:"temavalg",onChange:v=>g(v.target.value)},s))),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"}},m===t[0]&&u,m===t[1]&&d))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Segmented Control"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="basic">
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="basic">
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="basic">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const W=["Basic","Dekningsoversikt"];export{a as Basic,o as Dekningsoversikt,W as __namedExportsOrder,T as default};
