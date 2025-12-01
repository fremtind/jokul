import{R as e}from"./index-siqcju79.js";import{c as o}from"./clsx-B-dksMZM.js";import{A as m}from"./ArrowRightIcon-DtWkyDKW.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-mINJCSxV.js";const c=({className:t,...r})=>e.createElement("li",{className:o("jkl-link-list-item",t),...r}),d=e.forwardRef(function(r,s){const{as:a="a",children:l,className:L,...k}=r;return e.createElement(a,{className:o("jkl-link-list-link",L),ref:s,...k},l,e.createElement(m,{className:"jkl-link-list-link__arrow"}))}),n=({variant:t,className:r,...s})=>{const a=t==="ordered"?"ol":"ul";return e.createElement(a,{className:o("jkl-link-list",r,{"jkl-link-list--ordered":t==="ordered","jkl-link-list--unordered":t==="unordered"}),...s})};n.Link=d;n.Item=c;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const h={title:"Komponenter/LinkList",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},i={name:"LinkList",args:{variant:"unordered"},render:t=>e.createElement(n,{...t},e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"SpareBank 1")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"DNB")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"LOfavør")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"Norsk Sykepleierforbund")))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "LinkList",
  args: {
    variant: "unordered"
  },
  render: props => <LinkList {...props}>
            <LinkList.Item>
                <LinkList.Link href="#">SpareBank 1</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">DNB</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">LOfavør</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
            </LinkList.Item>
        </LinkList>
}`,...i.parameters?.docs?.source}}};const N=["LinkListStory"];export{i as LinkListStory,N as __namedExportsOrder,h as default};
