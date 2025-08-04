import{r as L,R as e}from"./index-siqcju79.js";import{a as y}from"./RadioButton-BEaJQk1K.js";import{a as v,C as h,b as C,L as S}from"./ListItem-DHKf8rHv.js";/* empty css               */import{L as f}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-Bm3W2hYF.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseRadioButton-BbIdBf1s.js";const a=t=>{const{legend:n,items:l,showLegend:o=!0,seperateItem:r=0,...i}=t,c=L.useId(),g=t.defaultValue&&typeof t.defaultValue=="string"&&l.indexOf(t.defaultValue);return e.createElement("fieldset",{className:"jkl-segmented-control"},e.createElement("legend",{className:`jkl-segmented-control-legend ${!o&&"jkl-sr-only"}`},n),l.map((d,u)=>e.createElement(y,{...i,key:d,className:"jkl-segmented-control-item",id:`${n}-${d}`,value:d,name:`${n}-${c}`,defaultChecked:u===t.defaultValue||u===g,"data-spacing":r>=0?r===u+1:"true"},d)))};a.displayName="Segmented Control";a.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{legend:{required:!0,tsType:{name:"string"},description:"OBS: Bruk en god tittel på valgene, ikke på innholdet det kontrollerer."},showLegend:{required:!1,tsType:{name:"boolean"},description:"Vis eller skjul tittel visuelt. Den er alltid tilgjengelig for skjermlesere."},items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},seperateItem:{required:!1,tsType:{name:"number"},description:`Hvis du ønsker å separere et enkelt valg kan du det.
Dersom du setter dette til et negativt tall vil du også kunne separere alle fra hverandre.`}}};const N={title:"Komponenter/SegmentedControl",component:a,parameters:{layout:"centered"},tags:["autodocs"]},p=["Auto","Light","Dark","High Contrast"],s=["Vis alt","Dekker","Dekker ikke","Dekkes kanskje"],k={name:"Segmented Control",args:{legend:"Tema",items:p,seperateItem:1},argTypes:{defaultValue:{control:"select",options:[...p,...p.keys()]}},render:t=>e.createElement(a,{...t})},m={name:"Segmented Control: Dekningsoversikt",args:{legend:"Velg hva som vises",items:s,defaultValue:s[1],showLegend:!1,seperateItem:1},argTypes:{defaultValue:{control:"select",options:[...s,...s.keys()]}},render:t=>{const[n,l]=L.useState(t.defaultValue),o=e.createElement(v,null,e.createElement(h,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(h,null,"forsvinning og tyveri")),r=e.createElement(v,null,e.createElement(C,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon")),i=e.createElement(v,null,e.createElement(S,null,"kanskje hunden din stikker av, det dekker vi ikke hehe")),c=e.createElement("div",{style:{marginBlockStart:"24px"}},e.createElement("p",null,"På denne siden har vi forenklet teksten om hva forsikringen dekker og ikke dekker. Du må alltid lese vilkårene i avtaledokumentet for å få full oversikt."),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(f,{external:!0,href:"#"},"Fullstendige vilkår (PDF)"),e.createElement(f,{external:!0,href:"#"},"Standardisert produktinformasjon (PDF)")));return e.createElement(e.Fragment,null,e.createElement("h2",{style:{marginBlockEnd:"24px"}},"Dekningsoversikt hund og katt"),e.createElement(a,{...t,onChange:g=>l(g.target.value)}),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column",marginBlockStart:"24px"}},n===s[0]&&e.createElement(e.Fragment,null,o,r,i),n===s[1]&&o,n===s[2]&&i,n===s[3]&&r,c))}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Tema",
    items: themeChoices,
    seperateItem: 1
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: [...themeChoices, ...themeChoices.keys()]
    }
  },
  render: args => <SegmentedControl {...args} />
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control: Dekningsoversikt",
  args: {
    legend: "Velg hva som vises",
    items: coverageChoices,
    defaultValue: coverageChoices[1],
    showLegend: false,
    seperateItem: 1
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
    const dekkesKanskjeListe = <List>
                <ListItem>
                    kanskje hunden din stikker av, det dekker vi ikke hehe
                </ListItem>
            </List>;
    const links = <div style={{
      marginBlockStart: "24px"
    }}>
                <p>
                    På denne siden har vi forenklet teksten om hva forsikringen
                    dekker og ikke dekker. Du må alltid lese vilkårene i
                    avtaledokumentet for å få full oversikt.
                </p>
                <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
                    <Link external={true} href={"#"}>
                        Fullstendige vilkår (PDF)
                    </Link>
                    <Link external={true} href={"#"}>
                        Standardisert produktinformasjon (PDF)
                    </Link>
                </div>
            </div>;
    return <>
                <h2 style={{
        marginBlockEnd: "24px"
      }}>
                    Dekningsoversikt hund og katt
                </h2>
                <SegmentedControl {...args} onChange={e => setValue(e.target.value)} />
                <div style={{
        maxWidth: "60ch",
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        marginBlockStart: "24px"
      }}>
                    {value === coverageChoices[0] && <>
                            {dekkesListe}
                            {dekkesIkkeListe}
                            {dekkesKanskjeListe}
                        </>}
                    {value === coverageChoices[1] && dekkesListe}
                    {value === coverageChoices[2] && dekkesKanskjeListe}
                    {value === coverageChoices[3] && dekkesIkkeListe}
                    {links}
                </div>
            </>;
  }
}`,...m.parameters?.docs?.source}}};const $=["SegmentedControlStory","DekningsoversiktStory"];export{m as DekningsoversiktStory,k as SegmentedControlStory,$ as __namedExportsOrder,N as default};
