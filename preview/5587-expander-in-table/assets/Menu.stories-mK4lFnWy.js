import{r,j as e,R as w}from"./iframe-CLLyC1DJ.js";import{B as J}from"./Button-CtgQD8A1.js";import{p as D,q as Q,r as X,t as Y,u as Z,f as ee,b as ne,a as te,d as se,e as re,v as oe,w as ie,i as ae,j as le,m as ue,x as de,F as me,k as pe,g as ce,o as fe,h as ge,s as ke}from"./floating-ui.react-CWbiGU-6.js";import{c as he}from"./clsx-B-dksMZM.js";import{u as ye}from"./useBrowserPreferences-B9BBAZcg.js";import{S as q}from"./SlotComponent-ptoXeY2T.js";import{M as u}from"./MenuItem-C_u0xRh1.js";/* empty css               */import{C as ve}from"./ChevronDownIcon-DxZBbCnt.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-DqE0w0yZ.js";import"./Loader-CmGIZEaL.js";import"./useDelayedRender-DFd2hA-0.js";import"./index-DMEQz7VD.js";import"./index-DDzgwl3i.js";import"./mergeRefs-CXr8B2Nh.js";import"./ChevronRightIcon-ZbYUsAUy.js";import"./Icon-DaVoT3Sy.js";import"./OpenInNewIcon-CjGrHg7e.js";const Me=(t,n,o)=>{const[h,y]=r.useState(!1),[p,c]=r.useState(!1);return r.useEffect(()=>{if(!t)return;function i(){c(!1)}function a(d){n&&d.nodeId!==n&&d.parentId===o&&c(!1)}return t.events.on("click",i),t.events.on("menuopen",a),()=>{t.events.off("click",i),t.events.off("menuopen",a)}},[t,n,o]),r.useEffect(()=>{p&&t&&n&&t.events.emit("menuopen",{parentId:o,nodeId:n})},[t,p,n,o]),r.useEffect(()=>{function i({pointerType:d}){d!=="touch"&&y(!0)}function a(){y(!1)}return window.addEventListener("pointermove",i,{once:!0,capture:!0}),window.addEventListener("keydown",a,!0),()=>{window.removeEventListener("pointermove",i,{capture:!0}),window.removeEventListener("keydown",a,!0)}},[h]),{allowHover:h,isOpen:p,setIsOpen:c}};function j(t,n=0){switch(t){case"top":return`0 ${n}px`;case"left":return`${n}px 0`;case"bottom":return`0 ${-n}px`;case"right":return`${-n}px 0`;default:return`0 ${n}px`}}const E=r.forwardRef((t,n)=>{const{children:o,className:h,initialPlacement:y,openOnHover:p=!1,keepOpenOnClickOutside:c=!1,triggerElement:i,isOpen:a,onToggle:d,...A}=t,b=`"jkl-menu"${r.useId()}`,{prefersReducedMotion:C}=ye(),M=X(),x=Y(),T=D(),f=T!=null,R=r.useRef([]),[F,P]=r.useState(null),{allowHover:N,isOpen:B,setIsOpen:S}=Me(M,x,T),g=a!==void 0?a:B;r.useEffect(()=>d?.(g),[g,d]);const{refs:O,placement:H,context:m,floatingStyles:K}=Z({nodeId:x,open:g,onOpenChange:S,placement:y||(f?"right-start":"bottom-start"),middleware:[fe(2),ge({fallbackAxisSideDirection:"end",crossAxis:!1}),ke({padding:8})],whileElementsMounted:ce}),{getReferenceProps:$,getFloatingProps:L,getItemProps:_}=ee([ne(m,{enabled:p&&N,delay:{open:75},handleClose:ie({requireIntent:!0,blockPointerEvents:!0})}),te(m,{event:"mousedown"}),se(m,{outsidePress:!c}),re(m,{role:"menu"}),oe(m,{listRef:R,activeIndex:F,nested:f,onNavigate:P})]),V=ae([O.setReference,n]),{theme:U,density:W}=le(O.reference.current),{isMounted:z,styles:G}=ue(m,{duration:{open:C?0:250,close:C?0:150},initial:({side:s})=>({opacity:0,translate:j(s,5)}),open:({side:s})=>({opacity:1,translate:j(s,0)}),close:({side:s})=>({opacity:0,translate:j(s,5)})});return e.jsxs(de,{id:x,children:[w.isValidElement(i)&&e.jsx(q,{...$({...A,ref:V,role:f?"menuitem":void 0,"aria-controls":b,onClick(s){s.stopPropagation()}}),children:i}),z&&e.jsx(me,{children:e.jsx(pe,{context:m,modal:!1,initialFocus:f?-1:0,returnFocus:!f,children:e.jsx("div",{className:he("jkl jkl-menu",h),"data-theme":U,"data-layout-density":W,role:"menu","data-placement":H,"aria-live":"assertive","aria-hidden":!g,ref:O.setFloating,...L({id:b,style:{...K,...G}}),children:w.Children.map(o,(s,I)=>w.isValidElement(s)?e.jsx(q,{..._({...s.props,tabIndex:F===I?0:-1,role:"menuitem",ref(l){R.current[I]=l},onClick(l){l.defaultPrevented||M?.events.emit("click")},onKeyDown(l){s.props.onKeyDown?.(l),!l.defaultPrevented&&(M?.events.emit("keydown"),l.currentTarget.role==="menuitemcheckbox"&&l.key==="Enter"&&S(!1))},onMouseEnter(){N&&g&&P(I)}}),children:s}):s)})})})]})});E.displayName="MenuComponent";const k=r.forwardRef((t,n)=>D()===null?e.jsx(Q,{children:e.jsx(E,{ref:n,...t})}):e.jsx(E,{ref:n,...t}));k.displayName="Menu";k.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},initialPlacement:{required:!1,tsType:{name:"Placement"},description:`Initiell plassering av menyen. Dersom det ikke er plass på skjermen der du
angir at den skal åpnes vil den slyttes automatisk.
@default "bottom-start" på toppnivå, "right-start" for undermenyer`},openOnHover:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal åpnes ved hover (uten å måtte klikke)
@default false`},keepOpenOnClickOutside:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal holdes åpen når man klikker utenfor menyen
@default false`},triggerElement:{required:!0,tsType:{name:"ReactNode"},description:'Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button type="button">`\neller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp\nmed forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten\n`MenuTriggerButton` fra denne pakken.'},isOpen:{required:!1,tsType:{name:"boolean"},description:`Kan brukes til å styre utenfra om menyen skal være åpen eller ikke.
@default false`},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback som kalles når menyen åpnes eller lukkes."}},composes:["Omit"]};const Ke={title:"Komponenter/Menu/Menu",component:k},v={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(J,{variant:"ghost",icon:e.jsx(ve,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:null},render:({isOpen:t,children:n,...o})=>e.jsxs(k,{...o,children:[e.jsx(u,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(u,{onClick:()=>console.log("test"),children:"Meld skade"}),e.jsx(u,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(k,{triggerElement:e.jsx(u,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(u,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(u,{onClick:()=>console.log("test"),children:"Endre forsikring"}),e.jsx(u,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(u,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        disable: true
      }
    }
  },
  args: {
    triggerElement: <Button variant="ghost" icon={<ChevronDownIcon bold />} iconPosition="right" data-testid="open-menu">
                Meny
            </Button>,
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
}`,...v.parameters?.docs?.source}}};const $e=["Menu"];export{v as Menu,$e as __namedExportsOrder,Ke as default};
