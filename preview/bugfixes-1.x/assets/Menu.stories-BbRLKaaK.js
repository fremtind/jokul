import{r as s,R as e}from"./index-siqcju79.js";import{G as z}from"./Button-Dng0c-UK.js";import{p as D,q as J,r as Q,t as X,u as Y,f as Z,b as ee,a as ne,d as te,e as re,v as se,w as oe,i as ae,j as ie,m as le,x as me,F as ue,k as ce,g as pe,o as de,h as fe,s as ge}from"./floating-ui.react-DOiTYs_Q.js";import{c as ke}from"./clsx-B-dksMZM.js";import{u as ye}from"./useBrowserPreferences-B9LcbCiO.js";import{S as q}from"./SlotComponent-DjLpilNT.js";import{M as m}from"./MenuItem-DjdHl0XH.js";/* empty css               */import{C as Ee}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./mergeRefs-CYSLoF3z.js";import"./ChevronRightIcon-DUrPUeX8.js";import"./Icon-mINJCSxV.js";import"./OpenInNewIcon-BZd1ooy-.js";const ve=(t,n,o)=>{const[y,E]=s.useState(!1),[p,d]=s.useState(!1);return s.useEffect(()=>{if(!t)return;function a(){d(!1)}function i(u){n&&u.nodeId!==n&&u.parentId===o&&d(!1)}return t.events.on("click",a),t.events.on("menuopen",i),()=>{t.events.off("click",a),t.events.off("menuopen",i)}},[t,n,o]),s.useEffect(()=>{p&&t&&n&&t.events.emit("menuopen",{parentId:o,nodeId:n})},[t,p,n,o]),s.useEffect(()=>{function a({pointerType:u}){u!=="touch"&&E(!0)}function i(){E(!1)}return window.addEventListener("pointermove",a,{once:!0,capture:!0}),window.addEventListener("keydown",i,!0),()=>{window.removeEventListener("pointermove",a,{capture:!0}),window.removeEventListener("keydown",i,!0)}},[y]),{allowHover:y,isOpen:p,setIsOpen:d}};function w(t,n=0){switch(t){case"top":return`0 ${n}px`;case"left":return`${n}px 0`;case"bottom":return`0 ${-n}px`;case"right":return`${-n}px 0`;default:return`0 ${n}px`}}const C=s.forwardRef((t,n)=>{const{children:o,className:y,initialPlacement:E,openOnHover:p=!1,keepOpenOnClickOutside:d=!1,triggerElement:a,isOpen:i,onToggle:u,...A}=t,b=`"jkl-menu"${s.useId()}`,{prefersReducedMotion:N}=ye(),M=Q(),h=X(),R=D(),f=R!=null,T=s.useRef([]),[F,P]=s.useState(null),{allowHover:x,isOpen:j,setIsOpen:S}=ve(M,h,R),g=i!==void 0?i:j;s.useEffect(()=>u?.(g),[g,u]);const{refs:O,placement:H,context:c,floatingStyles:K}=Y({nodeId:h,open:g,onOpenChange:S,placement:E||(f?"right-start":"bottom-start"),middleware:[de(2),fe({fallbackAxisSideDirection:"end",crossAxis:!1}),ge({padding:8})],whileElementsMounted:pe}),{getReferenceProps:$,getFloatingProps:B,getItemProps:L}=Z([ee(c,{enabled:p&&x,delay:{open:75},handleClose:oe({requireIntent:!0,blockPointerEvents:!0})}),ne(c,{event:"mousedown"}),te(c,{outsidePress:!d}),re(c,{role:"menu"}),se(c,{listRef:T,activeIndex:F,nested:f,onNavigate:P})]),G=ae([O.setReference,n]),{theme:_,density:V}=ie(O.reference.current),{isMounted:U,styles:W}=le(c,{duration:{open:N?0:250,close:N?0:150},initial:({side:r})=>({opacity:0,translate:w(r,5)}),open:({side:r})=>({opacity:1,translate:w(r,0)}),close:({side:r})=>({opacity:0,translate:w(r,5)})});return e.createElement(me,{id:h},e.isValidElement(a)&&e.createElement(q,{...$({...A,ref:G,role:f?"menuitem":void 0,"aria-controls":b,onClick(r){r.stopPropagation()}})},a),U&&e.createElement(ue,null,e.createElement(ce,{context:c,modal:!1,initialFocus:f?-1:0,returnFocus:!f},e.createElement("div",{className:ke("jkl jkl-menu",y),"data-theme":_,"data-layout-density":V,role:"menu","data-placement":H,"aria-live":"assertive","aria-hidden":!g,ref:O.setFloating,...B({id:b,style:{...K,...W}})},e.Children.map(o,(r,I)=>e.isValidElement(r)?e.createElement(q,{...L({...r.props,tabIndex:F===I?0:-1,role:"menuitem",ref(l){T.current[I]=l},onClick(l){l.defaultPrevented||M?.events.emit("click")},onKeyDown(l){r.props.onKeyDown?.(l),!l.defaultPrevented&&(M?.events.emit("keydown"),l.currentTarget.role==="menuitemcheckbox"&&l.key==="Enter"&&S(!1))},onMouseEnter(){x&&g&&P(I)}})},r):r)))))});C.displayName="MenuComponent";const k=s.forwardRef((t,n)=>D()===null?e.createElement(J,null,e.createElement(C,{ref:n,...t})):e.createElement(C,{ref:n,...t}));k.displayName="Menu";k.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},initialPlacement:{required:!1,tsType:{name:"Placement"},description:`Initiell plassering av menyen. Dersom det ikke er plass på skjermen der du
angir at den skal åpnes vil den slyttes automatisk.
@default "bottom-start" på toppnivå, "right-start" for undermenyer`},openOnHover:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal åpnes ved hover (uten å måtte klikke)
@default false`},keepOpenOnClickOutside:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal holdes åpen når man klikker utenfor menyen
@default false`},triggerElement:{required:!0,tsType:{name:"ReactNode"},description:'Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button type="button">`\neller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp\nmed forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten\n`MenuTriggerButton` fra denne pakken.'},isOpen:{required:!1,tsType:{name:"boolean"},description:`Kan brukes til å styre utenfra om menyen skal være åpen eller ikke.
@default false`},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback som kalles når menyen åpnes eller lukkes."}},composes:["Omit"]};const $e={title:"Komponenter/Menu/Menu",component:k,parameters:{layout:"centered"},tags:["autodocs"]},v={args:{triggerElement:e.createElement(z,{icon:e.createElement(Ee,{bold:!0}),iconPosition:"right","data-testid":"open-menu"},"Ola Nordmann"),keepOpenOnClickOutside:!1,children:null},render:({isOpen:t,children:n,...o})=>e.createElement(k,{...o},e.createElement(m,{as:"a",href:"#forsikringene-dine"},"Forsikringene dine"),e.createElement(m,{onClick:()=>console.log("test")},"Meld skade"),e.createElement(m,{as:"a",href:"#skadesakene-dine"},"Skadesakene dine"),e.createElement(k,{triggerElement:e.createElement(m,{expandable:!0},"Skjemaoppgaver")},e.createElement(m,{as:"a",href:"#flytte-forsikring"},"Flytte forsikring"),e.createElement(m,{onClick:()=>console.log("test")},"Endre forsikring"),e.createElement(m,{as:"a",href:"#oppsigelse"},"Oppsigelse av forsikring")),e.createElement(m,{as:"a",href:"#kontakt-oss"},"Kontakt oss"))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    triggerElement: <GhostButton icon={<ChevronDownIcon bold />} iconPosition="right" data-testid="open-menu">
                Ola Nordmann
            </GhostButton>,
    keepOpenOnClickOutside: false,
    children: null
  },
  render: ({
    isOpen,
    children,
    ...args
  }) => <MenuComponent {...args}>
            <MenuItem as="a" href="#forsikringene-dine">
                Forsikringene dine
            </MenuItem>
            <MenuItem onClick={() => console.log("test")}>Meld skade</MenuItem>
            <MenuItem as="a" href="#skadesakene-dine">
                Skadesakene dine
            </MenuItem>
            <MenuComponent triggerElement={<MenuItem expandable={true}>Skjemaoppgaver</MenuItem>}>
                <MenuItem as="a" href="#flytte-forsikring">
                    Flytte forsikring
                </MenuItem>
                <MenuItem onClick={() => console.log("test")}>
                    Endre forsikring
                </MenuItem>
                <MenuItem as="a" href="#oppsigelse">
                    Oppsigelse av forsikring
                </MenuItem>
            </MenuComponent>
            <MenuItem as="a" href="#kontakt-oss">
                Kontakt oss
            </MenuItem>
        </MenuComponent>
}`,...v.parameters?.docs?.source}}};const Be=["Menu"];export{v as Menu,Be as __namedExportsOrder,$e as default};
