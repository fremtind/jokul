import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as i}from"./index-siqcju79.js";import{c as W}from"./clsx-B-dksMZM.js";import{I as _}from"./InputGroup-BFZ5w6w_.js";import{C as O}from"./CloseIcon-CGR_BR3u.js";import{F as c}from"./Flex-6AvuqMfo.js";import{B as y}from"./Button-fpmiG8ZH.js";import{L as T}from"./Link-uanxgvhJ.js";import{P as v}from"./Popover-D4MbAGi9.js";import{M as E}from"./MenuItem-FDaXnjZl.js";import{u as N}from"./useModal-PTsSX8Wr.js";import{M as q,a as A,b as H,f as D}from"./Modal-gnVwype-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./ChevronRightIcon-DscfWr0z.js";import"./OpenInNewIcon-DjpoFjwC.js";import"./index-Chjiymov.js";import"./IconButton-CwYjR4Na.js";const o=i.forwardRef((r,t)=>{const{label:s="Søk",className:n,density:l,errorLabel:a,helpLabel:d,labelProps:f={srOnly:!0},supportLabelProps:j,tooltip:w,description:b,name:C="q",placeholder:B="Søk",showClearButton:M=!0,required:P=!0,children:F,...R}=r,I={label:s,density:l,errorLabel:a,helpLabel:d,labelProps:f,supportLabelProps:j,tooltip:w,description:b};return e.jsxs("form",{role:"search",className:W("jkl-search--beta",n),children:[e.jsx(_,{...I,label:s,"data-testid":"jkl-select--beta",render:L=>e.jsxs("div",{className:"jkl-search--beta__input",children:[e.jsx("input",{type:"search",name:C,placeholder:B,required:P,ref:t,...L,...R}),M&&e.jsx("button",{className:"clear-button",type:"reset","aria-label":"Tilbakestill søkefeltet",children:e.jsx(O,{})})]})}),F]})});o.__docgenInfo={description:"",methods:[],displayName:"Search",props:{showClearButton:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const fe={title:"Beta/Search",component:o,parameters:{layout:"centered"},args:{label:"Søk",placeholder:"Søk",description:"",required:!1,disabled:!1,showClearButton:!0,labelProps:{srOnly:!0}},tags:["autodocs","forms"]},p={name:"Søk"},u=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander"].sort(),m={name:"Søk med dataliste",args:{list:"keywords"},render:r=>e.jsx(e.Fragment,{children:e.jsx(o,{...r,children:e.jsx("datalist",{id:r.list,children:u.map(t=>e.jsx("option",{children:t},t))})})})},h={name:"Søk med søkeknapp",render:r=>e.jsx(c,{gap:"xl",wrap:"wrap",children:e.jsx(c,{direction:"column",gap:"m",children:e.jsx(o,{...r,children:e.jsx(y,{variant:"ghost",type:"submit","aria-label":"Søk",children:"Søk"})})})})},g={name:"Søk frittstående på en side",parameters:{layout:"fullscreen"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(c,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:"50vh"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(o,{...r,children:e.jsx(y,{variant:"ghost",type:"submit",children:"Søk"})})]})},S={name:"Søk som filtrerer innhold i en liste",parameters:{layout:"fullscreen"},render:r=>{const[t,s]=i.useState(u);return e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(o,{...r,onChange:n=>{s(u.filter(l=>l.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsx(c,{direction:"column",gap:"s",children:t.length?t.map(n=>e.jsx(T,{href:"#",children:n},n)):e.jsx("p",{children:"Fant ingen komponenter med dette navnet :("})})]})}},k={name:"Søk med resultater i Popover",render:r=>{const[t,s]=i.useState(!1),[n,l]=i.useState(u);return e.jsxs(v,{open:t,children:[e.jsx(v.Trigger,{"aria-expanded":t,asChild:!0,children:e.jsx(o,{...r,onChange:a=>{a.target.value.length!==0&&s(!0),l(u.filter(d=>d.toLowerCase().includes(a.target.value.toLowerCase())))}})}),e.jsx(v.Content,{padding:8,initialFocus:-1,role:"menu",style:{maxWidth:"25ch"},children:n.map(a=>e.jsx(E,{as:"a",href:"#",children:a},a))})]})}},x={name:"Søk i modal med tastatur-snarvei",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[t,s]=i.useState(!1),[n,{title:l,overlay:a,container:d,modal:f}]=N({title:""});return i.useEffect(()=>{n&&n.show()},[n]),e.jsxs(c,{style:{padding:"12svh"},children:[e.jsx(y,{variant:"primary",onClick:j=>s(!t),children:"Åpne søk i modal"}),t&&e.jsxs(q,{...d,children:[e.jsx(A,{...a}),e.jsx(H,{...f,children:e.jsx(D,{children:e.jsx(o,{...r,children:e.jsx(y,{variant:"ghost",type:"submit",children:"Søk"})})})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Søk med dataliste",
  args: {
    list: "keywords"
  },
  render: args => <>
            <Search {...args}>
                <datalist id={args.list}>
                    {keywords.map(keyword => <option key={keyword}>{keyword}</option>)}
                </datalist>
            </Search>
        </>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Søk med søkeknapp",
  render: args => <Flex gap="xl" wrap="wrap">
            <Flex direction="column" gap="m">
                <Search {...args}>
                    <Button variant="ghost" type="submit" aria-label="Søk">
                        Søk
                    </Button>
                </Search>

                {/* <Search {...args}>
                    <Button
                        variant="secondary"
                        type="submit"
                        icon={<SearchIcon />}
                        aria-label="Søk"
                    />
                 </Search>*/}
            </Flex>
        </Flex>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Søk frittstående på en side",
  parameters: {
    layout: "fullscreen"
  },
  args: {
    labelProps: {
      srOnly: true
    },
    placeholder: ""
  },
  render: args => <Flex direction="column" justifyContent="center" alignItems="center" style={{
    height: "50vh"
  }}>
            <h2 className="jkl-heading-2">Hva leter du etter?</h2>
            <Search {...args}>
                <Button variant="ghost" type="submit">
                    Søk
                </Button>
            </Search>
        </Flex>
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Søk som filtrerer innhold i en liste",
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const [results, setResults] = useState(keywords);
    return <Flex direction="column" gap="l">
                <Search {...args} onChange={e => {
        setResults(keywords.filter(result => result.toLowerCase().includes(e.target.value.toLowerCase())));
      }} />
                <Flex direction="column" gap="s">
                    {results.length ? results.map(result => <Link key={result} href="#">
                                {result}
                            </Link>) : <p>Fant ingen komponenter med dette navnet :(</p>}
                </Flex>
            </Flex>;
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Søk med resultater i Popover",
  render: args => {
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(keywords);
    return <Popover open={showResults}>
                <Popover.Trigger aria-expanded={showResults} asChild>
                    <Search {...args} onChange={e => {
          e.target.value.length !== 0 && setShowResults(true);
          setResults(keywords.filter(result => result.toLowerCase().includes(e.target.value.toLowerCase())));
        }} />
                </Popover.Trigger>
                <Popover.Content padding={8} initialFocus={-1} role="menu" style={{
        maxWidth: "25ch"
      }}>
                    {results.map(result => <MenuItem key={result} as="a" href="#">
                            {result}
                        </MenuItem>)}
                </Popover.Content>
            </Popover>;
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Søk i modal med tastatur-snarvei",
  parameters: {
    layout: "centered"
  },
  args: {
    labelProps: {
      variant: "large"
    },
    placeholder: "Søk i hele Jøkul"
  },
  render: args => {
    const [showModal, setShowModal] = useState(false);
    const [instance, {
      title,
      overlay,
      container,
      modal
    }] = useModal({
      title: ""
    });
    useEffect(() => {
      if (!instance) {
        return;
      }
      instance.show();
    }, [instance]);
    return <Flex style={{
      padding: "12svh"
    }}>
                <Button variant="primary" onClick={e => setShowModal(!showModal)}>
                    Åpne søk i modal
                </Button>
                {showModal && <ModalContainer {...container}>
                        <ModalOverlay {...overlay} />
                        <Modal {...modal}>
                            <ModalBody>
                                <BETA_Search {...args}>
                                    <Button variant="ghost" type="submit">
                                        Søk
                                    </Button>
                                </BETA_Search>
                            </ModalBody>
                        </Modal>
                    </ModalContainer>}
            </Flex>;
  }
}`,...x.parameters?.docs?.source}}};const ve=["_Search","SearchWithDatalist","SearchWithSubmitButton","BigSearch","SearchWithResultsOnPage","SearchWithResultsInPopover","SearchInvokeWithShortcut"];export{g as BigSearch,x as SearchInvokeWithShortcut,m as SearchWithDatalist,k as SearchWithResultsInPopover,S as SearchWithResultsOnPage,h as SearchWithSubmitButton,p as _Search,ve as __namedExportsOrder,fe as default};
