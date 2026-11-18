import{j as r}from"./iframe-B1nf5YyH.js";import{c as t}from"./clsx-B-dksMZM.js";import{F as s}from"./FieldGroup-Wzi_HVu9.js";import{R as o}from"./RadioButton-BlCArVY6.js";const a=e=>r.jsx(s,{...e,className:t("jkl-segmented-control",e.className)});a.displayName="Segmented Control";a.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},legend:{required:!0,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"@deprecated Bruk heller `description`."},errorLabel:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const i=e=>{const{separated:n=!1,...l}=e;return r.jsx(o,{...l,className:t("jkl-segmented-control-item",e.className),"data-separated":n})};i.__docgenInfo={description:"",methods:[],displayName:"SegmentedControlButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},children:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},label:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Bruk children"},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},separated:{required:!1,tsType:{name:"boolean"},description:"Separerer valget fra gruppa dersom valget er litt ulikt de andre."}},composes:["Omit"]};export{i as S,a};
