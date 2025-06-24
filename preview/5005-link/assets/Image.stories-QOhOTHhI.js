import{j as d}from"./jsx-runtime-D9p_MChh.js";import{r as a}from"./index-CRL2yuNo.js";import{c as y}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-gnU0ypJ3.js";function x(t,e){let s=!1;return(...n)=>{if(s)return;const r=t(...n);return e!==0&&(s=!0,window.setTimeout(()=>{s=!1},e)),r}}function S(t=200){const e=a.useRef(null),[s,n]=a.useState({height:0,width:0}),r=a.useMemo(()=>x(()=>{var i,o;return n({height:((i=e.current)==null?void 0:i.scrollHeight)||0,width:((o=e.current)==null?void 0:o.scrollWidth)||0})},t),[t]);return a.useEffect(()=>{var i,o;return n({height:((i=e.current)==null?void 0:i.scrollHeight)||0,width:((o=e.current)==null?void 0:o.scrollWidth)||0}),typeof window<"u"&&window.addEventListener("resize",r),()=>{typeof window<"u"&&window.removeEventListener("resize",r)}},[r]),[e,s]}const _=(t,e)=>{let s;function n(){if(t.complete){clearTimeout(s),e==null||e();return}s=window.setTimeout(n,50)}n()},I=t=>{const e=a.useRef(null),[s,n]=a.useState(!1);return a.useEffect(()=>{e.current&&_(e.current,()=>{n(!0)})},[t]),[e,s]},u=({className:t,placeholder:e,alt:s,...n})=>{const[r,i]=I(),[o,j]=S(400);return d.jsxs("div",{ref:o,className:y("jkl-image",t,{"jkl-image--loading":!i}),children:[d.jsx("img",{className:"jkl-image__placeholder",alt:s,src:e||n.src}),d.jsx("img",{alt:s,className:"jkl-image__image","data-testid":"jkl-image__image",ref:r,sizes:`${j.width}px`,loading:"lazy",decoding:"async",...n})]})};u.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},srcSet:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:`Send inn en tom streng hvis bildet kun er dekorativt. Sannsynligvis bør du beskrive innholdet i
bildet så en person med nedsatt syn får en fullgod opplevelse av siden.
Les mer på https://jokul.fremtind.no/universell-utforming/guide#uu/dekorativt-innhold`},className:{required:!1,tsType:{name:"string"},description:""}}};const l="/images/dog-400.jpg",N="/images/dog-800.jpg",L="/images/dog-1200.jpg",T="/images/dog-1920.jpg",E="/images/thumbnail.jpg",z={title:"Komponenter/Image",component:u,parameters:{layout:"centered"},tags:["autodocs"],args:{src:l,srcSet:`${l} 400w, ${N} 800w, ${L} 1200w, ${T} 1920w`,placeholder:E},argTypes:{className:{control:"radio",options:["fluid","static"]}}},c={args:{className:"fluid"},render:t=>d.jsx("div",{style:{width:"50vw",height:"auto"},children:d.jsx(u,{...t})})},m={args:{className:"static"},render:t=>d.jsx("div",{style:{width:"50vw",height:"auto"},children:d.jsx(u,{...t})})};var g,p,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,w,v;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(w=m.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const W=["Fluid","Static"];export{c as Fluid,m as Static,W as __namedExportsOrder,z as default};
