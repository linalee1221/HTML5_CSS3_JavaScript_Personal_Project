// 내가 한 거

// window.onload = function() {

//     var bigPic = document.querySelector("#cup");
//     var smallPics = document.querySelectorAll(".small");

//     for(var i=0; i<smallPics.length; i++) {
//         smallPics[i].onclick = changepic;
//     }

//     // 큰 이미지 위치
//     function changepic() {
//         var smallPicAttribute = this.getAttribute("src");
//         bigPic.setAttribute("src", smallPicAttribute);
//     }

// }


// 선생님이 한 거

window.onload = function() {
    let smallPics = document.querySelectorAll(".small");

    for(let i=0; i<smallPics.length; i++) {
        smallPics[i].onclick = changePic;
    }
}

function changePic() {
    // 큰 이미지 위치
    let cup = document.querySelector('#cup');
    // 작은 사진 이미지 위치
    let newPic = this.src;
    // 큰 이미지 위치에 작은 이미지 위치가 들어와 있음
    cup.src = newPic;
}



function showDetail() {
    document.querySelector('#detail').style.display = "block";
}

function hideDetail() {
    document.querySelector('#detail').style.display = "none";
}