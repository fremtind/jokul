import{r as f,j as e,R as u}from"./iframe-gmoleg0b.js";import{c as B}from"./clsx-B-dksMZM.js";import{T as x}from"./Tag-agFRH6Is.js";import{B as l}from"./Button-Bi6cHMWR.js";import{F as j}from"./Flex-r3yzwbQ2.js";import{I as E}from"./Icon-Cju8NOZR.js";import{C as g}from"./Chip-D9xtswxq.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-C2cuT60W.js";import"./Loader-Bt-SOY2j.js";import"./useDelayedRender-C-QlwP2e.js";import"./SlotComponent-BFseyuIx.js";import"./mergeRefs-Dkdh_U9X.js";import"./CheckIcon-DyyPOhs_.js";import"./CloseIcon-Da0fNgMJ.js";function k(r,n){return Math.abs(r).toString().length<=n?r:`${10**n-1}+`}function _(r){return r===1?"Ett varsel":`${r} varsler`}const a=({className:r,children:n,count:t,digitThreshold:c=2,...h})=>{const p=`jkl-badge-${f.useId()}`;if(!t&&n)return e.jsx(e.Fragment,{children:n});if(!t&&!n)return null;if(t){const m=e.jsxs("div",{className:B("jkl-badge",r),"data-threshold":c,...h,id:p,children:[e.jsx("span",{"aria-hidden":"true",children:k(t,c)}),e.jsx("span",{className:"jkl-sr-only",children:_(t)})]});if(!n)return m;if(n&&u.isValidElement(n))return e.jsxs("div",{className:"jkl-badge__wrapper",children:[u.cloneElement(n,{"aria-describedby":p}),m]})}};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!1,type:{name:"number"}},digitThreshold:{defaultValue:{value:"2"},description:"Antall siffer som skal vises i badgen. Ved 0 vises bare en bitteliten prikk.",name:"digitThreshold",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Elementet bagden skal plasseres på. Må være kun ett element for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const L={title:"Komponenter/Badge",component:a,args:{count:1,digitThreshold:2}},s={},o={args:{count:void 0},render:r=>e.jsx(a,{...r,children:e.jsx(l,{children:"Eksempel"})})},i={args:{digitThreshold:0,count:120},render:r=>e.jsxs(x,{children:[e.jsx(a,{...r}),"Eksempel"]})},d={args:{count:23,digitThreshold:1},render:r=>e.jsxs(j,{direction:"column",gap:"l",children:[e.jsx(a,{...r,children:e.jsx(l,{children:"Eksempel"})}),e.jsx(a,{...r,children:e.jsx(l,{icon:e.jsx(E,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(a,{...r,children:e.jsx(g,{variant:"filter",children:"Eksempel"})}),e.jsx(a,{...r,children:e.jsx(g,{variant:"input",children:"Eksempel"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    digitThreshold: 0,
    count: 120
  },
  render: args => {
    return <Tag>
                <Badge {...args} />
                Eksempel
            </Tag>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    count: 23,
    digitThreshold: 1
  },
  render: args => {
    return <Flex direction="column" gap="l">
                <Badge {...args}>
                    <Button>Eksempel</Button>
                </Badge>
                <Badge {...args}>
                    <Button icon={<Icon>shopping_bag</Icon>} variant="ghost" aria-label="Handlekurv" />
                </Badge>
                <Badge {...args}>
                    <Chip variant="filter">Eksempel</Chip>
                </Badge>

                <Badge {...args}>
                    <Chip variant="input">Eksempel</Chip>
                </Badge>
            </Flex>;
  }
}`,...d.parameters?.docs?.source}}};const O=["_Badge","_BadgeNoCount","_BadgeDot","_BadgeOnComponents"];export{s as _Badge,i as _BadgeDot,o as _BadgeNoCount,d as _BadgeOnComponents,O as __namedExportsOrder,L as default};
