import MatrixDetails from "../Components/MatrixDetails";
import React, { useEffect } from 'react';

function Show() {
    useEffect(() => {
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: : ア エ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ  マ メ ム メ モ ラ リ ル レ ロ ハ ヒ フ ヘ ホ ヤ ユ ヨ ";
        let matrix = str.split("");
        let font = 12;
        let col = width / font;
        let arr = [];
    
        for(let i = 0; i < col; i++) {
            arr[i] = 1;
        }
    
        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "#00FF00";
            ctx.font = `${font}px system-ui`;
    
            for(let i = 0; i < arr.length; i++) {
                let txt = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(txt, i * font, arr[i] * font);
    
                if(arr[i] * font > height && Math.random() > 0.975) {
                    arr[i] = 0;
                }
                arr[i]++;
            }
        }
    
        const handleResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          col = width / font;
          arr = [];
      
          for(let i = 0; i < col; i++) {
              arr[i] = 1;
          }
        }
    
        const intervalId = setInterval(draw, 20);
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          clearInterval(intervalId);
          window.removeEventListener("resize", handleResize);
        };
      }, []); 
  return (
    <div className="Show">
      {/* <h2>Show</h2> */}
      <canvas className="background"></canvas>
      <MatrixDetails />
    </div>
  );
}

export default Show;