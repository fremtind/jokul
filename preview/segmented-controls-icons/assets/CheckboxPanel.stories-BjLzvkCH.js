import{r as s,R as e}from"./index-siqcju79.js";import{F as y}from"./Flex-DP-fj2ie.js";import{S as h}from"./Tag-5cfiG99-.js";import{B as v}from"./BasePanel-e4z04p61.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-DlmWcLa-.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const i=s.forwardRef(function({label:d,extraLabel:p,alwaysOpen:m=!1,checked:t,defaultChecked:r,onChange:l,...u},f){const[k,b]=s.useState(r||!1),g=s.useCallback(c=>{l?.(c),b(c.target.checked)},[l]),o=typeof t<"u",x=o?t:k;return e.createElement(v,{ref:f,type:"checkbox",isChecked:x,defaultChecked:r,checked:o?t:void 0,onChange:g,alwaysOpen:m,label:d,extraLabel:p,...u})});i.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Komponenter/CheckboxPanel",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{alwaysOpen:{table:{defaultValue:{summary:void 0}}}}},a={args:{label:"Kasko",children:e.createElement("p",null,"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."),extraLabel:e.createElement(y,{as:"span",alignItems:"center",justifyContent:"flex-end",gap:24,className:"input-panel-example__custom-label input-panel-example__custom-label--bold"},e.createElement(h,null,"Anbefalt"),"300 kr/mnd")},decorators:n=>e.createElement("div",{style:{maxWidth:580}},e.createElement(n,null))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const q=["CheckboxPanel"];export{a as CheckboxPanel,q as __namedExportsOrder,F as default};
