import{j as s}from"./iframe-eu7EW-jD.js";import"./preload-helper-PPVm8Dsz.js";const u=(e,r)=>r===0?0:e*100/r,t=({"aria-valuenow":e,"aria-valuemin":r=0,"aria-valuemax":i=100,title:n="Fremdrift",className:d,...o})=>{const l=`${u(e,i)}%`;return s.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${d??""}`,role:"progressbar",title:n,"aria-valuenow":e,"aria-valuemin":r,"aria-valuemax":i,"data-testid":"jkl-progress-bar",...o,children:s.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:l},"data-testid":"jkl-progress-bar__tracker"})})};t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c={title:"Komponenter/ProgressBar",component:t},a={args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100},render:e=>s.jsx("div",{...e,style:{width:"100%",minWidth:"240px"},children:s.jsx(t,{...e})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-valuenow": 0,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  },
  render: args => <div {...args} style={{
    width: "100%",
    minWidth: "240px"
  }}>
            <ProgressBarComponent {...args} />
        </div>
}`,...a.parameters?.docs?.source}}};const f=["ProgressBar"];export{a as ProgressBar,f as __namedExportsOrder,c as default};
