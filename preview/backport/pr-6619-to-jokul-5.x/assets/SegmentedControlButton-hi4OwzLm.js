import{j as r}from"./iframe-DsTuScF2.js";import{c as n}from"./clsx-B-dksMZM.js";import{F as i}from"./FieldGroup-Bewn5luT.js";import{R as o}from"./RadioButton-BkfjmE9_.js";const t=e=>r.jsx(i,{...e,className:n("jkl-segmented-control",e.className)});t.displayName="Segmented Control";t.__docgenInfo={description:"",methods:[],displayName:"Segmented Control",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},legend:{required:!0,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"@deprecated Bruk heller `description`."},errorLabel:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const l=e=>{const{separated:a=!1,...s}=e;return r.jsx(o,{...s,className:n("jkl-segmented-control-item",e.className),"data-separated":a})};l.__docgenInfo={description:"",methods:[],displayName:"SegmentedControlButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},children:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:"Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form"},label:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Bruk children"},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel"
>`},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},trackingComponentName:{required:!1,tsType:{name:"string"},description:""},trackingLabel:{required:!1,tsType:{name:"ReactNode"},description:""},trackingExtraProps:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"undefined"}]}],raw:"Record<string, string | number | boolean | undefined>"},description:""},disableDefaultTrackingProps:{required:!1,tsType:{name:"boolean"},description:""},separated:{required:!1,tsType:{name:"boolean"},description:"Separerer valget fra gruppa dersom valget er litt ulikt de andre."}},composes:["Omit"]};export{l as S,t as a};
