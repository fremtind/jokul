import{r as i,j as n}from"./iframe-DsTuScF2.js";import{C as p,g as m}from"./types-IsTkoTmK.js";const c=({className:o,from:t,isPaused:e,trackingProps:s,...a})=>{const[r,d]=i.useState(Math.floor(t/1e3));return i.useEffect(()=>{r<=0||setTimeout(()=>{e||d(l=>l-1)},1e3)},[e,r]),n.jsxs("div",{className:`jkl-countdown ${o??""}`,role:"timer","data-testid":"jkl-countdown",...a,"data-track-component-name":p.Countdown,"data-track-id":s?.id,"data-track-from":t,"data-track-is-paused":e,...m(s?.extra,a),children:[n.jsx("span",{className:"jkl-countdown__tracker",role:"presentation",style:{"--duration":`${t}ms`,"--play-state":e?"paused":"running"},"data-testid":"jkl-countdown__tracker"}),n.jsx("span",{className:"jkl-sr-only",children:r})]})};c.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},from:{required:!0,tsType:{name:"number"},description:"Millisekunder å telle ned fra"},isPaused:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}},composes:["Pick"]};export{c as C};
