import{r as t,R as e}from"./index-siqcju79.js";import{F as y}from"./Flex-BxJRczDo.js";import{S as h}from"./Tag-5cfiG99-.js";import{B as v}from"./BasePanel-DqfQIpAk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-CyqjoIIn.js";import"./tokens-BiWAXAgN.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const d=t.forwardRef(function({label:i,extraLabel:p,alwaysOpen:m=!1,checked:s,defaultChecked:n,onChange:l,...u},f){const[k,b]=t.useState(n||!1),g=t.useCallback(c=>{l?.(c),b(c.target.checked)},[l]),o=typeof s<"u",x=o?s:k;return e.createElement(v,{ref:f,type:"checkbox",isChecked:x,defaultChecked:n,checked:o?s:void 0,onChange:g,alwaysOpen:m,label:i,extraLabel:p,...u})});d.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Komponenter/CheckboxPanel",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{alwaysOpen:{table:{defaultValue:{summary:void 0}}}}},a={args:{label:"Kasko",children:e.createElement("p",null,"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."),extraLabel:e.createElement(y,{as:"span",align:"center",justify:"end",gap:"md",className:"input-panel-example__custom-label input-panel-example__custom-label--bold"},e.createElement(h,null,"Anbefalt"),"300 kr/mnd")},decorators:r=>e.createElement("div",{style:{maxWidth:580}},e.createElement(r,null))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kasko",
    children: <p>
                En forsikring som passer de fleste biler. Dekker det meste av
                skader, også de du selv er ansvarlig for. Inkluderer Minikasko
                og Ansvar.
            </p>,
    extraLabel: <Flex as="span" align="center" justify="end" gap="md" className="input-panel-example__custom-label input-panel-example__custom-label--bold">
                <SuccessTag>Anbefalt</SuccessTag>
                300 kr/mnd
            </Flex>
  },
  decorators: Story => <div style={{
    maxWidth: 580
  }}>
            <Story />
        </div>
}`,...a.parameters?.docs?.source}}};const I=["CheckboxPanel"];export{a as CheckboxPanel,I as __namedExportsOrder,F as default};
