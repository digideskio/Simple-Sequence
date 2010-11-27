function LabelDrawer(context){
    this.draw = function(message, left, length, top){
         var maxWidth = 1000;
        var textMetrics = context.measureText(message);
//        context.font = "12px arial, sans-serif";
        context.font = "14px chalk board";
        context.fillStyle="black";
        var newLeft = left + length / 2 - textMetrics.width / 2;
        context.fillText(message, newLeft, top - 3, 300);
    }
}