import{j as e,r as d}from"./iframe-CDskDVd3.js";import g from"./select.stories-CQMcvH1K.js";import{F as f,m as x}from"./File.stories-g2iQ0FUX.js";import y,{Datovelger as h}from"./TextInput.stories-DauchiTj.js";import{F as j}from"./Flex-B0wHzBja.js";import{B as p}from"./Button-Bd0KnSh-.js";import{C as w}from"./Card-BmzgNOe9.js";import{S as b}from"./Select-BFZHzvC-.js";import{T as k}from"./TextInput-BL5kteGS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-8ak0LOp7.js";import"./useId-CLp_Cuzu.js";import"./Label-844O8U-l.js";import"./SupportLabel-Bg3BdEHf.js";import"./WarningIcon-CW7_FNmZ.js";import"./Icon-DCpRypxG.js";import"./ArrowDownIcon-Bf2l2-1w.js";import"./cow-CdXr5BwN.js";import"./Link-DGzXsWYg.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-gj9E7VCE.js";/* empty css               */import"./IconButton-DXiOEa0S.js";import"./CloseIcon-T9Pm28lL.js";import"./FieldGroup-DiLyi_NY.js";import"./BaseTextInput-CBAtcHGj.js";import"./tokens-CMcKomMy.js";import"./SlotComponent-H2ulQCVf.js";import"./mergeRefs-B9yvfKff.js";import"./usePreviousValue-BQPQeCOM.js";import"./Loader-D6mWKq7P.js";import"./useDelayedRender-BiKDKNNC.js";const F=(r,a)=>a===0?0:r*100/a,u=({"aria-valuenow":r,"aria-valuemin":a=0,"aria-valuemax":n=100,title:t="Fremdrift",className:i,...m})=>{const c=`${F(r,n)}%`;return e.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${i??""}`,role:"progressbar",title:t,"aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":n,"data-testid":"jkl-progress-bar",...m,children:e.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:c},"data-testid":"jkl-progress-bar__tracker"})})};u.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ie={title:"Komponenter/ProgressBar",component:u,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},s={},l={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,n]=d.useState(!1),[t,i]=d.useState(r["aria-valuemax"]||-1);d.useEffect(()=>{t!==r["aria-valuemax"]&&setTimeout(()=>i(t+1),1500)},[t]);const m=()=>{n(!0),i(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(j,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((c,v)=>e.jsx("li",{children:e.jsx(f,{...x.args,state:a&&t<=v?"loading":void 0})},c))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(u,{...r,"aria-valuenow":t,"aria-valuetext":`${t} fil${t>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(p,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(p,{onClick:m,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},o={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,n]=d.useState(r["aria-valuenow"]),t=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:h.render()});case 3:return e.jsx(k,{...y.args});default:return e.jsx(b,{label:void 0,...g.args,children:g.args?.children})}};return e.jsxs(w,{as:"form",padding:"xl",variant:"outlined",style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(u,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),t(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(p,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&n(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(p,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&n(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          return <BETA_Select label={undefined} {...SelectStories.args}>
                            {SelectStories.args?.children}
                        </BETA_Select>;
      }
    };
    return <Card as="form" padding="xl" variant="outlined" style={{
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
}`,...o.parameters?.docs?.source}}};const se=["ProgressBar","FileUploading","Flow"];export{l as FileUploading,o as Flow,s as ProgressBar,se as __namedExportsOrder,ie as default};
