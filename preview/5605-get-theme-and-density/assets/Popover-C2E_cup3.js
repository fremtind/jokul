import{j as k,r as t}from"./iframe-rzzW3gX2.js";import{d as E,e as U,f as M,g as N,h as z,i as A,j as D,k as S,o as H,l as I,s as B,u as x,F as J,b as K}from"./floating-ui.react-4kUMNpMh.js";import{c as L}from"./clsx-B-dksMZM.js";import{g as R}from"./getThemeAndSize-CIzqY74s.js";const V=({open:e,onOpenChange:n,placement:s="bottom-start",strategy:c="absolute",modal:f=!0,offset:d=4,positionReference:o,hoverOptions:u,focusOptions:r,clickOptions:m,roleOptions:a,dismissOptions:h})=>{const[y,P]=t.useState(e),g=e??y,i=n??P,l=E({open:g,onOpenChange:i,placement:s,strategy:c,middleware:[H(d),I({padding:5,fallbackPlacements:["bottom","top"]}),B({padding:12})],whileElementsMounted:S}),p=l.context,v=U(p,{enabled:!1,...m}),C=M(p,{enabled:!1,...u}),w=N(p,{enabled:!1,...r}),F=z(p,h),q=A(p,a),b=D([v,F,w,C,q]);return t.useLayoutEffect(()=>{o&&l.refs.setPositionReference(o?.current)},[o,l.refs]),t.useMemo(()=>({open:g,onOpenChange:i,modal:f,...b,...l}),[g,i,f,b,l])},T=t.createContext(null),j=()=>{const e=t.useContext(T);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=({children:e,...n})=>{const s=V({...n});return k.jsx(T.Provider,{value:s,children:e})},_=t.forwardRef(function({children:n,asChild:s=!1,...c},f){const{refs:d,getReferenceProps:o,open:u,onOpenChange:r}=j(),m=n.ref,a=x([d.setReference,f,m]);return s&&t.isValidElement(n)?t.cloneElement(n,o({ref:a,...c,...n.props})):k.jsx("button",{ref:a,onClick:()=>r?.(!u),"aria-expanded":u,...o(c),children:n})}),$=e=>e?"contextElement"in e:!1,G=t.forwardRef(function({style:n,className:s,padding:c=0,initialFocus:f=0,returnFocus:d=!0,...o},u){const{context:r,modal:m,refs:a,open:h,floatingStyles:y,getFloatingProps:P}=j(),g=x([a.setFloating,u]),i=a.reference.current,{theme:l,size:p}=$(i)?R(i.contextElement):R(i),v=t.useRef(null);return t.useEffect(()=>{v.current=r.elements.domReference?.closest("[data-portal]")||document.body},[r.elements.domReference]),h?k.jsx(J,{root:v.current,children:k.jsx(K,{context:r,modal:m,initialFocus:f,returnFocus:d,children:k.jsx("div",{"data-theme":l,"data-size":p,className:L("jkl jkl-popover",s),ref:g,style:{...n,...y,"--popover-padding":`var(--jkl-spacing-${c})`},...P(o),children:o.children})})}):null});O.Trigger=_;O.Content=G;O.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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
