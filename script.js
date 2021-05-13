function onload() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www15.sbvideocdn.com/tysxebg3tc66j6cdaaob3gcyhkcc6ciku57uwwd5khapdk2oslzezj2623aa/video.mp4", true)
    xhr.responseType = "arraybuffer"
    xhr.onload = function() {
        var blob = new Blob([xhr.response], {type : 'video/mp4'})
        var url = URL.createObjectURL(blob)
        console.log(url)
        document.getElementById("image").src = url
    }
    xhr.send()
}