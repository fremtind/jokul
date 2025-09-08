import{r,R as t}from"./index-siqcju79.js";import{B as b}from"./BasePanel-zOrJMDej.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const P=r.createContext({}),s=r.forwardRef(function({alwaysOpen:c=!1,label:m,extraLabel:u,checked:n,onChange:i,value:e,defaultChecked:d,...f},k){const{onValueChange:a,checkedValue:g}=r.useContext(P),R=r.useCallback(y=>{if(i?.(y),!a)throw new Error("RadioPanel will not work properly when used outside a RadioPanelGroup");a(e)},[i,a,e]);r.useEffect(()=>{if(d){if(!a)throw new Error("RadioPanel will not work properly when used outside a RadioPanelGroup");a(e)}},[]);const p=typeof n<"u",w=p?n:g===e;return t.createElement(b,{ref:k,type:"radio",value:e,isChecked:w,defaultChecked:d,checked:p?n:void 0,onChange:R,alwaysOpen:c,label:m,extraLabel:u,...f})});s.__docgenInfo={description:"",methods:[],displayName:"RadioPanel",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Komponenter/RadioPanel",component:s,parameters:{layout:"padded"},argTypes:{extraLabel:{control:"text"}},tags:["autodocs"]},o={args:{label:"Kasko",children:t.createElement("p",null,"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."),extraLabel:"Anbefalt",value:"Kasko",alwaysOpen:!1},render:l=>t.createElement(s,{...l})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kasko",
    children: <p>
                En forsikring som passer de fleste biler. Dekker det meste av
                skader, også de du selv er ansvarlig for. Inkluderer Minikasko
                og Ansvar.
            </p>,
    extraLabel: "Anbefalt",
    value: "Kasko",
    alwaysOpen: false
  },
  render: args => <RadioPanelComponent {...args} />
}`,...o.parameters?.docs?.source}}};const A=["RadioPanel"];export{o as RadioPanel,A as __namedExportsOrder,q as default};
