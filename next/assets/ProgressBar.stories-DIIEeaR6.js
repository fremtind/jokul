import{j as e,r as u}from"./iframe-TxGS3kWb.js";import{F as f,m as v}from"./File.stories-CLfBjh97.js";import k from"./select.stories-BDPh-5B7.js";import x,{Datovelger as y}from"./TextInput.stories-CQoSdSil.js";import{F as j}from"./Flex-MTufPaHp.js";import{B as d}from"./Button-CwMyuU5M.js";import{C as h}from"./Card-DpNeJIns.js";import{S as P}from"./Select-Dya6YnLT.js";import{T as b}from"./TextInput-QT3JoakI.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./clsx-B-dksMZM.js";import"./Text-CsGtjUya.js";import"./Link-Du-IBxfl.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-C_4qx0GK.js";import"./Icon-DbPOiTpX.js";import"./SupportLabel-CEbqVGww.js";import"./SuccessIcon-CLn8DsAl.js";import"./WarningIcon-DZvhnaTT.js";import"./index.esm-CzLbX_Cv.js";import"./landkoder-DlcCquOp.js";/* empty css               *//* empty css               */import"./FieldGroup-D34kpdBI.js";import"./useId-B0ZqxNe9.js";import"./Label-DPzPeXAm.js";import"./registerWithMask-D7cNL3Nf.js";import"./formatDate-Dke5WO_s.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./InputGroup-CPYSd0mJ.js";import"./BaseTextInput-D3DXbap9.js";import"./IconButton-mWNcNoZ2.js";import"./SlotComponent-eDh04AsO.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-Bab2cl0s.js";import"./Loader-uC9mYSiI.js";import"./useDelayedRender-CmDrWK9s.js";import"./Search-2hjeUPU-.js";import"./Title-CMBKT-2T.js";import"./useListNavigation-CzICx1NB.js";import"./ArrowDownIcon-5AkaUWSi.js";import"./CloseIcon-BSeg6vTL.js";const B=(r,a)=>a===0?0:r*100/a,n=({"aria-valuenow":r,"aria-valuemin":a=0,"aria-valuemax":t=100,title:s="Fremdrift",className:o,...m})=>{const c=`${B(r,t)}%`;return e.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${o??""}`,role:"progressbar",title:s,"aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":t,"data-testid":"jkl-progress-bar",...m,children:e.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:c},"data-testid":"jkl-progress-bar__tracker"})})};try{n.displayName="ProgressBar",n.__docgenInfo={description:"",displayName:"ProgressBar",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/progress-bar/ProgressBar.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{},type:{name:"string"}},title:{defaultValue:{value:"Fremdrift"},declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"title",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{default:'"Fremdrift"'},type:{name:"string"}},"aria-valuetext":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"aria-valuetext",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{},type:{name:"string"}},"aria-valuemin":{defaultValue:{value:"0"},declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"aria-valuemin",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{default:"0"},type:{name:"number"}},"aria-valuenow":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"aria-valuenow",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!0,tags:{},type:{name:"number"}},"aria-valuemax":{defaultValue:{value:"100"},declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"aria-valuemax",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{default:"100"},type:{name:"number"}},style:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"}],description:"",name:"style",parent:{fileName:"jokul/packages/jokul/src/components/progress-bar/types.ts",name:"ProgressBarProps"},required:!1,tags:{},type:{name:"CSSProperties"}}},tags:{}}}catch{}const fe={title:"Komponenter/ProgressBar",component:n,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},l={},i={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,t]=u.useState(!1),[s,o]=u.useState(r["aria-valuemax"]||-1);u.useEffect(()=>{s!==r["aria-valuemax"]&&setTimeout(()=>o(s+1),1500)},[s]);const m=()=>{t(!0),o(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(j,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((c,g)=>e.jsx("li",{children:e.jsx(f,{...v.args,state:a&&s<=g?"loading":void 0})},c))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(n,{...r,"aria-valuenow":s,"aria-valuetext":`${s} fil${s>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(d,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(d,{onClick:m,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},p={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,t]=u.useState(r["aria-valuenow"]),s=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:y.render()});case 3:return e.jsx(b,{...x.args});default:return e.jsx(P,{...k.args})}};return e.jsxs(h,{as:"form",padding:"xl",outlined:!0,style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(n,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),s(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(d,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&t(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(d,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&t(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}},ve=["ProgressBar","FileUploading","Flow"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{i as FileUploading,p as Flow,l as ProgressBar,ve as __namedExportsOrder,fe as default};
