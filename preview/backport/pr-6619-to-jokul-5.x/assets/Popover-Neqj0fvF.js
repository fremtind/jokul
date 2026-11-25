import{j as v,r as n}from"./iframe-DsTuScF2.js";import{d as D,e as I,f as $,g as B,h as H,i as K,j as L,k as _,o as J,l as V,s as W,m as q,u as F,F as G,b as Q}from"./floating-ui.react-DDzlo-vZ.js";import{c as N}from"./clsx-B-dksMZM.js";import{g as E}from"./getThemeAndSize-CZAj3IXt.js";import{C as X,g as Y}from"./types-IsTkoTmK.js";const Z=({open:e,onOpenChange:t,placement:i="bottom-start",strategy:l="absolute",modal:d=!0,offset:u=4,positionReference:r,onPlacementChange:a,matchReferenceWidth:m=!1,fitAvailableHeight:s=!1,hoverOptions:p,focusOptions:k,clickOptions:h,roleOptions:P,dismissOptions:b})=>{const[x,T]=n.useState(e),c=e??x,g=t??T,o=D({open:c,onOpenChange:g,placement:i,strategy:l,middleware:[J(u),V({padding:s?12:5,fallbackPlacements:["bottom","top"]}),W({padding:12,crossAxis:s}),s&&q({padding:12,apply({availableHeight:R,elements:j}){j.floating.style.maxHeight=`${Math.max(0,R)}px`}}),...m?[q({apply({rects:R,elements:j}){j.floating.style.width=`${R.reference.width}px`}})]:[]],whileElementsMounted:_}),f=o.context,O=I(f,{enabled:!1,...h}),y=$(f,{enabled:!1,...p}),M=B(f,{enabled:!1,...k}),S=H(f,b),A=K(f,P),C=L([O,S,M,y,A]);return n.useLayoutEffect(()=>{r&&o.refs.setPositionReference(r?.current)},[r,o.refs]),n.useLayoutEffect(()=>{c&&a?.(o.placement)},[c,o.placement,a]),n.useMemo(()=>({open:c,onOpenChange:g,modal:d,fitAvailableHeight:s,...C,...o}),[c,g,d,s,C,o])},U=n.createContext(null),z=()=>{const e=n.useContext(U);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},w=({children:e,...t})=>{const i=Z({...t});return v.jsx(U.Provider,{value:i,children:e})},ee=n.forwardRef(function({children:t,asChild:i=!1,...l},d){const{refs:u,getReferenceProps:r,open:a,onOpenChange:m}=z(),s=t.ref,p=F([u.setReference,d,s]);return i&&n.isValidElement(t)?n.cloneElement(t,r({ref:p,...l,...t.props})):v.jsx("button",{ref:p,onClick:()=>m?.(!a),"aria-expanded":a,...r({...l,className:N("jkl-popover-trigger",l.className)}),children:t})}),ne=e=>e?"contextElement"in e:!1,te=n.forwardRef(function({style:t,className:i,padding:l=0,initialFocus:d=0,returnFocus:u=!0,trackingProps:r,...a},m){const{context:s,modal:p,refs:k,open:h,placement:P,floatingStyles:b,getFloatingProps:x,isPositioned:T,fitAvailableHeight:c}=z(),g=F([k.setFloating,m]),o=k.reference.current,{theme:f,size:O}=ne(o)?E(o.contextElement):E(o),y=n.useRef(null);return n.useEffect(()=>{y.current=s.elements.domReference?.closest("[data-portal]")||document.body},[s.elements.domReference]),h?v.jsx(G,{root:y.current,children:v.jsx(Q,{context:s,modal:p,initialFocus:d,returnFocus:u,children:v.jsx("div",{"data-theme":f,"data-size":O,className:N("jkl jkl-popover",i,{"jkl-popover--fit-available-height":c}),ref:g,style:{...t,...b,"--popover-padding":`var(--jkl-spacing-${l})`,visibility:p||T?"visible":"hidden"},...x(a),"data-track-component-name":X.Popover,"data-track-id":r?.id,"data-track-placement":P,"data-track-open":h,...Y(r?.extra,a),children:a.children})})}):null});w.Trigger=ee;w.Content=te;w.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

