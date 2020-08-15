// const Config = require("./config");
// let { IntroduceText, Slide, Buttons, Report } = Config;
// console.log("Config", Config);

let IntroduceText = [
  '《英雄联盟》（英语：League of Legends，简称LoL）是由Riot Games开发及发行的一款多人在线战术擂台（MOBA）游戏，游戏为免费模式进行并提供付费道具服务。该游戏是受到《魔兽争霸III：冰封王座》中一个名为DotA第三方自定义地图启发而诞生，且至今仍不断定期更新。',
  '在《英雄联盟》里，玩家扮演一个不可见的召唤师，并操控具有独特能力的“英雄”与电脑AI或真人玩家控制的英雄对战，游戏通常的胜利目标是要摧毁对方的主要基地“水晶枢纽”，在每场游戏开始时，英雄是较弱的，但会随着游戏进展而升级。这些数值会在下一场游戏重新开始时重置。',
  '《英雄联盟》在电子竞技的领域里有着杰出的表现，自2011年起，在北美和欧洲，Riot Games分别在洛杉矶和柏林组织了英雄联盟全球总决赛，来自各地的十数个专业队伍在赛场上一决高下[6]，而香港、澳门、台湾、韩国、南美洲等地也举办过区域赛。在2016年的赛季的冠军战中，同时有1470万在线观看的观众，该届的总奖金超过500万美金，冠军奖金为200万美金。'
]
let Slide = [
  { img: './images/剑圣.jpg', alt: '剑圣' },
  { img: './images/皇子.jpg', alt: '皇子' },
  { img: './images/盖伦.jpg', alt: '盖伦' },
  { img: './images/赵信.jpg', alt: '赵信' }
]
let Buttons = ['./images/jshead.jpg', './images/hzhead.jpg', './images/glhead.jpg', './images/zxhead.jpg']
let Report =
  '德玛西亚是一个实力雄厚、奉公守法的国家，有着功勋卓著的光荣军史。这里非常重视正义、荣耀、职责的意识形态，这里的人民为此感到强烈自豪。德玛西亚是一个自给自足的农耕社会，肥沃的耕地、大片未砍伐的森林、以及矿产储量丰富的山脉遍及全境。德玛西亚继承着排外、封闭的传统，一部分原因是蛮族、盗匪、以及其他以侵略为本性的文明对其频繁地骚扰。有些人认为德玛西亚的黄金时代已经过去，除非它能够适应新时代的变化——很多人都认定绝无可能——否则它将不可避免地走向衰落。虽然存在争议，但德玛西亚依然是瓦洛兰大陆上最具统治性的政治势力之一，号称拥有整个符文之地上最为强悍精锐、训练有素的军队。'

let introduce = document.querySelector('.introduce')
let slide = document.querySelector('.slide')
let nav = document.querySelector('.nav')
let $images = $('#slide')
let $report = document.querySelector('.report')

let currentIndex = 0

function navRender() {
  nav.innerHTML = Buttons.map(
    (value, index) =>
      `<button onClick=selectIndex(${index})>
      <img src=${value} alt=""/>
      <div class="triangle ${currentIndex === index ? 'active' : null}"></div>
    </button>`
  )
}

function selectIndex(index) {
  currentIndex = index
  $images.css({ transform: `translateX(-${980 * index}px)` })
  navRender()
}

introduce.innerHTML = IntroduceText.map((value, index) => `<p>${value}</p>`)
slide.innerHTML = Slide.map((value, index) => `<img src=${value.img} alt=${value.alt} width=980 height=500/>`)
$report.innerHTML = `<p>${Report}</p>`

navRender()
