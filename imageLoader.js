function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawPattern(){

	  var canvas = document.getElementById("pattern");
    var ctx = canvas.getContext("2d");
    var rand = ['#0000ff', '#1919ff', '#3232ff', '#4c4cff', '#6666ff', '#7f7fff', '#9999ff', '#b2b2ff', '#ccccff', '#e5e5ff', '#ffffff'];
    	
    
	  var canvas2 = document.getElementById("fgCanvas");
    var dataURL = canvas2.toDataURL("image/jpg");
    dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    console.log(dataURL);
    
    // Find upscale ratio: //
    var ratio = 1;
    if(ctx.webkitBackingStorePixelRatio < 2)
    {
      // default to 1 if property not set //
      ratio = window.devicePixelRatio || 1;
    }
    ctx.save();
    ctx.scale(ratio, ratio);
    var color = rand[Math.floor((Math.random() * 10 | 0))];
    var i = 0;
    var j = 0;
    
    for (i = 0;i < canvas.width*ratio; i++)
    {
        for(j = 0; j < canvas.height*ratio; j++) {
            color = rand[Math.floor((Math.random() * 10 | 0))];
            ctx.fillStyle = color;
            ctx.font = 'italic 1px Calibri';
            ctx.fillText(dataURL[i+j],i,j);
            //ctx.fillRect(i, j, 1, 1);
        }
    }
    ctx.restore();
}

function animate() {
    
    var richtung = 0;

    var d = document.getElementById("bgCanvas");
    ctxd = d.getContext("2d");
    
    var img = document.getElementById("pattern");
    
 	// Velocity X
    var vx = 0;
    var speed = 0.05;

    (function renderGame() {
        window.requestAnimationFrame(renderGame);

        ctxd.clearRect(0, 0, ctxd.width, ctxd.height);

        ctxd.fillRect(0, 0, ctxd.width, ctxd.height);
		
        switch(richtung) {
            case 0:
                ctxd.drawImage(img, vx, 0);
                ctxd.drawImage(img, img.width - Math.abs(vx), 0);
                if (Math.abs(vx) > img.width) {
                    vx = 0;
                }
                vx -= speed;
                break;
            case 1:
                ctxd.drawImage(img,0 , vx);
                ctxd.drawImage(img,0 ,img.width - Math.abs(vx) );
                if (Math.abs(vx) > img.width) {
                    vx = 0;
                }
                vx -= speed;
                break;
            case 2:
                ctxd.drawImage(img,0 , vx);
                ctxd.drawImage(img,0 ,img.width - Math.abs(vx) );
                if (Math.abs(vx) > img.width) {
                    vx = 0;
                }
                vx += speed;
                break;
            case 3:
                ctxd.drawImage(img,0 , vx);
                ctxd.drawImage(img,0 ,img.width + Math.abs(vx) );
                if (Math.abs(vx) > img.width) {
                    vx = 0;
                }
                vx += speed;
                break;
            default:
            break;
        }



    }());
    
}

function drawImageToCanvas(selector, imageSrc, opac, show){
    var canvas = document.getElementById(selector);
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        ctx.globalAlpha = opac;
        ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
		
        var image = new Image();
      	
      	image.src = imageSrc;
      	
      	image.onload = function() {
        	ctx.drawImage(image, 0, 0, image.width, image.height,    // source rectangle
                   0, 0, canvas.width, canvas.height  // destination rectangle
            );
          if(show){
            window.setTimeout(function(){
                $('canvas').fadeIn('slow');
            },2000);
          }
      	};
    }
}
