import{R as t}from"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";const m=(e,a)=>a===0?0:e*100/a,s=({"aria-valuenow":e,"aria-valuemin":a=0,"aria-valuemax":i=100,title:n="Fremdrift",className:l,...o})=>{const d=`${m(e,i)}%`;return t.createElement("div",{tabIndex:0,className:`jkl-progress-bar ${l??""}`,role:"progressbar",title:n,"aria-valuenow":e,"aria-valuemin":a,"aria-valuemax":i,"data-testid":"jkl-progress-bar",...o},t.createElement("span",{className:"jkl-progress-bar__tracker",style:{width:d},"data-testid":"jkl-progress-bar__tracker"}))};s.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c={title:"Komponenter/ProgressBar",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100},render:e=>t.createElement("div",{...e,style:{width:"100%",minWidth:"240px"}},t.createElement(s,{...e}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const g=["ProgressBar"];export{r as ProgressBar,g as __namedExportsOrder,c as default};
