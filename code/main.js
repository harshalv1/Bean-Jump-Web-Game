import kaplay from "kaplay";

const k=kaplay({
    width:1280,
    height:720,
})

k.loadBean();
k.setGravity(2000);

const player=k.add([k.sprite("bean"),k.pos(k.center()),k.area(),k.body(),k.offscreen()])

k.add([k.rect(k.width(),300),k.pos(0,500),k.area(),k.body({isStatic:true}),k.outline(3)])

player.onKeyPress("space",()=>{
    if (player.isGrounded())player.jump()
})

let counter=0
const counterUI=k.add([k.text("0")])

player.onExitScreen(()=>{
    k.go("game over")
})

k.scene("game over",()=>{
    k.add([k.text("Game Over!"),k.pos(k.center())])
})

k.loop(1,()=>{
    counter++;
    counterUI.text=counter;
    const speeds=[300,500,800,1000,1500]
    const curr_speed=speeds[Math.floor(Math.random()*speeds.length)]
    k.add([k.rect(50,50),k.pos(1000,500),k.area(),k.body(),k.outline(),k.move(k.vec2(-1,0),curr_speed)])
})