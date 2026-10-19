import{j as v,r as n}from"./iframe-L5DUEs6c.js";import{d as D,e as I,f as $,g as B,h as H,i as K,j as L,k as J,o as W,l as _,s as G,m as w,u as q,F as Q,b as X}from"./floating-ui.react-L2bKjYsf.js";import{c as F}from"./clsx-B-dksMZM.js";import{g as C}from"./getThemeAndSize-CZAj3IXt.js";const Y=({open:e,onOpenChange:t,placement:l="bottom-start",strategy:p="absolute",modal:u=!0,offset:m=4,positionReference:o,onPlacementChange:c,matchReferenceWidth:f=!1,fitViewportHeight:s=!1,hoverOptions:d,focusOptions:k,clickOptions:h,roleOptions:y,dismissOptions:P})=>{const[b,x]=n.useState(e),r=e??b,g=t??x,a=D({open:r,onOpenChange:g,placement:l,strategy:p,middleware:[W(m),_({padding:s?12:5,fallbackPlacements:["bottom","top"]}),G({padding:12,crossAxis:s}),s&&w({padding:12,apply({availableHeight:R,elements:T}){T.floating.style.maxHeight=`${Math.max(0,R)}px`}}),...f?[w({apply({rects:R,elements:T}){T.floating.style.width=`${R.reference.width}px`}})]:[]],whileElementsMounted:J}),i=a.context,z=I(i,{enabled:!1,...h}),N=$(i,{enabled:!1,...d}),M=B(i,{enabled:!1,...k}),A=H(i,P),S=K(i,y),j=L([z,A,M,N,S]);return n.useLayoutEffect(()=>{o&&a.refs.setPositionReference(o?.current)},[o,a.refs]),n.useLayoutEffect(()=>{r&&c?.(a.placement)},[r,a.placement,c]),n.useMemo(()=>({open:r,onOpenChange:g,modal:u,fitViewportHeight:s,...j,...a}),[r,g,u,s,j,a])},E=n.createContext(null),U=()=>{const e=n.useContext(E);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=({children:e,...t})=>{const l=Y({...t});return v.jsx(E.Provider,{value:l,children:e})},Z=n.forwardRef(function({children:t,asChild:l=!1,...p},u){const{refs:m,getReferenceProps:o,open:c,onOpenChange:f}=U(),s=t.ref,d=q([m.setReference,u,s]);return l&&n.isValidElement(t)?n.cloneElement(t,o({ref:d,...p,...t.props})):v.jsx("button",{ref:d,onClick:()=>f?.(!c),"aria-expanded":c,...o({...p,className:F("jkl-popover-trigger",p.className)}),children:t})}),V=e=>e?"contextElement"in e:!1,ee=n.forwardRef(function({style:t,className:l,padding:p=0,initialFocus:u=0,returnFocus:m=!0,...o},c){const{context:f,modal:s,refs:d,open:k,floatingStyles:h,getFloatingProps:y,isPositioned:P,fitViewportHeight:b}=U(),x=q([d.setFloating,c]),r=d.reference.current,{theme:g,size:a}=V(r)?C(r.contextElement):C(r),i=n.useRef(null);return n.useEffect(()=>{i.current=f.elements.domReference?.closest("[data-portal]")||document.body},[f.elements.domReference]),k?v.jsx(Q,{root:i.current,children:v.jsx(X,{context:f,modal:s,initialFocus:u,returnFocus:m,children:v.jsx("div",{"data-theme":g,"data-size":a,className:F("jkl jkl-popover",l,{"jkl-popover--fit-viewport-height":b}),ref:x,style:{...t,...h,"--popover-padding":`var(--jkl-spacing-${p})`,visibility:s||P?"visible":"hidden"},...y(o),children:o.children})})}):null});O.Trigger=Z;O.Content=ee;O.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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

@default false`},fitViewportHeight:{required:!1,tsType:{name:"boolean"},description:`Tilpasser popoverens plassering og høyde til det synlige området.
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

@default { enabled: true }`}}};export{O as P};
