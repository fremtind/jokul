import{r as j,j as e,R as u}from"./iframe-BTNDLQS0.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as d}from"./Button-CluMO73U.js";import{F as p}from"./Flex-Bb1xMqmm.js";import{T as g}from"./Title-BdvqiRQK.js";import{I as f}from"./Icon--nJMA7m6.js";import{C as s}from"./Chip-Rgxqvisd.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-DI-nEpjM.js";import"./Loader-CgoaFSIi.js";import"./useDelayedRender-FyDY47co.js";import"./SlotComponent-X-Ck8yzz.js";import"./mergeRefs-CYfDLgu2.js";import"./CheckIcon-DwF-uOkW.js";import"./CloseIcon-CTnmS9TH.js";function E(n,a){return Math.abs(n).toString().length<=a?n:`${10**a-1}+`}function k(n){return n===1?"Ett varsel":`${n} varsler`}const r=({className:n,children:a,count:t,digitThreshold:h=2,...x})=>{const c=`jkl-badge-${j.useId()}`;if(!t&&a)return e.jsx(e.Fragment,{children:a});if(t){const m=e.jsxs("div",{className:B("jkl-badge",n),...x,id:c,children:[e.jsx("span",{"aria-hidden":"true",children:E(t,h)}),e.jsx("span",{className:"jkl-sr-only",children:k(t)})]});if(!a)return m;if(u.isValidElement(a))return e.jsxs("div",{className:"jkl-badge__wrapper",children:[u.cloneElement(a,{"aria-describedby":c}),m]})}};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!1,type:{name:"number"}},digitThreshold:{defaultValue:{value:"2"},description:"Antall nummer som skal vises i badgen",name:"digitThreshold",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Elementet bagden skal plasseres på. Må være kun ett element for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const A={title:"Komponenter/Badge",component:r,args:{count:1,digitThreshold:2}},i={},l={args:{count:void 0},render:n=>e.jsx(r,{...n,children:e.jsx(d,{children:"Eksempel"})})},o={args:{count:23,digitThreshold:1},render:n=>e.jsxs(p,{gap:"xl",children:[e.jsxs(p,{direction:"column",gap:"l",children:[e.jsx(g,{children:"Utenpå"}),e.jsx(r,{...n,children:e.jsx(d,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(d,{icon:e.jsx(f,{children:"shopping_cart"}),"aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(s,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{variant:"input",children:"Eksempel"})})]}),e.jsxs(p,{direction:"column",gap:"l",children:[e.jsx(g,{children:"Inni?"}),e.jsx("div",{children:e.jsxs(s,{variant:"filter",children:[e.jsx(r,{...n})," Eksempel"]})}),e.jsx("div",{children:e.jsxs(s,{variant:"input",children:[e.jsx(r,{...n})," Eksempel"]})}),e.jsxs(d,{children:[e.jsx(r,{...n}),"Eksempel"]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 23,
    digitThreshold: 1
  },
  render: args => {
    return <Flex gap="xl">
                <Flex direction="column" gap="l">
                    <Title>Utenpå</Title>
                    <Badge {...args}>
                        <Button>Eksempel</Button>
                    </Badge>
                    <Badge {...args}>
                        <Button icon={<Icon>shopping_cart</Icon>} aria-label="Handlekurv" />
                    </Badge>
                    <Badge {...args}>
                        <Chip variant="filter">Eksempel</Chip>
                    </Badge>

                    <Badge {...args}>
                        <Chip variant="input">Eksempel</Chip>
                    </Badge>
                </Flex>
                <Flex direction="column" gap="l">
                    <Title>Inni?</Title>
                    <div>
                        <Chip variant="filter">
                            <Badge {...args} /> Eksempel
                        </Chip>
                    </div>

                    <div>
                        <Chip variant="input">
                            <Badge {...args} /> Eksempel
                        </Chip>
                    </div>

                    <Button>
                        <Badge {...args} />
                        Eksempel
                    </Button>
                </Flex>
            </Flex>;
  }
}`,...o.parameters?.docs?.source}}};const L=["_Badge","_BadgeNoCount","_BadgeOnComponents"];export{i as _Badge,l as _BadgeNoCount,o as _BadgeOnComponents,L as __namedExportsOrder,A as default};
