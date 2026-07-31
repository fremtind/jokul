import{r as k,j as e}from"./iframe--O4Sgmp8.js";import{l as h}from"./landkoder-DlcCquOp.js";import{c as F}from"./cow-CdXr5BwN.js";import{S as o,g as C}from"./Select-CFPlA2py.js";import{B as S}from"./Button-CFioT-f7.js";import{F as b}from"./Flex-DtAmyVy6.js";/* empty css               */import{u as w}from"./index.esm-Bjx0WnHN.js";import{T as f}from"./Text-CFdcRXKS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-DWKDjYfK.js";import"./InputGroup-DilUXEtV.js";import"./useId-DiLOrs8n.js";import"./Label-DyfSKmX1.js";import"./SupportLabel-SJ4jE4ng.js";import"./SuccessIcon-CEDZ0Jqb.js";import"./Icon-BWRctQy3.js";import"./WarningIcon-MuosO0K-.js";import"./Search-mDQcYj9j.js";import"./Title-BJnhw8Qv.js";import"./useListNavigation-y-pAXAPI.js";import"./ArrowDownIcon-DmGg3cuc.js";import"./CloseIcon-Bny1Qxck.js";import"./usePreviousValue-CU-t4Wl9.js";import"./Loader-D6Lj87kt.js";import"./useDelayedRender-BcIKhRZf.js";import"./SlotComponent-B5yXgo7H.js";const L=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,V=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,D=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,H=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,I=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],j=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:V,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:L,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:H,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:F,alt:"",width:"50",height:"50"})}];function T(t){const n=Array.from(t.target.selectedOptions,a=>a.value);console.log(n)}const se={title:"Komponenter/Select",component:o,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:I,onChange:T},tags:["autodocs","forms"]},s={name:"Select"},i={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:h.map(({navn:t,kode:n})=>({label:t,value:n}))}},m={name:"Egendefinert filterfunksjon",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:"Søker i både navn og landkode",items:h.map(({navn:t,kode:n})=>({label:t,value:n})),searchable:!0,filterFunction:(t,n)=>t.label.toLowerCase().includes(n.toLowerCase())||t.value.toLowerCase().includes(n.toLowerCase())}},d={name:"Kontrollert Select",render:t=>{const[n,a]=k.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(f,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:n,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:""}),t.items.map(r=>{const{value:l}=C(r);return e.jsx("option",{value:l,children:l},l)})]})]}),e.jsx(o,{...t,multiple:!1,value:n,onChange:r=>{t.onChange?.(r),a(r.target.value)},className:"jkl-spacing-24--top"})]})}},u={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:j}},c={name:"I skjema",args:{},render:t=>{const[n,a]=k.useState("");return e.jsxs(b,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:r=>{r.preventDefault(),a(`Innsendt verdi for "${t.name||"feltet"}":
                        ${new FormData(r.target).getAll(t.name||"")}`)},children:[e.jsx(o,{...t,onChange:()=>a("")}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:n===""?"Send inn skjemaet for å se verdien(e) til feltet.":n})]})}},p={name:"Bruk med react-hook-form",render:t=>{const{register:n,handleSubmit:a,formState:r}=w(),[l,x]=k.useState(void 0),y=v=>x(v);return e.jsxs(b,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(y),children:[e.jsx(o,{...t,...n("telefonmerke",{required:"Du må velge merke"}),errorLabel:r.errors.telefonmerke?.message}),e.jsx(o,{label:"Hvilke dyr liker du?",description:"Velg minst 2",multiple:!0,items:j,...n("dyr",{validate:v=>v.length<2?"Velg minst to dyr":void 0}),errorLabel:r.errors.dyr?.message}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(f,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",l?.telefonmerke]}),e.jsxs(f,{children:[e.jsx("strong",{children:"dyr"}),": [",l?.dyr.join(", "),"]"]})]})]})}},g={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  name: "Egendefinert filterfunksjon",
  args: {
    label: "Hvilket land skjedde skaden i?",
    placeholder: "Velg land",
    description: "Søker i både navn og landkode",
    items: landkoder.map(({
      navn,
      kode
    }) => ({
      label: navn,
      value: kode
    })),
    searchable: true,
    filterFunction: (item, filter) => item.label.toLowerCase().includes(filter.toLowerCase()) || item.value.toLowerCase().includes(filter.toLowerCase())
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...g.parameters?.docs?.source}}};const ie=["SelectStory","ManyOptions","CustomFilter","Controlled","Multiple","ISkjema","ReactHookForm","InvalidStory"];export{d as Controlled,m as CustomFilter,c as ISkjema,g as InvalidStory,i as ManyOptions,u as Multiple,p as ReactHookForm,s as SelectStory,ie as __namedExportsOrder,se as default};
