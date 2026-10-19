import{r as B,j as e,R as x}from"./iframe-at0A36gf.js";import{c as k}from"./clsx-B-dksMZM.js";import{T as f}from"./Tag-l363tvOD.js";import{B as l}from"./Button-Bs3xHo9T.js";import{F as T}from"./Flex-xZa5dQsR.js";import{I as c}from"./Icon-C7HOc4ut.js";import{I as E}from"./IconButton-BWTkZBnm.js";import{C as b}from"./Chip-B1T3y8q3.js";import{M as _}from"./Menu-C40uMEn0.js";import{M as m}from"./MenuItem-DMCzC5Z_.js";import{c as v,b as I,T as p,a as M}from"./TabPanel-Cf9-WyQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-Cb6uJ4X9.js";import"./Loader-mJ3K2ikm.js";import"./useDelayedRender-9pCEKUCC.js";import"./SlotComponent-C8_ipteo.js";import"./mergeRefs-l7k8jEPc.js";import"./CheckIcon-CTDLBGR9.js";import"./CloseIcon-CM0BhXsS.js";import"./floating-ui.react-CR2MYBjl.js";import"./index-BM1WGdaH.js";import"./index-BwtSF_ee.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-CKI4vYqd.js";import"./ChevronRightIcon-Dmb8K3yy.js";import"./OpenInNewIcon-BbfqQkEM.js";function C(n,a){return Math.abs(n).toString().length<=a?n:`${10**a-1}+`}function y(n){return n===1?"Ett varsel":`${n} varsler`}const r=({className:n,children:a,count:s,digitThreshold:u=2,...j})=>{const g=`jkl-badge-${B.useId()}`;if(!s&&a)return e.jsx(e.Fragment,{children:a});if(!s&&!a)return null;if(s){const h=e.jsxs("div",{className:k("jkl-badge",n),"data-threshold":u,...j,id:g,children:[e.jsx("span",{"aria-hidden":"true",children:C(s,u)}),e.jsx("span",{className:"jkl-sr-only",children:y(s)})]});if(!a)return h;if(a&&x.isValidElement(a))return e.jsxs("div",{className:"jkl-badge__wrapper",children:[x.cloneElement(a,{"aria-describedby":g}),h]})}};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!1,type:{name:"number"}},digitThreshold:{defaultValue:{value:"2"},description:"Antall siffer som skal vises i badgen. Ved 0 vises bare en bitteliten prikk.",name:"digitThreshold",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Elementet bagden skal plasseres på. Må være kun ett element for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const re={title:"Komponenter/Badge",component:r,args:{count:1,digitThreshold:2}},t={},i={args:{count:void 0},render:n=>e.jsx(r,{...n,children:e.jsx(l,{children:"Eksempel"})})},o={args:{digitThreshold:0,count:120},render:n=>e.jsxs(f,{children:[e.jsx(r,{...n}),"Eksempel"]})},d={args:{count:3,digitThreshold:1},render:n=>e.jsxs(T,{direction:"column",gap:"l",children:[e.jsx(r,{...n,children:e.jsx(l,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(l,{icon:e.jsx(c,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(E,{"aria-label":"Handlekurv",children:e.jsx(c,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(b,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(b,{variant:"input",children:"Eksempel"})}),e.jsxs(_,{triggerElement:e.jsx(l,{icon:e.jsx(c,{children:"menu"}),variant:"ghost"}),children:[e.jsx(m,{children:"Forsikringer"}),e.jsx(m,{children:"Skadesaker"}),e.jsxs(m,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsxs(v,{children:[e.jsxs(I,{children:[e.jsx(p,{children:"Forsikringer"}),e.jsx(p,{children:"Skadesaker"}),e.jsxs(p,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsx(M,{children:"Test"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
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
                    <IconButton aria-label="Handlekurv">
                        <Icon>shopping_bag</Icon>
                    </IconButton>
                </Badge>
                <Badge {...args}>
                    <Chip variant="filter">Eksempel</Chip>
                </Badge>

                <Badge {...args}>
                    <Chip variant="input">Eksempel</Chip>
                </Badge>

                <Menu triggerElement={<Button icon={<Icon>menu</Icon>} variant="ghost" />}>
                    <MenuItem>Forsikringer</MenuItem>
                    <MenuItem>Skadesaker</MenuItem>
                    <MenuItem>
                        <Badge {...args} />
                        Tilbud
                    </MenuItem>
                </Menu>

                <Tabs>
                    <TabList>
                        <Tab>Forsikringer</Tab>
                        <Tab>Skadesaker</Tab>
                        <Tab>
                            <Badge {...args} />
                            Tilbud
                        </Tab>
                    </TabList>
                    <TabPanel>Test</TabPanel>
                </Tabs>
            </Flex>;
  }
}`,...d.parameters?.docs?.source}}};const ae=["_Badge","_BadgeNoCount","_BadgeDot","_BadgeOnComponents"];export{t as _Badge,o as _BadgeDot,i as _BadgeNoCount,d as _BadgeOnComponents,ae as __namedExportsOrder,re as default};
