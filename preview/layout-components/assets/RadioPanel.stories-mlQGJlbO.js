import{j as t}from"./jsx-runtime-BbjHj44Y.js";import{r}from"./index-C6mWTJJr.js";import{B as v}from"./BasePanel-BZWVvRzQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./tokens-DyQL8Q6a.js";import"./useBrowserPreferences-Cx8DRHte.js";import"./usePreviousValue-ByfnePFg.js";const E=r.createContext({}),i=r.forwardRef(function({alwaysOpen:f=!1,label:k,extraLabel:R,checked:n,onChange:o,value:e,defaultChecked:d,...g},x){const{onValueChange:a,checkedValue:w}=r.useContext(E),y=r.useCallback(P=>{if(o==null||o(P),!a)throw new Error("RadioPanel will not work properly when used outside a RadioPanelGroup");a(e)},[o,a,e]);r.useEffect(()=>{if(d){if(!a)throw new Error("RadioPanel will not work properly when used outside a RadioPanelGroup");a(e)}},[]);const p=typeof n<"u",b=p?n:w===e;return t.jsx(v,{ref:x,type:"radio",value:e,isChecked:b,defaultChecked:d,checked:p?n:void 0,onChange:y,alwaysOpen:f,label:k,extraLabel:R,...g})});i.__docgenInfo={description:"",methods:[],displayName:"RadioPanel",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Komponenter/RadioPanel",component:i,parameters:{layout:"padded"},argTypes:{extraLabel:{control:"text"}},tags:["autodocs"]},s={args:{label:"Kasko",children:t.jsx("p",{children:"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer Minikasko og Ansvar."}),extraLabel:"Anbefalt",value:"Kasko",alwaysOpen:!1},render:l=>t.jsx(i,{...l})};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["RadioPanel"];export{s as RadioPanel,C as __namedExportsOrder,_ as default};
