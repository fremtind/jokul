import{r as v,R as e}from"./index-siqcju79.js";import{a as h}from"./RadioButton-BEaJQk1K.js";import{a as c,C as g,b as D,L as x}from"./ListItem-DHKf8rHv.js";/* empty css               */import{L as t}from"./Link-Dwdm3rDB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-Bm3W2hYF.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseRadioButton-BbIdBf1s.js";const a=v.forwardRef(n=>{const{title:r,items:i,showTitle:s=!0,seperateItem:l=0,...k}=n,u=v.useId(),p=n.defaultValue&&typeof n.defaultValue=="string"&&i.indexOf(n.defaultValue);return e.createElement("form",{className:"jkl-segmented-control"},e.createElement("fieldset",null,e.createElement("legend",{className:`jkl-segmented-control-legend ${!s&&"jkl-sr-only"}`},r),i.map((o,f)=>e.createElement(h,{...k,key:o,className:"jkl-segmented-control-item",id:o,value:o,name:u,defaultChecked:f===n.defaultValue||f===p,"data-spacing":l>=0?l===f+1:"true"},o))))});a.displayName="Segmented Control";a.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{title:{required:!0,tsType:{name:"string"},description:"OBS: Bruk en god tittel på valgene, ikke på innholdet det kontrollerer."},showTitle:{required:!1,tsType:{name:"boolean"},description:"Vis eller skjul tittel visuelt. Den er alltid tilgjengelig for skjermlesere."},items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},seperateItem:{required:!1,tsType:{name:"number"},description:`Hvis du ønsker å separere et enkelt valg kan du det.
Dersom du setter dette til et negativt tall vil du også kunne separere alle fra hverandre.`}}};const b={title:"Komponenter/SegmentedControl",component:a,parameters:{layout:"centered"},tags:["autodocs"]},d={name:"Segmented Control",args:{title:"Tema",items:["Auto","Light","Dark","High Contrast"],seperateItem:1,defaultValue:"Auto",showTitle:!0},argTypes:{defaultValue:{control:"select",options:["Auto","Light","Dark",0,1,2]}},render:n=>e.createElement(a,{...n})},m={name:"Segmented Control: Dekningsoversikt",args:{title:"Velg hva som vises",items:["Vis alt","Dekker","Dekker ikke","Dekker kanskje"],defaultValue:"Dekker",showTitle:!1,seperateItem:1},argTypes:{defaultValue:{control:"select",options:["Vis alt","Dekker","Dekker ikke","Dekker kanskje"]}},render:n=>{const[r,i]=v.useState(n.defaultValue),s=e.createElement(c,null,e.createElement(g,null,"avtalt erstatning hvis hunder dør eller må avlives som følge av ulykke eller sykdom"),e.createElement(g,null,"forsvinning og tyveri")),l=e.createElement(c,null,e.createElement(D,null,"hvis hunden må avlives på grunn av atferdsproblemer, for eksempel nervøsitet eller aggresjon")),k=e.createElement(c,null,e.createElement(x,null,"kanskje hunden din stikker av, det dekker vi ikke hehe"));return e.createElement("div",{style:{display:"flex",gap:"40px",flexDirection:"column"}},e.createElement("h2",null,"Dekningsoversikt hund og katt"),e.createElement(a,{...n,value:r,onChange:u=>{i(u.target.value)}}),e.createElement("div",{style:{maxWidth:"60ch",display:"flex",gap:"24px",flexDirection:"column"}},r==="Vis alt"&&e.createElement(e.Fragment,null,s,l,k,e.createElement("p",null,"På denne siden har vi forenklet teksten om hva forsikringen dekker og ikke dekker. Du må alltid lese vilkårene i avtaledokumentet for å få full oversikt."),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(t,{external:!0,href:"#"},"Fullstendige vilkår (PDF)"),e.createElement(t,{external:!0,href:"#"},"Standardisert produktinformasjon (PDF)"))),r==="Dekker"&&e.createElement(e.Fragment,null,s,e.createElement("p",null,"På denne siden har vi forenklet teksten om hva forsikringen dekker og ikke dekker. Du må alltid lese vilkårene i avtaledokumentet for å få full oversikt."),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(t,{external:!0,href:"#"},"Fullstendige vilkår (PDF)"),e.createElement(t,{external:!0,href:"#"},"Standardisert produktinformasjon (PDF)"))),r==="Dekker kanskje"&&e.createElement(e.Fragment,null,k,e.createElement("p",null,"På denne siden har vi forenklet teksten om hva forsikringen dekker og ikke dekker. Du må alltid lese vilkårene i avtaledokumentet for å få full oversikt."),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(t,{external:!0,href:"#"},"Fullstendige vilkår (PDF)"),e.createElement(t,{external:!0,href:"#"},"Standardisert produktinformasjon (PDF)"))),r==="Dekker ikke"&&e.createElement(e.Fragment,null,l,e.createElement("p",null,"På denne siden har vi forenklet teksten om hva forsikringen dekker og ikke dekker. Du må alltid lese vilkårene i avtaledokumentet for å få full oversikt."),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(t,{external:!0,href:"#"},"Fullstendige vilkår (PDF)"),e.createElement(t,{external:!0,href:"#"},"Standardisert produktinformasjon (PDF)")))))}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    title: "Tema",
    items: ["Auto", "Light", "Dark", "High Contrast"],
    seperateItem: 1,
    defaultValue: "Auto",
    showTitle: true
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["Auto", "Light", "Dark", 0, 1, 2]
    }
  },
  render: args => <SegmentedControl {...args} />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control: Dekningsoversikt",
  args: {
    title: "Velg hva som vises",
    items: ["Vis alt", "Dekker", "Dekker ikke", "Dekker kanskje"],
    defaultValue: "Dekker",
    showTitle: false,
    seperateItem: 1
  },
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["Vis alt", "Dekker", "Dekker ikke", "Dekker kanskje"]
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
    return <div style={{
      display: "flex",
      gap: "40px",
      flexDirection: "column"
    }}>
                <h2>Dekningsoversikt hund og katt</h2>
                <SegmentedControl {...args} value={value} onChange={e => {
        setValue(e.target.value);
      }} />
                <div style={{
        maxWidth: "60ch",
        display: "flex",
        gap: "24px",
        flexDirection: "column"
      }}>
                    {value === "Vis alt" && <>
                            {dekkesListe}
                            {dekkesIkkeListe}
                            {dekkesKanskjeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
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
                        </>}
                    {value === "Dekker" && <>
                            {dekkesListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
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
                        </>}
                    {value === "Dekker kanskje" && <>
                            {dekkesKanskjeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
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
                        </>}
                    {value === "Dekker ikke" && <>
                            {dekkesIkkeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
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
                        </>}
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const K=["SegmentedControlStory","DekningsoversiktStory"];export{m as DekningsoversiktStory,d as SegmentedControlStory,K as __namedExportsOrder,b as default};
