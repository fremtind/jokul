import{r as y,j as e,R as E}from"./iframe-ABcdBM4x.js";import{c as j}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-DA7P8ruy.js";import{T as k}from"./Tag-rDbXNcow.js";import{I as i}from"./Icon-rqmLYKzD.js";import{I as v}from"./IconButton-C0G7YTJg.js";import{C as x}from"./Chip-BAeiG1td.js";import{M as I}from"./Menu-BxaapCyE.js";import{M as o}from"./MenuItem-ClXdjSXC.js";import{c as _,b as f,T as d,a as C}from"./TabPanel-FRduu_sT.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-Btib2wbf.js";import"./Loader-CUu232pG.js";import"./useDelayedRender-DlL0OmmG.js";import"./CheckIcon-CheowkKc.js";import"./CloseIcon-2Bt_6pHd.js";import"./floating-ui.react-D2IlxFFg.js";import"./index-CmnmedM3.js";import"./index-BQxRadNp.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-Ccs_eMA2.js";import"./SlotComponent-DwkgwFPY.js";import"./mergeRefs-Da9QzCPw.js";import"./ChevronRightIcon-BOL3mW2C.js";import"./OpenInNewIcon-nbSkeOo7.js";function F(n,t){return n>t?`${t}+`:n}function b(n){return n===1?"Ett varsel":`${n} varsler`}const r=({className:n,children:t,count:a,max:M=99,hideCounter:B,...S})=>{const T=`jkl-badge-${y.useId()}`;return e.jsxs("div",{className:"jkl-badge__wrapper","data-count":a>0?a:0,title:a>0?b(a):void 0,children:[E.isValidElement(t)?E.cloneElement(t,{"aria-describedby":j(t.props["aria-describedby"],T),className:j(t.props.className,"jkl-badge-item")}):t,e.jsxs("div",{className:j("jkl-badge",B&&"jkl-badge--dot",n),title:b(a),...S,id:T,children:[B||!a?null:e.jsx("span",{"aria-hidden":"true",children:F(a,M)}),a?e.jsx("div",{className:"jkl-sr-only",children:b(a)}):null]})]})};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet badgen skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const ae={title:"Komponenter/Badge",component:r,args:{count:1,max:99}},l={},c={args:{count:0},render:n=>e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})})},u={args:{hideCounter:!0,count:120},render:n=>e.jsxs(k,{children:["Eksempel",e.jsx(r,{...n})]})},m={args:{hideCounter:!0,count:3},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(i,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(v,{"aria-label":"Handlekurv",children:e.jsx(i,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"input",children:"Eksempel"})}),e.jsxs(k,{children:["Eksempel",e.jsx(r,{...n})]}),e.jsxs(I,{triggerElement:e.jsx(s,{icon:e.jsx(i,{children:"menu"}),variant:"ghost"}),children:[e.jsx(o,{children:"Forsikringer"}),e.jsx(o,{children:"Skadesaker"}),e.jsxs(o,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsxs(_,{children:[e.jsxs(f,{children:[e.jsx(d,{children:"Forsikringer"}),e.jsx(d,{children:"Skadesaker"}),e.jsxs(d,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsx(C,{children:"Test"})]})]})},p={args:{hideCounter:!0,count:void 0},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsxs(k,{children:["Eksempel",e.jsx(r,{...n})]})]})},g={args:{count:120,max:50},render:n=>e.jsx(r,{...n,children:e.jsx(s,{className:"hei",children:"Eksempel"})})},h={args:{count:3,max:9},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(i,{children:"shopping_bag"}),variant:n.count>0?"primary":"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(v,{"aria-label":"Handlekurv",children:e.jsx(i,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(x,{variant:"input",children:"Eksempel"})}),e.jsxs(I,{triggerElement:e.jsx(s,{icon:e.jsx(i,{children:"menu"}),variant:"ghost"}),children:[e.jsx(o,{children:"Forsikringer"}),e.jsx(o,{children:"Skadesaker"}),e.jsxs(o,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsxs(_,{children:[e.jsxs(f,{children:[e.jsx(d,{children:"Forsikringer"}),e.jsx(d,{children:"Skadesaker"}),e.jsxs(d,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsx(C,{children:"Test"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    max: 50
  },
  render: args => {
    return <Badge {...args}>
                <Button className="hei">Eksempel</Button>
            </Badge>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const se=["_Badge","_BadgeNoCount","_BadgeDot","_BadgeDotOnComponents","_BadgeDotNoCount","_BadgeCustomMax","_BadgeOnComponents"];export{l as _Badge,g as _BadgeCustomMax,u as _BadgeDot,p as _BadgeDotNoCount,m as _BadgeDotOnComponents,c as _BadgeNoCount,h as _BadgeOnComponents,se as __namedExportsOrder,ae as default};
