import{r as s,R as e}from"./index-siqcju79.js";import{F as y}from"./Flex-CLtnP1gB.js";import{S as h}from"./Tag-5cfiG99-.js";import{B as v}from"./BasePanel-zOrJMDej.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const d=s.forwardRef(function({label:i,extraLabel:p,alwaysOpen:m=!1,checked:t,defaultChecked:r,onChange:l,...u},f){const[k,b]=s.useState(r||!1),g=s.useCallback(c=>{l?.(c),b(c.target.checked)},[l]),o=typeof t<"u",x=o?t:k;return e.createElement(v,{ref:f,type:"checkbox",isChecked:x,defaultChecked:r,checked:o?t:void 0,onChange:g,alwaysOpen:m,label:i,extraLabel:p,...u})});d.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w={title:"Komponenter/CheckboxPanel",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{alwaysOpen:{table:{defaultValue:{summary:void 0}}}}},a={args:{label:"Kasko",children:e.createElement("p",null,"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."),extraLabel:e.createElement(y,{as:"span",alignItems:"center",justifyContent:"flex-end",gap:24,className:"input-panel-example__custom-label input-panel-example__custom-label--bold"},e.createElement(h,null,"Anbefalt"),"300 kr/mnd")},decorators:n=>e.createElement("div",{style:{maxWidth:580}},e.createElement(n,null))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const A=["CheckboxPanel"];export{a as CheckboxPanel,A as __namedExportsOrder,w as default};
