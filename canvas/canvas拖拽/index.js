const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const circles = [];


const statusConfig = {
    IDLE: 0,
    DRAG_START: 1,
    DRAGGING: 2,
}


const canvasInfo = {
    status: statusConfig.IDLE,
    target: null,
    lastPosition: null,
}

const drawCircle = function (ctx, x, y, radius) {
    ctx.save();
    ctx.beginPath(); // clear paths before drawing
    ctx.arc(x, y, radius, 0, Math.PI*2, true);

    ctx.stroke();
    ctx.closePath(); // connect last point with the start of the paths
    ctx.restore();
}

drawCircle(ctx, 100, 100, 50);
drawCircle(ctx, 200, 200, 20);
circles.push({
    x: 100,
    y: 100,
    r: 50,
})
circles.push({
    x: 200,
    y: 200,
    r: 20,
})

const getCanvasPosition = e => {
    return {
        x: e.offsetX,
        y: e.offsetY,
    }
}

const getDistance = (x1,y1,x2,y2) => {
    return Math.sqrt( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) );
}

const ifInCircle = function (pos) {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        if ( getDistance(pos.x, pos.y, circle.x, circle.y) <= circle.r) {
            return circle;
        } 
    }
    return false;
}

canvas.addEventListener('mousedown', e => {
    let target = ifInCircle(getCanvasPosition(e));
    if (target) {   
        canvasInfo.status = statusConfig.DRAG_START;
        canvasInfo.target = target;
        canvasInfo.lastPosition = getCanvasPosition(e);
    }
})

canvas.addEventListener('mousemove', e => {
    let postion = getCanvasPosition(e);
    if (canvasInfo.status === statusConfig.DRAG_START && getDistance(postion.x, postion.y, canvasInfo.lastPosition.x, canvasInfo.lastPosition.y) > 5) {
        canvasInfo.status = statusConfig.DRAGGING;
        canvas.style.cursor = 'all-scroll';
    } else if (canvasInfo.status === statusConfig.DRAGGING) {
        let target = canvasInfo.target;
        target.x = postion.x;
        target.y = postion.y;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(circle => {
            drawCircle(ctx, circle.x, circle.y, circle.r);
        })
    }
})


canvas.addEventListener('mouseup', e=> {
    let postion = getCanvasPosition(e);
    if (canvasInfo.status === statusConfig.DRAGGING) {
        canvasInfo.status = statusConfig.IDLE;
        canvas.style.cursor = 'default';
    }
})