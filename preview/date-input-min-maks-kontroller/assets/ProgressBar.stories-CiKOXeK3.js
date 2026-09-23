import{j as e,r as u}from"./iframe-ocIH417Y.js";import{F as v,m as f}from"./File.stories-SxO2Bqfe.js";import x from"./select.stories-CiWiHi9l.js";import y,{Datovelger as h}from"./TextInput.stories-BD0DLZq9.js";import{F as j}from"./Flex-CNtF9w_f.js";import{B as p}from"./Button--VIrcqqD.js";import{C as w}from"./Card-DsON7bqV.js";import{S as k}from"./Select-C_UjT9qx.js";import{T as b}from"./TextInput-DTOvf_p-.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./clsx-B-dksMZM.js";import"./Text-CLSLzaRO.js";import"./Link-DOnbQc0a.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-Bs7v5L7R.js";import"./Icon-DHLdetjC.js";import"./SupportLabel-SQnrfA5K.js";import"./SuccessIcon-D8wWYkXF.js";import"./WarningIcon-Bwffdl4i.js";import"./index.esm-D9_yi00A.js";import"./landkoder-DlcCquOp.js";/* empty css               *//* empty css               */import"./FieldGroup-hiKfNQJF.js";import"./useId-DjwODTjL.js";import"./Label-BP-JiFvG.js";import"./registerWithMask-D7cNL3Nf.js";import"./formatDate-Dke5WO_s.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./InputGroup-BSxgTbql.js";import"./BaseTextInput-C-QuSpce.js";import"./IconButton-AcZjb3Xm.js";import"./SlotComponent-B9kXQZaK.js";import"./mergeRefs-C7MTpmK6.js";import"./usePreviousValue-CBkZzXF1.js";import"./Loader-CYWyLLGa.js";import"./useDelayedRender-B0OaZn1h.js";import"./Search-DWnBvZ7S.js";import"./Title-9i__Z3Q0.js";import"./useListNavigation-pAzFPK9M.js";import"./ArrowDownIcon-DIFuVzkQ.js";import"./CloseIcon-DQmWZYGJ.js";const F=(r,a)=>a===0?0:r*100/a,i=({"aria-valuenow":r,"aria-valuemin":a=0,"aria-valuemax":n=100,title:t="Fremdrift",className:s,...m})=>{const c=`${F(r,n)}%`;return e.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${s??""}`,role:"progressbar",title:t,"aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":n,"data-testid":"jkl-progress-bar",...m,children:e.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:c},"data-testid":"jkl-progress-bar__tracker"})})};try{i.displayName="ProgressBar",i.__docgenInfo={description:"",displayName:"ProgressBar",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Fremdrift"},description:"",name:"title",required:!1,type:{name:"string"}},"aria-valuetext":{defaultValue:null,description:"",name:"aria-valuetext",required:!1,type:{name:"string"}},"aria-valuemin":{defaultValue:{value:"0"},description:"",name:"aria-valuemin",required:!1,type:{name:"number"}},"aria-valuenow":{defaultValue:null,description:"",name:"aria-valuenow",required:!0,type:{name:"number"}},"aria-valuemax":{defaultValue:{value:"100"},description:"",name:"aria-valuemax",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ve={title:"Komponenter/ProgressBar",component:i,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},l={},o={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,n]=u.useState(!1),[t,s]=u.useState(r["aria-valuemax"]||-1);u.useEffect(()=>{t!==r["aria-valuemax"]&&setTimeout(()=>s(t+1),1500)},[t]);const m=()=>{n(!0),s(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(j,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((c,g)=>e.jsx("li",{children:e.jsx(v,{...f.args,state:a&&t<=g?"loading":void 0})},c))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(i,{...r,"aria-valuenow":t,"aria-valuetext":`${t} fil${t>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(p,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(p,{onClick:m,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},d={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,n]=u.useState(r["aria-valuenow"]),t=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:h.render()});case 3:return e.jsx(b,{...y.args});default:return e.jsx(k,{...x.args})}};return e.jsxs(w,{as:"form",padding:"xl",outlined:!0,style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(i,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),t(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(p,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&n(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(p,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&n(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Progress Bar i skjemaflyt",
  args: {
    "aria-valuenow": 1,
    "aria-valuemin": 1,
    "aria-valuemax": 4,
    "aria-valuetext": "[antall] steg: [navn på steget]"
  },
  render: args => {
    const [value, setValue] = useState(args["aria-valuenow"]);
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
}`,...d.parameters?.docs?.source}}};const fe=["ProgressBar","FileUploading","Flow"];export{o as FileUploading,d as Flow,l as ProgressBar,fe as __namedExportsOrder,ve as default};
