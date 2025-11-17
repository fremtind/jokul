import{j as r}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{I as a}from"./Image-HWqQ_St4.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-DouPjScu.js";const o="/images/dog-400.jpg",n="/images/dog-800.jpg",i="/images/dog-1200.jpg",d="/images/dog-1920.jpg",c="/images/thumbnail.jpg",w={title:"Komponenter/Image",component:a,parameters:{layout:"centered"},tags:["autodocs","embedded content"],args:{src:o,srcSet:`${o} 400w, ${n} 800w, ${i} 1200w, ${d} 1920w`,placeholder:c},argTypes:{className:{control:"radio",options:["fluid","static"]}}},e={args:{className:"fluid"},render:t=>r.jsx("div",{style:{width:"50vw",height:"auto"},children:r.jsx(a,{...t})})},s={args:{className:"static"},render:t=>r.jsx("div",{style:{width:"50vw",height:"auto"},children:r.jsx(a,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const j=["Fluid","Static"];export{e as Fluid,s as Static,j as __namedExportsOrder,w as default};
