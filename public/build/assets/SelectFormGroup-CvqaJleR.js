import{j as s}from"./AboutHeader-CpM0iYLI.js";import{r as m}from"./index-B80Lgev0.js";const d=({id:r,col:o,className:n,label:t,specification:l,eRef:e,required:a=!1,children:x,dropdownParent:c,noMargin:f=!1,multiple:j=!1,disabled:u=!1,onChange:h=()=>{},templateResult:i,templateSelection:p})=>(e||(e=m.useRef()),r||(r=`select-${crypto.randomUUID()}`),m.useEffect(()=>{$(e.current).select2({dropdownParent:c,templateResult:i,templateSelection:p}),$(e.current).on("change",h)},[c]),s.jsxs("div",{className:`form-group ${o} ${!f&&"mb-2"}`,children:[s.jsx("label",{htmlFor:r,className:"form-label mb-1",children:t&&s.jsxs(s.Fragment,{children:[t," ",a&&s.jsx("b",{className:"text-danger",children:"*"}),l&&s.jsx(Tippy,{content:l,children:s.jsx("small",{className:"ms-1 fa fa-question-circle text-muted"})})]})}),s.jsx("select",{ref:e,id:r,required:a,className:`form-control ${n}`,style:{width:"100%"},disabled:u,multiple:j,children:x})]}));export{d as S};