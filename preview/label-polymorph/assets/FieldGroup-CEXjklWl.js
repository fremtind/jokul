import{j as e}from"./iframe-KbORsCiT.js";import{c as p}from"./clsx-B-dksMZM.js";import{u as q}from"./useId-SGkDPlhg.js";import{S as v}from"./SupportLabel-D4XCd4hh.js";const H=m=>{const{id:a,legend:s,legendProps:u,supportLabelProps:c,tooltip:l,className:b,children:g,helpLabel:r,errorLabel:t,description:n,"data-testautoid":L,...y}=m,i=q(a||"jkl-field-group",{generateSuffix:!a}),o=`${i}_support-label`,{srOnly:T,className:f,...h}=u||{},d=t||r,j=t?"error":r?"help":void 0,x=d?o:void 0;return e.jsxs("fieldset",{id:i,className:p("jkl-field-group",b),"data-testautoid":L,...y,"aria-describedby":x,children:[e.jsx("legend",{className:p("jkl-field-group__legend",f,{"jkl-sr-only":T}),...h,children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{whiteSpace:"normal"},children:s})," ",l]}):s}),n&&e.jsx("p",{className:"jkl-input-group-description",children:n}),g,(r||t)&&e.jsx(v,{...c,label:d,labelType:j,id:o})]})};H.__docgenInfo={description:"",methods:[],displayName:"FieldGroup",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},legend:{required:!0,tsType:{name:"string"},description:""},legendProps:{required:!1,tsType:{name:"intersection",raw:`Omit<
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
>`},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}},composes:["FieldsetHTMLAttributes"]};export{H as F};
