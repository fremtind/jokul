import{R as r}from"./index-siqcju79.js";import{I as s}from"./Image-DVJ82vYr.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-CYSLoF3z.js";const o="/images/dog-400.jpg",n="/images/dog-800.jpg",c="/images/dog-1200.jpg",i="/images/dog-1920.jpg",d="/images/thumbnail.jpg",h={title:"Komponenter/Image",component:s,parameters:{layout:"centered"},tags:["autodocs","embedded content"],args:{src:o,srcSet:`${o} 400w, ${n} 800w, ${c} 1200w, ${i} 1920w`,placeholder:d},argTypes:{className:{control:"radio",options:["fluid","static"]}}},e={args:{className:"fluid"},render:a=>r.createElement("div",{style:{width:"50vw",height:"auto"}},r.createElement(s,{...a}))},t={args:{className:"static"},render:a=>r.createElement("div",{style:{width:"50vw",height:"auto"}},r.createElement(s,{...a}))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    className: "fluid"
  },
  render: props => {
    return <div style={{
      width: "50vw",
      height: "auto"
    }}>
                <Image {...props} />
            </div>;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    className: "static"
  },
  render: props => {
    return <div style={{
      width: "50vw",
      height: "auto"
    }}>
                <Image {...props} />
            </div>;
  }
}`,...t.parameters?.docs?.source}}};const w=["Fluid","Static"];export{e as Fluid,t as Static,w as __namedExportsOrder,h as default};
