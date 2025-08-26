import{r as v,R as e}from"./index-siqcju79.js";import{a as C}from"./RadioButton-BEaJQk1K.js";import{a as k,C as p,b as y}from"./ListItem-DHKf8rHv.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-Bm3W2hYF.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseRadioButton-BbIdBf1s.js";const r=t=>{const{legend:n,items:a,showLegend:d=!0,separateItem:o=0,...c}=t,h=v.useId(),f=t.defaultValue&&typeof t.defaultValue=="string"&&a.indexOf(t.defaultValue);return e.createElement("fieldset",{className:"jkl-segmented-control"},e.createElement("legend",{className:`jkl-segmented-control-legend ${!d&&"jkl-sr-only"}`},n),a.map((l,g)=>e.createElement(C,{...c,key:l,className:"jkl-segmented-control-item",id:`${n}-${l}`,value:l,name:`${n}-${h}`,defaultChecked:g===t.defaultValue||g===f,"data-spacing":o>=0?o===g+1:"true"},l)))};r.displayName="Segmented Control";r.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{legend:{required:!0,tsType:{name:"string"},description:"OBS: Bruk en god tittel på valgene, ikke på innholdet det kontrollerer."},showLegend:{required:!1,tsType:{name:"boolean"},description:"Vis eller skjul tittel visuelt. Den er alltid tilgjengelig for skjermlesere."},items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},separateItem:{required:!1,tsType:{name:"number"},description:`Hvis du ønsker å separere et enkelt valg kan du det.
Dersom du setter dette til et negativt tall vil du også kunne separere alle fra hverandre.`}}};const N={title:"Komponenter/SegmentedControl",component:r,parameters:{layout:"centered"},tags:["autodocs"]},u=["Auto","Light","Dark"],s=["Dekker","Dekker ikke"],i={name:"Segmented Control",args:{legend:"Tema",items:u,separateItem:1},argTypes:{defaultValue:{control:"select",options:[...u,...u.keys()]}},render:t=>e.createElement(r,{...t})},m={name:"Segmented Control: Dekningsoversikt",args:{legend:"Velg hva som vises",items:s,defaultValue:s[0],showLegend:!1,separateItem:0},argTypes:{defaultValue:{control:"select",options:[...s,...s.keys()]}},render:t=>{const[n,a]=v.useState(t.defaultValue),d=e.createElement(k,null,e.createElement(p,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(p,null,"forsvinning og tyveri")),o=e.createElement(k,null,e.createElement(y,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"));return e.createElement(e.Fragment,null,e.createElement(r,{...t,onChange:c=>a(c.target.value)}),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"}},n===s[0]&&d,n===s[1]&&o))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Tema",
    items: themeChoices,
    separateItem: 1
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: [...themeChoices, ...themeChoices.keys()]
    }
  },
  render: args => <SegmentedControl {...args} />
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control: Dekningsoversikt",
  args: {
    legend: "Velg hva som vises",
    items: coverageChoices,
    defaultValue: coverageChoices[0],
    showLegend: false,
    separateItem: 0
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
                <SegmentedControl {...args} onChange={e => setValue(e.target.value)} />
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
}`,...m.parameters?.docs?.source}}};const $=["SegmentedControlStory","DekningsoversiktStory"];export{m as DekningsoversiktStory,i as SegmentedControlStory,$ as __namedExportsOrder,N as default};
