import{j as k,r as t}from"./iframe-DHbrNRsW.js";import{d as U,e as N,f as M,g as z,h as A,i as D,j as S,k as H,o as I,l as B,s as J,u as x,F as K,b as L}from"./floating-ui.react-DjzCaCOc.js";import{c as j}from"./clsx-B-dksMZM.js";import{g as R}from"./getThemeAndSize-CZAj3IXt.js";const V=({open:e,onOpenChange:n,placement:s="bottom-start",strategy:r="absolute",modal:f=!0,offset:d=4,positionReference:o,hoverOptions:u,focusOptions:a,clickOptions:m,roleOptions:i,dismissOptions:h})=>{const[y,P]=t.useState(e),g=e??y,l=n??P,p=U({open:g,onOpenChange:l,placement:s,strategy:r,middleware:[I(d),B({padding:5,fallbackPlacements:["bottom","top"]}),J({padding:12})],whileElementsMounted:H}),c=p.context,v=N(c,{enabled:!1,...m}),w=M(c,{enabled:!1,...u}),F=z(c,{enabled:!1,...a}),q=A(c,h),E=D(c,i),b=S([v,q,F,w,E]);return t.useLayoutEffect(()=>{o&&p.refs.setPositionReference(o?.current)},[o,p.refs]),t.useMemo(()=>({open:g,onOpenChange:l,modal:f,...b,...p}),[g,l,f,b,p])},T=t.createContext(null),C=()=>{const e=t.useContext(T);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=({children:e,...n})=>{const s=V({...n});return k.jsx(T.Provider,{value:s,children:e})},_=t.forwardRef(function({children:n,asChild:s=!1,...r},f){const{refs:d,getReferenceProps:o,open:u,onOpenChange:a}=C(),m=n.ref,i=x([d.setReference,f,m]);return s&&t.isValidElement(n)?t.cloneElement(n,o({ref:i,...r,...n.props})):k.jsx("button",{ref:i,onClick:()=>a?.(!u),"aria-expanded":u,...o({...r,className:j("jkl-popover-trigger",r.className)}),children:n})}),$=e=>e?"contextElement"in e:!1,G=t.forwardRef(function({style:n,className:s,padding:r=0,initialFocus:f=0,returnFocus:d=!0,...o},u){const{context:a,modal:m,refs:i,open:h,floatingStyles:y,getFloatingProps:P}=C(),g=x([i.setFloating,u]),l=i.reference.current,{theme:p,size:c}=$(l)?R(l.contextElement):R(l),v=t.useRef(null);return t.useEffect(()=>{v.current=a.elements.domReference?.closest("[data-portal]")||document.body},[a.elements.domReference]),h?k.jsx(K,{root:v.current,children:k.jsx(L,{context:a,modal:m,initialFocus:f,returnFocus:d,children:k.jsx("div",{"data-theme":p,"data-size":c,className:j("jkl jkl-popover",s),ref:g,style:{...n,...y,"--popover-padding":`var(--jkl-spacing-${r})`},...P(o),children:o.children})})}):null});O.Trigger=_;O.Content=G;O.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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

@default Popover.Trigger`},hoverOptions:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof useHover>[1]"},description:`Options for hover-interaksjoner.

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
