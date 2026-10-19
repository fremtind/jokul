import{r as y,j as e,R as E}from"./iframe-auPq4eww.js";import{c as f}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-DwhRarIl.js";import{T as b}from"./Tag-BIbx-i1g.js";import{F as B}from"./Flex-BKtrL2aI.js";import{I as t}from"./Icon-CgQ1I1gE.js";import{I}from"./IconButton-D977SdDb.js";import{C as h}from"./Chip-CVTvuju_.js";import{M as v}from"./Menu-BoDfMPBc.js";import{M as o}from"./MenuItem-PXnMbAfF.js";import{c as _,b as M,T as i,a as C}from"./TabPanel-BD7DXYU1.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-BHQyiaAg.js";import"./Loader-g1tCquug.js";import"./useDelayedRender-Bzazq5B9.js";import"./SlotComponent-DcPqF1Tn.js";import"./mergeRefs-B-my7ChD.js";import"./CheckIcon-DzuazRvv.js";import"./CloseIcon-6K0dSGrk.js";import"./floating-ui.react-E2jb9sJT.js";import"./index-DtAWTlns.js";import"./index-cvdoqCF1.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-Xs06kiCm.js";import"./ChevronRightIcon-_9b7omi5.js";import"./OpenInNewIcon-DAY4E7PO.js";function H(n,a){return n>a?`${a}+`:n}function N(n){return n===1?"Ett varsel":`${n} varsler`}const r=({className:n,children:a,count:d,max:F=99,dot:j,...S})=>{const k=`jkl-badge-${y.useId()}`;if(!d&&!j)return a??null;const T=e.jsxs("div",{className:f("jkl-badge",j&&"jkl-badge--dot",n),...S,id:k,children:[j||!d?null:e.jsx("span",{"aria-hidden":"true",children:H(d,F)}),d?e.jsx("output",{className:"jkl-sr-only",children:N(d)}):null]});return a?e.jsxs("div",{className:"jkl-badge__wrapper",children:[E.isValidElement(a)?E.cloneElement(a,{"aria-describedby":f(a.props["aria-describedby"],k)}):a,T]}):T};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!1,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},dot:{defaultValue:null,description:"Vis bare en liten prikk, uten tall. Antallet leses fortsatt opp av skjermlesere.",name:"dot",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet badgen skal plasseres på. Må være kun ett element for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}}}}}catch{}const oe={title:"Komponenter/Badge",component:r,args:{count:1}},l={},c={args:{count:void 0},render:n=>e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})})},u={args:{dot:!0,count:120},render:n=>e.jsxs(b,{children:[e.jsx(r,{...n}),"Eksempel"]})},m={args:{dot:!0,count:3},render:n=>e.jsxs(B,{direction:"column",gap:"l",children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(t,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(I,{"aria-label":"Handlekurv",children:e.jsx(t,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(h,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(h,{variant:"input",children:"Eksempel"})}),e.jsxs(b,{children:[e.jsx(r,{...n}),"Eksempel"]}),e.jsxs(v,{triggerElement:e.jsx(s,{icon:e.jsx(t,{children:"menu"}),variant:"ghost"}),children:[e.jsx(o,{children:"Forsikringer"}),e.jsx(o,{children:"Skadesaker"}),e.jsxs(o,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsxs(_,{children:[e.jsxs(M,{children:[e.jsx(i,{children:"Forsikringer"}),e.jsx(i,{children:"Skadesaker"}),e.jsxs(i,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsx(C,{children:"Test"})]})]})},p={args:{dot:!0,count:void 0},render:n=>e.jsxs(B,{direction:"column",gap:"l",children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsxs(b,{children:[e.jsx(r,{...n}),"Eksempel"]})]})},g={args:{count:120,max:50},render:n=>e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})})},x={args:{count:3,max:9},render:n=>e.jsxs(B,{direction:"column",gap:"l",children:[e.jsx(r,{...n,children:e.jsx(s,{children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(s,{icon:e.jsx(t,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(r,{...n,children:e.jsx(I,{"aria-label":"Handlekurv",children:e.jsx(t,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(h,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,children:e.jsx(h,{variant:"input",children:"Eksempel"})}),e.jsxs(v,{triggerElement:e.jsx(s,{icon:e.jsx(t,{children:"menu"}),variant:"ghost"}),children:[e.jsx(o,{children:"Forsikringer"}),e.jsx(o,{children:"Skadesaker"}),e.jsxs(o,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsxs(_,{children:[e.jsxs(M,{children:[e.jsx(i,{children:"Forsikringer"}),e.jsx(i,{children:"Skadesaker"}),e.jsxs(i,{children:[e.jsx(r,{...n}),"Tilbud"]})]}),e.jsx(C,{children:"Test"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dot: true,
    count: 120
  },
  render: args => {
    return <Tag>
                <Badge {...args} />
                Eksempel
            </Tag>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dot: true,
    count: 3
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

                <Tag>
                    <Badge {...args} />
                    Eksempel
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
                            <Badge {...args} />
                            Tilbud
                        </Tab>
                    </TabList>
                    <TabPanel>Test</TabPanel>
                </Tabs>
            </Flex>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dot: true,
    count: undefined
  },
  render: args => {
    return <Flex direction="column" gap="l">
                <Badge {...args}>
                    <Button>Eksempel</Button>
                </Badge>

                <Tag>
                    <Badge {...args} />
                    Eksempel
                </Tag>
            </Flex>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    max: 50
  },
  render: args => {
    return <Badge {...args}>
                <Button>Eksempel</Button>
            </Badge>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    max: 9
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
}`,...x.parameters?.docs?.source}}};const ie=["_Badge","_BadgeNoCount","_BadgeDot","_BadgeDotOnComponents","_BadgeDotNoCount","_BadgeCustomMax","_BadgeOnComponents"];export{l as _Badge,g as _BadgeCustomMax,u as _BadgeDot,p as _BadgeDotNoCount,m as _BadgeDotOnComponents,c as _BadgeNoCount,x as _BadgeOnComponents,ie as __namedExportsOrder,oe as default};
