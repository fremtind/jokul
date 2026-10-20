import{r as F,j as n,R as v}from"./iframe-HeAoTjxL.js";import{c as x}from"./clsx-B-dksMZM.js";import{B as t}from"./Button-4JZBiw3Y.js";import{T as j}from"./Tag-DfnuUXtJ.js";import{I as o}from"./Icon-CkrVP4zP.js";import{I as _}from"./IconButton-hL6DSFSY.js";import{C as g}from"./Chip-xOljxBkO.js";import{M as C}from"./Menu-BR6aOmKw.js";import{M as s}from"./MenuItem-DmskvMuJ.js";import{c as M,b as B,T as c,a as y}from"./TabPanel-DGNjcWGA.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-9zwt1B82.js";import"./Loader-C0ursb12.js";import"./useDelayedRender-DC0HOzfO.js";import"./CheckIcon-BN5Soatx.js";import"./CloseIcon-BZutM23e.js";import"./floating-ui.react-C_-_AQlH.js";import"./index-ChrKN3wT.js";import"./index-BVwE4JJ4.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-BVZYOZ5D.js";import"./SlotComponent--_2OLCEg.js";import"./mergeRefs-BhjjjFeI.js";import"./ChevronRightIcon-D9fE_MvC.js";import"./OpenInNewIcon-Cd5tMdqV.js";function H(e,r){return e>r?`${r}+`:e}function I(e){return e===1?"Ett varsel":`${e} varsler`}const i=({className:e,children:r,count:a,max:S=99,hideCounter:k,...b})=>{const N=F.useId(),T=`jkl-notification-${N}`,E=`--jkl-notification-anchor-${N.replace(/[^a-z0-9]/gi,"")}`;return n.jsxs(n.Fragment,{children:[v.isValidElement(r)?v.cloneElement(r,{"aria-describedby":x(r.props["aria-describedby"],T),className:x(r.props.className,"jkl-notification-anchor"),style:{...r.props.style,"--jkl-notification-anchor-name":E}}):r,n.jsxs("div",{className:x("jkl-notification",k&&"jkl-notification--dot",e),"data-count":a>0?a:0,title:a>0?I(a):void 0,...b,style:{...b.style,"--jkl-notification-anchor-name":E},id:T,children:[k||!a?null:n.jsx("span",{"aria-hidden":"true",children:H(a,S)}),a?n.jsx("div",{className:"jkl-sr-only",children:I(a)}):null]})]})};try{i.displayName="Notification",i.__docgenInfo={description:"",displayName:"Notification",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const on={title:"Komponenter/Notification",component:i,args:{count:1,max:99}},l={},u={args:{count:0},render:e=>n.jsx(i,{...e,children:n.jsx(t,{children:"Eksempel"})})},d={args:{hideCounter:!0,count:120},render:e=>n.jsxs(j,{children:["Eksempel",n.jsx(i,{...e})]})},m={args:{hideCounter:!0,count:3},render:e=>n.jsxs(n.Fragment,{children:[n.jsx(i,{...e,children:n.jsx(t,{children:"Eksempel"})}),n.jsx(i,{...e,children:n.jsx(t,{icon:n.jsx(o,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),n.jsx(i,{...e,children:n.jsx(_,{"aria-label":"Handlekurv",children:n.jsx(o,{children:"shopping_bag"})})}),n.jsx(i,{...e,children:n.jsx(g,{variant:"filter",children:"Eksempel"})}),n.jsx(i,{...e,children:n.jsx(g,{variant:"input",children:"Eksempel"})}),n.jsxs(j,{children:["Eksempel",n.jsx(i,{...e})]}),n.jsxs(C,{triggerElement:n.jsx(t,{icon:n.jsx(o,{children:"menu"}),variant:"ghost"}),children:[n.jsx(s,{children:"Forsikringer"}),n.jsx(s,{children:"Skadesaker"}),n.jsxs(s,{children:[n.jsx(i,{...e}),"Tilbud"]})]}),n.jsxs(M,{children:[n.jsxs(B,{children:[n.jsx(c,{children:"Forsikringer"}),n.jsx(c,{children:"Skadesaker"}),n.jsxs(c,{children:["Tilbud",n.jsx(i,{...e})]})]}),n.jsx(y,{children:"Test"})]})]})},p={args:{hideCounter:!0,count:void 0},render:e=>n.jsxs(n.Fragment,{children:[n.jsx(i,{...e,children:n.jsx(t,{children:"Eksempel"})}),n.jsxs(j,{children:["Eksempel",n.jsx(i,{...e})]})]})},h={args:{count:120,max:50},render:e=>n.jsx(i,{...e,children:n.jsx(t,{className:"hei",children:"Eksempel"})})},f={args:{count:3,max:9},render:e=>n.jsxs(n.Fragment,{children:[n.jsx(i,{...e,children:n.jsx(t,{children:"Eksempel"})}),n.jsx(i,{...e,children:n.jsx(t,{icon:n.jsx(o,{children:"shopping_bag"}),variant:e.count>0?"primary":"ghost","aria-label":"Handlekurv"})}),n.jsx(i,{...e,children:n.jsx(_,{"aria-label":"Handlekurv",children:n.jsx(o,{children:"shopping_bag"})})}),n.jsx(i,{...e,children:n.jsx(g,{variant:"filter",children:"Eksempel"})}),n.jsx(i,{...e,children:n.jsx(g,{variant:"input",children:"Eksempel"})}),n.jsxs(C,{triggerElement:n.jsx(t,{icon:n.jsx(o,{children:"menu"}),variant:"ghost"}),children:[n.jsx(s,{children:"Forsikringer"}),n.jsx(s,{children:"Skadesaker"}),n.jsxs(s,{children:["Tilbud",n.jsx(i,{...e})]})]}),n.jsxs(M,{children:[n.jsxs(B,{children:[n.jsx(c,{children:"Forsikringer"}),n.jsx(c,{children:"Skadesaker"}),n.jsxs(c,{children:["Tilbud",n.jsx(i,{...e})]})]}),n.jsx(y,{children:"Test"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  },
  render: args => {
    return <Notification {...args}>
                <Button>Eksempel</Button>
            </Notification>;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hideCounter: true,
    count: 120
  },
  render: args => {
    return <Tag>
                Eksempel
                <Notification {...args} />
            </Tag>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    hideCounter: true,
    count: 3
  },
  render: args => {
    return <>
                <Notification {...args}>
                    <Button>Eksempel</Button>
                </Notification>
                <Notification {...args}>
                    <Button icon={<Icon>shopping_bag</Icon>} variant="ghost" aria-label="Handlekurv" />
                </Notification>
                <Notification {...args}>
                    <IconButton aria-label="Handlekurv">
                        <Icon>shopping_bag</Icon>
                    </IconButton>
                </Notification>
                <Notification {...args}>
                    <Chip variant="filter">Eksempel</Chip>
                </Notification>

                <Notification {...args}>
                    <Chip variant="input">Eksempel</Chip>
                </Notification>

                <Tag>
                    Eksempel
                    <Notification {...args} />
                </Tag>

                <Menu triggerElement={<Button icon={<Icon>menu</Icon>} variant="ghost" />}>
                    <MenuItem>Forsikringer</MenuItem>
                    <MenuItem>Skadesaker</MenuItem>
                    <MenuItem>
                        <Notification {...args} />
                        Tilbud
                    </MenuItem>
                </Menu>

                <Tabs>
                    <TabList>
                        <Tab>Forsikringer</Tab>
                        <Tab>Skadesaker</Tab>
                        <Tab>
                            Tilbud
                            <Notification {...args} />
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
                <Notification {...args}>
                    <Button>Eksempel</Button>
                </Notification>

                <Tag>
                    Eksempel
                    <Notification {...args} />
                </Tag>
            </>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    max: 50
  },
  render: args => {
    return <Notification {...args}>
                <Button className="hei">Eksempel</Button>
            </Notification>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    max: 9
  },
  render: args => {
    return <>
                <Notification {...args}>
                    <Button>Eksempel</Button>
                </Notification>
                <Notification {...args}>
                    <Button icon={<Icon>shopping_bag</Icon>} variant={args.count > 0 ? "primary" : "ghost"} aria-label="Handlekurv" />
                </Notification>
                <Notification {...args}>
                    <IconButton aria-label="Handlekurv">
                        <Icon>shopping_bag</Icon>
                    </IconButton>
                </Notification>
                <Notification {...args}>
                    <Chip variant="filter">Eksempel</Chip>
                </Notification>

                <Notification {...args}>
                    <Chip variant="input">Eksempel</Chip>
                </Notification>

                <Menu triggerElement={<Button icon={<Icon>menu</Icon>} variant="ghost" />}>
                    <MenuItem>Forsikringer</MenuItem>
                    <MenuItem>Skadesaker</MenuItem>
                    <MenuItem>
                        Tilbud
                        <Notification {...args} />
                    </MenuItem>
                </Menu>

                <Tabs>
                    <TabList>
                        <Tab>Forsikringer</Tab>
                        <Tab>Skadesaker</Tab>
                        <Tab>
                            Tilbud
                            <Notification {...args} />
                        </Tab>
                    </TabList>
                    <TabPanel>Test</TabPanel>
                </Tabs>
            </>;
  }
}`,...f.parameters?.docs?.source}}};const sn=["_Notification","_NotificationNoCount","_NotificationDot","_NotificationDotOnComponents","_NotificationDotNoCount","_NotificationCustomMax","_NotificationOnComponents"];export{l as _Notification,h as _NotificationCustomMax,d as _NotificationDot,p as _NotificationDotNoCount,m as _NotificationDotOnComponents,u as _NotificationNoCount,f as _NotificationOnComponents,sn as __namedExportsOrder,on as default};
