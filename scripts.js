const videoEl = document.querySelector('#my-video')
//this was an update
let stream = null // init stream var so we can use it anywhere
const constraints = {
    audio:true,
    video:{
        width : {min : 1024,ideal:1280, max:1920},
    },  height : {min : 576,ideal:720, max:1080},
}

const getMicAndCamera = async()=>{
    try{
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        changeButtons([
            'green','blue','blue','grey','grey','grey','grey','grey'
        ])
    }catch(err){
        window.alert("User denied access!")
    }
     
};
const showMyFeed = e=>{
    console.log("Vid is On!")
    videoEl.srcObject = stream
    const tracks = stream.getTracks()
    changeButtons([
        'green','green','blue','blue','blue','grey','grey','blue'
    ])
}
const stopMyFeed = e=>{
    const tracks = stream.getTracks();
    tracks.forEach(track=>{
        track.stop();
    })
    changeButtons([
        'blue','grey','grey','grey','grey','grey','grey','grey'
    ])
}

document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e))
document.querySelector('#show-video').addEventListener('click',e=>showMyFeed(e))
document.querySelector('#stop-video').addEventListener('click',e=>stopMyFeed(e))
