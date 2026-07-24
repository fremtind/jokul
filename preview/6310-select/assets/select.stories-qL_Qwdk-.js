import{r as v,j as e}from"./iframe-Djxn02br.js";import{l as x}from"./landkoder-DlcCquOp.js";import{c as b}from"./cow-CdXr5BwN.js";import{S as s,g as y}from"./Select-DkKMGY6d.js";import{B as h}from"./Button-C224xava.js";import{F as S}from"./Flex-B5jOwlwK.js";/* empty css               */import{u as F}from"./index.esm-DPvGAKCD.js";import{T as g}from"./Text-DmvKJEMZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-BzD1S3cm.js";import"./InputGroup-CX_jfA2P.js";import"./useId-WuE8c_GM.js";import"./Label-C99qoynv.js";import"./SupportLabel-pVdajRVv.js";import"./SuccessIcon-dGZRpOhh.js";import"./Icon-QaYPsNDp.js";import"./WarningIcon-C6iCPnce.js";import"./Search-E9VltIDw.js";import"./Title-BRQ6C9Kf.js";import"./useListNavigation-DlAlbe0w.js";import"./ArrowDownIcon-eiI70fwy.js";import"./CloseIcon-Ct-a4HNe.js";import"./usePreviousValue-CdlrHyUX.js";import"./Loader-CqTqlwXm.js";import"./useDelayedRender-C6sLXlKI.js";import"./SlotComponent-DRAjKCct.js";const I=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,V=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,D=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,H=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,T=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],f=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:V,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:I,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:H,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:b,alt:"",width:"50",height:"50"})}];function w(t){const n=Array.from(t.target.selectedOptions,a=>a.value);console.log(n)}const le={title:"Komponenter/Select",component:s,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:T,onChange:w},tags:["autodocs","forms"]},o={name:"Select"},i={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:x.map(({navn:t,kode:n})=>({label:t,value:n}))}},m={name:"Kontrollert Select",render:t=>{const[n,a]=v.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(g,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:n,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:""}),t.items.map(r=>{const{value:l}=y(r);return e.jsx("option",{value:l,children:l},l)})]})]}),e.jsx(s,{...t,multiple:!1,value:n,onChange:r=>{t.onChange?.(r),a(r.target.value)},className:"jkl-spacing-24--top"})]})}},u={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:f}},d={name:"I skjema",args:{},render:t=>{const[n,a]=v.useState("");return e.jsxs(S,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:r=>{r.preventDefault(),a(`Innsendt verdi for "${t.name||"feltet"}":
                        ${new FormData(r.target).getAll(t.name||"")}`)},children:[e.jsx(s,{...t,onChange:()=>a("")}),e.jsx(h,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:n===""?"Send inn skjemaet for å se verdien(e) til feltet.":n})]})}},c={name:"Bruk med react-hook-form",render:t=>{const{register:n,handleSubmit:a}=F(),[r,l]=v.useState(void 0),k=j=>l(j);return e.jsxs(S,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(k),children:[e.jsx(s,{...t,...n("telefonmerke")}),e.jsx(s,{label:"Hvilke dyr liker du?",description:"Velg så mange du vil",multiple:!0,items:f,...n("dyr")}),e.jsx(h,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(g,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",r?.telefonmerke]}),e.jsxs(g,{children:[e.jsx("strong",{children:"dyr"}),": [",r?.dyr.join(", "),"]"]})]})]})}},p={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      handleSubmit
    } = useForm<Form>();
    const [data, setData] = useState<Form | undefined>(undefined);
    const logData: SubmitHandler<Form> = data => setData(data);
    return <Flex direction="column" alignItems="start" gap="s" as="form" onSubmit={handleSubmit(logData)}>
                <Select {...args} {...register("telefonmerke")} />
                <Select label="Hvilke dyr liker du?" description="Velg så mange du vil" multiple items={dyr} {...register("dyr")} />
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
}`,...p.parameters?.docs?.source}}};const se=["SelectStory","ManyOptions","Controlled","Multiple","ISkjema","ReactHookForm","InvalidStory"];export{m as Controlled,d as ISkjema,p as InvalidStory,i as ManyOptions,u as Multiple,c as ReactHookForm,o as SelectStory,se as __namedExportsOrder,le as default};
