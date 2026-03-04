import{j as t}from"./iframe-KbORsCiT.js";import{c as a}from"./clsx-B-dksMZM.js";import{F as l}from"./FieldGroup-CEXjklWl.js";import{R as i}from"./RadioButton-CaGhzlbX.js";const r=e=>t.jsx(l,{...e,className:a("jkl-segmented-control",e.className)});r.displayName="Segmented Control";r.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},legend:{required:!0,tsType:{name:"string"},description:""},legendProps:{required:!1,tsType:{name:"intersection",raw:`Omit<
    React.HTMLAttributes<HTMLLegendElement>,
    "children"
> & {
    ["data-size"]?: Size;
    srOnly?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLLegendElement>",elements:[{name:"HTMLLegendElement"}]},{name:"literal",value:'"children"'}],raw:`Omit<
    React.HTMLAttributes<HTMLLegendElement>,
    "children"
>`},{name:"signature",type:"object",raw:`{
    ["data-size"]?: Size;
    srOnly?: boolean;
}`,signature:{properties:[{key:"data-size",value:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}],required:!1}},{key:"srOnly",value:{name:"boolean",required:!1}}]}}]},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}},composes:["FieldsetHTMLAttributes"]};const o=e=>{const{separated:n=!1,...s}=e;return t.jsx(i,{...s,className:a("jkl-segmented-control-item",e.className),"data-separated":n})};o.__docgenInfo={description:"",methods:[],displayName:"SegmentedControlButton",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},label:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Bruk children"},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},separated:{required:!1,tsType:{name:"boolean"},description:"Separerer valget fra gruppa dersom valget er litt ulikt de andre."}},composes:["Omit"]};export{o as S,r as a};
