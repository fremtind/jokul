import{r as f,j as n,R as M}from"./iframe-DpQggxXa.js";import{c as b}from"./clsx-B-dksMZM.js";import{u as R}from"./useSwipeGesture-Bs5YTZhb.js";import{C as _}from"./CheckIcon-CNErncLl.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Icon-TEjXvEr4.js";const r=f.forwardRef((a,c)=>{const{"aria-checked":t,className:m,children:i,icon:d,onChange:o,onClick:h,onPointerCancel:u,onPointerDown:k,onPointerMove:p,onPointerUp:g,onKeyDown:v,...x}=a,C=e=>{e.preventDefault(),o?.(e,!t),h?.(e)},w=(e,l)=>{l!==t&&o?.(e,l)},j=e=>{e.key==="Enter"?o?.(e,!t):e.key===" "&&(e.preventDefault(),o?.(e,!t)),v?.(e)},{gestureHandlers:E}=R({onClick:C,onChange:w,onPointerCancel:u,onPointerDown:k,onPointerMove:p,onPointerUp:g});return n.jsxs("div",{ref:c,tabIndex:-1,...x,role:"menuitemcheckbox","aria-checked":t,className:b("jkl-menu-item","jkl-menu-item--checkbox",m),...E,onKeyDown:j,children:[d&&n.jsx("span",{className:"jkl-menu-item__icon",children:d}),n.jsx("div",{className:"jkl-menu-item__content",children:i}),n.jsx("div",{className:"jkl-toggle-switch",children:n.jsx("div",{className:"jkl-toggle-switch-widget",children:n.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[n.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),n.jsx(_,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})})]})});r.displayName="MenuItemCheckbox";r.__docgenInfo={description:"",methods:[],displayName:"MenuItemCheckbox",props:{"aria-checked":{required:!0,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:"Et ikon som vises før innholdet i menypunktet"},onChange:{required:!1,tsType:{name:"intersection",raw:`SwipeChangeHandler<HTMLDivElement> &
((
    event:
        | React.KeyboardEvent<HTMLDivElement>
        | React.PointerEvent<HTMLDivElement>,
    pressed: boolean,
) => void)`,elements:[{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLDivElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLDivElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},{name:"unknown"}]},description:""}},composes:["Omit"]};const S={title:"Komponenter/Menu/MenuItemCheckbox",component:r,args:{children:"Vis kun aktive forsikringer","aria-checked":!1}},s={name:"MenuItemCheckbox",render:a=>{const[c,t]=M.useState(a["aria-checked"]);return n.jsx(r,{...a,"aria-checked":c,onChange:(m,i)=>t(i)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "MenuItemCheckbox",
  render: args => {
    const [checked, setChecked] = React.useState(args["aria-checked"]);
    return <MenuItemCheckboxComponent {...args} aria-checked={checked} onChange={(_, val) => setChecked(val)} />;
  }
}`,...s.parameters?.docs?.source}}};const K=["Standard"];export{s as Standard,K as __namedExportsOrder,S as default};
