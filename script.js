class Kalpbruh {
    // constructor() {}

    static initialNumber = 0

    static showKalpbruh() {
        let KalpbruhName = "KALPBRUH"
        if (Kalpbruh.initialNumber === KalpbruhName.length) {
            Kalpbruh.initialNumber = 0
            document.querySelector(".name").innerHTML = ""
        } else {
            document.querySelector(".name").innerHTML += KalpbruhName[Kalpbruh.initialNumber] + " "
            Kalpbruh.initialNumber += 1
        }
    }
}

let interval = setInterval(() => {
    Kalpbruh.showKalpbruh()
}, 500)

/*
let youtubeData = 
    [
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/rtl4KQHfeiU" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, 

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/mBqxzD0MJcM" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,  

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/80uaNIMQ_bE" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/IJjIAEn24Cc" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/Shlc9VoJ_z0" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/YpvlTdMLvZA" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/n-3xukDVVNk" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/qeU2wLN4zy8" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/9PxYV1PStvM" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

     `<iframe width="560" height="315" src="https://www.youtube.com/embed/DU-HtWrz-4w" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    ] */

let youtubeData = [
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/9PxYV1PStvM" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
     
]

for (let i of youtubeData) {
    document.querySelector(".youtube").insertAdjacentHTML("beforeend", i)
}


// -------------------------------------------------------------------------------

/*
    Instagram:-
    https://instagram.com/kalpbruh_?igshid=YmMyMTA2M2Y=
    YouTube:- main
    https://youtube.com/c/kalpbruh9579
    YouTube 2:
    https://youtube.com/c/KALPBRUH
    Email:
    kalpbruhk@gmail.com (main)
    kalpeshbagul9579@gmail.com
    Top song
    1:- https://youtu.be/rtl4KQHfeiU
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/rtl4KQHfeiU" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    2:- https://youtu.be/mBqxzD0MJcM
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/mBqxzD0MJcM" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    3:- https://youtu.be/80uaNIMQ_bE
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/80uaNIMQ_bE" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    4:- https://youtu.be/IJjIAEn24Cc
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/IJjIAEn24Cc" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    5:- https://youtu.be/Shlc9VoJ_z0
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/Shlc9VoJ_z0" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    6:- https://youtu.be/YpvlTdMLvZA
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/YpvlTdMLvZA" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    7:- https://youtu.be/n-3xukDVVNk
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/n-3xukDVVNk" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    8:- https://youtu.be/qeU2wLN4zy8
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/qeU2wLN4zy8" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    9:- https://youtu.be/9PxYV1PStvM
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/9PxYV1PStvM" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    10:- https://youtu.be/DU-HtWrz-4w
    <iframe width="560" height="315" src="https://www.youtubenocookie.com/embed/DU-HtWrz-4w" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    secure:
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rtl4KQHfeiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    unsecure:
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rtl4KQHfeiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/