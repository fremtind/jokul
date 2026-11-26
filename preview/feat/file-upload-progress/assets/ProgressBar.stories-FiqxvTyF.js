import{r as d,j as e}from"./iframe-CLDPu5u9.js";import x from"./File.stories-DEQ_ZDjj.js";import f from"./select.stories-C7IV-JRb.js";import y,{Datovelger as h}from"./TextInput.stories-B7dED__8.js";import{P as m,F as j}from"./File-DTC8P8JS.js";import{F as w}from"./Flex-CZi36Acv.js";import{B as p}from"./Button-BioY7HdG.js";import{C as k}from"./Card-DRf9QBPr.js";import{S as F}from"./Select-DxGNjxJN.js";import{T as U}from"./TextInput-N1Beljrn.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-DXCjspfe.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Link-BUfvIYns.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-CR4d70G_.js";import"./Icon-COZE6_km.js";import"./SupportLabel-D51ULbPh.js";import"./SuccessIcon-Ct-KKGKW.js";import"./WarningIcon-C4IvNZnI.js";import"./usePreviousValue-BZpo1Syd.js";import"./Loader-BoQk4DJL.js";import"./useDelayedRender-Bwofc9Ol.js";import"./SlotComponent-1D2Py54k.js";import"./mergeRefs-_7lZvp9j.js";import"./index.esm-D70eGO83.js";import"./landkoder-DlcCquOp.js";/* empty css               *//* empty css               */import"./FieldGroup-BFbAcSEN.js";import"./useId-BrG_CAWg.js";import"./Label-D7gaP69D.js";import"./registerWithMask-D7cNL3Nf.js";import"./formatDate-Dke5WO_s.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./InputGroup-DOy6DhdG.js";import"./BaseTextInput-BS14CEYG.js";import"./IconButton-MrD29JOl.js";import"./Search-BZMNeqmv.js";import"./Title-DCPEnmny.js";import"./useListNavigation-AfQa35o_.js";import"./ArrowDownIcon-CqerAZEK.js";import"./CloseIcon-CWJPwH3h.js";const fe={title:"Komponenter/ProgressBar",component:m,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},s={},n={name:"Ukjent fremdrift",render:({"aria-valuenow":r,...a})=>e.jsx(m,{...a,title:"Laster opp"})},l={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,i]=d.useState(!1),[t,u]=d.useState(r["aria-valuemax"]||-1);d.useEffect(()=>{t!==r["aria-valuemax"]&&setTimeout(()=>u(t+1),1500)},[t]);const c=()=>{i(!0),u(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(w,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((g,v)=>e.jsx("li",{children:e.jsx(j,{...x.args,state:a&&t<=v?"loading":void 0})},g))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(m,{...r,"aria-valuenow":t,"aria-valuetext":`${t} fil${t>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(p,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(p,{onClick:c,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},o={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,i]=d.useState(r["aria-valuenow"]??1),t=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:h.render()});case 3:return e.jsx(U,{...y.args});default:return e.jsx(F,{...f.args})}};return e.jsxs(k,{as:"form",padding:"xl",outlined:!0,style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(m,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),t(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(p,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&i(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(p,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&i(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}},ye=["ProgressBar","Ukjent","FileUploading","Flow"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Ukjent fremdrift",
  render: ({
    "aria-valuenow": _,
    ...args
  }) => <ProgressBarComponent {...args} title="Laster opp" />
}`,...n.parameters?.docs?.source},description:{story:"Utelat `aria-valuenow` når fremdriften er ukjent. Med redusert bevegelse vises en stiplet linje.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar ved filopplasting ",
  args: {
    "aria-valuenow": 0,
    "aria-valuemin": 0,
    "aria-valuemax": 5,
    "aria-valuetext": "[antall] filer lastet opp"
  },
  render: args => {
    const [uploading, setUploading] = useState(false);
    const [filesUploaded, setFilesUploaded] = useState(args["aria-valuemax"] || -1);

    // biome-ignore lint/correctness/useExhaustiveDependencies: Value bør ikke endres bare fordi arg endres
    useEffect(() => {
      if (filesUploaded === args["aria-valuemax"]) {
        return;
      }
      setTimeout(() => setFilesUploaded(filesUploaded + 1), 1500);
    }, [filesUploaded]);
    const handleUpload = () => {
      setUploading(true);
      setFilesUploaded(0);
    };
    return <>
                <h2>Filer</h2>
                <Flex as="ul" style={{
        listStyle: "none",
        padding: 0
      }} direction="column" gap="xs">
                    {[1, 2, 3, 4, 5].map((file, i) => <li key={file}>
                            <File {...FileStories.args} state={uploading && filesUploaded <= i ? "loading" : undefined} />
                        </li>)}
                </Flex>
                <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 300px)",
        placeItems: "center",
        gap: "1em"
      }}>
                    <ProgressBarComponent {...args} aria-valuenow={filesUploaded} aria-valuetext={\`\${filesUploaded} fil\${filesUploaded > 1 ? "er" : ""} lastet opp\`} style={{
          gridColumn: "1 / -1"
        }} />
                    <div style={{
          display: "grid",
          width: "100%"
        }}>
                        <input type="file" disabled style={{
            opacity: "0",
            gridArea: "1/1",
            zIndex: 1,
            width: "100%"
          }} />
                        <Button disabled style={{
            gridArea: "1/1",
            zIndex: 0,
            width: "100%"
          }}>
                            Velg filer
                        </Button>
                    </div>

                    <Button onClick={handleUpload} loader={{
          // @ts-ignore
          showLoader: uploading,
          textDescription: "Laster opp filer"
        }} style={{
          width: "100%"
        }}>
                        Last opp
                    </Button>
                </div>
            </>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar i skjemaflyt",
  args: {
    "aria-valuenow": 1,
    "aria-valuemin": 1,
    "aria-valuemax": 4,
    "aria-valuetext": "[antall] steg: [navn på steget]"
  },
  render: args => {
    const [value, setValue] = useState(args["aria-valuenow"] ?? 1);
    const currentsteg = () => {
      switch (value) {
        case 1:
          return <p className="jkl-heading-2">
                            Klikk "neste steg" for å starte saken
                        </p>;
        case 2:
          // @ts-ignore
          return <>{Datovelger.render()}</>;
        case 3:
          return <TextInput {...TextInputStories.args} />;
        default:
          return (
            // @ts-ignore
            <Select {...SelectStories.args} />
          );
      }
    };
    return <Card as="form" padding="xl" outlined style={{
      minHeight: "50cqb",
      display: "grid",
      gridTemplateRows: "auto auto 1fr auto",
      alignItems: "end",
      gap: "2ex"
    }}>
                <ProgressBarComponent {...args} aria-valuenow={value} />
                <h2 className="jkl-heading-5">
                    Mobilskade (steg {value} av {args["aria-valuemax"]})
                </h2>
                {currentsteg()}
                <footer style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, min-content)",
        justifyContent: "space-between"
      }}>
                    {value !== 1 ? <Button variant="secondary" onClick={() => {
          if (value !== args["aria-valuemin"]) {
            setValue(value - 1);
          }
        }} type="button" disabled={value === 0}>
                            Forrige
                        </Button> : ""}
                    <Button variant="primary" onClick={() => {
          if (value !== args["aria-valuemax"]) {
            setValue(value + 1);
          }
        }} type="button" style={{
          gridColumn: 2
        }}>
                        {value === args["aria-valuemax"] ? "Fullfør" : "Neste"}
                    </Button>
                </footer>
            </Card>;
  }
}`,...o.parameters?.docs?.source}}};export{l as FileUploading,o as Flow,s as ProgressBar,n as Ukjent,ye as __namedExportsOrder,fe as default};
