import{j as v,r as n}from"./iframe-CaPtmoGU.js";import{d as S,e as A,f as D,g as H,h as I,i as K,j as L,k as $,o as B,l as J,s as V,m as W,u as x,F as _,b as G}from"./floating-ui.react-D6FKEQlI.js";import{c as j}from"./clsx-B-dksMZM.js";import{g as T}from"./getThemeAndSize-CZAj3IXt.js";const Q=({open:e,onOpenChange:t,placement:i="bottom-start",strategy:l="absolute",modal:u=!0,offset:m=4,positionReference:s,onPlacementChange:p,matchReferenceWidth:c=!1,hoverOptions:d,focusOptions:f,clickOptions:k,roleOptions:h,dismissOptions:y})=>{const[P,b]=n.useState(e),o=e??P,g=t??b,r=S({open:o,onOpenChange:g,placement:i,strategy:l,middleware:[B(m),J({padding:5,fallbackPlacements:["bottom","top"]}),V({padding:12}),...c?[W({apply({rects:N,elements:M}){M.floating.style.width=`${N.reference.width}px`}})]:[]],whileElementsMounted:$}),a=r.context,q=A(a,{enabled:!1,...k}),F=D(a,{enabled:!1,...d}),E=H(a,{enabled:!1,...f}),U=I(a,y),z=K(a,h),O=L([q,U,E,F,z]);return n.useLayoutEffect(()=>{s&&r.refs.setPositionReference(s?.current)},[s,r.refs]),n.useLayoutEffect(()=>{o&&p?.(r.placement)},[o,r.placement,p]),n.useMemo(()=>({open:o,onOpenChange:g,modal:u,...O,...r}),[o,g,u,O,r])},w=n.createContext(null),C=()=>{const e=n.useContext(w);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},R=({children:e,...t})=>{const i=Q({...t});return v.jsx(w.Provider,{value:i,children:e})},X=n.forwardRef(function({children:t,asChild:i=!1,...l},u){const{refs:m,getReferenceProps:s,open:p,onOpenChange:c}=C(),d=t.ref,f=x([m.setReference,u,d]);return i&&n.isValidElement(t)?n.cloneElement(t,s({ref:f,...l,...t.props})):v.jsx("button",{ref:f,onClick:()=>c?.(!p),"aria-expanded":p,...s({...l,className:j("jkl-popover-trigger",l.className)}),children:t})}),Y=e=>e?"contextElement"in e:!1,Z=n.forwardRef(function({style:t,className:i,padding:l=0,initialFocus:u=0,returnFocus:m=!0,...s},p){const{context:c,modal:d,refs:f,open:k,floatingStyles:h,getFloatingProps:y,isPositioned:P}=C(),b=x([f.setFloating,p]),o=f.reference.current,{theme:g,size:r}=Y(o)?T(o.contextElement):T(o),a=n.useRef(null);return n.useEffect(()=>{a.current=c.elements.domReference?.closest("[data-portal]")||document.body},[c.elements.domReference]),k?v.jsx(_,{root:a.current,children:v.jsx(G,{context:c,modal:d,initialFocus:u,returnFocus:m,children:v.jsx("div",{"data-theme":g,"data-size":r,className:j("jkl jkl-popover",i),ref:b,style:{...t,...h,"--popover-padding":`var(--jkl-spacing-${l})`,visibility:d||P?"visible":"hidden"},...y(s),children:s.children})})}):null});R.Trigger=X;R.Content=Z;R.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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

@default { enabled: true }`}}};export{R as P};
