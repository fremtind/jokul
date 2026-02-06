import{j as r}from"./iframe-CO-6u7ty.js";import{I as a}from"./Image-Cc9XlvZd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-B7jCi3CL.js";const o="/images/dog-400.jpg",n="/images/dog-800.jpg",i="/images/dog-1200.jpg",d="/images/dog-1920.jpg",c="/images/thumbnail.jpg",h={title:"Komponenter/Image",component:a,args:{src:o,srcSet:`${o} 400w, ${n} 800w, ${i} 1200w, ${d} 1920w`,placeholder:c},argTypes:{className:{control:"radio",options:["fluid","static"]}}},s={args:{className:"fluid"},render:t=>r.jsx("div",{style:{width:"50vw",height:"auto"},children:r.jsx(a,{...t})})},e={args:{className:"static"},render:t=>r.jsx("div",{style:{width:"50vw",height:"auto"},children:r.jsx(a,{...t})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const w=["Fluid","Static"];export{s as Fluid,e as Static,w as __namedExportsOrder,h as default};
