import{R as e}from"./index-siqcju79.js";import{c as o}from"./clsx-B-dksMZM.js";import{A as k}from"./ArrowRightIcon-DtWkyDKW.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-mINJCSxV.js";const c=({className:t,...i})=>e.createElement("li",{className:o("jkl-link-list-item",t),...i}),d=e.forwardRef(function(i,s){const{as:a="a",children:l,className:L,...m}=i;return e.createElement(a,{className:o("jkl-link-list-link",L),ref:s,...m},l,e.createElement(k,{className:"jkl-link-list-link__arrow"}))}),n=({variant:t,className:i,...s})=>{const a=t==="ordered"?"ol":"ul";return e.createElement(a,{className:o("jkl-link-list",i,{"jkl-link-list--ordered":t==="ordered","jkl-link-list--unordered":t==="unordered"}),...s})};n.Link=d;n.Item=c;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const h={title:"Komponenter/List/LinkList",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},r={name:"LinkList",args:{variant:"unordered"},render:t=>e.createElement(n,{style:{minWidth:"50vw"},...t},e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"SpareBank 1")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"DNB")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"LOfavør")),e.createElement(n.Item,null,e.createElement(n.Link,{href:"#"},"Norsk Sykepleierforbund")))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "LinkList",
  args: {
    variant: "unordered"
  },
  render: props => <LinkList style={{
    minWidth: "50vw"
  }} {...props}>
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
}`,...r.parameters?.docs?.source}}};const N=["LinkListStory"];export{r as LinkListStory,N as __namedExportsOrder,h as default};
