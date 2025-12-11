import{j as n}from"./jsx-runtime-DqZpzl9T.js";import{R as m}from"./index-siqcju79.js";import{c as L}from"./clsx-B-dksMZM.js";import{A as d}from"./ArrowRightIcon-5VC2znaZ.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-DnRkF4CO.js";const c=({className:i,...r})=>n.jsx("li",{className:L("jkl-link-list-item",i),...r}),p=m.forwardRef(function(r,t){const{as:o="a",children:a,className:k,...l}=r;return n.jsxs(o,{className:L("jkl-link-list-link",k),ref:t,...l,children:[a,n.jsx(d,{className:"jkl-link-list-link__arrow"})]})}),e=({variant:i,className:r,...t})=>{const o=i==="ordered"?"ol":"ul";return n.jsx(o,{className:L("jkl-link-list",r,{"jkl-link-list--ordered":i==="ordered","jkl-link-list--unordered":i==="unordered"}),...t})};e.Link=p;e.Item=c;e.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const N={title:"Komponenter/LinkList",component:e,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},s={name:"LinkList",args:{variant:"unordered"},render:i=>n.jsxs(e,{...i,children:[n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"SpareBank 1"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"DNB"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"LOfavør"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Norsk Sykepleierforbund"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["LinkListStory"];export{s as LinkListStory,y as __namedExportsOrder,N as default};
