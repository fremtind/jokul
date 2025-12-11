import{j as n}from"./jsx-runtime-BOJBhsC5.js";import{R as m}from"./index-Bv6P490N.js";import{c as o}from"./clsx-B-dksMZM.js";import{A as d}from"./ArrowRightIcon-C_o9Sh9n.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-DYEEOjBa.js";const c=({className:r,...i})=>n.jsx("li",{className:o("jkl-link-list-item",r),...i}),p=m.forwardRef(function(i,t){const{as:a="a",children:k,className:L,...l}=i;return n.jsxs(a,{className:o("jkl-link-list-link",L),ref:t,...l,children:[k,n.jsx(d,{className:"jkl-link-list-link__arrow"})]})}),e=({variant:r,className:i,...t})=>{const a=r==="ordered"?"ol":"ul";return n.jsx(a,{className:o("jkl-link-list",i,{"jkl-link-list--ordered":r==="ordered","jkl-link-list--unordered":r==="unordered"}),...t})};e.Link=p;e.Item=c;e.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const S={title:"Komponenter/LinkList",component:e,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},s={name:"LinkList",args:{variant:"unordered"},render:r=>n.jsxs(e,{...r,children:[n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"SpareBank 1 SpareBank 2 SpareBank 3 SpareBank 4 SpareBank 5 SpareBank 6"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"DNB"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"LOfavør"})}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Norsk Sykepleierforbund"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "LinkList",
  args: {
    variant: "unordered"
  },
  render: props => <LinkList {...props}>
            <LinkList.Item>
                <LinkList.Link href="#">
                    SpareBank 1 SpareBank 2 SpareBank 3 SpareBank 4 SpareBank 5
                    SpareBank 6
                </LinkList.Link>
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
}`,...s.parameters?.docs?.source}}};const B=["LinkListStory"];export{s as LinkListStory,B as __namedExportsOrder,S as default};
