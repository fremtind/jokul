import{r as d,j as e}from"./iframe-D9s0L3GW.js";import{c as p}from"./cow-CdXr5BwN.js";import{S as u,g as h}from"./Select-NWWPS16x.js";import{B as v}from"./Button-5K8ZvyVK.js";import{F as S}from"./Flex-BCy9Q6T5.js";import{U as f,b as j}from"./ListItem-Bg2BElmN.js";import{T as b}from"./Title-BFqnFa2n.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-Cq3xELux.js";import"./InputGroup-wNgdx1xx.js";import"./useId-CMdGbmS8.js";import"./Label-r4Hk7QRa.js";import"./SupportLabel-B1l3y9lo.js";import"./SuccessIcon-DcJbX_sP.js";import"./Icon-DZL2dcXf.js";import"./WarningIcon-DxyBuNLW.js";import"./Search-OoqiYiWu.js";import"./Text-DTwk4ToO.js";import"./useListNavigation-DDHmprzM.js";import"./ArrowDownIcon-CcqftvXu.js";import"./usePreviousValue-CyOuEqM2.js";import"./Loader-DIu1SJ-K.js";import"./useDelayedRender-D497ZQy9.js";import"./SlotComponent-BTdKsxWN.js";const k=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,x=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,I=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,w=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,y=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}];function O(n){const r=Array.from(n.target.selectedOptions,a=>a.value);console.log(r)}const Y={title:"Komponenter/Select",component:u,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:y,onChange:O},tags:["autodocs","forms"]},l={name:"Select",args:{placeholder:void 0}},s={name:"Kontrollert Select",render:n=>{const[r,a]=d.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("p",{children:"Sett verdi for kontrollert Select:"}),e.jsx("select",{onChange:t=>a(t.target.value),children:n.items.map(t=>{const{label:g,value:c}=h(t);return e.jsx("option",{value:c,children:g},c)})})]}),e.jsx(u,{...n,value:r,onChange:t=>{n.onChange?.(t),a(t.target.value)},className:"jkl-spacing-24--top"})]})}},o={name:"Select multiple",args:{name:"multiselect",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:x,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:k,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:I,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:w,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:p,alt:"",width:"50",height:"50"})}]},render:n=>{const[r,a]=d.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{...n,onChange:t=>a(Array.from(t.target.selectedOptions))}),e.jsx(b,{className:"jkl-spacing-16--top",as:"h3",size:"xs",children:"Valgte verdier:"}),e.jsx(f,{children:r.map(t=>e.jsx(j,{children:t.text},t.value))})]})}},i={name:"I skjema",tags:["dev"],args:{},render:n=>{const[r,a]=d.useState("");return e.jsxs(S,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:t=>{t.preventDefault(),a(`Innsendt verdi for "${n.name||"feltet"}":
                        ${new FormData(t.target).getAll(n.name||"")}`)},children:[e.jsx(u,{...n,onChange:()=>a("")}),e.jsx(v,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:r===""?"Send inn skjemaet for å se verdien(e) til feltet.":r})]})}},m={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Select",
  args: {
    placeholder: undefined
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert Select",
  render: args => {
    const [value, setValue] = useState<string>("");
    return <>
                <label>
                    <p>Sett verdi for kontrollert Select:</p>
                    <select onChange={e => setValue(e.target.value)}>
                        {args.items.map(item => {
            const {
              label,
              value
            } = getValuePair(item);
            return <option key={value} value={value}>
                                    {label}
                                </option>;
          })}
                    </select>
                </label>
                <Select {...args} value={value} onChange={e => {
        args.onChange?.(e);
        setValue(e.target.value);
      }} className="jkl-spacing-24--top" />
            </>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select multiple",
  args: {
    name: "multiselect",
    label: "Hvilke dyr liker du?",
    description: "Velg så mange du vil fra listen",
    placeholder: undefined,
    multiple: true,
    items: [{
      value: "hund",
      label: "Hund",
      description: "Trofast og glad",
      media: <img src={dogImage.default} alt="" width="50" height="50" />
    }, {
      value: "katt",
      label: "Katt",
      description: "Selvstendig og nysgjerrig",
      media: <img src={catImage.default} alt="" width="50" height="50" />
    }, {
      value: "marsvin",
      label: "Marsvin",
      description: "Vennlig og sjenert",
      media: <img src={guineaPigImage.default} alt="" width="50" height="50" />
    }, {
      value: "hest",
      label: "Hest",
      description: "Kraftig og intelligent",
      media: <img src={horseImage.default} alt="" width="50" height="50" />
    }, {
      value: "ku",
      label: "Ku",
      description: "Stø og rolig",
      media: <img src={cowImage.default} alt="" width="50" height="50" />
    }]
  },
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<HTMLOptionElement[]>([]);
    return <>
                <Select {...args} onChange={e => setSelectedOptions(Array.from(e.target.selectedOptions))} />
                <Title className="jkl-spacing-16--top" as="h3" size="xs">
                    Valgte verdier:
                </Title>
                <UnorderedList>
                    {selectedOptions.map(option => <ListItem key={option.value}>{option.text}</ListItem>)}
                </UnorderedList>
            </>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "I skjema",
  tags: ["dev"],
  args: {},
  render: args => {
    const [output, setOutput] = useState("");
    return <Flex direction="column" alignItems="start" gap="s" as="form" onSubmit={event => {
      event.preventDefault();
      setOutput(\`Innsendt verdi for "\${args.name || "feltet"}":
                        \${new FormData(event.target as HTMLFormElement).getAll(args.name || "")}\`);
    }}>
                <Select {...args} onChange={() => setOutput("")} />
                <Button variant="primary">Send inn</Button>
                <output>
                    {output === "" ? "Send inn skjemaet for å se verdien(e) til feltet." : output}
                </output>
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...m.parameters?.docs?.source}}};const ee=["SelectStory","Controlled","Multiple","ISkjema","InvalidStory"];export{s as Controlled,i as ISkjema,m as InvalidStory,o as Multiple,l as SelectStory,ee as __namedExportsOrder,Y as default};
