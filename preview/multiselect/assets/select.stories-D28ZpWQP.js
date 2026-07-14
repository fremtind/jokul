import{r as d,j as e}from"./iframe-CZlElHO0.js";import{S as m}from"./Select-CJHZishz.js";/* empty css               */import{c as u}from"./cow-CdXr5BwN.js";import{B as p}from"./Button-l9EBm3FP.js";import{F as g}from"./Flex-CZbZC_pp.js";import{U as c,b as h}from"./ListItem-C8ni_Mfl.js";import{T as v}from"./Title-By3yirHm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-K08BmiaH.js";import"./InputGroup-CBkzbmZ5.js";import"./useId-BTvD4Y_5.js";import"./Label-ki28Kxko.js";import"./SupportLabel-DM54nzaK.js";import"./SuccessIcon-9HLz9Iv2.js";import"./Icon-DzxIk3De.js";import"./WarningIcon-DyrZLjMg.js";import"./Search-COTsokvm.js";import"./Text-hH0g_ezK.js";import"./useListNavigation-CTmosbnX.js";import"./ArrowDownIcon-COL54-bo.js";import"./usePreviousValue-DbnqLmp7.js";import"./Loader-DBt2IG0N.js";import"./useDelayedRender-CI9OYFpF.js";import"./SlotComponent-BbVH7kR2.js";const f=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,S=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,j=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,b=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,k=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}];function x(t){const a=Array.from(t.target.selectedOptions,r=>r.value);console.log(a)}const Q={title:"Komponenter/Select",component:m,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:k,onChange:x},tags:["autodocs","forms"]},s={name:"Select",args:{placeholder:void 0}},l={name:"Select multiple",args:{name:"multiselect",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:S,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:f,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:j,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:b,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:u,alt:"",width:"50",height:"50"})}]},render:t=>{const[a,r]=d.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,onChange:n=>r(Array.from(n.target.selectedOptions))}),e.jsx(v,{className:"jkl-spacing-16--top",as:"h3",size:"xs",children:"Valgte verdier:"}),e.jsx(c,{children:a.map(n=>e.jsx(h,{children:n.text},n.value))})]})}},i={name:"I skjema",tags:["dev"],args:{},render:t=>{const[a,r]=d.useState("");return e.jsxs(g,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:n=>{n.preventDefault(),r(`Innsendt verdi for "${t.name||"feltet"}":
                        ${new FormData(n.target).getAll(t.name||"")}`)},children:[e.jsx(m,{...t,onChange:()=>r("")}),e.jsx(p,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:a===""?"Send inn skjemaet for å se verdien(e) til feltet.":a})]})}},o={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Select",
  args: {
    placeholder: undefined
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...o.parameters?.docs?.source}}};const W=["SelectStory","Multiple","ISkjema","InvalidStory"];export{i as ISkjema,o as InvalidStory,l as Multiple,s as SelectStory,W as __namedExportsOrder,Q as default};
