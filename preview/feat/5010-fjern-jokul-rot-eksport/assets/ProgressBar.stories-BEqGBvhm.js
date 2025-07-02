import{j as s}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import"./_commonjsHelpers-gnU0ypJ3.js";const c=(e,r)=>r===0?0:e*100/r,t=({"aria-valuenow":e,"aria-valuemin":r=0,"aria-valuemax":i=100,title:l="Fremdrift",className:u,...m})=>{const p=`${c(e,i)}%`;return s.jsx("div",{tabIndex:0,className:`jkl-progress-bar ${u??""}`,role:"progressbar",title:l,"aria-valuenow":e,"aria-valuemin":r,"aria-valuemax":i,"data-testid":"jkl-progress-bar",...m,children:s.jsx("span",{className:"jkl-progress-bar__tracker",style:{width:p},"data-testid":"jkl-progress-bar__tracker"})})};t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Fremdrift"',defaultValue:{value:'"Fremdrift"',computed:!1}},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},"aria-valuemin":{required:!1,tsType:{name:"number"},description:"@default 0",defaultValue:{value:"0",computed:!1}},"aria-valuenow":{required:!0,tsType:{name:"number"},description:""},"aria-valuemax":{required:!1,tsType:{name:"number"},description:"@default 100",defaultValue:{value:"100",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const x={title:"Komponenter/ProgressBar",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100},render:e=>s.jsx("div",{...e,style:{width:"100%",minWidth:"240px"},children:s.jsx(t,{...e})})};var n,o,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const y=["ProgressBar"];export{a as ProgressBar,y as __namedExportsOrder,x as default};
