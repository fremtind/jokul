import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as j}from"./index-siqcju79.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as v}from"./Button-fpmiG8ZH.js";import{I as q}from"./InputGroup-BFZ5w6w_.js";import{F as c}from"./Flex-6AvuqMfo.js";import{L as C,b as I}from"./ListItem-DecmzA2x.js";import{L as $}from"./Link-uanxgvhJ.js";import{P as y}from"./Popover-D4MbAGi9.js";import{M as E}from"./MenuItem-FDaXnjZl.js";import{u as J}from"./useModal-PTsSX8Wr.js";import{S as K}from"./SearchIcon-BePr7oqd.js";import{I as H}from"./Icon-DnRkF4CO.js";import{M as A,a as D,b as G,f as V}from"./Modal-gnVwype-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./ChevronRightIcon-DscfWr0z.js";import"./OpenInNewIcon-DjpoFjwC.js";import"./index-Chjiymov.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-CGR_BR3u.js";const w=n=>{const{className:r,type:o="button",label:t="Søk",variant:l="ghost",...s}=n;return e.jsx(v,{className:b("jkl-search-submit",r),type:o,variant:l,...s,children:t})};w.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"ghost"'}]},description:""}}};const a=n=>{const{label:r="Søk",className:o,density:t,errorLabel:l,helpLabel:s,labelProps:p={srOnly:!0},supportLabelProps:u,tooltip:i,description:L,name:B="q",placeholder:P="Søk",showClearButton:F=!0,required:N=!0,spellCheck:R=!1,icon:M="search",children:_,...T}=n,W={label:r,density:t,errorLabel:l,helpLabel:s,labelProps:p,supportLabelProps:u,tooltip:i,description:L};return e.jsxs("form",{role:"search",className:b("jkl-search--beta",o),children:[e.jsx(q,{...W,label:r,"data-testid":"jkl-select--beta",render:O=>e.jsxs("div",{className:"input-wrapper","data-icon":M,children:[e.jsx("input",{type:"search",name:B,placeholder:P,required:N,spellCheck:R,...O,...T}),F&&e.jsx("button",{className:"clear-button",type:"reset",children:e.jsx("span",{className:"jkl-sr-only",children:"Tilbakestill søkefeltet"})})]})}),_]})};a.Button=w;a.__docgenInfo={description:"",methods:[],displayName:"Search",props:{showClearButton:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Le={title:"Beta/Search",component:a,subcomponents:{SearchButton:w},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,showClearButton:!0,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},m={name:"Søk"},d=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander"].sort(),h={name:"Søk med dataliste",args:{list:"keywords"},render:n=>e.jsx(e.Fragment,{children:e.jsx(a,{...n,children:e.jsx("datalist",{id:n.list,children:d.map(r=>e.jsx("option",{children:r},r))})})})},g={name:"Søk med søkeknapp",render:n=>e.jsx(c,{gap:"xl",wrap:"wrap",children:e.jsx(c,{direction:"column",gap:"m",children:e.jsx(a,{...n,children:e.jsx(a.Button,{})})})})},k={name:"Søk frittstående på en side",parameters:{layout:"fullscreen"},args:{labelProps:{srOnly:!0},placeholder:""},render:n=>e.jsxs(c,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:"50vh"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(a,{...n,children:e.jsx(a.Button,{})})]})},S={name:"Søk som filtrerer innhold i en liste",parameters:{layout:"fullscreen"},render:n=>{const[r,o]=j.useState(d);return e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(a,{...n,onChange:t=>{o(d.filter(l=>l.toLowerCase().includes(t.target.value.toLowerCase())))}}),e.jsxs(c,{direction:"column",gap:"s","aria-live":"polite",children:[e.jsx("p",{className:r.length?"jkl-sr-only":"",children:`${r.length} komponenter funnet`}),e.jsx(C,{children:!!r.length&&r.map(t=>e.jsx(I,{children:e.jsx($,{href:"#",children:t})},t))})]})]})}},x={name:"Søk med resultater i Popover",render:n=>{const[r,o]=j.useState(!1),[t,l]=j.useState(d);return e.jsxs(y,{open:r,children:[e.jsx(y.Trigger,{"aria-expanded":r,asChild:!0,children:e.jsx(a,{...n,onChange:s=>{s.target.value.length!==0&&o(!0),l(d.filter(p=>p.toLowerCase().includes(s.target.value.toLowerCase())))}})}),e.jsxs(y.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${t.length} komponenter funnet`}),t.map(s=>e.jsx(E,{as:"a",href:"#",children:s},s))]})]})}},f={name:"Søk i modal med tastatur-snarvei",parameters:{layout:"fullscreen"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:n=>{const[r,o]=j.useState(""),[t,{overlay:l,container:s,modal:p}]=J({title:""}),u=d.filter(i=>i.includes(r));return e.jsxs(e.Fragment,{children:[e.jsxs(c,{as:"header",alignItems:"center",justifyContent:"space-between",style:{padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(c,{gap:"xs",children:[e.jsx(v,{variant:"ghost",onClick:()=>t.show(),icon:e.jsx(K,{}),"aria-label":"Åpne søk"}),e.jsx(v,{variant:"ghost",icon:e.jsx(H,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(A,{...s,children:[e.jsx(D,{...l}),e.jsx(G,{...p,children:e.jsxs(c,{as:V,gap:"m",direction:"column",children:[e.jsx(a,{...n,value:r,onChange:i=>o(i.target.value),onReset:i=>o("")}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${u.length} komponenter funnet`}),e.jsx(C,{children:u.map(i=>e.jsx(I,{children:i},i))})]})]})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Søk med søkeknapp",
  render: args => <Flex gap="xl" wrap="wrap">
            <Flex direction="column" gap="m">
                <Search {...args}>
                    <Search.Button />
                </Search>
            </Flex>
        </Flex>
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Søk i modal med tastatur-snarvei",
  parameters: {
    layout: "fullscreen"
  },
  args: {
    labelProps: {
      variant: "large"
    },
    placeholder: "Søk i hele Jøkul"
  },
  render: args => {
    const [searchString, setSearchString] = useState("");
    const [instance, {
      overlay,
      container,
      modal
    }] = useModal({
      title: ""
    });
    const filteredKeywords = keywords.filter(word => word.includes(searchString));
    return <>
                <Flex as="header" alignItems="center" justifyContent="space-between" style={{
        padding: "var(--jkl-spacing-s) var(--jkl-spacing-m)",
        background: "var(--jkl-color-background-container-high)"
      }}>
                    <p className="jkl-heading-4">Jøkul</p>
                    <Flex gap="xs">
                        <Button variant="ghost" onClick={() => instance.show()} icon={<SearchIcon />} aria-label="Åpne søk" />
                        <Button variant="ghost" icon={<Icon>menu</Icon>} aria-label="Meny" />
                    </Flex>
                </Flex>
                <ModalContainer {...container}>
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
                                    {filteredKeywords.map(word => <ListItem key={word}>{word}</ListItem>)}
                                </List>
                            </div>
                        </Flex>
                    </Modal>
                </ModalContainer>
            </>;
  }
}`,...f.parameters?.docs?.source}}};const Be=["_Search","SearchWithDatalist","SearchWithSubmitButton","BigSearch","SearchWithResultsOnPage","SearchWithResultsInPopover","SearchInvokeWithShortcut"];export{k as BigSearch,f as SearchInvokeWithShortcut,h as SearchWithDatalist,x as SearchWithResultsInPopover,S as SearchWithResultsOnPage,g as SearchWithSubmitButton,m as _Search,Be as __namedExportsOrder,Le as default};
