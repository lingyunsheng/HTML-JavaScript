require("./styles/index.css");
// 引入文件

fetch("/api/test.json")
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
