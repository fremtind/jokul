import{j as a,r as u}from"./iframe-DORlHZ2J.js";import{F as d,m as c}from"./File.stories-C0mUv3I1.js";import{F as v}from"./Flex-iMXIBVn0.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./clsx-B-dksMZM.js";import"./Link-DkIdmwud.js";import"./formatBytes-B7RSIuaZ.js";import"./formatNumber-C5i6XT6A.js";import"./Button-BcwDirt5.js";import"./usePreviousValue-rbqUPI5q.js";import"./Loader-gyVGLD03.js";import"./useDelayedRender-CzxIVKcD.js";import"./TrashCanIcon-gAiS0HRe.js";import"./Icon-CkrtLpE8.js";import"./SupportLabel-Bo3ukNf6.js";import"./WarningIcon-DbwYTU0A.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DPAeeHik.js";import"./mergeRefs-B7akQIgt.js";const g=(r,e)=>e===0?0:r*100/e,o=({"aria-valuenow":r,"aria-valuemin":e=0,"aria-valuemax":i=100,title:t="Fremdrift",className:n,...p})=>{const m=`${g(r,i)}%`;return a.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${n??""}`,role:"progressbar",title:t,"aria-valuenow":r,"aria-valuemin":e,"aria-valuemax":i,"data-testid":"jkl-progress-bar",...p,children:a.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:m},"data-testid":"jkl-progress-bar__tracker"})})};o.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const N={title:"Komponenter/ProgressBar",component:o,args:{"aria-valuenow":10,"aria-valuemin":0,"aria-valuemax":100,title:"Fremdrift",style:{width:"100%",minWidth:"50cqi"}}},s={},l={args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":5,"aria-valuetext":"[antall] filer lastet opp"},render:r=>{const[e,i]=u.useState(r["aria-valuenow"]);return u.useEffect(()=>{const t=setTimeout(()=>i(e+1),1500);return()=>clearTimeout(t)},[e]),a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Filer"}),a.jsx(v,{as:"ul",style:{listStyle:"none",padding:0},direction:"column",gap:"xs",children:[1,2,3,4,5].map((t,n)=>a.jsx("li",{children:a.jsx(d,{...c.args,state:e>=n+1?void 0:"loading"})},t))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",placeItems:"center",gap:"1em"},children:[a.jsx("p",{role:"status","aria-live":"assertive",children:e>=r["aria-valuemax"]?"Filer lastet opp":"Laster opp filer"}),a.jsx(o,{...r,"aria-valuenow":e,"aria-valuetext":`${e} fil${e>1?"er":""} lastet opp`})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-valuenow": 0,
    "aria-valuemin": 0,
    "aria-valuemax": 5,
    "aria-valuetext": "[antall] filer lastet opp"
  },
  render: args => {
    const [value, setValue] = useState(args["aria-valuenow"]);
    useEffect(() => {
      const timeout = setTimeout(() => setValue(value + 1), 1500);
      return () => clearTimeout(timeout);
    }, [value]);
    return <>
                <h2>Filer</h2>
                <Flex as="ul" style={{
        listStyle: "none",
        padding: 0
      }} direction="column" gap="xs">
                    {[1, 2, 3, 4, 5].map((file, i) => <li key={file}>
                            <File {...FileStories.args} state={value >= i + 1 ? undefined : "loading"} />
                        </li>)}
                </Flex>
                <div style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        placeItems: "center",
        gap: "1em"
      }}>
                    {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
                    <p role="status" aria-live="assertive">
                        {/* @ts-ignore */}
                        {value >= args["aria-valuemax"] ? "Filer lastet opp" : "Laster opp filer"}
                    </p>
                    <ProgressBarComponent {...args} aria-valuenow={value} aria-valuetext={\`\${value} fil\${value > 1 ? "er" : ""} lastet opp\`} />
                </div>
            </>;
  }
}`,...l.parameters?.docs?.source}}};const L=["ProgressBar","FileUploading"];export{l as FileUploading,s as ProgressBar,L as __namedExportsOrder,N as default};
