;define('preview',['msg'],function(Msg){
    var msg = new Msg();
    var WIDTH = 300,
        HEIGHT = 300;
    function PreView(){
        this.preview = document.getElementById('preview');
        this.ctx = this.preview.getContext('2d');
        this.init();
    };
    PreView.prototype = {
        init:function(){
            this.addLine();
            this.bindEvent();
        },
        addLine:function(){
            var that = this;
            var canvas = that.ctx;
            canvas.strokeStyle = "#999";
            canvas.lineWidth = 1;
            canvas.beginPath();
            canvas.moveTo(WIDTH/2, WIDTH/3);
            canvas.lineTo(WIDTH/2, WIDTH*2/3);
            canvas.moveTo(WIDTH/3, WIDTH/2);
            canvas.lineTo(WIDTH*2/3, WIDTH/2);
            canvas.closePath();
            canvas.stroke();
        },
        bindEvent:function(){
            msg.listen('selected',function(d){
                console.log(d)
            });
        }
    };
    return PreView;
});
