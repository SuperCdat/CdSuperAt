function initstart() {
    let top_center = document.getElementById("topid_centerpart");
    top_center.style.height = "400px";
    let center_center = document.getElementById("centerid_centerpart");
    center_center.style.height = "400px";
}

function hideorshowtopctp() {
    let top_center = document.getElementById("topid_centerpart");
    let center_center = document.getElementById("centerid_centerpart");
    console.log(top_center.style.height);
    if (top_center.style.height === "400px") {
        fade_out()
        let u = -1;
        var t = setInterval(()=>{
            u ++;
            if (u == 1) {
                clearInterval(x);
            }
        }, 5000);
        top_center.style.zIndex = 1;
        let pos = 400;
        let pos2 = 24;
        let pos3 = 95;
        let x = setInterval(()=>{
            pos += 10;
            top_center.style.height = pos + "px";
            pos2 += 0.41304347826087;
            top_center.style.top = pos2 + "%";
            pos3 += 0.0144927536231884;
            top_center.style.width = pos3 + "%";
            if (top_center.style.height === "1090px") {
                clearInterval(x);
            }
        }, 1)
    }
    else if (top_center.style.height === "1090px") {
        let pos = 1090;
        let pos2 = 52.5;
        let pos3 = 96;
        let x = setInterval(()=>{
            pos -= 10;
            top_center.style.height = pos + "px";
            pos2 -= 0.41304347826087;
            top_center.style.top = pos2 + "%";
            pos3 -= 0.0144927536231884;
            top_center.style.width = pos3 + "%";
            if (top_center.style.height === "400px") {
                clearInterval(x);
                let u = -1;
                var t = setInterval(()=>{
                    u ++;
                    if (u == 1) {
                        clearInterval(x);
                    }
                }, 5000);
                fade_in();
            }
        }, 1)
    }
}

function fade_out() {
    let center_center = document.getElementById("centerid_centerpart");
    let currentdidtime = 0.75;
    let x = setInterval(()=>{
        center_center.style.background = "linear-gradient(rgba(66, 0, 0, " + currentdidtime + "), rgba(0, 255, 76, " + currentdidtime + "))";
        currentdidtime -= 0.075;
        console.log(currentdidtime);
        if (currentdidtime < 0.001) {
            clearInterval(x);
        }
    }, 1)
}

function fade_in() {
    let center_center = document.getElementById("centerid_centerpart");
    let currentdidtime = 0.0;
    let y = setInterval(()=>{
        center_center.style.background = "linear-gradient(rgba(66, 0, 0, " + currentdidtime + "), rgba(0, 255, 76, " + currentdidtime + "))";
        currentdidtime += 0.075;
        console.log(currentdidtime)
        if (currentdidtime > 0.74) {
            clearInterval(y);
        }
    }, 1)
}




