import{j as e,r as d}from"./iframe-DUdM8bfa.js";import{F as f,m as v}from"./File.stories-DnHisrjk.js";import x from"./select.stories-DExriiVB.js";import y,{Datovelger as h}from"./TextInput.stories-CTfZDf0b.js";import{F as j}from"./Flex-B-SaBnK6.js";import{B as p}from"./Button-BRzYabYL.js";import{C as w}from"./Card-DdhO3L2P.js";import{S as k}from"./Select-H-zgBkGC.js";import{T as b}from"./TextInput-CN4u-3s2.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./clsx-B-dksMZM.js";import"./Link-w57YCTsk.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-C0vkNttU.js";import"./Icon-CqDP0AtM.js";import"./SupportLabel-CjPo2AgO.js";import"./SuccessIcon-CXkk0Xy5.js";import"./WarningIcon-Cucei4Fr.js";import"./landkoder-DlcCquOp.js";/* empty css               */import"./index.esm-RRWogFe1.js";import"./Text-ez1J0eX9.js";/* empty css               */import"./FieldGroup-DT1oK4VR.js";import"./useId-CXNx6Z2h.js";import"./Label-zPx2PsUy.js";import"./formatDate-hwqa_80k.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./SlotComponent-C4RwZi-9.js";import"./mergeRefs-1Bt0E_SY.js";import"./usePreviousValue-BO6Td5No.js";import"./Loader-CRhriID8.js";import"./useDelayedRender-Dh-murym.js";import"./InputGroup-DJcp2i7M.js";import"./Search-B3WeFxoj.js";import"./Title-B2qNdVFk.js";import"./useListNavigation-Db5oOclt.js";import"./ArrowDownIcon-eS2wAeG5.js";import"./CloseIcon-C3_VKfZe.js";import"./BaseTextInput-C3WcdozA.js";import"./IconButton-B1c_nsEX.js";const F=(r,a)=>a===0?0:r*100/a,u=({"aria-valuenow":r,"aria-valuemin":a=0,"aria-valuemax":n=100,title:t="Fremdrift",className:i,...m})=>{const c=`${F(r,n)}%`;return e.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${i??""}`,role:"progressbar",title:t,"aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":n,"data-testid":"jkl-progress-bar",...m,children:e.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:c},"data-testid":"jkl-progress-bar__tracker"})})};u.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ge={title:"Komponenter/ProgressBar",component:u,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},s={},l={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,n]=d.useState(!1),[t,i]=d.useState(r["aria-valuemax"]||-1);d.useEffect(()=>{t!==r["aria-valuemax"]&&setTimeout(()=>i(t+1),1500)},[t]);const m=()=>{n(!0),i(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(j,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((c,g)=>e.jsx("li",{children:e.jsx(f,{...v.args,state:a&&t<=g?"loading":void 0})},c))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(u,{...r,"aria-valuenow":t,"aria-valuetext":`${t} fil${t>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(p,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(p,{onClick:m,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},o={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,n]=d.useState(r["aria-valuenow"]),t=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:h.render()});case 3:return e.jsx(b,{...y.args});default:return e.jsx(k,{...x.args})}};return e.jsxs(w,{as:"form",padding:"xl",outlined:!0,style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(u,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),t(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(p,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&n(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(p,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&n(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const fe=["ProgressBar","FileUploading","Flow"];export{l as FileUploading,o as Flow,s as ProgressBar,fe as __namedExportsOrder,ge as default};
