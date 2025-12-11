import{u as q,a as j,b as U,c as D,d as M,e as N,f as A,g as H,o as I,h as S,s as B,i as R,j as b,F as J,k as K}from"./getThemeAndDensity-Cbjmkdw-.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as e}from"./index-siqcju79.js";const V=({open:t,onOpenChange:n,placement:s="bottom-start",strategy:c="absolute",modal:f=!0,offset:d=4,positionReference:o,hoverOptions:u,focusOptions:r,clickOptions:m,roleOptions:a,dismissOptions:v})=>{const[y,h]=e.useState(t),g=t??y,i=n??h,l=q({open:g,onOpenChange:i,placement:s,strategy:c,middleware:[I(d),S({padding:5,fallbackPlacements:["bottom","top"]}),B({padding:12})],whileElementsMounted:H}),p=l.context,k=j(p,{enabled:!1,...m}),w=U(p,{enabled:!1,...u}),E=D(p,{enabled:!1,...r}),F=M(p,v),x=N(p,a),O=A([k,F,E,w,x]);return e.useLayoutEffect(()=>{o&&l.refs.setPositionReference(o?.current)},[o,l.refs]),e.useMemo(()=>({open:g,onOpenChange:i,modal:f,...O,...l}),[g,i,f,O,l])},T=e.createContext(null),C=()=>{const t=e.useContext(T);if(t==null)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return t},P=({children:t,...n})=>{const s=V({...n});return e.createElement(T.Provider,{value:s},t)},_=e.forwardRef(function({children:n,asChild:s=!1,...c},f){const{refs:d,getReferenceProps:o,open:u,onOpenChange:r}=C(),m=n.ref,a=R([d.setReference,f,m]);return s&&e.isValidElement(n)?e.cloneElement(n,o({ref:a,...c,...n.props})):e.createElement("button",{ref:a,onClick:()=>r?.(!u),"aria-expanded":u,...o(c)},n)}),$=t=>t?"contextElement"in t:!1,z=e.forwardRef(function({style:n,className:s,padding:c=0,initialFocus:f=0,returnFocus:d=!0,...o},u){const{context:r,modal:m,refs:a,open:v,floatingStyles:y,getFloatingProps:h}=C(),g=R([a.setFloating,u]),i=a.reference.current,{theme:l,density:p}=$(i)?b(i.contextElement):b(i),k=e.useRef(null);return e.useEffect(()=>{k.current=r.elements.domReference?.closest("[data-portal]")||document.body},[r.elements.domReference]),v?e.createElement(J,{root:k.current},e.createElement(K,{context:r,modal:m,initialFocus:f,returnFocus:d},e.createElement("div",{"data-theme":l,"data-layout-density":p,className:L("jkl jkl-popover",s),ref:g,style:{...n,...y,"--popover-padding":`var(--jkl-spacing-${c})`},...h(o)},o.children))):null});P.Trigger=_;P.Content=z;P.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:`Angir om popoveren er åpen eller lukket.

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

@default { enabled: true }`}}};export{P};
