"use strict";!function(a){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={exports:{},id:e,loaded:!1};return a[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=a,o.c=t,o.p="",o(0)}({0:function(e,n,a){e.exports=a(103)},103:function(e,n){var a,t;a=jQuery,t=window,{init:function(){this.eventHandler()},eventHandler:function(){a(document).on("click","#doplayers",function(){var e=a("#url").val();e.match("//")?t.location.href="/page/play/index?url="+e:a.ajax({url:"/api/search?value="+e,dataType:"json",beforeSend:function(){a(".fa-search").hide(),a(".fa-spinner").show()},success:function(e){a(".fa-search").show(),a(".fa-spinner").hide(),e.data.movie&&e.data.movie,e.data.tv&&e.data.tv}})})}}.init()}});