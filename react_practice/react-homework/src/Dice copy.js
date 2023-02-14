import React from 'react'
import diceBlue1 from "./assets/dice-blue-1.svg"
import diceBlue2 from "./assets/dice-blue-2.svg"
import diceBlue3 from "./assets/dice-blue-3.svg"
import diceBlue4 from "./assets/dice-blue-4.svg"
import diceBlue5 from "./assets/dice-blue-5.svg"
import diceBlue6 from "./assets/dice-blue-6.svg"
import diceRed1 from "./assets/dice-red-1.svg"
import diceRed2 from "./assets/dice-red-2.svg"
import diceRed3 from "./assets/dice-red-3.svg"
import diceRed4 from "./assets/dice-red-4.svg"
import diceRed5 from "./assets/dice-red-5.svg"
import diceRed6 from "./assets/dice-red-6.svg"

const DICE_IMAGES ={ //변수명 대문자로 변하지않는 값이라고 표현하기도함
    blue:[diceBlue1,diceBlue2,diceBlue3,diceBlue4,diceBlue5,diceBlue6],
    red:[diceRed1,diceRed2,diceRed3,diceRed4,diceRed5,diceRed6]
}

export default function Dice({color, num}) {
    //console.log(props.color)
    //삼항 연사자로 값 넣기 (값이 두개일때 사용)
    //Dice(props){const diceImg = props.color ==='blue'? diceBlue1 : diceRed1;}
    //const diceImg = color ==='blue'? diceBlue1 : diceRed1;
    //console.log(DICE_IMAGES)
    //객체로 받아온 변수 지정하기
    const src = DICE_IMAGES[color][num-1]
    const alt =`${color}${num}`
    //출력문
    return (
        <div>
            <img src={src} alt={alt}/>      
        </div>
    )
}
