window.onload = function(){
    // console.Log("onLoad");
    // console.Log(document.getELementById("scollTop"));
    // console.log(document.documentELement.scrollTop);

    document.getElementById("scrollTop").onclick = function(){
        // console.Log("onclick");
        // document.documentElement.scrollTop = 0;
        // window.scrollTo(0,0);
        // window.scrollTo({top: 0,left: 0})
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
}