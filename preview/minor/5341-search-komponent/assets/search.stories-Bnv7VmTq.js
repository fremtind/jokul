import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as d}from"./index-siqcju79.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as L}from"./Button-fpmiG8ZH.js";import{I as q}from"./InputGroup-BFZ5w6w_.js";import{F as c}from"./Flex-6AvuqMfo.js";import{L as M,b as B}from"./ListItem-DecmzA2x.js";import{L as E}from"./Link-uanxgvhJ.js";import{P as w}from"./Popover-D4MbAGi9.js";import{M as $}from"./MenuItem-FDaXnjZl.js";import{u as K}from"./useModal-PTsSX8Wr.js";import{M as H,a as A,b as D,f as G}from"./Modal-gnVwype-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./ChevronRightIcon-DscfWr0z.js";import"./OpenInNewIcon-DjpoFjwC.js";import"./index-Chjiymov.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-CGR_BR3u.js";const C=t=>{const{className:r,type:o="button",label:n="Søk",variant:l="ghost",...s}=t;return e.jsx(L,{className:b("jkl-search-submit",r),type:o,variant:l,...s,children:n})};C.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"ghost"'}]},description:""}}};const a=t=>{const{label:r="Søk",className:o,density:n,errorLabel:l,helpLabel:s,labelProps:u={srOnly:!0},supportLabelProps:v,tooltip:j,description:m,name:i="q",placeholder:P="Søk",showClearButton:I=!0,required:R=!0,spellCheck:F=!1,icon:N="search",children:_,...T}=t,W={label:r,density:n,errorLabel:l,helpLabel:s,labelProps:u,supportLabelProps:v,tooltip:j,description:m};return e.jsxs("form",{role:"search",className:b("jkl-search--beta",o),children:[e.jsx(q,{...W,label:r,"data-testid":"jkl-select--beta",render:O=>e.jsxs("div",{className:"input-wrapper","data-icon":N,children:[e.jsx("input",{type:"search",name:i,placeholder:P,required:R,spellCheck:F,...O,...T}),I&&e.jsx("button",{className:"clear-button",type:"reset",children:e.jsx("span",{className:"jkl-sr-only",children:"Tilbakestill søkefeltet"})})]})}),_]})};a.Button=C;a.__docgenInfo={description:"",methods:[],displayName:"Search",props:{showClearButton:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ce={title:"Beta/Search",component:a,subcomponents:{SearchButton:C},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,showClearButton:!0,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},h={name:"Søk"},p=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander"].sort(),g={name:"Søk med dataliste",args:{list:"keywords"},render:t=>e.jsx(e.Fragment,{children:e.jsx(a,{...t,children:e.jsx("datalist",{id:t.list,children:p.map(r=>e.jsx("option",{children:r},r))})})})},S={name:"Søk med søkeknapp",render:t=>e.jsx(c,{gap:"xl",wrap:"wrap",children:e.jsx(c,{direction:"column",gap:"m",children:e.jsx(a,{...t,children:e.jsx(a.Button,{})})})})},k={name:"Søk frittstående på en side",parameters:{layout:"fullscreen"},args:{labelProps:{srOnly:!0},placeholder:""},render:t=>e.jsxs(c,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:"50vh"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(a,{...t,children:e.jsx(a.Button,{})})]})},f={name:"Søk som filtrerer innhold i en liste",parameters:{layout:"fullscreen"},render:t=>{const[r,o]=d.useState(p);return e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(a,{...t,onChange:n=>{o(p.filter(l=>l.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs(c,{direction:"column",gap:"s","aria-live":"polite",children:[e.jsx("p",{className:r.length?"jkl-sr-only":"",children:`${r.length} komponenter funnet`}),e.jsx(M,{children:!!r.length&&r.map(n=>e.jsx(B,{children:e.jsx(E,{href:"#",children:n})},n))})]})]})}},x={name:"Søk med resultater i Popover",render:t=>{const[r,o]=d.useState(!1),[n,l]=d.useState(p);return e.jsxs(w,{open:r,children:[e.jsx(w.Trigger,{"aria-expanded":r,asChild:!0,children:e.jsx(a,{...t,onChange:s=>{s.target.value.length!==0&&o(!0),l(p.filter(u=>u.toLowerCase().includes(s.target.value.toLowerCase())))}})}),e.jsxs(w.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(s=>e.jsx($,{as:"a",href:"#",children:s},s))]})]})}},y={name:"Søk i modal med tastatur-snarvei",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:t=>{const[r,o]=d.useState(""),[n,l]=d.useState(!1),[s,{overlay:u,container:v,modal:j}]=K({title:""});d.useEffect(()=>{s&&s.show()},[s]);const m=p.filter(i=>i.includes(r));return e.jsxs(c,{style:{padding:"12svh"},children:[e.jsx(L,{variant:"primary",onClick:()=>l(!n),children:"Åpne søk i modal"}),n&&e.jsxs(H,{...v,children:[e.jsx(A,{...u}),e.jsx(D,{...j,children:e.jsxs(c,{as:G,gap:"m",direction:"column",children:[e.jsx(a,{...t,value:r,onChange:i=>o(i.target.value),onReset:i=>o("")}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${m.length} komponenter funnet`}),e.jsx(M,{children:m.map(i=>e.jsx(B,{children:i},i))})]})]})})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
                    <Search.Button />
                </Search>
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
                <Search.Button />
            </Search>
        </Flex>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Søk som filtrerer innhold i en liste",
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const [results, setResults] = useState(keywords);
    return <Flex direction="column" gap="m">
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                <Button variant="primary" onClick={() => setShowModal(!showModal)}>
                    Åpne søk i modal
                </Button>
                {showModal && <ModalContainer {...container}>
                        <ModalOverlay {...overlay} />
                        <Modal {...modal}>
                            <Flex as={ModalBody} gap="m" direction="column">
                                <BETA_Search {...args} value={searchString} onChange={e => setSearchString(e.target.value)}
            // FIX: Når value er controlled på denne måten vil den native
            // reset knappen slutte å fungere
            onReset={e => setSearchString("")} />
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
                            </Flex>
                        </Modal>
                    </ModalContainer>}
            </Flex>;
  }
}`,...y.parameters?.docs?.source}}};const be=["_Search","SearchWithDatalist","SearchWithSubmitButton","BigSearch","SearchWithResultsOnPage","SearchWithResultsInPopover","SearchInvokeWithShortcut"];export{k as BigSearch,y as SearchInvokeWithShortcut,g as SearchWithDatalist,x as SearchWithResultsInPopover,f as SearchWithResultsOnPage,S as SearchWithSubmitButton,h as _Search,be as __namedExportsOrder,Ce as default};
