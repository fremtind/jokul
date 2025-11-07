import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as S}from"./index-siqcju79.js";import{I as _}from"./InputGroup-BFZ5w6w_.js";import{C as T}from"./CloseIcon-CGR_BR3u.js";import{F as i}from"./Flex-6AvuqMfo.js";import{B as k}from"./Button-fpmiG8ZH.js";import{S as y}from"./SearchIcon-BePr7oqd.js";import{L as O}from"./Link-uanxgvhJ.js";import{P as j}from"./Popover-D4MbAGi9.js";import{M as q}from"./MenuItem-FDaXnjZl.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./floating-ui.react-DOiTYs_Q.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./ChevronRightIcon-DscfWr0z.js";import"./OpenInNewIcon-DjpoFjwC.js";const a=S.forwardRef((r,t)=>{const{label:o="Søk",className:s,density:l,errorLabel:n,helpLabel:x,labelProps:f,supportLabelProps:b,tooltip:v,description:w,name:C="q",placeholder:F="Søk",clearButton:R,required:P=!0,children:I,...L}=r,B={label:o,density:l,errorLabel:n,helpLabel:x,labelProps:f,supportLabelProps:b,tooltip:v,description:w};return e.jsxs("form",{role:"search",className:W("jkl-search--beta",s),children:[e.jsx(_,{...B,label:o,"data-testid":"jkl-select--beta",render:N=>e.jsxs("div",{className:"jkl-search--beta__input",children:[e.jsx("input",{type:"search",name:C,placeholder:F,required:P,ref:t,...N,...L}),R&&e.jsx("button",{className:"jkl-button jkl-button--ghost clear-button",type:"reset","aria-label":"Tilbakestill søkefeltet",children:e.jsx(T,{})})]})}),I]})});a.__docgenInfo={description:"",methods:[],displayName:"Search",props:{clearButton:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const de={title:"Beta/Search",component:a,parameters:{layout:"centered"},args:{label:"Søk",placeholder:"Søk",description:"",required:!1,disabled:!1,clearButton:!0,labelProps:{srOnly:!1}},tags:["autodocs","forms"]},p={},c=["Button","Autosuggest","Card","Breadcrumbs","Help","Image","List","Pagination","Modal","Icon","Search","Flex","Table","Expander"].sort(),u={args:{list:"keywords"},render:r=>e.jsx(e.Fragment,{children:e.jsx(a,{...r,children:e.jsx("datalist",{id:r.list,children:c.map(t=>e.jsx("option",{children:t},t))})})})},d={render:r=>e.jsx(i,{gap:"xl",wrap:"wrap",children:e.jsxs(i,{direction:"column",gap:"m",children:[e.jsx(a,{...r,children:e.jsx(k,{variant:"primary",type:"submit",icon:e.jsx(y,{}),"aria-label":"Søk"})}),e.jsx(a,{...r,children:e.jsx(k,{variant:"secondary",type:"submit",icon:e.jsx(y,{}),"aria-label":"Søk"})})]})})},m={parameters:{layout:"fullscreen"},args:{labelProps:{srOnly:!0}},render:r=>e.jsxs(i,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:"50vh"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Søk"}),e.jsx(a,{...r,children:e.jsx(k,{variant:"primary",type:"submit",icon:e.jsx(y,{}),value:"Søk"})})]})},h={parameters:{layout:"fullscreen"},render:r=>{const[t,o]=S.useState(c);return e.jsxs(i,{direction:"column",gap:"l",children:[e.jsx(a,{...r,onChange:s=>{o(c.filter(l=>l.toLowerCase().includes(s.target.value.toLowerCase())))}}),e.jsx(i,{direction:"column",gap:"s",children:t.length?t.map(s=>e.jsx(O,{href:"#",children:s},s)):e.jsx("p",{children:"Fant ingen komponenter med dette navnet :("})})]})}},g={render:r=>{const[t,o]=S.useState(!1),[s,l]=S.useState(c);return e.jsxs(j,{open:t,children:[e.jsx(j.Trigger,{"aria-expanded":t,asChild:!0,children:e.jsx(a,{...r,onChange:n=>{n.target.value.length!==0&&o(!0),l(c.filter(x=>x.toLowerCase().includes(n.target.value.toLowerCase())))}})}),e.jsx(j.Content,{padding:8,initialFocus:-1,role:"menu",children:s.length?s.map(n=>e.jsx(q,{as:"a",href:"#",children:n},n)):e.jsx("p",{children:"Fant ingen komponenter med dette navnet"})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Flex gap="xl" wrap="wrap">
            <Flex direction="column" gap="m">
                <Search {...args}>
                    <Button variant="primary" type="submit" icon={<SearchIcon />} aria-label="Søk" />
                </Search>

                <Search {...args}>
                    <Button variant="secondary" type="submit" icon={<SearchIcon />} aria-label="Søk" />
                </Search>
            </Flex>
        </Flex>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    labelProps: {
      srOnly: true
    }
  },
  render: args => <Flex direction="column" justifyContent="center" alignItems="center" style={{
    height: "50vh"
  }}>
            <h2 className="jkl-heading-2">Søk</h2>
            <Search {...args}>
                <Button variant="primary" type="submit" icon={<SearchIcon />} value="Søk" />
            </Search>
        </Flex>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                <Popover.Content padding={8} initialFocus={-1} role="menu">
                    {results.length ? results.map(result => <MenuItem key={result} as="a" href="#">
                                {result}
                            </MenuItem>) : <p>Fant ingen komponenter med dette navnet</p>}
                </Popover.Content>
            </Popover>;
  }
}`,...g.parameters?.docs?.source}}};const me=["_Search","SearchWithDatalist","SearchWithSubmitButton","FrittståendeSøkefelt","SearchWithResultsOnPage","SearchWithResultsInPopover"];export{m as FrittståendeSøkefelt,u as SearchWithDatalist,g as SearchWithResultsInPopover,h as SearchWithResultsOnPage,d as SearchWithSubmitButton,p as _Search,me as __namedExportsOrder,de as default};
