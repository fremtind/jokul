import{j as e,r as u}from"./iframe-CVrkxF9U.js";import{c as $}from"./clsx-B-dksMZM.js";import{m as A}from"./mergeRefs-CQAUn3uQ.js";import{I as z}from"./InputGroup-CyuPMwDf.js";import{F as t}from"./Flex-Dd5MU9JA.js";import{C as F}from"./Card-BNoRRYks.js";import{P as w}from"./Popover-TIDhY0K4.js";import{M as G}from"./MenuItem-BkPf8Ur3.js";import{u as J}from"./useModal-j4oLOOR8.js";import{B as _}from"./Button-iyJI-iSF.js";import{S as D}from"./SearchIcon-C8SDhjaz.js";import{I as V}from"./Icon-BEan_62r.js";import{M as Q,a as U,b as X,f as Y}from"./Modal-CpR-sp26.js";import{L as Z,b as ee}from"./ListItem-3F6dFDKV.js";import{S as I}from"./Select-C3kb82WS.js";const C=r=>{const{className:a,type:l="button",label:n="Søk",...o}=r;return e.jsx("button",{className:"jkl-button jkl-button--ghost jkl-search-submit",type:l,...o,children:n})};C.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`}}};const s=u.forwardRef(function(a,l){const{label:n="Søk",className:o,errorLabel:c,helpLabel:h,labelProps:y={srOnly:!0},supportLabelProps:d,tooltip:N,description:L,name:M="q",placeholder:P="Søk",spellCheck:R=!1,icon:T="search",children:O,value:le,...E}=a,q={label:n,errorLabel:c,helpLabel:h,labelProps:y,supportLabelProps:d,tooltip:N,description:L},g=u.useRef(null),W=A(g,l),H=()=>{if(g.current){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set?.call(g.current,"");const K=new Event("change",{bubbles:!0});g.current.dispatchEvent(K),g.current.focus()}};return e.jsxs("div",{className:$("jkl-search",o),children:[e.jsx(z,{...q,label:n,"data-testid":"jkl-search",render:B=>e.jsxs("div",{className:"input-wrapper","data-icon":T,children:[e.jsx("input",{ref:W,type:"search",name:M,placeholder:P,spellCheck:R,...B,...E}),e.jsx("button",{className:"clear-button",type:"button",onClick:H,children:e.jsx("span",{className:"jkl-sr-only",children:"Tilbakestill søkefeltet"})})]})}),O]})});s.Button=C;s.__docgenInfo={description:"",methods:[],displayName:"Search",props:{label:{required:!1,tsType:{name:"string"},description:"Label til søket. Bruk {@link LabelProps} for å vise den."},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ne={title:"Komponenter/Search",component:s,subcomponents:{SearchButton:C},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},j={name:"Søk"},re=["Layout","Tekst","Gruppering","Alle"].sort(),i=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),x={name:"Søk med autosuggest",args:{list:"components"},render:r=>e.jsx(e.Fragment,{children:e.jsx(s,{...r,children:e.jsx("datalist",{id:r.list,children:i.map(a=>e.jsx("option",{children:a},a))})})})},p={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:r=>e.jsx(t,{gap:"xl",wrap:"wrap",children:e.jsx(t,{direction:"column",gap:"m",children:e.jsx(s,{...r,children:e.jsx(s.Button,{...m.args})})})})},S={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(t,{as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(s,{...r,children:e.jsx(s.Button,{type:"submit"})})]})},k={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:r=>{const[a,l]=u.useState(i);return e.jsxs(t,{direction:"column",gap:"s",children:[e.jsx(s,{...r,onChange:n=>{l(i.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:a.length?"jkl-sr-only":"",children:`${a.length} komponenter funnet`}),e.jsx(t,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!a.length&&a.map(n=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))})]})]})}},f={name:"Popover med søk",render:r=>{const[a,l]=u.useState(!1),[n,o]=u.useState(i);return e.jsxs(w,{open:a,children:[e.jsx(w.Trigger,{"aria-expanded":a,asChild:!0,children:e.jsx(s,{...r,onChange:c=>{c.target.value.length!==0&&l(!0),o(i.filter(h=>h.toLowerCase().includes(c.target.value.toLowerCase())))}})}),e.jsxs(w.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(c=>e.jsx(G,{as:"a",href:"#",children:c},c))]})]})}},v={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[a,l]=u.useState(""),[n,{overlay:o,container:c,modal:h}]=J({title:""}),y=i.filter(d=>d.includes(a));return e.jsxs(e.Fragment,{children:[e.jsxs(t,{as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(t,{gap:"xs",children:[e.jsx(_,{variant:"ghost",onClick:()=>n.show(),icon:e.jsx(D,{}),"aria-label":"Åpne søk"}),e.jsx(_,{variant:"ghost",icon:e.jsx(V,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(Q,{...c,children:[e.jsx(U,{...o}),e.jsx(X,{...h,children:e.jsxs(t,{as:Y,gap:"m",direction:"column",children:[e.jsx(s,{...r,value:a,onChange:d=>l(d.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${y.length} komponenter funnet`}),e.jsx(Z,{children:y.map(d=>e.jsx(ee,{children:d},d))})]})]})})]})]})}},b={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:r=>{const[a,l]=u.useState(i);return e.jsxs(t,{direction:"column",gap:"s",children:[e.jsx(F,{asChild:!0,children:e.jsxs(t,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx(t,{gap:"xs",children:e.jsx(s,{...r,onChange:n=>l(i.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))})}),e.jsxs(t,{gap:"s",children:[e.jsx(I,{label:"Komponent",placeholder:"",children:i.map(n=>e.jsx("option",{children:n},n))}),e.jsx(I,{label:"Gruppe",placeholder:"",children:re.map(n=>e.jsx("option",{children:n},n))})]})]})}),!!a.length&&a.map(n=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Søk med autosuggest",
  args: {
    list: "components"
  },
  render: args => <>
            <Search {...args}>
                <datalist id={args.list}>
                    {components.map(keyword => <option key={keyword}>{keyword}</option>)}
                </datalist>
            </Search>
        </>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Søk med knapp",
  args: {
    label: "Søk",
    placeholder: ""
  },
  render: args => <Flex gap="xl" wrap="wrap">
            <Flex direction="column" gap="m">
                <Search {...args}>
                    <Search.Button {...SearchButtonStory.args} />
                </Search>
            </Flex>
        </Flex>
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Søk som hovedhandling på en side",
  parameters: {
    layout: "centered"
  },
  args: {
    labelProps: {
      srOnly: true
    },
    placeholder: ""
  },
  render: args => <Flex as="form" direction="column" justifyContent="center" alignItems="center">
            <h2 className="jkl-heading-2">Hva leter du etter?</h2>
            <Search {...args}>
                <Search.Button type="submit" />
            </Search>
        </Flex>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Søk som filter",
  args: {
    placeholder: "Filtrer etter navn",
    label: "Filtrer etter navn",
    icon: "filter_list"
  },
  parameters: {
    layout: "padded"
  },
  render: args => {
    const [results, setResults] = useState(components);
    return <Flex direction="column" gap="s">
                <Search {...args} onChange={e => {
        setResults(components.filter(result => result.toLowerCase().includes(e.target.value.toLowerCase())));
      }} />
                <section aria-live="polite">
                    <p className={results.length ? "jkl-sr-only" : ""}>
                        {\`\${results.length} komponenter funnet\`}
                    </p>
                    <Flex as="ul" gap="xs" direction="column" style={{
          padding: 0,
          margin: 0
        }}>
                        {!!results.length && results.map(result => <Card as="li" key={result}>
                                    <p className="jkl-heading-5">{result}</p>
                                    <div style={{
              color: "var(--jkl-color-text-subdued)"
            }}>
                                        <p className="jkl-small">Komponent</p>
                                        <p className="jkl-small">
                                            Mer informasjon
                                        </p>
                                    </div>
                                </Card>)}
                    </Flex>
                </section>
            </Flex>;
  }
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Popover med søk",
  render: args => {
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(components);
    return <Popover open={showResults}>
                <Popover.Trigger aria-expanded={showResults} asChild>
                    <Search {...args} onChange={e => {
          e.target.value.length !== 0 && setShowResults(true);
          setResults(components.filter(result => result.toLowerCase().includes(e.target.value.toLowerCase())));
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Header med søkeknapp",
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
    const [instance, {
      overlay,
      container,
      modal
    }] = useModal({
      title: ""
    });
    const filteredComponents = components.filter(word => word.includes(searchString));
    return <>
                <Flex as="header" alignItems="center" justifyContent="space-between" style={{
        minInlineSize: "50cqi",
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
                            <Search {...args} value={searchString} onChange={e => setSearchString(e.target.value)} />
                            <div aria-live="polite">
                                <p className="jkl-sr-only">
                                    {\`\${filteredComponents.length} komponenter funnet\`}
                                </p>
                                <List>
                                    {filteredComponents.map(word => <ListItem key={word}>{word}</ListItem>)}
                                </List>
                            </div>
                        </Flex>
                    </Modal>
                </ModalContainer>
            </>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Toolbar med søkefilter",
  parameters: {
    layout: "fullscreen"
  },
  args: {
    label: "Filtrer etter navn",
    placeholder: "",
    labelProps: {
      srOnly: false
    },
    icon: "filter_list"
  },
  render: args => {
    const [results, setResults] = useState(components);
    return <Flex direction="column" gap="s">
                <Card asChild>
                    <Flex as="menu" alignItems="end" justifyContent="space-between" gap="xl" style={{
          display: "flex",
          minInlineSize: "50cqi",
          padding: "var(--jkl-spacing-m) var(--jkl-spacing-m)",
          background: "var(--jkl-color-background-container-high)"
        }}>
                        <Flex gap="xs">
                            <Search {...args} onChange={e => setResults(components.filter(component => component.toLowerCase().includes(e.target.value.toLowerCase())))} />
                        </Flex>

                        <Flex gap="s">
                            <BETA_Select label="Komponent" placeholder="">
                                {components.map(word => <option key={word}>{word}</option>)}
                            </BETA_Select>
                            <BETA_Select label="Gruppe" placeholder="">
                                {categories.map(category => <option key={category}>{category}</option>)}
                            </BETA_Select>
                        </Flex>
                    </Flex>
                </Card>
                {!!results.length && results.map(result => <Card as="li" key={result}>
                            <p className="jkl-heading-5">{result}</p>
                            <div style={{
          color: "var(--jkl-color-text-subdued)"
        }}>
                                <p className="jkl-small">Komponent</p>
                                <p className="jkl-small">Mer informasjon</p>
                            </div>
                        </Card>)}
            </Flex>;
  }
}`,...b.parameters?.docs?.source}}};const ae=["_Search","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],be=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:S,SearchFilter:k,SearchHeaderButton:v,SearchToolbar:b,SearchWithButton:p,SearchWithDatalist:x,SearchWithResultsInPopover:f,_Search:j,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"})),se={title:"Komponenter/Search/SearchButton",component:C,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},m={name:"Search Button",args:{label:"Søk",type:"button"},render:r=>e.jsx(e.Fragment,{children:e.jsx(s,{...p.args,label:p.args?.label,children:e.jsx(s.Button,{...r})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Search Button",
  args: {
    label: "Søk",
    type: "button"
  },
  render: args => <>
            <Search {...SearchWithButton.args} label={SearchWithButton.args?.label}>
                <Search.Button {...args} />
            </Search>
        </>
}`,...m.parameters?.docs?.source}}};const te=["SearchButtonStory"],ye=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:m,__namedExportsOrder:te,default:se},Symbol.toStringTag,{value:"Module"}));export{ye as a,be as s};
