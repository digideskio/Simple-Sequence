function EntityDrawer(){
    this.draw = function(context, entityName, left, top, selected){
//        context.font = "bold 14px arial, sans-serif";
//        context.font = "bold 14px chalk board";
        context.font = "bold 14px Comic Sans MS";

        var textMetrics = context.measureText(entityName);
        var rectangleWidth = textMetrics.width + 20;

        var rectangleDrawer = new RectangleDrawer(context);
        rectangleDrawer.draw(left, top, rectangleWidth);

        var maxWidth = 1000;
        if (selected)
            context.fillStyle="blue";
        else
            context.fillStyle="black";
        context.fillText(entityName, left + 10, top + 20, maxWidth);
        return rectangleWidth;
    }
}