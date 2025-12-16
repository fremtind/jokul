import{r as g,R as n}from"./index-siqcju79.js";import{F as u}from"./Flex-BJkkUza_.js";import{C as p}from"./Chip-Cc-5sX9a.js";import{F as k}from"./FieldGroup-DvKuzy6r.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./clsx-B-dksMZM.js";import"./CheckIcon-CJPuDLts.js";import"./Icon-mINJCSxV.js";import"./CloseIcon-bvBUMA_V.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-DfhTn3qm.js";import"./WarningIcon-TwjxhH69.js";const V={title:"Komponenter/Chip",component:p,tags:["autodocs","forms"],parameters:{docs:{description:{component:"Chips er interaktive merkelapper for å vise og administrere valg, filtre og verdier."}}},argTypes:{children:{control:"text",description:"Teksten som vises i chip-en."},variant:{control:"select",options:["input","filter"],description:"Bestemmer stilen og funksjonaliteten. `input` brukes for fjerning, `filter` for valg."},size:{control:"select",options:["small","large"],description:"Størrelsen på chip-en."},selected:{control:"boolean",description:"Brukes med `filter`-varianten for å vise om en chip er valgt."},onClick:{action:"clicked",description:"Callback som kjøres når chip-en klikkes."}}},a={name:"Chip",args:{children:"Husforsikring",variant:"input",size:"small"}},l={name:"Filter",args:{variant:"filter",size:"small"},parameters:{docs:{description:{story:"Dette eksemplet viser hvordan `Chip` med `filter`-varianten kan brukes for å filtrere forsikringsprodukter."}},layout:"start"},render:({variant:m,...s})=>{const t=[{id:"bil-pluss",name:"Bil Pluss",category:"Kjøretøy",description:"Vår mest omfattende bilforsikring med leiebil og maskinskadedekning."},{id:"hus-standard",name:"Hus Standard",category:"Bolig",description:"Solid grunndekning for huset ditt mot brann, vannskader og naturskader."},{id:"reise-verden",name:"Reise Verden",category:"Person",description:"Gir deg trygghet med dekning for sykdom, ulykke og tap av reisegods i hele verden."},{id:"innbo-pluss",name:"Innbo Pluss",category:"Bolig",description:"Dekker innbo og løsøre mot skader og tyveri, inkludert uflaksdekning."},{id:"hund-standard",name:"Hund Standard",category:"Dyr",description:"Dekker veterinærutgifter ved sykdom eller ulykke for din firbente venn."},{id:"ulykkesforsikring",name:"Ulykkesforsikring",category:"Person",description:"Gir økonomisk erstatning ved varig medisinsk invaliditet etter en ulykke."}],[o,c]=g.useState(["car-plus","travel-worldwide"]),r=e=>{c(i=>i.includes(e)?i.filter(v=>v!==e):[...i,e])};return n.createElement(k,{legend:"Velg forsikringer du ønsker tilbud på"},n.createElement(u,{as:"ul",gap:8,wrap:!0,style:{listStyle:"none",padding:0,marginBottom:"var(--a-spacing-8)"}},t.map(e=>n.createElement("li",{key:e.id},n.createElement(p,{...s,variant:"filter",selected:o.includes(e.id),onClick:()=>r(e.id)},e.name)))))}},d={name:"Input",args:{variant:"input",size:"small"},parameters:{docs:{description:{story:"Dette eksemplet viser hvordan `Chip` med `input`-varianten kan brukes for å vise en liste med valgte elementer, for eksempel tilleggsdekninger, som brukeren kan fjerne."}},layout:"start"},render:m=>{const s=["Leiebil","Førerulykke","Utvidet veihjelp"],[t,o]=g.useState(s);g.useEffect(()=>{t.length===0&&setTimeout(()=>{o(s)},1e3)},[t]);const c=r=>{o(e=>e.filter(i=>i!==r))};return n.createElement(k,{legend:"Valgte tilleggsdekninger"},n.createElement(u,{as:"ul",gap:8,wrap:!0,style:{listStyle:"none",padding:0,marginBottom:"var(--a-spacing-8)"}},t.map(r=>n.createElement("li",{key:r},n.createElement(p,{...m,onClick:()=>c(r)},r)))))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Chip",
  args: {
    children: "Husforsikring",
    variant: "input",
    size: "small"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Filter",
  args: {
    variant: "filter",
    size: "small"
  },
  parameters: {
    docs: {
      description: {
        story: "Dette eksemplet viser hvordan \`Chip\` med \`filter\`-varianten kan brukes for å filtrere forsikringsprodukter."
      }
    },
    layout: "start"
  },
  render: ({
    variant,
    ...args
  }) => {
    const insuranceProducts = [{
      id: "bil-pluss",
      name: "Bil Pluss",
      category: "Kjøretøy",
      description: "Vår mest omfattende bilforsikring med leiebil og maskinskadedekning."
    }, {
      id: "hus-standard",
      name: "Hus Standard",
      category: "Bolig",
      description: "Solid grunndekning for huset ditt mot brann, vannskader og naturskader."
    }, {
      id: "reise-verden",
      name: "Reise Verden",
      category: "Person",
      description: "Gir deg trygghet med dekning for sykdom, ulykke og tap av reisegods i hele verden."
    }, {
      id: "innbo-pluss",
      name: "Innbo Pluss",
      category: "Bolig",
      description: "Dekker innbo og løsøre mot skader og tyveri, inkludert uflaksdekning."
    }, {
      id: "hund-standard",
      name: "Hund Standard",
      category: "Dyr",
      description: "Dekker veterinærutgifter ved sykdom eller ulykke for din firbente venn."
    }, {
      id: "ulykkesforsikring",
      name: "Ulykkesforsikring",
      category: "Person",
      description: "Gir økonomisk erstatning ved varig medisinsk invaliditet etter en ulykke."
    }];
    const [selectedProductIds, setSelectedProductIds] = useState(["car-plus", "travel-worldwide"]);
    const toggleSelection = (productId: string) => {
      setSelectedProductIds(currentSelectedProductIds => currentSelectedProductIds.includes(productId) ? currentSelectedProductIds.filter(id => id !== productId) : [...currentSelectedProductIds, productId]);
    };
    return <FieldGroup legend="Velg forsikringer du ønsker tilbud på">
                <Flex as="ul" gap={8} wrap style={{
        listStyle: "none",
        padding: 0,
        marginBottom: "var(--a-spacing-8)"
      }}>
                    {insuranceProducts.map(product => <li key={product.id}>
                            <ChipComponent {...args} variant="filter" selected={selectedProductIds.includes(product.id)} onClick={() => toggleSelection(product.id)}>
                                {product.name}
                            </ChipComponent>
                        </li>)}
                </Flex>
            </FieldGroup>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Input",
  args: {
    variant: "input",
    size: "small"
  },
  parameters: {
    docs: {
      description: {
        story: "Dette eksemplet viser hvordan \`Chip\` med \`input\`-varianten kan brukes for å vise en liste med valgte elementer, for eksempel tilleggsdekninger, som brukeren kan fjerne."
      }
    },
    layout: "start"
  },
  render: args => {
    const initialCoverages = ["Leiebil", "Førerulykke", "Utvidet veihjelp"];
    const [selectedCoverages, setSelectedCoverages] = useState(initialCoverages);
    useEffect(() => {
      if (selectedCoverages.length === 0) {
        setTimeout(() => {
          setSelectedCoverages(initialCoverages);
        }, 1000);
      }
    }, [selectedCoverages]);
    const removeCoverage = (coverageToRemove: string) => {
      setSelectedCoverages(currentCoverages => currentCoverages.filter(coverage => coverage !== coverageToRemove));
    };
    return <FieldGroup legend="Valgte tilleggsdekninger">
                <Flex as="ul" gap={8} wrap style={{
        listStyle: "none",
        padding: 0,
        marginBottom: "var(--a-spacing-8)"
      }}>
                    {selectedCoverages.map(coverage => <li key={coverage}>
                            <ChipComponent {...args} onClick={() => removeCoverage(coverage)}>
                                {coverage}
                            </ChipComponent>
                        </li>)}
                </Flex>
            </FieldGroup>;
  }
}`,...d.parameters?.docs?.source}}};const z=["Chip","Filter","Input"];export{a as Chip,l as Filter,d as Input,z as __namedExportsOrder,V as default};
