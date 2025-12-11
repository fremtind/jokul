import{j as k}from"./jsx-runtime-BbjHj44Y.js";import{u as T,g as R,F as E,a as U,b as D,o as M,f as N,s as A,c as H,d as I,e as S,h as B,i as J,j as K,k as L}from"./getThemeAndDensity-DZpqJRtY.js";import{c as V}from"./clsx-B-dksMZM.js";import{r as o}from"./index-C6mWTJJr.js";const _=({open:e,onOpenChange:t,placement:r="bottom-start",strategy:c="absolute",modal:f=!0,offset:d=4,positionReference:n,hoverOptions:u,focusOptions:s,clickOptions:m,roleOptions:a,dismissOptions:h})=>{const[P,b]=o.useState(e),g=e??P,i=t??b,l=D({open:g,onOpenChange:i,placement:r,strategy:c,middleware:[M(d),N({padding:5,fallbackPlacements:["bottom","top"]}),A({padding:12})],whileElementsMounted:H}),p=l.context,v=I(p,{enabled:!1,...m}),y=S(p,{enabled:!1,...u}),C=B(p,{enabled:!1,...s}),F=J(p,h),q=K(p,a),x=L([v,F,C,y,q]);return o.useLayoutEffect(()=>{n&&l.refs.setPositionReference(n==null?void 0:n.current)},[n,l.refs]),o.useMemo(()=>({open:g,onOpenChange:i,modal:f,...x,...l}),[g,i,f,x,l])},j=o.createContext(null),w=()=>{const e=o.useContext(j);if(e==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=({children:e,...t})=>{const r=_({...t});return k.jsx(j.Provider,{value:r,children:e})},$=o.forwardRef(function({children:t,asChild:r=!1,...c},f){const{refs:d,getReferenceProps:n,open:u,onOpenChange:s}=w(),m=t.ref,a=T([d.setReference,f,m]);return r&&o.isValidElement(t)?o.cloneElement(t,n({ref:a,...c,...t.props})):k.jsx("button",{ref:a,onClick:()=>s==null?void 0:s(!u),"aria-expanded":u,...n(c),children:t})}),z=e=>e?"contextElement"in e:!1,G=o.forwardRef(function({style:t,className:r,padding:c=0,initialFocus:f=0,returnFocus:d=!0,...n},u){const{context:s,modal:m,refs:a,open:h,floatingStyles:P,getFloatingProps:b}=w(),g=T([a.setFloating,u]),i=a.reference.current,{theme:l,density:p}=z(i)?R(i.contextElement):R(i),v=o.useRef(null);return o.useEffect(()=>{var y;v.current=((y=s.elements.domReference)==null?void 0:y.closest("[data-portal]"))||document.body},[s.elements.domReference]),h?k.jsx(E,{root:v.current,children:k.jsx(U,{context:s,modal:m,initialFocus:f,returnFocus:d,children:k.jsx("div",{"data-theme":l,"data-layout-density":p,className:V("jkl jkl-popover",r),ref:g,style:{...t,...P,"--popover-padding":`var(--jkl-spacing-${c})`},...b(n),children:n.children})})}):null});O.Trigger=$;O.Content=G;O.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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
