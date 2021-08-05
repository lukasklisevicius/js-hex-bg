"use strict"

const bg = document.querySelector('body')
const hex = document.querySelector('span')
const btn = document.querySelector('button')

const hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"]

function getHex(){
    let hexStr = ""
    for(let i=0;i<6;i++){
        const random = Math.floor(Math.random()* hexArr.length)
        const randomHex = hexArr[random]
        hexStr += randomHex
    }
    return hexStr
}

function setValues(color){
    bg.style.backgroundColor = `#${color}` 
    hex.innerText = `${color}`
}

window.addEventListener('load', (e) => {
    const color = getHex()
    setValues(color)
})

btn.addEventListener('click', (e) => {
    const color = getHex()
    setValues(color)
})