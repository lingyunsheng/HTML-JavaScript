var baseObj = {
    // 随机数
    randomNum: function(min, max) {
        // 不包含0 ， 1
        return parseInt(Math.random() * (max - min + 1) + min)
    }
    
}