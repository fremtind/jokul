import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as y}from"./index-siqcju79.js";import{I as W}from"./InputGroup-BFZ5w6w_.js";import{C as B}from"./Card--k46uMZN.js";import{F as t}from"./Flex-6AvuqMfo.js";import{P as C}from"./Popover-CoibSfpe.js";import{M as A}from"./MenuItem-FDaXnjZl.js";import{u as $}from"./useModal-f6dEk1_n.js";import{B as w}from"./Button-fpmiG8ZH.js";import{S as H}from"./SearchIcon-BePr7oqd.js";import{I as z}from"./Icon-DnRkF4CO.js";import{M as K,a as G,b as J,f as D}from"./Modal-gnVwype-.js";import{L as V,b as Q}from"./ListItem-DecmzA2x.js";import{S as F}from"./Select-CWN5-NgV.js";const b=r=>{const{className:a,type:l="button",label:n="Søk",...o}=r;return e.jsx("button",{className:"jkl-button jkl-button--ghost jkl-search-submit",type:l,...o,children:n})};b.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`}}};const s=r=>{const{label:a="Søk",className:l,density:n,errorLabel:o,helpLabel:i,labelProps:u={srOnly:!0},supportLabelProps:v,tooltip:d,description:_,name:I="q",placeholder:N="Søk",required:L=!0,spellCheck:M=!1,icon:P="search",children:T,value:ne,...R}=r,O={label:a,density:n,errorLabel:o,helpLabel:i,labelProps:u,supportLabelProps:v,tooltip:d,description:_};return e.jsxs("div",{className:E("jkl-search--beta",l),children:[e.jsx(W,{...O,label:a,"data-testid":"jkl-select--beta",render:q=>e.jsx("div",{className:"input-wrapper","data-icon":P,children:e.jsx("input",{type:"search",name:I,placeholder:N,required:L,spellCheck:M,...q,...R})})}),T]})};s.Button=b;s.__docgenInfo={description:"",methods:[],displayName:"Search",props:{label:{required:!1,tsType:{name:"string"},description:"Label til søket. Bruk {@link LabelProps} for å vise den."},showClearButton:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const U={title:"Beta/Search",component:s,subcomponents:{SearchButton:b},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,showClearButton:!0,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},h={name:"Søk"},X=["Layout","Tekst","Gruppering","Alle"].sort(),c=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),g={name:"Søk med autosuggest",args:{list:"components"},render:r=>e.jsx(e.Fragment,{children:e.jsx(s,{...r,children:e.jsx("datalist",{id:r.list,children:c.map(a=>e.jsx("option",{children:a},a))})})})},p={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:r=>e.jsx(t,{gap:"xl",wrap:"wrap",children:e.jsx(t,{direction:"column",gap:"m",children:e.jsx(s,{...r,children:e.jsx(s.Button,{...m.args})})})})},j={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(t,{as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(s,{...r,children:e.jsx(s.Button,{type:"submit"})})]})},x={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:r=>{const[a,l]=y.useState(c);return e.jsxs(t,{direction:"column",gap:"s",children:[e.jsx(s,{...r,onChange:n=>{l(c.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:a.length?"jkl-sr-only":"",children:`${a.length} komponenter funnet`}),e.jsx(t,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!a.length&&a.map(n=>e.jsxs(B,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))})]})]})}},S={name:"Popover med søk",render:r=>{const[a,l]=y.useState(!1),[n,o]=y.useState(c);return e.jsxs(C,{open:a,children:[e.jsx(C.Trigger,{"aria-expanded":a,asChild:!0,children:e.jsx(s,{...r,onChange:i=>{i.target.value.length!==0&&l(!0),o(c.filter(u=>u.toLowerCase().includes(i.target.value.toLowerCase())))}})}),e.jsxs(C.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(i=>e.jsx(A,{as:"a",href:"#",children:i},i))]})]})}},k={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[a,l]=y.useState(""),[n,{overlay:o,container:i,modal:u}]=$({title:""}),v=c.filter(d=>d.includes(a));return e.jsxs(e.Fragment,{children:[e.jsxs(t,{as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(t,{gap:"xs",children:[e.jsx(w,{variant:"ghost",onClick:()=>n.show(),icon:e.jsx(H,{}),"aria-label":"Åpne søk"}),e.jsx(w,{variant:"ghost",icon:e.jsx(z,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(K,{...i,children:[e.jsx(G,{...o}),e.jsx(J,{...u,children:e.jsxs(t,{as:D,gap:"m",direction:"column",children:[e.jsx(s,{...r,value:a,onChange:d=>l(d.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${v.length} komponenter funnet`}),e.jsx(V,{children:v.map(d=>e.jsx(Q,{children:d},d))})]})]})})]})]})}},f={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:r=>{const[a,l]=y.useState(c);return e.jsxs(t,{direction:"column",gap:"s",children:[e.jsx(B,{asChild:!0,children:e.jsxs(t,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx(t,{gap:"xs",children:e.jsx(s,{...r,onChange:n=>l(c.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))})}),e.jsxs(t,{gap:"s",children:[e.jsx(F,{label:"Komponent",placeholder:"",children:c.map(n=>e.jsx("option",{children:n},n))}),e.jsx(F,{label:"Gruppe",placeholder:"",children:X.map(n=>e.jsx("option",{children:n},n))})]})]})}),!!a.length&&a.map(n=>e.jsxs(B,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const Y=["_Search","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],xe=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:j,SearchFilter:x,SearchHeaderButton:k,SearchToolbar:f,SearchWithButton:p,SearchWithDatalist:g,SearchWithResultsInPopover:S,_Search:h,__namedExportsOrder:Y,default:U},Symbol.toStringTag,{value:"Module"})),Z={title:"Beta/Search/SearchButton",component:b,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},m={name:"Search Button",args:{label:"Søk",type:"button"},render:r=>e.jsx(e.Fragment,{children:e.jsx(s,{...p.args,label:p.args?.label,children:e.jsx(s.Button,{...r})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ee=["SearchButtonStory"],Se=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:m,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{Se as a,xe as s};
