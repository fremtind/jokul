import{j as e,r as u}from"./iframe-Cd58-eiO.js";import f from"./select.stories-C8m4LEfh.js";import{F as v,m as x}from"./File.stories-CFVzOc-h.js";import k,{Datovelger as y}from"./TextInput.stories-Y1fqpm7g.js";import{C as h,g as b}from"./types-IsTkoTmK.js";import{F as j}from"./Flex-BbNCUDDJ.js";import{B as m}from"./Button-prACtpDr.js";import{C as w}from"./Card-CTRRbBu4.js";import{S as F}from"./Select-CjUxgoYf.js";import{T}from"./TextInput-CSUfJTzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-VGKWNv8R.js";import"./useId-x49vx7R9.js";import"./Label-Dj74iRke.js";import"./SupportLabel-BAvqvobB.js";import"./SuccessIcon-BAJX7sQa.js";import"./Icon-5Ollpz7g.js";import"./WarningIcon-CZpWc3K5.js";import"./ArrowDownIcon-B7sZsRKS.js";import"./cow-CdXr5BwN.js";import"./Text-C_xIqh65.js";import"./Link-ItJddyOm.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-ev4PmIeq.js";import"./index.esm-DcJX2y07.js";import"./formatDate-hwqa_80k.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";/* empty css               */import"./FieldGroup-BbQe26Mc.js";import"./BaseTextInput-fsbCcinL.js";import"./IconButton-zl85qPbs.js";import"./SlotComponent-CGELayE0.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-B57FAvp0.js";import"./Loader-DIIkvhnA.js";import"./useDelayedRender-CBSjPzx0.js";const C=(r,a)=>a===0?0:r*100/a,c=({"aria-valuenow":r,"aria-valuemin":a=0,"aria-valuemax":n=100,title:t="Fremdrift",className:s,trackingProps:i,...l})=>{const g=`${C(r,n)}%`;return e.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${s??""}`,role:"progressbar",title:t,"aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":n,"data-testid":"jkl-progress-bar",...l,"data-track-component-name":h.ProgressBar,"data-track-id":i?.id,"data-track-label":t,"data-track-value":r,"data-track-max":n,...b(i?.extra,l),children:e.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:g},"data-testid":"jkl-progress-bar__tracker"})})};c.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};const ue={title:"Komponenter/ProgressBar",component:c,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},o={},d={name:"Progress Bar ved filopplasting ",args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[a,n]=u.useState(!1),[t,s]=u.useState(r["aria-valuemax"]||-1);u.useEffect(()=>{t!==r["aria-valuemax"]&&setTimeout(()=>s(t+1),1500)},[t]);const i=()=>{n(!0),s(0)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Filer"}),e.jsx(j,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((l,g)=>e.jsx("li",{children:e.jsx(v,{...x.args,state:a&&t<=g?"loading":void 0})},l))}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",placeItems:"center",gap:"1em"},children:[e.jsx(c,{...r,"aria-valuenow":t,"aria-valuetext":`${t} fil${t>1?"er":""} lastet opp`,style:{gridColumn:"1 / -1"}}),e.jsxs("div",{style:{display:"grid",width:"100%"},children:[e.jsx("input",{type:"file",disabled:!0,style:{opacity:"0",gridArea:"1/1",zIndex:1,width:"100%"}}),e.jsx(m,{disabled:!0,style:{gridArea:"1/1",zIndex:0,width:"100%"},children:"Velg filer"})]}),e.jsx(m,{onClick:i,loader:{showLoader:a,textDescription:"Laster opp filer"},style:{width:"100%"},children:"Last opp"})]})]})}},p={name:"Progress Bar i skjemaflyt",args:{"aria-valuenow":1,"aria-valuemin":1,"aria-valuemax":4,"aria-valuetext":"[antall] steg: [navn på steget]"},render:r=>{const[a,n]=u.useState(r["aria-valuenow"]),t=()=>{switch(a){case 1:return e.jsx("p",{className:"jkl-heading-2",children:'Klikk "neste steg" for å starte saken'});case 2:return e.jsx(e.Fragment,{children:y.render()});case 3:return e.jsx(T,{...k.args});default:return e.jsx(F,{label:void 0,...f.args,children:f.args?.children})}};return e.jsxs(w,{as:"form",padding:"xl",outlined:!0,style:{minHeight:"50cqb",display:"grid",gridTemplateRows:"auto auto 1fr auto",alignItems:"end",gap:"2ex"},children:[e.jsx(c,{...r,"aria-valuenow":a}),e.jsxs("h2",{className:"jkl-heading-5",children:["Mobilskade (steg ",a," av ",r["aria-valuemax"],")"]}),t(),e.jsxs("footer",{style:{display:"grid",gridTemplateColumns:"repeat(2, min-content)",justifyContent:"space-between"},children:[a!==1?e.jsx(m,{variant:"secondary",onClick:()=>{a!==r["aria-valuemin"]&&n(a-1)},type:"button",disabled:a===0,children:"Forrige"}):"",e.jsx(m,{variant:"primary",onClick:()=>{a!==r["aria-valuemax"]&&n(a+1)},type:"button",style:{gridColumn:2},children:a===r["aria-valuemax"]?"Fullfør":"Neste"})]})]})}},me=["ProgressBar","FileUploading","Flow"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{d as FileUploading,p as Flow,o as ProgressBar,me as __namedExportsOrder,ue as default};
