import{r as R,R as k,j as t}from"./iframe-bZjd5nQc.js";import{c as M}from"./clsx-B-dksMZM.js";import{u as y}from"./useId-B70GVnSD.js";import{u as S}from"./useSwipeGesture-We_ErS5p.js";import{C}from"./CheckIcon-BlHqcsFq.js";import{C as N,g as P}from"./types-IsTkoTmK.js";const m=R.forwardRef(({"aria-pressed":a=!1,children:e,className:c,id:l,onChange:d,trackingProps:g,...p},u)=>{const f=y(l||"jkl-toggle-switch",{generateSuffix:!l}),[n,s]=k.useState(a);k.useEffect(()=>{s(a)},[a]);const{onClick:v,onPointerCancel:b,onPointerDown:w,onPointerMove:E,onPointerUp:h,...o}=p,j=r=>{s(!n),d?.(r,!n),v?.(r)},T=(r,i)=>{i!==n&&(s(i),d?.(r,i))},{gestureHandlers:x}=S({onClick:j,onChange:T,onPointerCancel:b,onPointerDown:w,onPointerMove:E,onPointerUp:h});return t.jsxs("button",{className:M("jkl-toggle-switch",c),id:f,ref:u,"aria-pressed":n,...o,...o.disabled?{}:x,"data-track-component-name":N.ToggleSwitch,"data-track-id":g?.id??(e?String(e):void 0),"data-track-label":e?String(e):void 0,...P(g?.extra,o),children:[e,t.jsx("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget",children:t.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[t.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),t.jsx(C,{bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})]})});m.displayName="ToggleSwitch";m.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},description:'Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på\neller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.\n@example\n```js\nfunction handleChange(event, pressed) {\n   console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);\n}\n```'},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},"aria-pressed":{defaultValue:{value:"false",computed:!1},required:!1}}};export{m as T};
