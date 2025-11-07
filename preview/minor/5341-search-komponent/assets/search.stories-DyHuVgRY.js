import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as c}from"./index-siqcju79.js";import{c as T}from"./clsx-B-dksMZM.js";import{I as E}from"./InputGroup-BFZ5w6w_.js";import{F as d}from"./Flex-6AvuqMfo.js";import{B as b}from"./Button-fpmiG8ZH.js";import{L as C,b as L}from"./ListItem-DecmzA2x.js";import{L as _}from"./Link-uanxgvhJ.js";import{P as w}from"./Popover-D4MbAGi9.js";import{M as $}from"./MenuItem-FDaXnjZl.js";import{u as q}from"./useModal-PTsSX8Wr.js";import{M as K,a as H,b as A,f as D}from"./Modal-gnVwype-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./ChevronRightIcon-DscfWr0z.js";import"./OpenInNewIcon-DjpoFjwC.js";import"./index-Chjiymov.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-CGR_BR3u.js";const l=c.forwardRef((t,r)=>{const{label:o="Søk",className:n,density:i,errorLabel:s,helpLabel:u,labelProps:j={srOnly:!0},supportLabelProps:v,tooltip:m,description:a,name:M="q",placeholder:B="Søk",showClearButton:P=!0,required:I=!0,spellCheck:R=!1,children:F,...N}=t,W={label:o,density:i,errorLabel:s,helpLabel:u,labelProps:j,supportLabelProps:v,tooltip:m,description:a};return e.jsxs("form",{role:"search",className:T("jkl-search--beta",n),children:[e.jsx(E,{...W,label:o,"data-testid":"jkl-select--beta",render:O=>e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:"search",name:M,placeholder:B,required:I,spellCheck:R,ref:r,...O,...N}),P&&e.jsx("button",{className:"clear-button",type:"reset",children:e.jsx("span",{hidden:!0,className:" jkl-sr-only",children:"Tilbakestill søkefeltet"})})]})}),F]})});l.__docgenInfo={description:"",methods:[],displayName:"Search",props:{showClearButton:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const we={title:"Beta/Search",component:l,parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",description:"",required:!1,disabled:!1,showClearButton:!0,labelProps:{srOnly:!0}},tags:["autodocs","forms"]},h={name:"Søk"},p=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander"].sort(),g={name:"Søk med dataliste",args:{list:"keywords"},render:t=>e.jsx(e.Fragment,{children:e.jsx(l,{...t,children:e.jsx("datalist",{id:t.list,children:p.map(r=>e.jsx("option",{children:r},r))})})})},S={name:"Søk med søkeknapp",render:t=>e.jsx(d,{gap:"xl",wrap:"wrap",children:e.jsx(d,{direction:"column",gap:"m",children:e.jsx(l,{...t,children:e.jsx(b,{variant:"ghost",type:"submit","aria-label":"Søk",children:"Søk"})})})})},k={name:"Søk frittstående på en side",parameters:{layout:"fullscreen"},args:{labelProps:{srOnly:!0},placeholder:""},render:t=>e.jsxs(d,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:"50vh"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(l,{...t,children:e.jsx(b,{variant:"ghost",type:"submit",children:"Søk"})})]})},x={name:"Søk som filtrerer innhold i en liste",parameters:{layout:"fullscreen"},render:t=>{const[r,o]=c.useState(p);return e.jsxs(d,{direction:"column",gap:"l",children:[e.jsx(l,{...t,onChange:n=>{o(p.filter(i=>i.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs(d,{direction:"column",gap:"s","aria-live":"polite",children:[e.jsx("p",{className:r.length?"jkl-sr-only":"",children:`${r.length} komponenter funnet`}),e.jsx(C,{children:!!r.length&&r.map(n=>e.jsx(L,{children:e.jsx(_,{href:"#",children:n})},n))})]})]})}},y={name:"Søk med resultater i Popover",render:t=>{const[r,o]=c.useState(!1),[n,i]=c.useState(p);return e.jsxs(w,{open:r,children:[e.jsx(w.Trigger,{"aria-expanded":r,asChild:!0,children:e.jsx(l,{...t,onChange:s=>{s.target.value.length!==0&&o(!0),i(p.filter(u=>u.toLowerCase().includes(s.target.value.toLowerCase())))}})}),e.jsxs(w.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(s=>e.jsx($,{as:"a",href:"#",children:s},s))]})]})}},f={name:"Søk i modal med tastatur-snarvei",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:t=>{const[r,o]=c.useState(""),[n,i]=c.useState(!1),[s,{overlay:u,container:j,modal:v}]=q({title:""});c.useEffect(()=>{s&&s.show()},[s]);const m=p.filter(a=>a.includes(r));return e.jsxs(d,{style:{padding:"12svh"},children:[e.jsx(b,{variant:"primary",onClick:a=>i(!n),children:"Åpne søk i modal"}),n&&e.jsxs(K,{...j,children:[e.jsx(H,{...u}),e.jsx(A,{...v,children:e.jsxs(D,{children:[e.jsx(l,{...t,value:r,onChange:a=>o(a.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${m.length} komponenter funnet`}),e.jsx(C,{children:m.map(a=>e.jsx(L,{children:a},a))})]})]})})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
                <Flex direction="column" gap="s" aria-live="polite">
                    <p className={results.length ? "jkl-sr-only" : ""}>
                        {\`\${results.length} komponenter funnet\`}
                    </p>
                    <List>
                        {!!results.length && results.map(result => <ListItem key={result}>
                                    <Link href="#">{result}</Link>
                                </ListItem>)}
                    </List>
                </Flex>
            </Flex>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                <Popover.Content padding={8} role="menu" style={{
        maxWidth: "25ch"
      }} aria-live="polite">
                    <p className="jkl-sr-only">
                        {\`\${results.length} komponenter funnet\`}
                    </p>
                    {results.map(result => <MenuItem key={result} as="a" href="#">
                            {result}
                        </MenuItem>)}
                </Popover.Content>
            </Popover>;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const [searchString, setSearchString] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [instance, {
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
    const filteredKeywords = keywords.filter(word => word.includes(searchString));
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
                                <BETA_Search {...args} value={searchString} onChange={e => setSearchString(e.target.value)} />
                                <div aria-live="polite">
                                    <p className="jkl-sr-only">
                                        {\`\${filteredKeywords.length} komponenter funnet\`}
                                    </p>
                                    <List>
                                        {filteredKeywords.map(word => <ListItem key={word}>
                                                {word}
                                            </ListItem>)}
                                    </List>
                                </div>
                            </ModalBody>
                        </Modal>
                    </ModalContainer>}
            </Flex>;
  }
}`,...f.parameters?.docs?.source}}};const be=["_Search","SearchWithDatalist","SearchWithSubmitButton","BigSearch","SearchWithResultsOnPage","SearchWithResultsInPopover","SearchInvokeWithShortcut"];export{k as BigSearch,f as SearchInvokeWithShortcut,g as SearchWithDatalist,y as SearchWithResultsInPopover,x as SearchWithResultsOnPage,S as SearchWithSubmitButton,h as _Search,be as __namedExportsOrder,we as default};
