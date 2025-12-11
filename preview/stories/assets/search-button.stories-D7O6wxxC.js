import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{a as B,S as t}from"./Search-vMwSKOIW.js";import{r as y}from"./index-Bv6P490N.js";import{C as b}from"./Card-DRTpCu7t.js";import{F as s}from"./Flex-DAYRz_h9.js";import{P as f}from"./Popover-D3BDo8Zy.js";import{M as _}from"./MenuItem-PD4rFooc.js";import{u as I}from"./useModal-QoxWVgoH.js";import{B as F}from"./Button-7xZWz2K4.js";import{S as M}from"./SearchIcon-BowxjXAc.js";import{I as N}from"./Icon-DYEEOjBa.js";import{M as P,a as L,b as R,f as T}from"./Modal-DWk_7gp1.js";import{L as O,b as E}from"./ListItem-Demij_On.js";import{S as w}from"./Select-Bx94Hcr7.js";const W={title:"Beta/Search",component:t,subcomponents:{SearchButton:B},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},u={name:"Søk"},A=["Layout","Tekst","Gruppering","Alle"].sort(),l=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),h={name:"Søk med autosuggest",args:{list:"components"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...r,children:e.jsx("datalist",{id:r.list,children:l.map(a=>e.jsx("option",{children:a},a))})})})},d={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:r=>e.jsx(s,{gap:"xl",wrap:"wrap",children:e.jsx(s,{direction:"column",gap:"m",children:e.jsx(t,{...r,children:e.jsx(t.Button,{...m.args})})})})},g={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(s,{as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(t,{...r,children:e.jsx(t.Button,{type:"submit"})})]})},j={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:r=>{const[a,o]=y.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(t,{...r,onChange:n=>{o(l.filter(c=>c.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:a.length?"jkl-sr-only":"",children:`${a.length} komponenter funnet`}),e.jsx(s,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!a.length&&a.map(n=>e.jsxs(b,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))})]})]})}},x={name:"Popover med søk",render:r=>{const[a,o]=y.useState(!1),[n,c]=y.useState(l);return e.jsxs(f,{open:a,children:[e.jsx(f.Trigger,{"aria-expanded":a,asChild:!0,children:e.jsx(t,{...r,onChange:i=>{i.target.value.length!==0&&o(!0),c(l.filter(v=>v.toLowerCase().includes(i.target.value.toLowerCase())))}})}),e.jsxs(f.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(i=>e.jsx(_,{as:"a",href:"#",children:i},i))]})]})}},S={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[a,o]=y.useState(""),[n,{overlay:c,container:i,modal:v}]=I({title:""}),C=l.filter(p=>p.includes(a));return e.jsxs(e.Fragment,{children:[e.jsxs(s,{as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(s,{gap:"xs",children:[e.jsx(F,{variant:"ghost",onClick:()=>n.show(),icon:e.jsx(M,{}),"aria-label":"Åpne søk"}),e.jsx(F,{variant:"ghost",icon:e.jsx(N,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(P,{...i,children:[e.jsx(L,{...c}),e.jsx(R,{...v,children:e.jsxs(s,{as:T,gap:"m",direction:"column",children:[e.jsx(t,{...r,value:a,onChange:p=>o(p.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${C.length} komponenter funnet`}),e.jsx(O,{children:C.map(p=>e.jsx(E,{children:p},p))})]})]})})]})]})}},k={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:r=>{const[a,o]=y.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(b,{asChild:!0,children:e.jsxs(s,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx(s,{gap:"xs",children:e.jsx(t,{...r,onChange:n=>o(l.filter(c=>c.toLowerCase().includes(n.target.value.toLowerCase())))})}),e.jsxs(s,{gap:"s",children:[e.jsx(w,{label:"Komponent",placeholder:"",children:l.map(n=>e.jsx("option",{children:n},n))}),e.jsx(w,{label:"Gruppe",placeholder:"",children:A.map(n=>e.jsx("option",{children:n},n))})]})]})}),!!a.length&&a.map(n=>e.jsxs(b,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                            <BETA_Search {...args} value={searchString} onChange={e => setSearchString(e.target.value)} />
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
}`,...k.parameters?.docs?.source}}};const $=["_Search","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],ae=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:g,SearchFilter:j,SearchHeaderButton:S,SearchToolbar:k,SearchWithButton:d,SearchWithDatalist:h,SearchWithResultsInPopover:x,_Search:u,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"})),H={title:"Beta/Search/SearchButton",component:B,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},m={name:"Search Button",args:{label:"Søk",type:"button"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...d.args,label:d.args?.label,children:e.jsx(t.Button,{...r})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const z=["SearchButtonStory"],se=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:m,__namedExportsOrder:z,default:H},Symbol.toStringTag,{value:"Module"}));export{j as S,se as a,ae as s};
