import{r as i,R as a}from"./index-siqcju79.js";import{c as p}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DaWZu8wl.js";function f(t,e){let s=!1;return(...n)=>{if(s)return;const r=t(...n);return e!==0&&(s=!0,window.setTimeout(()=>{s=!1},e)),r}}function h(t=200){const e=i.useRef(null),[s,n]=i.useState({height:0,width:0}),r=i.useMemo(()=>f(()=>n({height:e.current?.scrollHeight||0,width:e.current?.scrollWidth||0}),t),[t]);return i.useEffect(()=>(n({height:e.current?.scrollHeight||0,width:e.current?.scrollWidth||0}),typeof window<"u"&&window.addEventListener("resize",r),()=>{typeof window<"u"&&window.removeEventListener("resize",r)}),[r]),[e,s]}const w=(t,e)=>{let s;function n(){if(t.complete){clearTimeout(s),e?.();return}s=window.setTimeout(n,50)}n()},v=t=>{const e=i.useRef(null),[s,n]=i.useState(!1);return i.useEffect(()=>{e.current&&w(e.current,()=>{n(!0)})},[t]),[e,s]},c=({className:t,placeholder:e,alt:s,...n})=>{const[r,m]=v(),[u,g]=h(400);return a.createElement("div",{ref:u,className:p("jkl-image",t,{"jkl-image--loading":!m})},a.createElement("img",{className:"jkl-image__placeholder",alt:m?"":s,src:e||n.src}),a.createElement("img",{alt:s,className:"jkl-image__image","data-testid":"jkl-image__image",ref:r,sizes:`${g.width}px`,loading:"lazy",decoding:"async",...n}))};c.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},srcSet:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:`Send inn en tom streng hvis bildet kun er dekorativt. Sannsynligvis bør du beskrive innholdet i
bildet så en person med nedsatt syn får en fullgod opplevelse av siden.
Les mer på https://jokul.fremtind.no/universell-utforming/guide#uu/dekorativt-innhold`},className:{required:!1,tsType:{name:"string"},description:""}}};const l="/images/dog-400.jpg",y="/images/dog-800.jpg",E="/images/dog-1200.jpg",S="/images/dog-1920.jpg",j="/images/thumbnail.jpg",N={title:"Komponenter/Image",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{src:l,srcSet:`${l} 400w, ${y} 800w, ${E} 1200w, ${S} 1920w`,placeholder:j},argTypes:{className:{control:"radio",options:["fluid","static"]}}},o={args:{className:"fluid"},render:t=>a.createElement("div",{style:{width:"50vw",height:"auto"}},a.createElement(c,{...t}))},d={args:{className:"static"},render:t=>a.createElement("div",{style:{width:"50vw",height:"auto"}},a.createElement(c,{...t}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const L=["Fluid","Static"];export{o as Fluid,d as Static,L as __namedExportsOrder,N as default};