@see https://floating-ui.com/docs/usefloating#open`},onOpenChange:{required:!1,tsType:{name:'UseFloatingOptions["onOpenChange"]',raw:'UseFloatingOptions["onOpenChange"]'},description:`Callback som trigges når popoveren åpnes eller lukkes.

@see https://floating-ui.com/docs/usefloating#onopenchange`},placement:{required:!1,tsType:{name:'UseFloatingOptions["placement"]',raw:'UseFloatingOptions["placement"]'},description:`Bestemmer plasseringen av popoveren.

@see https://floating-ui.com/docs/usefloating#placement

@default "bottom-start"`},strategy:{required:!1,tsType:{name:'UseFloatingOptions["strategy"]',raw:'UseFloatingOptions["strategy"]'},description:`Definerer strategien for posisjonering av popoveren.

@see https://floating-ui.com/docs/usefloating#strategy

@default "absolute"`},modal:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren skal fungere som en modal, der fokus er låst til det flytende elementet
og innhold utenfor ikke kan interageres med.

@see https://floating-ui.com/docs/usefloating#modal

@default true`},offset:{required:!1,tsType:{name:"number"},description:`Justerer avstanden mellom referanse-elementet og popoveren.

@see https://floating-ui.com/docs/offset

@default 4`},positionReference:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<ReferenceType>",elements:[{name:"ReferenceType"}]},description:`Referanse til elementet som popoveren skal posisjoneres i forhold til.

@see https://floating-ui.com/docs/usefloating#setpositionreference

@default Popover.Trigger`},onPlacementChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(placement: Placement) => void",signature:{arguments:[{type:{name:"Placement"},name:"placement"}],return:{name:"void"}}},description:`Trigges når popoverens faktiske plassering endrer seg, f.eks. når
\`flip\`-middlewaren snur popoveren over triggeren fordi det ikke er
plass under. Kan brukes til å justere styling avhengig av om
popoveren ligger over eller under referansen.`},matchReferenceWidth:{required:!1,tsType:{name:"boolean"},description:`Setter bredden på popoveren lik bredden på referanse-elementet.
Referanse-elementet er vanligvis \`Popover.Trigger\`, men kan overstyres
med \`positionReference\`.

@see https://floating-ui.com/docs/size#match-reference-width

@default false`},fitAvailableHeight:{required:!1,tsType:{name:"boolean"},description:`Tilpasser popoverens plassering og høyde til det synlige området.
Innholdet kan scrolles hvis det ikke får plass.

Popoveren kan overlappe elementet den er festet til.
Bruk en fast verdi mens popoveren er åpen: Høydebegrensningen fjernes
ikke hvis du endrer verdien fra \`true\` til \`false\`.

@see https://floating-ui.com/docs/shift#crossaxis
@see https://floating-ui.com/docs/size
@default false`},hoverOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useHover>[1]"},description:`Options for hover-interaksjoner.

@see https://floating-ui.com/docs/usehover

@default { enabled: false }`},focusOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useFocus>[1]"},description:`Options for fokus-interaksjoner.

@see https://floating-ui.com/docs/usefocus

@default { enabled: false }`},clickOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useClick>[1]"},description:`Options for klikk-interaksjoner.

@see https://floating-ui.com/docs/useclick

@default { enabled: false }`},roleOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useRole>[1]"},description:`Konfigurerer rollen for popoveren.

@see https://floating-ui.com/docs/userole

@default { enabled: true, role: "dialog" }`},dismissOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useDismiss>[1]"},description:`Options for å lukke popoveren når en dismissal skjer,
som ved å klikke utenfor eller trykke på "Escape"-tasten.

@see https://floating-ui.com/docs/usedismiss

@default { enabled: true }`}}};export{w as P};
