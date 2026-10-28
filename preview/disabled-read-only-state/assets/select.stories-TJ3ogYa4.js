import{r as i,j as e}from"./iframe-BtDSgjSo.js";import{u as F}from"./index.esm-BbdSkBxB.js";import{c as I}from"./cow-CdXr5BwN.js";import{l as y}from"./landkoder-DlcCquOp.js";import{S as o,g as T}from"./Select-jUTE7Lj0.js";import{B as w}from"./Button-C2-vtRAI.js";import{F as V}from"./Flex-LppjuD0Y.js";/* empty css               */import{T as x}from"./Text-CoPOoabY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-g6nJfhtD.js";import"./InputGroup-CEotp2fO.js";import"./useId-BdftHoHp.js";import"./Label-vFZVJR_r.js";import"./SupportLabel-i8VITltx.js";import"./SuccessIcon-WMLnp3Ph.js";import"./Icon-Nb3dwUIe.js";import"./WarningIcon-BbUO-YPr.js";import"./Search-CivYbk7m.js";import"./Title-41tghXKk.js";import"./useListNavigation-DhAddI0P.js";import"./ArrowDownIcon-DSy45hTh.js";import"./CloseIcon-CMty9VYt.js";import"./usePreviousValue-CCA-jls4.js";import"./Loader-SzA8oX_l.js";import"./useDelayedRender-Ci-z4AWw.js";import"./SlotComponent-BX8CzWOI.js";const H=""+new URL("cat-CQlfcJin.jpg",import.meta.url).href,D=""+new URL("dog-oLAuIUOU.jpg",import.meta.url).href,A=""+new URL("guinea-BF22JSZW.jpg",import.meta.url).href,O=""+new URL("horse-pTldkTf4.jpg",import.meta.url).href,C=[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"google",label:"Google"},{value:"oneplus",label:"OnePlus"},{value:"nothing",label:"Nothing"},{value:"nokia",label:"Nokia"},{value:"annet",label:"Annet"}],L=[{value:"hund",label:"Hund",description:"Trofast og glad",media:e.jsx("img",{src:D,alt:"",width:"50",height:"50"})},{value:"katt",label:"Katt",description:"Selvstendig og nysgjerrig",media:e.jsx("img",{src:H,alt:"",width:"50",height:"50"})},{value:"marsvin",label:"Marsvin",description:"Vennlig og sjenert",media:e.jsx("img",{src:A,alt:"",width:"50",height:"50"})},{value:"hest",label:"Hest",description:"Kraftig og intelligent",media:e.jsx("img",{src:O,alt:"",width:"50",height:"50"})},{value:"ku",label:"Ku",description:"Stø og rolig",media:e.jsx("img",{src:I,alt:"",width:"50",height:"50"})}];function B(n){const t=Array.from(n.target.selectedOptions,a=>a.value);console.log(t)}const me={title:"Komponenter/Select",component:o,parameters:{layout:"centered"},argTypes:{name:{table:{disable:!1}},items:{table:{disable:!0}}},args:{name:"phone-brand",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",searchable:!1,multiple:!1,required:!1,disabled:!1,items:C,onChange:B},tags:["autodocs","forms"]},u={name:"Select"},c={args:{disabled:!0,defaultValue:C[0]?.value}},p={name:"Select med mange valg",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:void 0,items:y.map(({navn:n,kode:t})=>({label:n,value:t}))}},g={name:"Egendefinert filterfunksjon",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Velg land",description:"Søker i både navn og landkode",items:y.map(({navn:n,kode:t})=>({label:n,value:t})),searchable:!0,filterFunction:(n,t)=>n.label.toLowerCase().includes(t.toLowerCase())||n.value.toLowerCase().includes(t.toLowerCase())}},v={name:"Kontrollert Select",render:n=>{const[t,a]=i.useState("samsung");return e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsxs(x,{children:["Sett ",e.jsx("code",{children:"value"})," for kontrollert Select:"]}),e.jsxs("select",{value:t,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:""}),n.items.map(r=>{const{value:s}=T(r);return e.jsx("option",{value:s,children:s},s)})]})]}),e.jsx(o,{...n,multiple:!1,value:t,onChange:r=>{n.onChange?.(r),a(r.target.value)},className:"jkl-spacing-24--top"})]})}},k={name:"Select multiple",args:{name:"multiselect",id:"min-select",label:"Hvilke dyr liker du?",description:"Velg så mange du vil fra listen",placeholder:void 0,multiple:!0,items:L}},h={name:"I skjema",args:{},render:n=>{const[t,a]=i.useState("");return e.jsxs(V,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:r=>{r.preventDefault(),a(`Innsendt verdi for "${n.name||"feltet"}":
                        ${new FormData(r.target).getAll(n.name||"")}`)},children:[e.jsx(o,{...n,onChange:()=>a("")}),e.jsx(w,{variant:"primary",children:"Send inn"}),e.jsx("output",{children:t===""?"Send inn skjemaet for å se verdien(e) til feltet.":t})]})}},S={name:"Bruk med react-hook-form",render:n=>{const{register:t,handleSubmit:a,formState:r}=F(),[s,l]=i.useState(void 0),d=m=>l(m);return e.jsxs(V,{direction:"column",alignItems:"start",gap:"s",as:"form",onSubmit:a(d),children:[e.jsx(o,{...n,...t("telefonmerke",{required:"Du må velge merke"}),errorLabel:r.errors.telefonmerke?.message}),e.jsx(o,{label:"Hvilke dyr liker du?",description:"Velg minst 2",multiple:!0,items:L,...t("dyr",{validate:m=>m.length<2?"Velg minst to dyr":void 0}),errorLabel:r.errors.dyr?.message}),e.jsx(w,{variant:"primary",children:"Send inn"}),e.jsxs("output",{children:[e.jsxs(x,{children:[e.jsx("strong",{children:"telefonmerke"}),": ",s?.telefonmerke]}),e.jsxs(x,{children:[e.jsx("strong",{children:"dyr"}),": [",s?.dyr.join(", "),"]"]})]})]})}},f={name:"Utsatt innlasting av valg",args:{placeholder:void 0,name:"land",label:"Hvilket land skjedde skaden i?",description:"Valgene hentes etter 3 sekunder"},render:n=>{const[t,a]=i.useState([]);return i.useEffect(()=>{const r=setTimeout(()=>a(y.map(({navn:s,kode:l})=>({label:s,value:l}))),3e3);return()=>{clearTimeout(r)}},[]),e.jsx(o,{...n,items:t})}},b={name:"Asynkront søk",args:{label:"Hvilket land skjedde skaden i?",placeholder:"Søk etter land",description:"Søkeresultater hentes asynkront"},render:n=>{const t=y.map(({navn:l,kode:d})=>({label:l,value:d})),[a,r]=i.useState([]),s=l=>{if(!l){r([]);return}setTimeout(()=>{const d=t.filter(m=>m.label.toLowerCase().includes(l.toLowerCase()));r(d)},300)};return e.jsxs(V,{direction:"column",gap:"16",children:[e.jsx(o,{...n,items:a,searchable:!0,onSearch:s}),e.jsxs(x,{children:["Vurder heller å bruke ",e.jsx("code",{children:"Search"}),"-komponenten enn å søke asynkront i ",e.jsx("code",{children:"Select"})]})]})}},j={name:"Invalid Select",args:{required:!0,errorLabel:"Du må velge minst ett merke"},tags:["dev"]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: telefonprodusenter[0]?.value
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
                <Text>
                    Vurder heller å bruke <code>Search</code>-komponenten enn å
                    søke asynkront i <code>Select</code>
                </Text>
            </Flex>;
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true,
    errorLabel: "Du må velge minst ett merke"
  },
  tags: ["dev"]
}`,...j.parameters?.docs?.source}}};const ue=["SelectStory","Disabled","ManyOptions","CustomFilter","Controlled","Multiple","ISkjema","ReactHookForm","SlowLoad","AsyncSearch","InvalidStory"];export{b as AsyncSearch,v as Controlled,g as CustomFilter,c as Disabled,h as ISkjema,j as InvalidStory,p as ManyOptions,k as Multiple,S as ReactHookForm,u as SelectStory,f as SlowLoad,ue as __namedExportsOrder,me as default};
