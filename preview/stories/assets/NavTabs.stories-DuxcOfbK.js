import{j as t}from"./jsx-runtime-BOJBhsC5.js";import{r as n,R as c}from"./index-Bv6P490N.js";import{c as h}from"./clsx-B-dksMZM.js";/* empty css               */import{F as R}from"./Flex-DAYRz_h9.js";import{C as y}from"./Card-DRTpCu7t.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";const d=n.forwardRef(function(p,N){const{as:i="a","aria-selected":f,className:g,onBeforeKeyboardNavigation:o,...u}=p,v=i,s=n.useCallback((r,e)=>{o&&o(r,e)===!1||(e.focus(),e.click())},[o]),l=n.useCallback(r=>{if(r.key==="ArrowLeft"){const e=r.currentTarget,a=r.currentTarget.previousSibling;a?s(e,a):s(e,e.parentElement?.lastChild?.previousSibling)}if(r.key==="ArrowRight"){const e=r.currentTarget,a=r.currentTarget.nextSibling;a&&a.nodeName==="A"?s(e,a):s(e,e.parentElement?.firstChild)}},[s]);return t.jsx(v,{ref:N,...u,role:"tab","aria-selected":f,className:h("jkl-tab",g),onKeyDown:l,tabIndex:f?0:-1})});d.__docgenInfo={description:"",methods:[],displayName:"NavTab",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""}}};const T=({"aria-label":m,children:p,className:N,density:i="comfortable",...f})=>{const[g,o]=n.useState(),[u,v]=n.useState(),s=n.useRef(null),l=n.useRef(null),r=n.useRef(null),e=c.Children.toArray(p).findIndex(a=>c.isValidElement(a)?a.props["aria-selected"]===!0:!1);return n.useEffect(()=>{l.current&&o(l.current.getBoundingClientRect()),r.current&&v(r.current.getBoundingClientRect())},[e,i]),t.jsx("div",{...f,"data-layout-density":i,className:h("jkl-tabs",N),ref:s,children:t.jsxs("div",{role:"tablist","aria-label":m,ref:l,className:"jkl-tablist",children:[c.Children.map(p,(a,x)=>c.isValidElement(a)?c.cloneElement(a,{ref:e===x?r:void 0}):null),t.jsx("span",{className:"jkl-tablist__indicator",style:{left:(u?.left||0)-(g?.left||0)+(s.current?.scrollLeft||0),bottom:-1,width:(u?.width||0)-(i==="compact"?32:38)}})]})})};T.__docgenInfo={description:"",methods:[],displayName:"NavTabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"comfortable"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Komponenter/Tabs/NavTabs",component:T,subcomponents:{NavTab:d},tags:["autodocs"]},b={name:"NavTabs",args:{children:t.jsx("p",{children:"e"})},render:m=>t.jsxs(R,{direction:"column",gap:"none",children:[t.jsxs(T,{...m,children:[t.jsx(d,{"aria-selected":!0,children:"NICE"}),t.jsx(d,{"aria-selected":!1,children:"Prolife"}),t.jsx(d,{"aria-selected":!1,children:"Paris"})]}),t.jsx(y,{padding:"l",children:t.jsx("div",{style:{border:"1px dashed purple",padding:"1em"},children:"NICE-avtaler her"})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "NavTabs",
  args: {
    children: <p>e</p>
  },
  render: args => <Flex direction="column" gap="none">
            <NavTabs {...args}>
                <NavTab aria-selected={true}>NICE</NavTab>
                <NavTab aria-selected={false}>Prolife</NavTab>
                <NavTab aria-selected={false}>Paris</NavTab>
            </NavTabs>
            <Card padding="l">
                <div style={{
        border: "1px dashed purple",
        padding: "1em"
      }}>
                    NICE-avtaler her
                </div>
            </Card>
        </Flex>
}`,...b.parameters?.docs?.source}}};const B=["_NavTabs"];export{b as _NavTabs,B as __namedExportsOrder,S as default};
