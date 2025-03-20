document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.getElementById('scene')
    let prevOrientation = null

    function checkOrientation() {
        const SCENE_RATIO = 1.642
        const { innerHeight, innerWidth } = window

        if (innerWidth / innerHeight < SCENE_RATIO) {
            if (prevOrientation !== 'fullWidth') {
                prevOrientation = 'fullWidth'
                sceneEl.classList.remove('fullHeight')
                sceneEl.classList.add('fullWidth')
            }
        } else {
            if (prevOrientation !== 'fullHeight') {
                prevOrientation = 'fullHeight'
                sceneEl.classList.remove('fullWidth')
                sceneEl.classList.add('fullHeight')
            }
        }
    }

    checkOrientation()
    setInterval(checkOrientation, 1000)
    window.addEventListener('resize', checkOrientation)
})
