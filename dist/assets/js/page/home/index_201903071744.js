"use strict";!function(a){var t={};function o(n){if(t[n])return t[n].exports;var e=t[n]={exports:{},id:n,loaded:!1};return a[n].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}o.m=a,o.c=t,o.p="",o(0)}({0:function(n,e,a){n.exports=a(102)},101:function(n,e){var a,t;a=jQuery,t=window,{init:function(){this.eventHandler()},eventHandler:function(){a(document).on("click","#doplayers",function(){var n=a("#url").val();n.match("//")?t.location.href="/page/play/index?url="+n:a.ajax({url:"/api/search?value="+n,dataType:"json",beforeSend:function(){a(".fa-search").hide(),a(".fa-spinner").show()},success:function(n){a(".fa-search").show(),a(".fa-spinner").hide(),n.data.movie&&n.data.movie,n.data.tv&&n.data.tv}})})}}.init()},102:function(n,e,a){a(101)}});