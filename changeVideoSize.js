const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints)

const capabilities = track.getCapabilities();
const height = document.querySelector('#vid-height').value
const width = document.querySelector('#vid-width').value
const changeVideoSize = () => {
    stream.getTracks().forEach(track=>{
        const vConstraints = {
            height:{exact : height < capabilities.height.max ? height : capabilities.height.max},
            width:{exact : width < capabilities.width.max ? width : capabilities.width.max},
        }
        track.applyConstraints(vConstraints)
    })
    