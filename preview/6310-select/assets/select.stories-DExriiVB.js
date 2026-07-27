import{r as f,j as e}from"./iframe-DUdM8bfa.js";import{l as x}from"./landkoder-DlcCquOp.js";import{c as y}from"./cow-CdXr5BwN.js";import{S as s,g as F}from"./Select-H-zgBkGC.js";import{B as S}from"./Button-BRzYabYL.js";import{F as h}from"./Flex-B-SaBnK6.js";/* empty css               */import{u as V}from"./index.esm-RRWogFe1.js";import{T as v}from"./Text-ez1J0eX9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-1Bt0E_SY.js";import"./InputGroup-DJcp2i7M.js";import"./useId-CXNx6Z2h.js";import"./Label-zPx2PsUy.js";import"./SupportLabel-CjPo2AgO.js";import"./SuccessIcon-CXkk0Xy5.js";import"./Icon-CqDP0AtM.js";import"./WarningIcon-Cucei4Fr.js";import"./Search-B3WeFxoj.js";import"./Title-B2qNdVFk.js";import"./useListNavigation-Db5oOclt.js";import"./ArrowDownIcon-eS2wAeG5.js";import"./CloseIcon-C3_VKfZe.js";import"./usePreviousValue-BO6Td5No.js";import"./Loader-CRhriID8.js";import"./useDelayedRender-Dh-murym.js";import"./SlotComponent-C4RwZi-9.js";const D=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,I=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,H=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,T=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,w=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],k=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:I,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:H,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:T,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:y,alt:"",width:"50",height:"50"})}];function C(t){const r=Array.from(t.target.selectedOptions,a=>a.value);console.log(r)}const se={title:"Komponenter/Select",component:s,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:w,onChange:C},tags:["autodocs","forms"]},o={name:"Select"},i={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:x.map(({navn:t,kode:r})=>({label:t,value:r}))}},m={name:"Kontrollert Select",render:t=>{const[r,a]=f.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(v,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:r,onChange:n=>a(n.target.value),children:[e.jsx("option",{value:""}),t.items.map(n=>{const{value:l}=F(n);return e.jsx("option",{value:l,children:l},l)})]})]}),e.jsx(s,{...t,multiple:!1,value:r,onChange:n=>{t.onChange?.(n),a(n.target.value)},className:"jkl-spacing-24--top"})]})}},u={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:k}},d={name:"I skjema",args:{},render:t=>{const[r,a]=f.useState("");return e.jsxs(h,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:n=>{n.preventDefault(),a(`Innsendt verdi for "${t.name||"feltet"}":
                        ${new FormData(n.target).getAll(t.name||"")}`)},children:[e.jsx(s,{...t,onChange:()=>a("")}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:r===""?"Send inn skjemaet for å se verdien(e) til feltet.":r})]})}},c={name:"Bruk med react-hook-form",render:t=>{const{register:r,handleSubmit:a,formState:n}=V(),[l,j]=f.useState(void 0),b=g=>j(g);return e.jsxs(h,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(b),children:[e.jsx(s,{...t,...r("telefonmerke",{required:"Du må velge merke"}),errorLabel:n.errors.telefonmerke?.message}),e.jsx(s,{label:"Hvilke dyr liker du?",description:"Velg minst 2",multiple:!0,items:k,...r("dyr",{validate:g=>g.length<2?"Velg minst to dyr":void 0}),errorLabel:n.errors.dyr?.message}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(v,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",l?.telefonmerke]}),e.jsxs(v,{children:[e.jsx("strong",{children:"dyr"}),": [",l?.dyr.join(", "),"]"]})]})]})}},p={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Select med mange valg",
  args: {
    label: "Hvilket land skjedde skaden i?",
    placeholder: "Velg land",
    description: undefined,
    items: landkoder.map(({
      navn,
      kode
    }) => ({
      label: navn,
      value: kode
    }))
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert Select",
  render: args => {
    const [value, setValue] = useState<string>("samsung");
    return <>
                <label>
                    <Text>
                        Sett <code>value</code> for kontrollert Select:
                    </Text>
                    <select value={value} onChange={e => setValue(e.target.value)}>
                        <option value="" />
                        {args.items.map(item => {
            const {
              value
            } = getValuePair(item);
            return <option key={value} value={value}>
                                    {value}
                                </option>;
          })}
                    </select>
                </label>
                <Select {...args} multiple={false} value={value} onChange={e => {
        args.onChange?.(e);
        setValue(e.target.value);
      }} className="jkl-spacing-24--top" />
            </>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Select multiple",
  args: {
    name: "multiselect",
    id: "min-select",
    label: "Hvilke dyr liker du?",
    description: "Velg så mange du vil fra listen",
    placeholder: undefined,
    multiple: true,
    items: dyr
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "I skjema",
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Bruk med react-hook-form",
  render: args => {
    type Form = {
      telefonmerke: string;
      dyr: string[];
    };
    const {
      register,
      handleSubmit,
      formState
    } = useForm<Form>();
    const [data, setData] = useState<Form | undefined>(undefined);
    const logData: SubmitHandler<Form> = data => setData(data);
    return <Flex direction="column" alignItems="start" gap="s" as="form" onSubmit={handleSubmit(logData)}>
                <Select {...args} {...register("telefonmerke", {
        required: "Du må velge merke"
      })} errorLabel={formState.errors.telefonmerke?.message} />
                <Select label="Hvilke dyr liker du?" description="Velg minst 2" multiple items={dyr} {...register("dyr", {
        validate: values => values.length < 2 ? "Velg minst to dyr" : undefined
      })} errorLabel={formState.errors.dyr?.message} />
                <Button variant="primary">Send inn</Button>
                <output>
                    <Text>
                        <strong>telefonmerke</strong>: {data?.telefonmerke}
                    </Text>
                    <Text>
                        <strong>dyr</strong>: [{data?.dyr.join(", ")}]
                    </Text>
                </output>
            </Flex>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...p.parameters?.docs?.source}}};const oe=["SelectStory","ManyOptions","Controlled","Multiple","ISkjema","ReactHookForm","InvalidStory"];export{m as Controlled,d as ISkjema,p as InvalidStory,i as ManyOptions,u as Multiple,c as ReactHookForm,o as SelectStory,oe as __namedExportsOrder,se as default};
