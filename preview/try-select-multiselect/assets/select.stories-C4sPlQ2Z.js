import{R as c,j as n}from"./iframe-C_mNNbVC.js";import{C as f}from"./Card-D-pyrEmw.js";import{E as x,a as y}from"./ExpandablePanel-Ckcr93ZG.js";import{E as w}from"./Expander-C3-gcVP2.js";import{S as i}from"./Select-Cns3CDZP.js";/* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-jbWkIGbR.js";import"./mergeRefs-MlqCn0HQ.js";import"./useAnimatedHeightBetween-BvJJxlqm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DiL36uHX.js";import"./usePreviousValue-BFGqypZa.js";import"./ChevronDownIcon-CvccFgCt.js";import"./Icon-CyHgbs3A.js";import"./ChevronUpIcon-BFZiirPC.js";import"./InputGroup-BS7HgvXj.js";import"./useId-CyVNNBJ_.js";import"./Label-wwd07eAA.js";import"./SupportLabel-C55F_toD.js";import"./SuccessIcon-CbTpC7D7.js";import"./WarningIcon-D-0CesMg.js";import"./Popover-DTKGQw2V.js";import"./floating-ui.react-Db56QuyQ.js";import"./index-D-vXlySl.js";import"./index-D6xjPhHK.js";import"./getThemeAndSize-CZAj3IXt.js";import"./Search-CY0Z4DPk.js";import"./Text-DevAcfSI.js";import"./Flex-v1UMQU1r.js";import"./Loader-CsIu-ztK.js";import"./useDelayedRender-C0QvuPYY.js";const g=[{navn:"Kristin Hansen",bilde:"https://randomuser.me/api/portraits/women/1.jpg",id:"kristin.hansen",description:"En beskrivelse"},{navn:"Anders Larsen",bilde:"https://randomuser.me/api/portraits/men/2.jpg",id:"anders.larsen",description:"En beskrivelse"},{navn:"Maria Nilsen",bilde:"https://randomuser.me/api/portraits/women/2.jpg",id:"maria.nilsen",description:"En beskrivelse"},{navn:"Ole Jørgen Bakken",bilde:"https://randomuser.me/api/portraits/men/1.jpg",id:"ole.jorgen.bakken",description:"En beskrivelse"},{navn:"Pio",bilde:"https://randomuser.me/api/portraits/men/3.jpg",id:"pio",description:"En beskrivelse"},{navn:"Heidi",bilde:"https://randomuser.me/api/portraits/women/3.jpg",id:"heidi",description:"En beskrivelse"},{navn:"Elise",bilde:"https://randomuser.me/api/portraits/women/4.jpg",id:"elise",description:"En beskrivelse"},{navn:"Knut",bilde:"https://randomuser.me/api/portraits/men/4.jpg",id:"knut",description:"En beskrivelse"}],E=[{navn:"ProLife",beskrivelse:"ProLife brukes for livsforsikringer"},{navn:"NICE",beskrivelse:"NICE brukes for skadeforsikringer"}],j=["Apple","Samsung","Huawei","Xiaomi","OnePlus","Sony","LG","Motorola","Nokia","Google Pixel"],oe={title:"Komponenter/Select",component:i,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:j.map(e=>({value:e,label:e})),multiple:!1,onSearch:void 0,loading:!1}},o={name:"Select"},l={name:"Select med description",args:{label:"Velg system",items:E.map(e=>({value:e.navn,label:e.navn,description:e.beskrivelse}))}},d={name:"Select med søk",args:{label:"Velg saksbehandler",description:"",multiple:!1,items:g.map(e=>({value:e.id,label:e.navn,description:e.description,media:n.jsx("img",{src:e.bilde,alt:e.navn,width:32,height:32})})),searchable:!0}},p={name:"Select med asynkront søk",args:{label:"Velg saksbehandler",description:"",multiple:!1,items:[],searchable:!0},render:e=>{const[v,u]=c.useState(e.items),[b,m]=c.useState(!1),h=k=>{m(!0),setTimeout(()=>{const S=g.filter(r=>r.navn.toLowerCase().includes(k.toLowerCase())).map(r=>({value:r.id,label:r.navn,media:n.jsx("img",{src:r.bilde,alt:r.navn,width:32,height:32})}));u(S),m(!1)},1e3)};return n.jsx(i,{...e,items:v,onSearch:h,loading:b})}},s={name:"I et Card",parameters:{docs:{description:{story:"Tidligere ble lista klippet fordi `Card` har `overflow: clip`. Lista rendres nå i en portal og vises uavhengig av forelderens overflow."}}},render:e=>n.jsx(f,{padding:"m",style:{width:"20rem"},children:n.jsx(i,{...e})})},a={name:"I en ExpandablePanel",parameters:{docs:{description:{story:"Tidligere ble lista klippet av panelets `overflow: hidden` når innholdet i panelet var lavt. Etter endringen rendres lista i en portal og vises som forventet."}}},render:e=>n.jsx("div",{style:{width:"30rem"},children:n.jsxs(x,{children:[n.jsx(w,{children:"Velg telefonmerke"}),n.jsx(y,{children:n.jsx(i,{...e})})]})})},t={name:"Nederst på siden (flipper opp)",parameters:{docs:{description:{story:"Floating-ui-middlewaren `flip` snur listen over knappen når det ikke er plass under. Scroll Select ned mot bunnen av viewporten for å se effekten."}}},render:e=>n.jsx("div",{style:{height:"120dvh"},children:n.jsx("div",{style:{position:"absolute",bottom:"1rem",left:"1rem"},children:n.jsx(i,{...e})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Select med description",
  args: {
    label: "Velg system",
    items: fagsystemer.map(fagsystem => ({
      value: fagsystem.navn,
      label: fagsystem.navn,
      description: fagsystem.beskrivelse
    }))
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Select med søk",
  args: {
    label: "Velg saksbehandler",
    description: "",
    multiple: false,
    items: saksbehandlere.map(saksbehandler => ({
      value: saksbehandler.id,
      label: saksbehandler.navn,
      description: saksbehandler.description,
      media: <img src={saksbehandler.bilde} alt={saksbehandler.navn} width={32} height={32} />
    })),
    searchable: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Select med asynkront søk",
  args: {
    label: "Velg saksbehandler",
    description: "",
    multiple: false,
    items: [],
    searchable: true
  },
  render: args => {
    const [items, setItems] = React.useState(args.items);
    const [loading, setLoading] = React.useState(false);
    const handleSearch = (searchValue: string) => {
      setLoading(true);
      setTimeout(() => {
        const newItems = saksbehandlere.filter(saksbehandler => saksbehandler.navn.toLowerCase().includes(searchValue.toLowerCase())).map(saksbehandler => ({
          value: saksbehandler.id,
          label: saksbehandler.navn,
          media: <img src={saksbehandler.bilde} alt={saksbehandler.navn} width={32} height={32} />
        }));
        setItems(newItems);
        setLoading(false);
      }, 1000);
    };
    return <Select {...args} items={items} onSearch={handleSearch} loading={loading} />;
  }
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "I et Card",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet fordi \`Card\` har " + "\`overflow: clip\`. Lista rendres nå i en portal og " + "vises uavhengig av forelderens overflow."
      }
    }
  },
  render: args => <Card padding="m" style={{
    width: "20rem"
  }}>
            <Select {...args} />
        </Card>
}`,...s.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en `Card` med\nbegrenset høyde (issue #5976).",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "I en ExpandablePanel",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet av panelets \`overflow: " + "hidden\` når innholdet i panelet var lavt. Etter " + "endringen rendres lista i en portal og vises som forventet."
      }
    }
  },
  render: args => <div style={{
    width: "30rem"
  }}>
            <ExpandablePanel>
                <Expander>Velg telefonmerke</Expander>
                <ExpandablePanelContent>
                    <Select {...args} />
                </ExpandablePanelContent>
            </ExpandablePanel>
        </div>
}`,...a.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en\n`ExpandablePanel` (issue #4583).",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Nederst på siden (flipper opp)",
  parameters: {
    docs: {
      description: {
        story: "Floating-ui-middlewaren \`flip\` snur listen over " + "knappen når det ikke er plass under. Scroll Select " + "ned mot bunnen av viewporten for å se effekten."
      }
    }
  },
  render: args => <div style={{
    height: "120dvh"
  }}>
            <div style={{
      position: "absolute",
      bottom: "1rem",
      left: "1rem"
    }}>
                <Select {...args} />
            </div>
        </div>
}`,...t.parameters?.docs?.source},description:{story:`Demonstrerer auto-flip: når Select er nederst i viewporten, åpner lista
seg over knappen i stedet for under, slik at hele lista alltid er synlig
(issue #3775).`,...t.parameters?.docs?.description}}};const le=["SelectStory","SelectMedDescription","SelectMedSok","SelectAsync","SelectIKort","SelectIExpandablePanel","SelectNederstPaSiden"];export{p as SelectAsync,a as SelectIExpandablePanel,s as SelectIKort,l as SelectMedDescription,d as SelectMedSok,t as SelectNederstPaSiden,o as SelectStory,le as __namedExportsOrder,oe as default};
