import{j as e,r as y}from"./iframe-BesKik0N.js";import{a as B,S as t}from"./Search-CliPIaBn.js";import{F as s}from"./Flex-BWEFoxv_.js";import{C as b}from"./Card-C4trDXrL.js";import{u as _}from"./useModal-BjLUqJur.js";import{B as F}from"./Button-cKISQptB.js";import{S as I}from"./SearchIcon-MFKJvi-_.js";import{I as M}from"./Icon-Dxx1mCYg.js";import{a as N,b as P,M as L,f as R}from"./Modal-C4smPvf8.js";import{L as T,b as O}from"./ListItem-CWAfe6y0.js";import{S as w}from"./Select-BVRhBZVb.js";import{P as f}from"./Popover-BAvxskgE.js";import{M as E}from"./MenuItem-B_c-S-Nj.js";const W={title:"Komponenter/Search",component:t,subcomponents:{SearchButton:B},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},u={name:"Søk"},K=["Layout","Tekst","Gruppering","Alle"].sort(),l=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),h={name:"Søk med autosuggest",args:{list:"components"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...r,children:e.jsx("datalist",{id:r.list,children:l.map(a=>e.jsx("option",{children:a},a))})})})},d={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:r=>e.jsx(s,{gap:"xl",wrap:"wrap",children:e.jsx(s,{direction:"column",gap:"m",children:e.jsx(t,{...r,children:e.jsx(t.Button,{...m.args})})})})},g={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(s,{as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(t,{...r,children:e.jsx(t.Button,{type:"submit"})})]})},j={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:r=>{const[a,o]=y.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(t,{...r,onChange:n=>{o(l.filter(c=>c.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:a.length?"jkl-sr-only":"",children:`${a.length} komponenter funnet`}),e.jsx(s,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!a.length&&a.map(n=>e.jsxs(b,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))})]})]})}},x={name:"Popover med søk",render:r=>{const[a,o]=y.useState(!1),[n,c]=y.useState(l);return e.jsxs(f,{open:a,children:[e.jsx(f.Trigger,{"aria-expanded":a,asChild:!0,children:e.jsx(t,{...r,onChange:i=>{i.target.value.length!==0&&o(!0),c(l.filter(v=>v.toLowerCase().includes(i.target.value.toLowerCase())))}})}),e.jsxs(f.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(i=>e.jsx(E,{as:"a",href:"#",children:i},i))]})]})}},S={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[a,o]=y.useState(""),[n,{overlay:c,container:i,modal:v}]=_({title:""}),C=l.filter(p=>p.includes(a));return e.jsxs(e.Fragment,{children:[e.jsxs(s,{as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(s,{gap:"xs",children:[e.jsx(F,{variant:"ghost",onClick:()=>n.show(),icon:e.jsx(I,{}),"aria-label":"Åpne søk"}),e.jsx(F,{variant:"ghost",icon:e.jsx(M,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(N,{...i,children:[e.jsx(P,{...c}),e.jsx(L,{...v,children:e.jsxs(s,{as:R,gap:"m",direction:"column",children:[e.jsx(t,{...r,value:a,onChange:p=>o(p.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${C.length} komponenter funnet`}),e.jsx(T,{children:C.map(p=>e.jsx(O,{children:p},p))})]})]})})]})]})}},k={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:r=>{const[a,o]=y.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(b,{asChild:!0,children:e.jsxs(s,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container)"},children:[e.jsx(s,{gap:"xs",children:e.jsx(t,{...r,onChange:n=>o(l.filter(c=>c.toLowerCase().includes(n.target.value.toLowerCase())))})}),e.jsxs(s,{gap:"s",children:[e.jsx(w,{label:"Komponent",placeholder:"",children:l.map(n=>e.jsx("option",{children:n},n))}),e.jsx(w,{label:"Gruppe",placeholder:"",children:K.map(n=>e.jsx("option",{children:n},n))})]})]})}),!!a.length&&a.map(n=>e.jsxs(b,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        background: "var(--jkl-color-background-container)"
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          background: "var(--jkl-color-background-container)"
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
}`,...k.parameters?.docs?.source}}};const $=["_Search","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],re=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:g,SearchFilter:j,SearchHeaderButton:S,SearchToolbar:k,SearchWithButton:d,SearchWithDatalist:h,SearchWithResultsInPopover:x,_Search:u,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"})),A={title:"Komponenter/Search/SearchButton",component:B,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},m={name:"Search Button",args:{label:"Søk",type:"button"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...d.args,label:d.args?.label,children:e.jsx(t.Button,{...r})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["SearchButtonStory"],ae=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:m,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{ae as a,re as s};
