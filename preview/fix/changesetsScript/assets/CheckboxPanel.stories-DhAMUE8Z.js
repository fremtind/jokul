import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{F as _}from"./Flex-Bxl3x-bI.js";import{S as j}from"./Tag-Bu5SvFBL.js";import{r as t}from"./index-C6mWTJJr.js";import{B as C}from"./BasePanel-k2VLA4Dj.js";import"./tokens-DyQL8Q6a.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBrowserPreferences-BilM7jlK.js";import"./usePreviousValue-ByfnePFg.js";const m=t.forwardRef(function({label:u,extraLabel:x,alwaysOpen:f=!1,checked:r,defaultChecked:o,onChange:a,...k},b){const[g,y]=t.useState(o||!1),h=t.useCallback(i=>{a==null||a(i),y(i.target.checked)},[a]),l=typeof r<"u",v=l?r:g;return e.jsx(C,{ref:b,type:"checkbox",isChecked:v,defaultChecked:o,checked:l?r:void 0,onChange:h,alwaysOpen:f,label:u,extraLabel:x,...k})});m.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Komponenter/CheckboxPanel",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{alwaysOpen:{table:{defaultValue:{summary:void 0}}}}},s={args:{label:"Kasko",children:e.jsx("p",{children:"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."}),extraLabel:e.jsxs(_,{as:"span",alignItems:"center",justifyContent:"flex-end",gap:24,className:"input-panel-example__custom-label input-panel-example__custom-label--bold",children:[e.jsx(j,{children:"Anbefalt"}),"300 kr/mnd"]})},decorators:n=>e.jsx("div",{style:{maxWidth:580},children:e.jsx(n,{})})};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Kasko",
    children: <p>
                En forsikring som passer de fleste biler. Dekker det meste av
                skader, også de du selv er ansvarlig for. Inkluderer Minikasko
                og Ansvar.
            </p>,
    extraLabel: <Flex as="span" alignItems="center" justifyContent="flex-end" gap={24} className="input-panel-example__custom-label input-panel-example__custom-label--bold">
                <SuccessTag>Anbefalt</SuccessTag>
                300 kr/mnd
            </Flex>
  },
  decorators: Story => <div style={{
    maxWidth: 580
  }}>
            <Story />
        </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const K=["CheckboxPanel"];export{s as CheckboxPanel,K as __namedExportsOrder,q as default};
