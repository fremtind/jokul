import{r as p,j as r}from"./iframe-s8sUPN0e.js";import{c as m}from"./clsx-B-dksMZM.js";import{C as c}from"./CheckIcon-Co-eNTAV.js";import{C as l}from"./CloseIcon-DZCt8JyD.js";import{C as d,g}from"./types-IsTkoTmK.js";const f=p.forwardRef(function({className:i,variant:t,onClick:o,children:e,selected:a,trackingProps:n,...s},k){return r.jsxs("button",{type:"button",ref:k,className:m("jkl-chip",`jkl-chip--${t}`,i),onClick:o,"aria-pressed":a,...s,"data-track-component-name":d.Chip,"data-track-id":n?.id??(e?String(e):void 0),"data-track-label":e?String(e):void 0,"data-track-variant":t,...g(n?.extra,s),children:[e,t==="filter"&&a&&r.jsx(c,{className:"jkl-chip__icon",variant:"small","data-testid":"jkl-check-icon"}),t==="input"&&r.jsx(l,{className:"jkl-chip__icon",variant:"small","data-testid":"jkl-close-icon"})]})});f.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};export{f as C};
