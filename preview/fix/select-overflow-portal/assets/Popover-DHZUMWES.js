import{j as v,r as n}from"./iframe-NOxM-eWo.js";import{d as N,e as M,f as z,g as A,h as D,i as S,j as H,k as I,o as K,l as L,s as B,u as j,F as J,b as V}from"./floating-ui.react-CvdulXDa.js";import{c as x}from"./clsx-B-dksMZM.js";import{g as T}from"./getThemeAndSize-CIzqY74s.js";const _=({open:e,onOpenChange:t,placement:r="bottom-start",strategy:a="absolute",modal:d=!0,offset:g=4,positionReference:o,onPlacementChange:i,hoverOptions:l,focusOptions:m,clickOptions:p,roleOptions:h,dismissOptions:y})=>{const[P,b]=n.useState(e),c=e??P,f=t??b,s=N({open:c,onOpenChange:f,placement:r,strategy:a,middleware:[K(g),L({padding:5,fallbackPlacements:["bottom","top"]}),B({padding:12})],whileElementsMounted:I}),u=s.context,k=M(u,{enabled:!1,...p}),F=z(u,{enabled:!1,...l}),q=A(u,{enabled:!1,...m}),E=D(u,y),U=S(u,h),R=H([k,E,q,F,U]);return n.useLayoutEffect(()=>{o&&s.refs.setPositionReference(o?.current)},[o,s.refs]),n.useLayoutEffect(()=>{c&&i?.(s.placement)},[c,s.placement,i]),n.useMemo(()=>({open:c,onOpenChange:f,modal:d,...R,...s}),[c,f,d,R,s])},w=n.createContext(null),C=()=>{const e=n.useContext(w);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=({children:e,...t})=>{const r=_({...t});return v.jsx(w.Provider,{value:r,children:e})},$=n.forwardRef(function({children:t,asChild:r=!1,...a},d){const{refs:g,getReferenceProps:o,open:i,onOpenChange:l}=C(),m=t.ref,p=j([g.setReference,d,m]);return r&&n.isValidElement(t)?n.cloneElement(t,o({ref:p,...a,...t.props})):v.jsx("button",{ref:p,onClick:()=>l?.(!i),"aria-expanded":i,...o({...a,className:x("jkl-popover-trigger",a.className)}),children:t})}),G=e=>e?"contextElement"in e:!1,Q=n.forwardRef(function({style:t,className:r,padding:a=0,initialFocus:d=0,returnFocus:g=!0,...o},i){const{context:l,modal:m,refs:p,open:h,floatingStyles:y,getFloatingProps:P,isPositioned:b}=C(),c=j([p.setFloating,i]),f=p.reference.current,{theme:s,size:u}=G(f)?T(f.contextElement):T(f),k=n.useRef(null);return n.useEffect(()=>{k.current=l.elements.domReference?.closest("[data-portal]")||document.body},[l.elements.domReference]),h?v.jsx(J,{root:k.current,children:v.jsx(V,{context:l,modal:m,initialFocus:d,returnFocus:g,children:v.jsx("div",{"data-theme":s,"data-size":u,className:x("jkl jkl-popover",r),ref:c,style:{...t,...y,"--popover-padding":`var(--jkl-spacing-${a})`,visibility:m||b?"visible":"hidden"},...P(o),children:o.children})})}):null});O.Trigger=$;O.Content=Q;O.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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
popoveren ligger over eller under referansen.`},hoverOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useHover>[1]"},description:`Options for hover-interaksjoner.

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
