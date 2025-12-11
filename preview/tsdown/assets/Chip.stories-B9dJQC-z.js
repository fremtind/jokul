import{r as g,j as n}from"./iframe-BjXEG3ty.js";import{F as u}from"./Flex-BM1Z-Ed4.js";import{C as p}from"./Chip-DLp0tX8a.js";import{F as k}from"./FieldGroup-Vd0d7Hxt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BzukAP1g.js";import"./mergeRefs-BsMHeveB.js";import"./CheckIcon-Bc0KUpym.js";import"./Icon-DH5sQCcO.js";import"./CloseIcon-DO1smxt4.js";import"./useId-DDzAfnN4.js";import"./Label-DOx2JQwo.js";import"./SupportLabel-gXaapy-x.js";import"./WarningIcon-3EXZbt0f.js";const H={title:"Komponenter/Chip",component:p,argTypes:{children:{control:"text",description:"Teksten som vises i chip-en."},variant:{control:"select",options:["input","filter"],description:"Bestemmer stilen og funksjonaliteten. `input` brukes for fjerning, `filter` for valg."},size:{control:"select",options:["small","large"],description:"Størrelsen på chip-en."},selected:{control:"boolean",description:"Brukes med `filter`-varianten for å vise om en chip er valgt."},onClick:{action:"clicked",description:"Callback som kjøres når chip-en klikkes."}}},a={name:"Chip",args:{children:"Husforsikring",variant:"input",size:"small"}},d={name:"Filter",args:{variant:"filter",size:"small"},render:({variant:m,...s})=>{const i=[{id:"bil-pluss",name:"Bil Pluss",category:"Kjøretøy",description:"Vår mest omfattende bilforsikring med leiebil og maskinskadedekning."},{id:"hus-standard",name:"Hus Standard",category:"Bolig",description:"Solid grunndekning for huset ditt mot brann, vannskader og naturskader."},{id:"reise-verden",name:"Reise Verden",category:"Person",description:"Gir deg trygghet med dekning for sykdom, ulykke og tap av reisegods i hele verden."},{id:"innbo-pluss",name:"Innbo Pluss",category:"Bolig",description:"Dekker innbo og løsøre mot skader og tyveri, inkludert uflaksdekning."},{id:"hund-standard",name:"Hund Standard",category:"Dyr",description:"Dekker veterinærutgifter ved sykdom eller ulykke for din firbente venn."},{id:"ulykkesforsikring",name:"Ulykkesforsikring",category:"Person",description:"Gir økonomisk erstatning ved varig medisinsk invaliditet etter en ulykke."}],[o,c]=g.useState(["car-plus","travel-worldwide"]),r=e=>{c(t=>t.includes(e)?t.filter(v=>v!==e):[...t,e])};return n.jsx(k,{legend:"Velg forsikringer du ønsker tilbud på",children:n.jsx(u,{as:"ul",gap:"xs",style:{listStyle:"none",padding:0,marginBottom:"var(--a-spacing-8)"},children:i.map(e=>n.jsx("li",{children:n.jsx(p,{...s,variant:"filter",selected:o.includes(e.id),onClick:()=>r(e.id),children:e.name})},e.id))})})}},l={name:"Input",args:{variant:"input",size:"small"},parameters:{docs:{description:{story:"Dette eksemplet viser hvordan `Chip` med `input`-varianten kan brukes for å vise en liste med valgte elementer, for eksempel tilleggsdekninger, som brukeren kan fjerne."}}},render:m=>{const s=["Leiebil","Førerulykke","Utvidet veihjelp"],[i,o]=g.useState(s);g.useEffect(()=>{i.length===0&&setTimeout(()=>{o(s)},1e3)},[i]);const c=r=>{o(e=>e.filter(t=>t!==r))};return n.jsx(k,{legend:"Valgte tilleggsdekninger",children:n.jsx(u,{as:"ul",gap:"xs",style:{listStyle:"none",padding:0,marginBottom:"var(--a-spacing-8)"},children:i.map(r=>n.jsx("li",{children:n.jsx(p,{...m,onClick:()=>c(r),children:r})},r))})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Chip",
  args: {
    children: "Husforsikring",
    variant: "input",
    size: "small"
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Filter",
  args: {
    variant: "filter",
    size: "small"
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
                <Flex as="ul" gap="xs" style={{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    }
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
                <Flex as="ul" gap="xs" style={{
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
}`,...l.parameters?.docs?.source}}};const T=["Chip","Filter","Input"];export{a as Chip,d as Filter,l as Input,T as __namedExportsOrder,H as default};
