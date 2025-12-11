import{r as v,R as e}from"./index-siqcju79.js";import{F as p}from"./FieldGroup-jrp1MMow.js";import{S as i,a as m}from"./_index-Dns4oDRV.js";/* empty css               *//* empty css               */import{a,C as l,b as k}from"./ListItem-D6XgKMGd.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./RadioButton-BEaJQk1K.js";import"./BaseRadioButton-BbIdBf1s.js";const T={title:"Komponenter/SegmentedControl",component:m,subcomponents:{FieldGroup:p,SegmentedControlButton:i},parameters:{layout:"centered"},tags:["autodocs"]},t=["Dekker","Dekker ikke"],n={name:"Segmented Control",args:{legend:"Velg hva som vises",defaultValue:t[0]},argTypes:{defaultValue:{control:"select",options:[...t,...t.keys()]}},render:s=>{const[o,c]=v.useState(s.defaultValue),g=e.createElement(a,null,e.createElement(l,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(l,null,"forsvinning og tyveri")),u=e.createElement(a,null,e.createElement(k,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"));return e.createElement(e.Fragment,null,e.createElement(m,{...s},t.map(r=>e.createElement(i,{value:r,key:r,name:"temavalg",onChange:d=>c(d.target.value)},r))),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"}},o===t[0]&&g,o===t[1]&&u))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
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
}`,...n.parameters?.docs?.source}}};const W=["DekningsoversiktStory"];export{n as DekningsoversiktStory,W as __namedExportsOrder,T as default};
