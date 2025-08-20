import{r as v,R as e}from"./index-siqcju79.js";import{a as y}from"./RadioButton-BEaJQk1K.js";import{a as p,C as k,b as C}from"./ListItem-DHKf8rHv.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-Bm3W2hYF.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseRadioButton-BbIdBf1s.js";const s=t=>{const{legend:n,items:a,showLegend:d=!0,separateItem:o=0,...c}=t,h=v.useId(),f=t.defaultValue&&typeof t.defaultValue=="string"&&a.indexOf(t.defaultValue);return e.createElement("fieldset",{className:"jkl-segmented-control",...c},e.createElement("legend",{className:`jkl-segmented-control-legend ${!d&&"jkl-sr-only"}`},n),a.map((l,g)=>e.createElement(y,{key:l,className:"jkl-segmented-control-item",id:`${n}-${l}`,value:l,name:`${n}-${h}`,defaultChecked:g===t.defaultValue||g===f,"data-spacing":o>=0?o===g+1:"true"},l)))};s.displayName="Segmented Control";s.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{legend:{required:!0,tsType:{name:"string"},description:"OBS: Bruk en god tittel på valgene, ikke på innholdet det kontrollerer."},showLegend:{required:!1,tsType:{name:"boolean"},description:"Vis eller skjul tittel visuelt. Den er alltid tilgjengelig for skjermlesere."},items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},separateItem:{required:!1,tsType:{name:"number"},description:`Hvis du ønsker å separere et enkelt valg kan du det.
Dersom du setter dette til et negativt tall vil du også kunne separere alle fra hverandre.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const B={title:"Komponenter/SegmentedControl",component:s,parameters:{layout:"centered"},tags:["autodocs"]},u=["Auto","Light","Dark"],r=["Dekker","Dekker ikke"],i={name:"Segmented Control",args:{legend:"Tema",items:u,separateItem:1},argTypes:{defaultValue:{control:"select",options:[...u,...u.keys()]}},render:t=>e.createElement(s,{...t})},m={name:"Segmented Control: Dekningsoversikt",args:{legend:"Velg hva som vises",items:r,defaultValue:r[0],showLegend:!1,separateItem:0},argTypes:{defaultValue:{control:"select",options:[...r,...r.keys()]}},render:t=>{const[n,a]=v.useState(t.defaultValue),d=e.createElement(p,null,e.createElement(k,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(k,null,"forsvinning og tyveri")),o=e.createElement(p,null,e.createElement(C,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon"));return e.createElement(e.Fragment,null,e.createElement(s,{...t,onChange:c=>a(c.target.value)}),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"}},n===r[0]&&d,n===r[1]&&o))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["SegmentedControlStory","DekningsoversiktStory"];export{m as DekningsoversiktStory,i as SegmentedControlStory,N as __namedExportsOrder,B as default};
