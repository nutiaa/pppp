document.addEventListener("DOMContentLoaded", function() {
    // startScreen2()
    // return

    const screen1content = `
        <button id="screen_1-button" type="button">Получить билет</button>
        <svg id="screen_1" viewBox="0 0 954 581" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M953.17 0H0V580.67H953.17V0Z" fill="black"/>
            <path id="Vector_2" class="line line-white-on-hover teardrop" d="M880.26 -2.33H878.65V152.92H880.26V-2.33Z"
                  fill="#F71E1E"/>
            <path id="Vector_3" class="teardrop" d="M886.07 351.25H890.94V-2.31998H886.07V351.25Z" fill="#F71E1E"/>
            <path id="Vector_4" class="teardrop" d="M950.56 351.25H955.43V-2.31998H950.56V351.25Z" fill="#F71E1E"/>
            <path id="Vector_5" class="teardrop" d="M-2.43995 635.04H2.43005L2.43005 281.47H-2.43995L-2.43995 635.04Z"
                  fill="#F71E1E"/>
            <path id="Vector_6" class="line line-white-on-hover teardrop"
                  d="M381.3 701.38H386.17L386.17 347.81H381.3L381.3 701.38Z" fill="#F71E1E"/>
            <path id="Vector_7" class="teardrop" d="M351.21 392.38H356.08L356.08 38.81H351.21L351.21 392.38Z" fill="#F71E1E"/>
            <path id="pink_1_rbd"
                  d="M789.5 509.1L953.17 308.3V376.22C898.03 443.96 842.89 511.7 787.76 579.44C788.34 555.99 788.93 532.54 789.51 509.1H789.5Z"
                  fill="#FF79B6"/>
            <path id="pink_2_ltd"
                  d="M190.02 77.26L-1.02002 297.81V223.21C63.34 148.81 127.7 74.4 192.06 0C191.38 25.75 190.7 51.51 190.02 77.26Z"
                  fill="#FF79B6"/>
            <path id="red_r_door" d="M655.15 361.85H733.08V69.34H655.15V361.85Z" fill="#F71E1E"/>
            <path id="pink_ctd_door_left" d="M575.73 214.06H506.95L575.73 134.86V214.06Z" fill="#FF79B6"/>
            <path id="pink_ctd_door_right" d="M610.99 120.86L654.61 68.25H733.08L610.99 207.23" fill="#FF79B6"/>
            <path id="pink_cbd_door" d="M611.45 413.99L655.07 361.38H733.54L611.45 500.37" fill="#FF79B6"/>
            <path id="pink_clt" d="M195.12 -1.52588e-05V62.68L396.04 62.68V-1.52588e-05L195.12 -1.52588e-05Z"
                  fill="#FF79B6"/>
            <path id="pink_cbd" class="line line-white-on-hover"
                  d="M421.37 514.08L490.31 429.5V458.11C467.08 486.65 443.86 515.18 420.63 543.72C420.88 533.84 421.12 523.97 421.37 514.09V514.08Z"
                  fill="#FF79B6"/>
            <path id="white_rc" class="line line-red-on-hover" d="M953.17 429.5H490.31V458.26H953.17V429.5Z" fill="white"/>
            <path id="pink_lb" d="M289.49 504.64H7.41003V533.4H289.49V504.64Z" fill="#FF79B6"/>
            <path id="red_ltv" d="M354.64 143.25H-23.4V187.84H354.64V143.25Z" fill="#F71E1E"/>

            <path id="Vector_26" d="M421.41 249.74L575.73 411.85V368.56L421.41 202.21V249.74Z" fill="#AD1717"/>
            <path id="Vector_27" d="M395.16 184.02V227.31L354.65 187.58V143.25L395.16 184.02Z" fill="#AD1717"/>
            <g id="text_point">
                <path id="i"
                      d="M216.009 285.25V241.881H222.672V285.25H216.009ZM219.397 234.653C218.098 234.653 216.978 234.21 216.037 233.326C215.115 232.441 214.653 231.377 214.653 230.135C214.653 228.893 215.115 227.829 216.037 226.945C216.978 226.06 218.098 225.617 219.397 225.617C220.696 225.617 221.806 226.06 222.729 226.945C223.67 227.829 224.14 228.893 224.14 230.135C224.14 231.377 223.67 232.441 222.729 233.326C221.806 234.21 220.696 234.653 219.397 234.653Z"
                      fill="white"/>
                <g id="Group_2">
                    <path id="p"
                          d="M205.589 158.493V98.8609H212.026V105.75H212.817C213.306 104.997 213.984 104.037 214.85 102.87C215.735 101.684 216.996 100.63 218.633 99.708C220.29 98.7668 222.53 98.2962 225.353 98.2962C229.005 98.2962 232.224 99.2091 235.01 101.035C237.796 102.861 239.97 105.449 241.532 108.8C243.094 112.15 243.876 116.103 243.876 120.658C243.876 125.251 243.094 129.232 241.532 132.602C239.97 135.952 237.805 138.55 235.038 140.395C232.271 142.221 229.08 143.134 225.466 143.134C222.68 143.134 220.45 142.672 218.775 141.75C217.099 140.809 215.81 139.745 214.906 138.559C214.003 137.355 213.306 136.357 212.817 135.567H212.252V158.493H205.589ZM212.139 120.545C212.139 123.821 212.619 126.71 213.579 129.214C214.539 131.698 215.942 133.647 217.786 135.058C219.631 136.451 221.89 137.148 224.563 137.148C227.349 137.148 229.673 136.414 231.537 134.945C233.419 133.458 234.831 131.463 235.772 128.96C236.732 126.437 237.212 123.632 237.212 120.545C237.212 117.496 236.741 114.748 235.8 112.301C234.878 109.835 233.476 107.887 231.593 106.456C229.73 105.007 227.386 104.282 224.563 104.282C221.852 104.282 219.575 104.969 217.73 106.343C215.885 107.698 214.492 109.6 213.551 112.047C212.61 114.475 212.139 117.308 212.139 120.545Z"
                          fill="white"/>
                    <path id="o"
                          d="M261.957 220.184C258.042 220.184 254.607 219.252 251.652 217.388C248.715 215.525 246.419 212.918 244.762 209.567C243.125 206.217 242.306 202.301 242.306 197.821C242.306 193.304 243.125 189.36 244.762 185.991C246.419 182.621 248.715 180.005 251.652 178.141C254.607 176.278 258.042 175.346 261.957 175.346C265.873 175.346 269.299 176.278 272.235 178.141C275.19 180.005 277.487 182.621 279.124 185.991C280.781 189.36 281.609 193.304 281.609 197.821C281.609 202.301 280.781 206.217 279.124 209.567C277.487 212.918 275.19 215.525 272.235 217.388C269.299 219.252 265.873 220.184 261.957 220.184ZM261.957 214.198C264.932 214.198 267.379 213.435 269.299 211.911C271.219 210.386 272.64 208.381 273.562 205.897C274.484 203.412 274.946 200.72 274.946 197.821C274.946 194.923 274.484 192.221 273.562 189.718C272.64 187.214 271.219 185.191 269.299 183.647C267.379 182.104 264.932 181.332 261.957 181.332C258.983 181.332 256.536 182.104 254.616 183.647C252.696 185.191 251.275 187.214 250.353 189.718C249.43 192.221 248.969 194.923 248.969 197.821C248.969 200.72 249.43 203.412 250.353 205.897C251.275 208.381 252.696 210.386 254.616 211.911C256.536 213.435 258.983 214.198 261.957 214.198Z"
                          fill="white"/>
                    <path id="n"
                          d="M247.742 324.911V351H241.079V307.631H247.516V314.407H248.081C249.098 312.205 250.641 310.436 252.712 309.099C254.782 307.744 257.455 307.066 260.73 307.066C263.667 307.066 266.236 307.669 268.439 308.873C270.641 310.059 272.354 311.866 273.577 314.294C274.801 316.704 275.413 319.753 275.413 323.443V351H268.749V323.894C268.749 320.487 267.864 317.833 266.095 315.932C264.326 314.012 261.897 313.052 258.81 313.052C256.683 313.052 254.782 313.513 253.107 314.436C251.45 315.358 250.142 316.704 249.182 318.473C248.222 320.243 247.742 322.388 247.742 324.911Z"
                          fill="white"/>
                    <path id="Vector_28"
                          d="M284.39 381.21H294.99V396.78H301.28V405.9H294.99C295.06 442.76 295.14 479.62 295.21 516.48C291.71 516.36 288.21 516.24 284.71 516.13C284.61 479.39 284.5 442.65 284.4 405.91H278.96V396.79H284.4V381.22L284.39 381.21Z"
                          fill="white"/>
                </g>
            </g>
            <path id="Vector_29" class="teardrop" d="M197.37 431.39H190.92V586.64H197.37V431.39Z" fill="#F71E1E"/>
            <path id="Vector_30" class="line line-white-on-hover teardrop" d="M184.45 -5.77H182.84V149.48H184.45V-5.77Z"
                  fill="#F71E1E"/>
            <path id="Vector_33" class="line line-white-on-hover"
                  d="M420.63 62.68L506.95 214.06L549.09 165.54C518.27 110.36 487.45 55.18 456.63 0H421.34C421.1 20.89 420.87 41.79 420.63 62.68Z"
                  fill="#AD1717"/>

            <g class="line-group line-pink-on-hover">
                <path id="white_arrow_end_left"
                      d="M698.05 289.23L665.48 262.68H676.5C687.49 271.62 698.47 280.57 709.46 289.51C705.66 289.42 701.85 289.32 698.05 289.23Z"
                      fill="white"/>
                <path id="white_arrow_end_right"
                      d="M698.17 289.94L665.6 317.99H676.62C687.61 308.54 698.59 299.09 709.58 289.65C705.78 289.75 701.97 289.85 698.17 289.95V289.94Z"
                      fill="white"/>
                <path id="white_arrow" class="line line-pink-on-hover"
                      d="M-4.49 286.07H652.79C666.71 286.17 680.63 286.28 694.55 286.38C696.98 286.73 699.41 287.08 701.85 287.43C701.85 287.43 709.51 289.05 709.46 289.51C709.42 289.8 707.8 289.66 705.36 290.16C702.51 290.73 700.14 291.95 700.14 291.95C684.49 292.05 668.85 292.16 653.2 292.26C602.79 292.02 552.38 291.85 501.98 291.76C333.17 291.46 164.34 292.01 -4.5 293.41V286.08L-4.49 286.07Z"
                      fill="white"/>
            </g>

            <path id="Vector_31" class="teardrop" d="M190.25 347.81H195.12L195.12 -5.75998H190.25L190.25 347.81Z"
                  fill="#F71E1E"/>

            <g id="circles">
                <circle id="circle_1" class="circle circle-red-on-hover" cx="851" cy="209" r="34" fill="white"></circle>
                <circle id="circle_2" class="circle circle-red-on-hover" cx="566" cy="54" r="17" fill="white"></circle>
                <circle id="circle_3" class="circle circle-red-on-hover" cx="145" cy="255" r="9" fill="white"></circle>
                <circle id="circle_4" class="circle circle-red-on-hover" cx="295" cy="44" r="9" fill="white"></circle>
                <circle id="circle_5" class="circle circle-red-on-hover" cx="680" cy="110" r="9" fill="white"></circle>
                <circle id="circle_6" class="circle circle-red-on-hover" cx="921" cy="388" r="9" fill="white"></circle>
                <circle id="circle_7" class="circle circle-red-on-hover" cx="673" cy="535" r="9" fill="white"></circle>
                <circle id="circle_8" class="circle circle-white-on-hover" cx="60" cy="353" r="17" fill="#AD1717"></circle>
                <circle id="circle_9" class="circle circle-white-on-hover" cx="532" cy="378" r="17" fill="#FF79B6"></circle>
                <circle id="circle_10" class="circle circle-red-on-hover" cx="226" cy="498" r="17" fill="white"></circle>
            </g>

            <path id="red_cv_left" d="M396.04 543.71H421.41L421.41 -6.23999H396.04L396.04 543.71Z" fill="#F71E1E"/>
            <path id="Vector_25" class="line line-white-on-hover"
                  d="M575.74 500.37H611.81L611.81 -6.23999H575.74L575.74 500.37Z" fill="#F71E1E"/>
        </svg>`

    const screen1WrapperEl = document.getElementById('screen_1-wrapper')

    screen1WrapperEl.innerHTML = screen1content

    const screen1SvgEl = document.getElementById('screen_1')
    const buttonEl = document.getElementById('screen_1-button')

    initTeardrops(screen1WrapperEl)
    initCircles(screen1SvgEl)

    buttonEl.addEventListener('click', () => {
        if (screen1WrapperEl.classList.contains('ending')) {
            return
        }

        const {x, y, width, height} = screen1SvgEl.viewBox.baseVal
        screen1WrapperEl.classList.add('ending')
        screen1SvgEl.dataset.payload = JSON.stringify({
            start: Date.now(),
            duration: 1000,
            x,
            y,
            width,
            height,
            xEnd: 615,
            yEnd: 203,
            widthEnd: 40,
            heightEnd: 24,
        })

        startScreen2()
    })

    function animateScreen() {
        if (screen1WrapperEl.classList.contains('ending')) {
            const {
                start,
                duration,
                x,
                y,
                width,
                height,
                xEnd,
                yEnd,
                widthEnd,
                heightEnd
            } = JSON.parse(screen1SvgEl.dataset.payload)
            const now = Date.now()

            if (now > start + duration + 16) {
                return false
            }

            const pct = (now - start) / duration
            const newX = (xEnd - x) * pct + x
            const newY = (yEnd - y) * pct + y
            const newWidth = (widthEnd - width) * pct + width
            const newHeight = (heightEnd - height) * pct + height

            screen1SvgEl.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`)
        }

        return true
    }

    requestAnimationFrame(animateFrame)

    function animateFrame() {
        if (animateScreen()) {
            animateTeardrops(screen1SvgEl)
            moveCircles(screen1SvgEl)

            requestAnimationFrame(animateFrame)
        } else {
            screen1WrapperEl.innerHTML = ''
        }
    }
})
