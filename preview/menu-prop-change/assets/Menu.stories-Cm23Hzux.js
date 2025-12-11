import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as s,R as I}from"./index-Bv6P490N.js";import{B as J}from"./Button-7xZWz2K4.js";import{p as D,q as Q,r as X,t as Y,u as Z,f as ee,b as ne,a as te,d as re,e as se,v as oe,w as ae,i as ie,j as le,m as de,x as ue,F as me,k as pe,g as ce,o as fe,h as ge,s as ke}from"./floating-ui.react-DHPfj9p1.js";import{c as he}from"./clsx-B-dksMZM.js";import{u as ye}from"./useBrowserPreferences-1XLPz9Eq.js";import{S as q}from"./SlotComponent-CgJtPkTS.js";import{M as l}from"./MenuItem-PD4rFooc.js";/* empty css               */import{C as ve}from"./ChevronDownIcon-ulgFH_bH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";import"./index-BPlpgERE.js";import"./index-cKcTyOJX.js";import"./mergeRefs-BP-F_O_W.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./Icon-DYEEOjBa.js";import"./OpenInNewIcon-ClN_GWe9.js";const Me=(t,n,d)=>{const[h,y]=s.useState(!1),[p,c]=s.useState(!1);return s.useEffect(()=>{if(!t)return;function a(){c(!1)}function i(u){n&&u.nodeId!==n&&u.parentId===d&&c(!1)}return t.events.on("click",a),t.events.on("menuopen",i),()=>{t.events.off("click",a),t.events.off("menuopen",i)}},[t,n,d]),s.useEffect(()=>{p&&t&&n&&t.events.emit("menuopen",{parentId:d,nodeId:n})},[t,p,n,d]),s.useEffect(()=>{function a({pointerType:u}){u!=="touch"&&y(!0)}function i(){y(!1)}return window.addEventListener("pointermove",a,{once:!0,capture:!0}),window.addEventListener("keydown",i,!0),()=>{window.removeEventListener("pointermove",a,{capture:!0}),window.removeEventListener("keydown",i,!0)}},[h]),{allowHover:h,open:p,setOpen:c}};function E(t,n=0){switch(t){case"top":return`0 ${n}px`;case"left":return`${n}px 0`;case"bottom":return`0 ${-n}px`;case"right":return`${-n}px 0`;default:return`0 ${n}px`}}const b=s.forwardRef((t,n)=>{const{children:d,className:h,initialPlacement:y,openOnHover:p=!1,keepOpenOnClickOutside:c=!1,triggerElement:a,open:i,onToggle:u,...A}=t,O=`"jkl-menu"${s.useId()}`,{prefersReducedMotion:C}=ye(),M=X(),x=Y(),T=D(),f=T!=null,R=s.useRef([]),[F,P]=s.useState(null),{allowHover:N,open:B,setOpen:S}=Me(M,x,T),g=i!==void 0?i:B;s.useEffect(()=>u?.(g),[g,u]);const{refs:j,placement:H,context:m,floatingStyles:K}=Z({nodeId:x,open:g,onOpenChange:S,placement:y||(f?"right-start":"bottom-start"),middleware:[fe(2),ge({fallbackAxisSideDirection:"end",crossAxis:!1}),ke({padding:8})],whileElementsMounted:ce}),{getReferenceProps:$,getFloatingProps:L,getItemProps:_}=ee([ne(m,{enabled:p&&N,delay:{open:75},handleClose:ae({requireIntent:!0,blockPointerEvents:!0})}),te(m,{event:"mousedown"}),re(m,{outsidePress:!c}),se(m,{role:"menu"}),oe(m,{listRef:R,activeIndex:F,nested:f,onNavigate:P})]),V=ie([j.setReference,n]),{theme:U,density:W}=le(j.reference.current),{isMounted:z,styles:G}=de(m,{duration:{open:C?0:250,close:C?0:150},initial:({side:r})=>({opacity:0,translate:E(r,5)}),open:({side:r})=>({opacity:1,translate:E(r,0)}),close:({side:r})=>({opacity:0,translate:E(r,5)})});return e.jsxs(ue,{id:x,children:[I.isValidElement(a)&&e.jsx(q,{...$({...A,ref:V,role:f?"menuitem":void 0,"aria-controls":O,onClick(r){r.stopPropagation()}}),children:a}),z&&e.jsx(me,{children:e.jsx(pe,{context:m,modal:!1,initialFocus:f?-1:0,returnFocus:!f,children:e.jsx("div",{className:he("jkl jkl-menu",h),"data-theme":U,"data-layout-density":W,role:"menu","data-placement":H,"aria-live":"assertive","aria-hidden":!g,ref:j.setFloating,...L({id:O,style:{...K,...G}}),children:I.Children.map(d,(r,w)=>I.isValidElement(r)?e.jsx(q,{..._({...r.props,tabIndex:F===w?0:-1,role:"menuitem",ref(o){R.current[w]=o},onClick(o){r.props.onClick?.(o),!o.defaultPrevented&&M?.events.emit("click")},onKeyDown(o){r.props.onKeyDown?.(o),!o.defaultPrevented&&(M?.events.emit("keydown"),o.currentTarget.role==="menuitemcheckbox"&&o.key==="Enter"&&S(!1))},onMouseEnter(){N&&g&&P(w)}}),children:r}):r)})})})]})});b.displayName="MenuComponent";const k=s.forwardRef((t,n)=>D()===null?e.jsx(Q,{children:e.jsx(b,{ref:n,...t})}):e.jsx(b,{ref:n,...t}));k.displayName="Menu";k.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},initialPlacement:{required:!1,tsType:{name:"Placement"},description:`Initiell plassering av menyen. Dersom det ikke er plass på skjermen der du
angir at den skal åpnes vil den slyttes automatisk.
@default "bottom-start" på toppnivå, "right-start" for undermenyer`},openOnHover:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal åpnes ved hover (uten å måtte klikke)
@default false`},keepOpenOnClickOutside:{required:!1,tsType:{name:"boolean"},description:`Angir om menyen skal holdes åpen når man klikker utenfor menyen
@default false`},triggerElement:{required:!0,tsType:{name:"ReactNode"},description:'Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button type="button">`\neller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp\nmed forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten\n`MenuTriggerButton` fra denne pakken.'},open:{required:!1,tsType:{name:"boolean"},description:`Kan brukes til å styre utenfra om menyen skal være åpen eller ikke.
@default false`},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback som kalles når menyen åpnes eller lukkes."}},composes:["Omit"]};const $e={title:"Komponenter/Menu/Menu",component:k,parameters:{layout:"centered"},tags:["autodocs"]},v={argTypes:{open:{control:{disable:!0}}},args:{triggerElement:e.jsx(J,{variant:"ghost",icon:e.jsx(ve,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(l,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(l,{as:"a",href:"#meld-skade",children:"Meld skade"}),e.jsx(l,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(k,{triggerElement:e.jsx(l,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(l,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(l,{as:"a",href:"#endre-forsikring",children:"Endre forsikring"}),e.jsx(l,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(l,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})},render:({open:t,...n})=>e.jsx(k,{...n})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    open: {
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
    children: <>
                <MenuItem as="a" href="#forsikringene-dine">
                    Forsikringene dine
                </MenuItem>
                <MenuItem as="a" href="#meld-skade">
                    Meld skade
                </MenuItem>
                <MenuItem as="a" href="#skadesakene-dine">
                    Skadesakene dine
                </MenuItem>
                <MenuComponent triggerElement={<MenuItem expandable={true}>Skjemaoppgaver</MenuItem>}>
                    <MenuItem as="a" href="#flytte-forsikring">
                        Flytte forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#endre-forsikring">
                        Endre forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#oppsigelse">
                        Oppsigelse av forsikring
                    </MenuItem>
                </MenuComponent>
                <MenuItem as="a" href="#kontakt-oss">
                    Kontakt oss
                </MenuItem>
            </>
  },
  render: ({
    open,
    ...args
  }) => <MenuComponent {...args} />
}`,...v.parameters?.docs?.source}}};const Le=["Menu"];export{v as Menu,Le as __namedExportsOrder,$e as default};
