"use strict";!function i(o,u,f){function c(n,e){if(!u[n]){if(!o[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(s)return s(n,!0);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}var a=u[n]={exports:{}};o[n][0].call(a.exports,function(e){return c(o[n][1][e]||e)},a,a.exports,i,o,u,f)}return u[n].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,n,r){var t,a;t=jQuery,a=window,{init:function(){this.eventHandler()},eventHandler:function(){t(document).on("click","#doplayers",function(){var e=t("#url").val();e.match("//")?a.location.href="/page/play/index?url="+e:t.ajax({url:"/api/search?value="+e,dataType:"json",beforeSend:function(){t(".fa-search").hide(),t(".fa-spinner").show()},success:function(e){t(".fa-search").show(),t(".fa-spinner").hide(),e.data.movie&&e.data.movie,e.data.tv&&e.data.tv}})})}}.init()},{}]},{},[1]);