import{r as i,j as e}from"./iframe-QtBp4egp.js";import{u as L}from"./index.esm-DJ801gDd.js";import{l as x}from"./landkoder-DlcCquOp.js";import{c as F}from"./cow-CdXr5BwN.js";import{S as o,g as I}from"./Select-CbsiMtt1.js";import{B as w}from"./Button-HThwQfSQ.js";import{F as y}from"./Flex-BS-Hvl3j.js";/* empty css               */import{T as j}from"./Text-Bgzezs4W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-ciCz3-9q.js";import"./InputGroup-Bl76heEN.js";import"./useId-Dc_xERX8.js";import"./Label-48hlu1bR.js";import"./SupportLabel-DtQH7vY0.js";import"./SuccessIcon-BKunpZaE.js";import"./Icon-DJQmj-nB.js";import"./WarningIcon-K3CJmTRp.js";import"./Search-DufWmlOd.js";import"./Title-DxPU80s9.js";import"./useListNavigation-BKcoDxX8.js";import"./ArrowDownIcon-C8IYS7VR.js";import"./CloseIcon-1IBQQujy.js";import"./usePreviousValue-BKHZpGds.js";import"./Loader-CcqSFiRF.js";import"./useDelayedRender-Vr_PMH5J.js";import"./SlotComponent-D8hBxJlv.js";const V=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,T=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,H=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,D=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,A=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],C=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:T,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:V,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:H,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:F,alt:"",width:"50",height:"50"})}];function O(n){const t=Array.from(n.target.selectedOptions,a=>a.value);console.log(t)}const de={title:"Komponenter/Select",component:o,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:A,onChange:O},tags:["autodocs","forms"]},u={name:"Select"},c={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:x.map(({navn:n,kode:t})=>({label:n,value:t}))}},p={name:"Egendefinert filterfunksjon",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:"Søker i både navn og landkode",items:x.map(({navn:n,kode:t})=>({label:n,value:t})),searchable:!0,filterFunction:(n,t)=>n.label.toLowerCase().includes(t.toLowerCase())||n.value.toLowerCase().includes(t.toLowerCase())}},g={name:"Kontrollert Select",render:n=>{const[t,a]=i.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(j,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:t,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:""}),n.items.map(r=>{const{value:s}=I(r);return e.jsx("option",{value:s,children:s},s)})]})]}),e.jsx(o,{...n,multiple:!1,value:t,onChange:r=>{n.onChange?.(r),a(r.target.value)},className:"jkl-spacing-24--top"})]})}},v={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:C}},k={name:"I skjema",args:{},render:n=>{const[t,a]=i.useState("");return e.jsxs(y,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:r=>{r.preventDefault(),a(`Innsendt verdi for "${n.name||"feltet"}":
                        ${new FormData(r.target).getAll(n.name||"")}`)},children:[e.jsx(o,{...n,onChange:()=>a("")}),e.jsx(w,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:t===""?"Send inn skjemaet for å se verdien(e) til feltet.":t})]})}},h={name:"Bruk med react-hook-form",render:n=>{const{register:t,handleSubmit:a,formState:r}=L(),[s,l]=i.useState(void 0),d=m=>l(m);return e.jsxs(y,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(d),children:[e.jsx(o,{...n,...t("telefonmerke",{required:"Du må velge merke"}),errorLabel:r.errors.telefonmerke?.message}),e.jsx(o,{label:"Hvilke dyr liker du?",description:"Velg minst 2",multiple:!0,items:C,...t("dyr",{validate:m=>m.length<2?"Velg minst to dyr":void 0}),errorLabel:r.errors.dyr?.message}),e.jsx(w,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(j,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",s?.telefonmerke]}),e.jsxs(j,{children:[e.jsx("strong",{children:"dyr"}),": [",s?.dyr.join(", "),"]"]})]})]})}},S={name:"Utsatt innlasting av valg",args:{placeholder:void 0,name:"land",label:"Hvilket land skjedde skaden i?",description:"Valgene hentes etter 3 sekunder"},render:n=>{const[t,a]=i.useState([]);return i.useEffect(()=>{const r=setTimeout(()=>a(x.map(({navn:s,kode:l})=>({label:s,value:l}))),3e3);return()=>{clearTimeout(r)}},[]),e.jsx(o,{...n,items:t})}},f={name:"Asynkront søk",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Søk etter land",description:"Søkeresultater hentes asynkront"},render:n=>{const t=x.map(({navn:l,kode:d})=>({label:l,value:d})),[a,r]=i.useState([]),s=l=>{if(!l){r([]);return}setTimeout(()=>{const d=t.filter(m=>m.label.toLowerCase().includes(l.toLowerCase()));r(d)},300)};return e.jsxs(y,{direction:"column",gap:"16",children:[e.jsx(o,{...n,items:a,searchable:!0,onSearch:s}),e.jsxs(j,{children:["Vurder heller å bruke ",e.jsx("code",{children:"Search"}),"-komponenten enn å søke asynkront i ",e.jsx("code",{children:"Select"})]})]})}},b={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Utsatt innlasting av valg",
  args: {
    placeholder: undefined,
    name: "land",
    label: "Hvilket land skjedde skaden i?",
    description: "Valgene hentes etter 3 sekunder"
  },
  render: args => {
    const [items, setItems] = useState<ValuePair[]>([]);
    useEffect(() => {
      const timeout = setTimeout(() => setItems(landkoder.map(({
        navn,
        kode
      }) => ({
        label: navn,
        value: kode
      }))), 3000);
      return () => {
        clearTimeout(timeout);
      };
    }, []);
    return <Select {...args} items={items} />;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Asynkront søk",
  args: {
    label: "Hvilket land skjedde skaden i?",
    placeholder: "Søk etter land",
    description: "Søkeresultater hentes asynkront"
  },
  render: args => {
    const allItems = landkoder.map(({
      navn,
      kode
    }) => ({
      label: navn,
      value: kode
    }));
    const [items, setItems] = useState<ValuePair[]>([]);
    const handleSearch = (searchTerm: string) => {
      if (!searchTerm) {
        setItems([]);
        return;
      }
      setTimeout(() => {
        const filtered = allItems.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()));
        setItems(filtered);
      }, 300);
    };
    return <Flex direction="column" gap="16">
            <Select {...args} items={items} searchable onSearch={handleSearch} />
                <Text>Vurder heller å bruke <code>Search</code>-komponenten enn å søke asynkront i <code>Select</code></Text>
            </Flex>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...b.parameters?.docs?.source}}};const me=["SelectStory","ManyOptions","CustomFilter","Controlled","Multiple","ISkjema","ReactHookForm","SlowLoad","AsyncSearch","InvalidStory"];export{f as AsyncSearch,g as Controlled,p as CustomFilter,k as ISkjema,b as InvalidStory,c as ManyOptions,v as Multiple,h as ReactHookForm,u as SelectStory,S as SlowLoad,me as __namedExportsOrder,de as default};
