import{r as F,j as e,R as v}from"./iframe-Cbeeo7Ic.js";import{c as j}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-CX1XSdDq.js";import{T as b}from"./Tag-BdXXHTUq.js";import{I as o}from"./Icon-u9eTAKHn.js";import{I as _}from"./IconButton-BeOtFctM.js";import{C as x}from"./Chip-Bc77YtFV.js";import{M as f}from"./Menu-B00q5QZd.js";import{M as i}from"./MenuItem-BihwobHC.js";import{c as C,b as M,T as d,a as y}from"./TabPanel-GRneXnBs.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-aT0IzFlJ.js";import"./Loader-C_4FyN7X.js";import"./useDelayedRender-DhfLyubH.js";import"./CheckIcon-BElEODnL.js";import"./CloseIcon-DA_3AQzP.js";import"./floating-ui.react-B8VUct3J.js";import"./index-Fd69VmAR.js";import"./index-CnBc8ycn.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-DChu90Eu.js";import"./SlotComponent-Br07Hy2p.js";import"./mergeRefs-ovFgSb0R.js";import"./ChevronRightIcon-D3joD53E.js";import"./OpenInNewIcon-BvvMDjly.js";function N(n,a){return n>a?`${a}+`:n}function H(n){return n===1?"Ett varsel":`${n} varsler`}const r=({className:n,children:a,count:t,max:S=99,hideCounter:k,...B})=>{const T=F.useId(),E=`jkl-badge-${T}`,I=`--jkl-badge-anchor-${T.replace(/[^a-z0-9]/gi,"")}`;return e.jsxs(e.Fragment,{children:[v.isValidElement(a)?v.cloneElement(a,{"aria-describedby":j(a.props["aria-describedby"],E),className:j(a.props.className,"jkl-badge-anchor"),style:{...a.props.style,"--jkl-badge-anchor-name":I}}):a,e.jsxs("div",{className:j("jkl-badge",k&&"jkl-badge--dot",n),"data-count":t>0?t:0,...B,style:{...B.style,"--jkl-badge-anchor-name":I},id:E,children:[k||!t?null:e.jsx("span",{"aria-hidden":"true",children:N(t,S)}),t?e.jsx("div",{className:"jkl-sr-only",children:H(t)}):null]})]})};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet badgen skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const te={title:"Komponenter/Badge",component:r,args:{count:1,max:99}},l={},c={args:{count:0},render:n=>e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})})},u={args:{hideCounter:!0,count:120},render:n=>e.jsxs(b,{children:["Eksempel",e.jsx(r,{...n})]})},m={args:{hideCounter:!0,count:3},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(o,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(_,{"aria-label":"Handlekurv",children:e.jsx(o,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"input",children:"Eksempel"})}),e.jsxs(b,{children:["Eksempel",e.jsx(r,{...n})]}),e.jsxs(f,{triggerElement:e.jsx(s,{icon:e.jsx(o,{children:"menu"}),variant:"ghost"}),children:[e.jsx(i,{children:"Forsikringer"}),e.jsx(i,{children:"Skadesaker"}),e.jsxs(i,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsxs(C,{children:[e.jsxs(M,{children:[e.jsx(d,{children:"Forsikringer"}),e.jsx(d,{children:"Skadesaker"}),e.jsxs(d,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsx(y,{children:"Test"})]})]})},g={args:{hideCounter:!0,count:void 0},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsxs(b,{children:["Eksempel",e.jsx(r,{...n})]})]})},p={args:{count:120,max:50},render:n=>e.jsx(r,{...n,children:e.jsx(s,{className:"hei",children:"Eksempel"})})},h={args:{count:3,max:9},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(o,{children:"shopping_bag"}),variant:n.count>0?"primary":"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(_,{"aria-label":"Handlekurv",children:e.jsx(o,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"input",children:"Eksempel"})}),e.jsxs(f,{triggerElement:e.jsx(s,{icon:e.jsx(o,{children:"menu"}),variant:"ghost"}),children:[e.jsx(i,{children:"Forsikringer"}),e.jsx(i,{children:"Skadesaker"}),e.jsxs(i,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsxs(C,{children:[e.jsxs(M,{children:[e.jsx(d,{children:"Forsikringer"}),e.jsx(d,{children:"Skadesaker"}),e.jsxs(d,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsx(y,{children:"Test"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hideCounter: true,
    count: 120
  },
  render: args => {
    return <Tag>
                Eksempel
                <Badge {...args} />
            </Tag>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    hideCounter: true,
    count: 3
  },
  render: args => {
    return <>
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

                <Tag>
                    Eksempel
                    <Badge {...args} />
                </Tag>

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
                            Tilbud
                            <Badge {...args} />
                        </Tab>
                    </TabList>
                    <TabPanel>Test</TabPanel>
                </Tabs>
            </>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    hideCounter: true,
    count: undefined
  },
  render: args => {
    return <>
                <Badge {...args}>
                    <Button>Eksempel</Button>
                </Badge>

                <Tag>
                    Eksempel
                    <Badge {...args} />
                </Tag>
            </>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    max: 50
  },
  render: args => {
    return <Badge {...args}>
                <Button className="hei">Eksempel</Button>
            </Badge>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    max: 9
  },
  render: args => {
    return <>
                <Badge {...args}>
                    <Button>Eksempel</Button>
                </Badge>
                <Badge {...args}>
                    <Button icon={<Icon>shopping_bag</Icon>} variant={args.count > 0 ? "primary" : "ghost"} aria-label="Handlekurv" />
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
                        Tilbud
                        <Badge {...args} />
                    </MenuItem>
                </Menu>

                <Tabs>
                    <TabList>
                        <Tab>Forsikringer</Tab>
                        <Tab>Skadesaker</Tab>
                        <Tab>
                            Tilbud
                            <Badge {...args} />
                        </Tab>
                    </TabList>
                    <TabPanel>Test</TabPanel>
                </Tabs>
            </>;
  }
}`,...h.parameters?.docs?.source}}};const oe=["_Badge","_BadgeNoCount","_BadgeDot","_BadgeDotOnComponents","_BadgeDotNoCount","_BadgeCustomMax","_BadgeOnComponents"];export{l as _Badge,p as _BadgeCustomMax,u as _BadgeDot,g as _BadgeDotNoCount,m as _BadgeDotOnComponents,c as _BadgeNoCount,h as _BadgeOnComponents,oe as __namedExportsOrder,te as default};
