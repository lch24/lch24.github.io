import control from "./control.js";
import color from"./color.js"
const bdg=document.createElement("canvas");
bdg.width=1600;
bdg.height=900;
bdg.id="bridge";
document.body.append(bdg);
export const ctx1=bdg.getContext("2d");
const Bridge={
    position:[0,0],
    button:[],
    draw(){
        let lst=control.convert(this.position[0],this.position[1]);
        ctx1.save();
        ctx1.fillStyle=color.getDarkColor("#CDCDC1",0.3);   
        ctx1.transform(1,1.36, 0, 1, lst[0],lst[1]);
        ctx1.fillRect(0, 0,24,10);
        ctx1.restore();
        ctx1.save(); 
        ctx1.fillStyle=color.getLightColor("#CDCDC1",0.2);  
        ctx1.transform(1.2,0,0.785, 1, lst[0],lst[1]);
        ctx1.fillRect(0, 0,67,31.8);
        ctx1.restore();
        ctx1.save(); 
        ctx1.fillStyle="#CDCDC1"; 
        ctx1.translate(lst[0]+24,lst[1]+32);
        ctx1.fillRect( 0, 0,80,10);
        ctx1.restore();
    } , 
    clear(){
        ctx1.clearRect(0,0,1600,900);
    },
}
export default Bridge;