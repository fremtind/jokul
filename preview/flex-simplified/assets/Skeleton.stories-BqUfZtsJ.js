import{j as e}from"./iframe-CjhOYAjm.js";/* empty css               */import{c as r}from"./clsx-B-dksMZM.js";import{u as x}from"./useDelayedRender-Ci1uhvRH.js";import"./preload-helper-PPVm8Dsz.js";const u=({className:t,delay:n=0,textDescription:s="Vennligst vent",...i})=>{const o=x(n);return n&&!o?null:e.jsx("div",{className:r("jkl-skeleton-animation",t),"aria-busy":"true","aria-label":s,...i})},l=({shape:t="rect",width:n,height:s,style:i,className:o,...h})=>e.jsx("div",{className:r("jkl-skeleton-element",`jkl-skeleton-element--${t}`,o),style:{width:n,height:s,...i},...h}),m=({style:t,...n})=>e.jsx(l,{...n,height:"var(--jkl-unit-40)",style:{borderRadius:"999px",...t}}),d=({...t})=>e.jsx(l,{...t,width:"var(--jkl-unit-130)",height:"var(--jkl-unit-20)"}),p=({className:t,checkboxes:n,labelProps:s,inputProps:i,...o})=>e.jsxs("div",{className:r("jkl-skeleton-input",t),...o,children:[e.jsx(d,{...s}),Array.from(Array(n)).map((h,k)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(l,{width:"var(--jkl-unit-30)",height:"var(--jkl-unit-30)"}),e.jsx(l,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-30)",...i})]},`jkl-skeleton-checkbox-${k}`))]}),v=({className:t,labelProps:n,inputProps:s,...i})=>e.jsxs("div",{className:r("jkl-skeleton-input",t),...i,children:[e.jsx(d,{...n}),e.jsx(l,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-40)",...s})]}),S=({className:t,radioButtons:n,labelProps:s,inputProps:i,...o})=>e.jsxs("div",{className:r("jkl-skeleton-input",t),...o,children:[e.jsx(d,{...s}),Array.from(Array(n)).map((h,k)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(l,{width:"var(--jkl-unit-30)",height:"var(--jkl-unit-30)",style:{borderRadius:"50%"}}),e.jsx(l,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-30)",...i})]},`jkl-skeleton-checkbox-${k}`))]}),c=({className:t,width:n,style:s,...i})=>e.jsx("div",{className:r("jkl-skeleton-table",t),style:{width:n,...s},...i}),j=({className:t,...n})=>e.jsx("div",{className:r("jkl-skeleton-table__header",t),...n}),w=({className:t,...n})=>e.jsx("div",{className:r("jkl-skeleton-table__row",t),...n}),b=({className:t,labelProps:n,inputProps:s,...i})=>e.jsxs("div",{className:r("jkl-skeleton-input",t),...i,children:[e.jsx(d,{...n}),e.jsx(l,{width:"calc(var(--jkl-unit-210) * 1.88)",height:"var(--jkl-unit-210)",...s})]}),T={title:"Komponenter/Loader/SkeletonTable",component:c,subcomponents:{SkeletonElement:l,SkeletonTableHeader:j},argTypes:{width:{control:"number"}}},a={name:"Skeleton",args:{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(l,{width:350,height:32}),e.jsx(v,{}),e.jsx(b,{}),e.jsx(p,{checkboxes:3}),e.jsx(S,{radioButtons:3}),e.jsx(m,{width:225}),e.jsxs(c,{children:[e.jsxs(j,{children:[e.jsx("div",{style:{width:215},children:e.jsx(l,{width:115,height:16})}),e.jsx("div",{style:{width:115},children:e.jsx(l,{width:115,height:16})})]}),Array.from(Array(5)).map((t,n)=>e.jsxs(w,{children:[e.jsx("div",{style:{width:215},children:e.jsx(l,{width:n%2?115:185,height:19})}),e.jsx("div",{style:{width:115},children:e.jsx(l,{width:24,height:24,shape:"circle"})})]},n))]})]})},render:t=>e.jsx(u,{...t,role:"none presentation"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Skeleton",
  args: {
    children: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 40
    }}>
                <SkeletonElement width={350} height={32} />
                <SkeletonInput />
                <SkeletonTextArea />
                <SkeletonCheckboxGroup checkboxes={3} />
                <SkeletonRadioButtonGroup radioButtons={3} />
                <SkeletonButton width={225} />
                <SkeletonTable>
                    <SkeletonTableHeader>
                        <div style={{
            width: 215
          }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                        <div style={{
            width: 115
          }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                    </SkeletonTableHeader>
                    {Array.from(Array(5)).map((_, index) => <SkeletonTableRow key={index}>
                            <div style={{
            width: 215
          }}>
                                <SkeletonElement width={index % 2 ? 115 : 185} height={19} />
                            </div>
                            <div style={{
            width: 115
          }}>
                                <SkeletonElement width={24} height={24} shape="circle" />
                            </div>
                        </SkeletonTableRow>)}
                </SkeletonTable>
            </div>
  },
  render: args =>
  // biome-ignore lint/a11y/useValidAriaRole: // Kun for eksempelet, ellers blir det mange alerts på siden
  <SkeletonAnimation {...args} role="none presentation" />
}`,...a.parameters?.docs?.source}}};const N=["SkeletonStory"];export{a as SkeletonStory,N as __namedExportsOrder,T as default};
