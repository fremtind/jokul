import{r as s,j as e}from"./iframe-Cuz4mhIQ.js";import{l as x}from"./landkoder-DlcCquOp.js";import{c as y}from"./cow-CdXr5BwN.js";import{S as o,g as L}from"./Select-CGUOqhZ-.js";import{B as S}from"./Button-Lf0TyX9c.js";import{F as h}from"./Flex-C9y-EPKU.js";/* empty css               */import{u as F}from"./index.esm-BnacHqgs.js";import{T as f}from"./Text-D-fmo5Hu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-BBOpvyyz.js";import"./InputGroup-B4CFrZui.js";import"./useId-ke_Vzqeq.js";import"./Label-ZXoKFcct.js";import"./SupportLabel-uiEyZz18.js";import"./SuccessIcon-BENzYc7M.js";import"./Icon-UKhFKnNA.js";import"./WarningIcon-_Fq2mUG_.js";import"./Search-BlBVgK5g.js";import"./Title-DRt5WOfY.js";import"./useListNavigation-C88aT8F_.js";import"./ArrowDownIcon-DuQOBsT_.js";import"./CloseIcon-BQv7grwa.js";import"./usePreviousValue-wUGwS2_4.js";import"./Loader-Cjl4Jerk.js";import"./useDelayedRender-veMqf3A_.js";import"./SlotComponent-CvidzCPD.js";const V=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,R=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,D=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,E=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,I=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],k=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:R,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:V,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:E,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:y,alt:"",width:"50",height:"50"})}];function H(r){const n=Array.from(r.target.selectedOptions,a=>a.value);console.log(n)}const se={title:"Komponenter/Select",component:o,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:I,onChange:H},tags:["autodocs","forms"]},i={name:"Select"},m={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:x.map(({navn:r,kode:n})=>({label:r,value:n}))}},u={name:"Kontrollert Select",render:r=>{const[n,a]=s.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(f,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:n,onChange:t=>a(t.target.value),children:[e.jsx("option",{value:""}),r.items.map(t=>{const{value:l}=L(t);return e.jsx("option",{value:l,children:l},l)})]})]}),e.jsx(o,{...r,multiple:!1,value:n,onChange:t=>{r.onChange?.(t),a(t.target.value)},className:"jkl-spacing-24--top"})]})}},d={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:k}},c={name:"I skjema",args:{},render:r=>{const[n,a]=s.useState(""),t=s.useRef(null);return s.useEffect(()=>(t.current?.addEventListener("focus",console.log),t.current?.addEventListener("blur",console.log),()=>{t.current?.removeEventListener("focus",console.log),t.current?.removeEventListener("blur",console.log)}),[]),e.jsxs(h,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:l=>{l.preventDefault(),a(`Innsendt verdi for "${r.name||"feltet"}":
                        ${new FormData(l.target).getAll(r.name||"")}`)},children:[e.jsx(o,{...r,ref:t,onChange:()=>a("")}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:n===""?"Send inn skjemaet for å se verdien(e) til feltet.":n})]})}},g={name:"Bruk med react-hook-form",render:r=>{const{register:n,handleSubmit:a,formState:t}=F(),[l,b]=s.useState(void 0),j=v=>b(v);return e.jsxs(h,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(j),children:[e.jsx(o,{...r,...n("telefonmerke",{required:"Du må velge merke"}),errorLabel:t.errors.telefonmerke?.message}),e.jsx(o,{label:"Hvilke dyr liker du?",description:"Velg minst 2",multiple:!0,items:k,...n("dyr",{validate:v=>v.length<2?"Velg minst to dyr":void 0}),errorLabel:t.errors.dyr?.message}),e.jsx(S,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(f,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",l?.telefonmerke]}),e.jsxs(f,{children:[e.jsx("strong",{children:"dyr"}),": [",l?.dyr.join(", "),"]"]})]})]})}},p={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "I skjema",
  args: {},
  render: args => {
    const [output, setOutput] = useState("");
    const selectRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
      selectRef.current?.addEventListener("focus", console.log);
      selectRef.current?.addEventListener("blur", console.log);
      return () => {
        selectRef.current?.removeEventListener("focus", console.log);
        selectRef.current?.removeEventListener("blur", console.log);
      };
    }, []);
    return <Flex direction="column" alignItems="start" gap="s" as="form" onSubmit={event => {
      event.preventDefault();
      setOutput(\`Innsendt verdi for "\${args.name || "feltet"}":
                        \${new FormData(event.target as HTMLFormElement).getAll(args.name || "")}\`);
    }}>
                <Select {...args} ref={selectRef} onChange={() => setOutput("")} />
                <Button variant="primary">Send inn</Button>
                <output>
                    {output === "" ? "Send inn skjemaet for å se verdien(e) til feltet." : output}
                </output>
            </Flex>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...p.parameters?.docs?.source}}};const oe=["SelectStory","ManyOptions","Controlled","Multiple","ISkjema","ReactHookForm","InvalidStory"];export{u as Controlled,c as ISkjema,p as InvalidStory,m as ManyOptions,d as Multiple,g as ReactHookForm,i as SelectStory,oe as __namedExportsOrder,se as default};
