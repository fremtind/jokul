import{j as e,r as v}from"./iframe-Un4u8ble.js";import{a as I,S as t}from"./Search-UmrtH6uf.js";import{F as s}from"./Flex-Ci-ipJ53.js";import{C as F}from"./Card-D7IAV-Ys.js";import{u as M}from"./useModal-DI1jbZaa.js";import{B}from"./Button-DL4BfSDz.js";import{S as _}from"./SearchIcon-CBmXyWL_.js";import{I as N}from"./Icon-BE-Nj4c-.js";import{a as P,b as L,M as O,f as T}from"./Modal-BmUOYyq4.js";import{L as W,b as K}from"./ListItem-BoGvAQip.js";import{S as R}from"./Select-BhZeNmQd.js";import{P as C}from"./Popover-DXreRFCg.js";import{M as $}from"./MenuItem--kg75NvQ.js";const H={title:"Komponenter/Search",component:t,subcomponents:{SearchButton:I},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},u={name:"Søk"},g={args:{disabled:!0,defaultValue:"Reiseforsikring"}},h={name:"Read only",args:{readOnly:!0,defaultValue:"Reiseforsikring"}},z=["Layout","Tekst","Gruppering","Alle"].sort(),l=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),S={name:"Søk med autosuggest",args:{list:"components"},render:n=>e.jsx(e.Fragment,{children:e.jsx(t,{...n,children:e.jsx("datalist",{id:n.list,children:l.map(r=>e.jsx("option",{children:r},r))})})})},d={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:n=>e.jsx(s,{gap:"xl",wrap:"wrap",children:e.jsx(s,{direction:"column",gap:"m",children:e.jsx(t,{...n,children:e.jsx(t.Button,{...m.args})})})})},j={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:n=>e.jsxs(s,{gap:"m",as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(t,{...n,children:e.jsx(t.Button,{type:"submit"})})]})},x={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:n=>{const[r,o]=v.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(t,{...n,onChange:a=>{o(l.filter(c=>c.toLowerCase().includes(a.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:r.length?"jkl-sr-only":"",children:`${r.length} komponenter funnet`}),e.jsx(s,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!r.length&&r.map(a=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:a}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},a))})]})]})}},k={name:"Popover med søk",render:n=>{const[r,o]=v.useState(!1),[a,c]=v.useState(l);return e.jsxs(C,{open:r,children:[e.jsx(C.Trigger,{"aria-expanded":r,asChild:!0,children:e.jsx(t,{...n,onChange:i=>{i.target.value.length!==0&&o(!0),c(l.filter(b=>b.toLowerCase().includes(i.target.value.toLowerCase())))}})}),e.jsxs(C.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${a.length} komponenter funnet`}),a.map(i=>e.jsx($,{as:"a",href:"#",children:i},i))]})]})}},f={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:n=>{const[r,o]=v.useState(""),[a,{overlay:c,container:i,modal:b}]=M({title:""}),w=l.filter(p=>p.includes(r));return e.jsxs(e.Fragment,{children:[e.jsxs(s,{gap:"m",as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(s,{gap:"xs",children:[e.jsx(B,{variant:"ghost",onClick:()=>a.show(),icon:e.jsx(_,{}),"aria-label":"Åpne søk"}),e.jsx(B,{variant:"ghost",icon:e.jsx(N,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(P,{...i,children:[e.jsx(L,{...c}),e.jsx(O,{...b,children:e.jsxs(s,{as:T,gap:"m",direction:"column",children:[e.jsx(t,{...n,value:r,onChange:p=>o(p.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${w.length} komponenter funnet`}),e.jsx(W,{children:w.map(p=>e.jsx(K,{children:p},p))})]})]})})]})]})}},y={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:n=>{const[r,o]=v.useState(l);return e.jsxs(s,{direction:"column",gap:"s",children:[e.jsx(F,{asChild:!0,children:e.jsxs(s,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container)"},children:[e.jsx(s,{gap:"xs",children:e.jsx(t,{...n,onChange:a=>o(l.filter(c=>c.toLowerCase().includes(a.target.value.toLowerCase())))})}),e.jsxs(s,{gap:"s",children:[e.jsx(R,{label:"Komponent",items:l}),e.jsx(R,{label:"Gruppe",items:z})]})]})}),!!r.length&&r.map(a=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:a}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},a))]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Reiseforsikring"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Read only",
  args: {
    readOnly: true,
    defaultValue: "Reiseforsikring"
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
  render: args => <Flex gap="m" as="form" direction="column" justifyContent="center" alignItems="center">
            <h2 className="jkl-heading-2">Hva leter du etter?</h2>
            <Search {...args}>
                <Search.Button type="submit" />
            </Search>
        </Flex>
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
                <Flex gap="m" as="header" alignItems="center" justifyContent="space-between" style={{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                            <Select label="Komponent" items={components} />
                            <Select label="Gruppe" items={categories} />
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
}`,...y.parameters?.docs?.source}}};const E=["_Search","Disabled","ReadOnly","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],se=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:j,Disabled:g,ReadOnly:h,SearchFilter:x,SearchHeaderButton:f,SearchToolbar:y,SearchWithButton:d,SearchWithDatalist:S,SearchWithResultsInPopover:k,_Search:u,__namedExportsOrder:E,default:H},Symbol.toStringTag,{value:"Module"})),q={title:"Komponenter/Search/SearchButton",component:I,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},m={name:"Search Button",args:{label:"Søk",type:"button"},render:n=>e.jsx(e.Fragment,{children:e.jsx(t,{...d.args,label:d.args?.label,children:e.jsx(t.Button,{...n})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const V=["SearchButtonStory"],te=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:m,__namedExportsOrder:V,default:q},Symbol.toStringTag,{value:"Module"}));export{te as a,se as s};
