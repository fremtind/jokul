import{r as C,j as n}from"./iframe-CFM47A3t.js";import{c as M}from"./clsx-B-dksMZM.js";import{u as b}from"./useSwipeGesture-lzX4T_gR.js";import{C as y}from"./CheckIcon-BaEOChrB.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Icon-D4OObDPq.js";const s=C.forwardRef((c,m)=>{const{"aria-checked":t,className:l,children:d,icon:r,onChange:a,onClick:p,onPointerCancel:u,onPointerDown:h,onPointerMove:k,onPointerUp:g,onKeyDown:v,...x}=c,w=e=>{e.preventDefault(),a?.(e,!t),p?.(e)},E=(e,i)=>{i!==t&&a?.(e,i)},f=e=>{e.key==="Enter"?a?.(e,!t):e.key===" "&&(e.preventDefault(),a?.(e,!t)),v?.(e)},{gestureHandlers:j}=b({onClick:w,onChange:E,onPointerCancel:u,onPointerDown:h,onPointerMove:k,onPointerUp:g});return n.jsxs("div",{ref:m,tabIndex:-1,...x,role:"menuitemcheckbox","aria-checked":t,className:M("jkl-menu-item","jkl-menu-item--checkbox",l),...j,onKeyDown:f,children:[r&&n.jsx("span",{className:"jkl-menu-item__icon",children:r}),n.jsx("div",{className:"jkl-menu-item__content",children:d}),n.jsx("div",{className:"jkl-toggle-switch",children:n.jsx("div",{className:"jkl-toggle-switch-widget",children:n.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[n.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),n.jsx(y,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})})]})});s.displayName="MenuItemCheckbox";s.__docgenInfo={description:"",methods:[],displayName:"MenuItemCheckbox",props:{"aria-checked":{required:!0,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:"Et ikon som vises før innholdet i menypunktet"},onChange:{required:!1,tsType:{name:"intersection",raw:`SwipeChangeHandler<HTMLDivElement> &
((
    event:
        | React.KeyboardEvent<HTMLDivElement>
        | React.PointerEvent<HTMLDivElement>,
    pressed: boolean,
) => void)`,elements:[{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLDivElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLDivElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},{name:"unknown"}]},description:""}},composes:["Omit"]};const H={title:"Komponenter/Menu/MenuItemCheckbox",component:s},o={args:{"aria-checked":!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-checked": false
  }
}`,...o.parameters?.docs?.source}}};const K=["MenuItemCheckbox"];export{o as MenuItemCheckbox,K as __namedExportsOrder,H as default};
