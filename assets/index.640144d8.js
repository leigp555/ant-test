import{d,U as p,c as f,w as a,r as _,_ as m,o as y,a as i,b as h,B as g,e as v}from"./vendor.a9d62313.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};w();var O=(s,t)=>{const n=s.__vccOpts||s;for(const[r,e]of t)n[r]=e;return n};const b=d({components:{UploadOutlined:p}}),L=h(" Upload Directory ");function N(s,t,n,r,e,o){const c=_("upload-outlined"),l=g,u=m;return y(),f(u,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",directory:""},{default:a(()=>[i(l,null,{default:a(()=>[i(c),L]),_:1})]),_:1})}var k=O(b,[["render",N]]);v(k).mount("#app");
