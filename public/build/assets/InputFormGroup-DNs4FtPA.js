import{j as s}from"./AboutHeader-DEdD30eg.js";import"./index-RYns6xqu.js";const b=({col:a,label:e,eRef:o,type:l="text",placeholder:m,required:r=!1,disabled:n=!1,readOnly:c=!1,value:i,min:p,max:u,step:x,onChange:d=()=>{}})=>{const t="input-"+crypto.randomUUID();return s.jsxs("div",{className:`form-group ${a} mb-2`,children:[s.jsxs("label",{htmlFor:t,className:"mb-1",children:[e," ",r&&s.jsx("b",{className:"text-danger",children:"*"})]}),s.jsx("input",{ref:o,id:t,type:l,className:"form-control",placeholder:m,required:r,disabled:n,readOnly:c,defaultValue:i??"",step:x,onChange:d,min:p,max:u})]})};export{b as I};