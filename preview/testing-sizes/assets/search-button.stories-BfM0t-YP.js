import{j as e,r as u}from"./iframe-BbCvJXdR.js";import{c as z}from"./clsx-B-dksMZM.js";import{I as K}from"./InputGroup-DHFtBypR.js";import{C as F}from"./Card-jyx2njNs.js";import{F as l}from"./Flex-DNlNnz2r.js";import{P as B}from"./Popover-CN4FWKzN.js";import{M as G}from"./MenuItem-CvzLs_VP.js";import{u as J}from"./useModal-JFp7El02.js";import{B as _}from"./Button-CSjAPB4S.js";import{S as D}from"./SearchIcon-wN8ZAkLM.js";import{I as V}from"./Icon-DSPbMs1a.js";import{M as Q,a as U,b as X,f as Y}from"./Modal-CtqQ54b-.js";import{L as Z,b as ee}from"./ListItem-2FoK-iOQ.js";import{S as I}from"./Select-C6l_bcTn.js";const w=r=>{const{className:a,type:s="button",label:n="Søk",...o}=r;return e.jsx("button",{className:"jkl-button jkl-button--ghost jkl-search-submit",type:s,...o,children:n})};w.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg endre teksten i knappen.
@default "Søk"`}}};const t=u.forwardRef(function(a,s){const{label:n="Søk",className:o,density:c,errorLabel:g,helpLabel:C,labelProps:d={srOnly:!0},supportLabelProps:N,tooltip:L,description:M,name:P="q",placeholder:T="Søk",spellCheck:R=!1,icon:O="search",children:E,value:le,...q}=a,W={label:n,density:c,errorLabel:g,helpLabel:C,labelProps:d,supportLabelProps:N,tooltip:L,description:M},j=u.useRef(null),A=m=>{j.current=m,s&&(typeof s=="function"?s(m):s.current=m)},H=()=>{if(j.current){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set?.call(j.current,"");const $=new Event("change",{bubbles:!0});j.current.dispatchEvent($),j.current.focus()}};return e.jsxs("div",{className:z("jkl-search--beta",o),children:[e.jsx(K,{...W,label:n,"data-testid":"jkl-select--beta",render:m=>e.jsxs("div",{className:"input-wrapper","data-icon":O,children:[e.jsx("input",{ref:A,type:"search",name:P,placeholder:T,spellCheck:R,...m,...q}),e.jsx("button",{className:"clear-button",type:"button",onClick:H,children:e.jsx("span",{className:"jkl-sr-only",children:"Tilbakestill søkefeltet"})})]})}),E]})});t.Button=w;t.__docgenInfo={description:"",methods:[],displayName:"Search",props:{label:{required:!1,tsType:{name:"string"},description:"Label til søket. Bruk {@link LabelProps} for å vise den."},icon:{required:!1,tsType:{name:"union",raw:'"search" | "filter_alt" | "filter_list"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"filter_alt"'},{name:"literal",value:'"filter_list"'}]},description:`Lar deg velge hvilket ikon som vises på venstresiden i feltet.
@default "search"`},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ne={title:"Beta/Search",component:t,subcomponents:{SearchButton:w},parameters:{layout:"centered"},args:{spellCheck:!1,label:"Søk",placeholder:"Søk",icon:"search",description:"",required:!0,disabled:!1,labelProps:{srOnly:!0}},argTypes:{icon:{control:"select",options:["search","filter_list","filter_alt"],table:{defaultValue:{summary:"search"}}}},tags:["autodocs","forms"]},x={name:"Søk"},re=["Layout","Tekst","Gruppering","Alle"].sort(),i=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander","Alle"].sort(),S={name:"Søk med autosuggest",args:{list:"components"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...r,children:e.jsx("datalist",{id:r.list,children:i.map(a=>e.jsx("option",{children:a},a))})})})},p={name:"Søk med knapp",args:{label:"Søk",placeholder:""},render:r=>e.jsx(l,{gap:"xl",wrap:"wrap",children:e.jsx(l,{direction:"column",gap:"m",children:e.jsx(t,{...r,children:e.jsx(t.Button,{...h.args})})})})},k={name:"Søk som hovedhandling på en side",parameters:{layout:"centered"},args:{labelProps:{srOnly:!0},placeholder:""},render:r=>e.jsxs(l,{as:"form",direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx("h2",{className:"jkl-heading-2",children:"Hva leter du etter?"}),e.jsx(t,{...r,children:e.jsx(t.Button,{type:"submit"})})]})},f={name:"Søk som filter",args:{placeholder:"Filtrer etter navn",label:"Filtrer etter navn",icon:"filter_list"},parameters:{layout:"padded"},render:r=>{const[a,s]=u.useState(i);return e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(t,{...r,onChange:n=>{s(i.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))}}),e.jsxs("section",{"aria-live":"polite",children:[e.jsx("p",{className:a.length?"jkl-sr-only":"",children:`${a.length} komponenter funnet`}),e.jsx(l,{as:"ul",gap:"xs",direction:"column",style:{padding:0,margin:0},children:!!a.length&&a.map(n=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))})]})]})}},b={name:"Popover med søk",render:r=>{const[a,s]=u.useState(!1),[n,o]=u.useState(i);return e.jsxs(B,{open:a,children:[e.jsx(B.Trigger,{"aria-expanded":a,asChild:!0,children:e.jsx(t,{...r,onChange:c=>{c.target.value.length!==0&&s(!0),o(i.filter(g=>g.toLowerCase().includes(c.target.value.toLowerCase())))}})}),e.jsxs(B.Content,{padding:8,role:"menu",style:{maxWidth:"25ch"},"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${n.length} komponenter funnet`}),n.map(c=>e.jsx(G,{as:"a",href:"#",children:c},c))]})]})}},v={name:"Header med søkeknapp",parameters:{layout:"centered"},args:{labelProps:{variant:"large"},placeholder:"Søk i hele Jøkul"},render:r=>{const[a,s]=u.useState(""),[n,{overlay:o,container:c,modal:g}]=J({title:""}),C=i.filter(d=>d.includes(a));return e.jsxs(e.Fragment,{children:[e.jsxs(l,{as:"header",alignItems:"center",justifyContent:"space-between",style:{minInlineSize:"50cqi",padding:"var(--jkl-spacing-s) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{className:"jkl-heading-4",children:"Jøkul"}),e.jsxs(l,{gap:"xs",children:[e.jsx(_,{variant:"ghost",onClick:()=>n.show(),icon:e.jsx(D,{}),"aria-label":"Åpne søk"}),e.jsx(_,{variant:"ghost",icon:e.jsx(V,{children:"menu"}),"aria-label":"Meny"})]})]}),e.jsxs(Q,{...c,children:[e.jsx(U,{...o}),e.jsx(X,{...g,children:e.jsxs(l,{as:Y,gap:"m",direction:"column",children:[e.jsx(t,{...r,value:a,onChange:d=>s(d.target.value)}),e.jsxs("div",{"aria-live":"polite",children:[e.jsx("p",{className:"jkl-sr-only",children:`${C.length} komponenter funnet`}),e.jsx(Z,{children:C.map(d=>e.jsx(ee,{children:d},d))})]})]})})]})]})}},y={name:"Toolbar med søkefilter",parameters:{layout:"fullscreen"},args:{label:"Filtrer etter navn",placeholder:"",labelProps:{srOnly:!1},icon:"filter_list"},render:r=>{const[a,s]=u.useState(i);return e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(F,{asChild:!0,children:e.jsxs(l,{as:"menu",alignItems:"end",justifyContent:"space-between",gap:"xl",style:{display:"flex",minInlineSize:"50cqi",padding:"var(--jkl-spacing-m) var(--jkl-spacing-m)",background:"var(--jkl-color-background-container-high)"},children:[e.jsx(l,{gap:"xs",children:e.jsx(t,{...r,onChange:n=>s(i.filter(o=>o.toLowerCase().includes(n.target.value.toLowerCase())))})}),e.jsxs(l,{gap:"s",children:[e.jsx(I,{label:"Komponent",placeholder:"",children:i.map(n=>e.jsx("option",{children:n},n))}),e.jsx(I,{label:"Gruppe",placeholder:"",children:re.map(n=>e.jsx("option",{children:n},n))})]})]})}),!!a.length&&a.map(n=>e.jsxs(F,{as:"li",children:[e.jsx("p",{className:"jkl-heading-5",children:n}),e.jsxs("div",{style:{color:"var(--jkl-color-text-subdued)"},children:[e.jsx("p",{className:"jkl-small",children:"Komponent"}),e.jsx("p",{className:"jkl-small",children:"Mer informasjon"})]})]},n))]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Søk"
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const ae=["_Search","SearchWithDatalist","SearchWithButton","BigSearch","SearchFilter","SearchWithResultsInPopover","SearchHeaderButton","SearchToolbar"],be=Object.freeze(Object.defineProperty({__proto__:null,BigSearch:k,SearchFilter:f,SearchHeaderButton:v,SearchToolbar:y,SearchWithButton:p,SearchWithDatalist:S,SearchWithResultsInPopover:b,_Search:x,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"})),se={title:"Beta/Search/SearchButton",component:w,parameters:{layout:"centered"},args:{label:"Søk",type:"button"},argTypes:{type:{control:"inline-radio",options:["button","submit"]}},tags:["autodocs","forms"]},h={name:"Search Button",args:{label:"Søk",type:"button"},render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...p.args,label:p.args?.label,children:e.jsx(t.Button,{...r})})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const te=["SearchButtonStory"],ve=Object.freeze(Object.defineProperty({__proto__:null,SearchButtonStory:h,__namedExportsOrder:te,default:se},Symbol.toStringTag,{value:"Module"}));export{ve as a,be as s};
