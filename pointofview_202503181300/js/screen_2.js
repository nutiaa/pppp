function startScreen2() {
    const screen2content = `
        <p class="text top-center">Выберите билетик!</p>
        <svg id="screen_2" viewBox="0 0 954 581" fill="none" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="light-gradient">
                <stop offset="0%" stop-color="#000"/>
                <stop offset="30%" stop-color="#FFF"/>
                <stop offset="70%" stop-color="#FFF"/>
                <stop offset="100%" stop-color="#000"/>
            </linearGradient>
            
            <mask id="ticket1-light-mask">
                <rect y="100" x="400" class="_transformer" width="40" height="220" fill="url(#light-gradient)" />
            </mask>
                
            <mask id="ticket2-light-mask">
                <rect y="150" x="500" class="_transformer" width="40" height="300" fill="url(#light-gradient)" />
            </mask>
                
            <mask id="ticket3-light-mask">
                <rect y="150" x="500" class="_transformer" width="40" height="300" fill="url(#light-gradient)" />
            </mask>
                
            <mask id="ticket4-light-mask">
                <rect y="150" x="500" class="_transformer" width="40" height="300" fill="url(#light-gradient)" />
            </mask>
                
            <defs>
                <path id="ticket1" d="M320.27 209.08C331.43 226.04 350.25 234.94 369.16 234.2L376.44 245.27L161.86 386.47L154.76 375.68C163.6 358.37 163.13 336.92 151.68 319.52C140.23 302.12 120.72 293.21 101.32 294.47L94.52 284.14L309.1 142.94L316.53 154.23C308.37 171.3 309.09 192.11 320.26 209.07L320.27 209.08Z"/>
                <path id="ticket2" d="M467.39 364.65C467.39 384.96 478.22 402.73 494.42 412.51V425.76H237.55V412.85C254.45 403.24 265.85 385.08 265.85 364.25C265.85 343.42 254.45 325.25 237.55 315.65V303.28H494.42V316.8C478.22 326.58 467.39 344.36 467.39 364.66V364.65Z"/>
                <path id="ticket3" d="M731.96 194.06C738.26 213.36 754.08 226.9 772.52 231.17L776.63 243.76L532.45 323.5L528.44 311.23C541.52 296.85 546.72 276.04 540.25 256.24C533.78 236.44 517.31 222.71 498.26 218.82L494.42 207.06L738.6 127.32L742.8 140.17C730.43 154.49 725.66 174.76 731.96 194.06Z"/>
                <path id="ticket4" d="M799.06 414.27C792.07 433.34 796.13 453.75 807.97 468.51L803.41 480.95L562.23 392.56L566.67 380.44C585.84 377.24 602.8 364.1 609.97 344.54C617.14 324.98 612.69 304 600.12 289.17L604.38 277.56L845.56 365.95L840.91 378.64C822.33 382.25 806.05 395.21 799.06 414.28V414.27Z"/>
            </defs>
        
            <circle class="circle stage3" cx="842" cy="186" r="34" fill="#F71E1E"/>
            <circle class="circle stage2" cx="558" cy="31" r="17" fill="#F71E1E"/>
            <circle class="circle stage1" cx="137" cy="232" r="9" fill="#F71E1E"/>
            <circle class="circle stage3" cx="287" cy="22" r="9" fill="#F71E1E"/>
            <circle class="circle stage2" cx="672" cy="88" r="9" fill="#F71E1E"/>
            <circle class="circle stage1" cx="912" cy="365" r="9" fill="#F71E1E"/>
            <circle class="circle stage3" cx="663" cy="512" r="9" fill="#F71E1E"/>
            <circle class="circle stage3" cx="51" cy="330" r="17" fill="white"/>
            <circle class="circle stage3" cx="523" cy="356" r="17" fill="white"/>
            <circle class="circle stage2" cx="217" cy="421" r="17" fill="#F71E1E"/>

            <path class="teardrop stage2" d="M877.54 577.99H882.41V224.42H877.54V577.99Z" fill="#F71E1E"/>
            <path class="teardrop stage2" d="M372.77 818.57H377.64L377.64 465H372.77L372.77 818.57Z" fill="white"/>
            <path class="teardrop stage3" d="M342.7 369.75H347.57L347.57 16.18H342.7L342.7 369.75Z" fill="#F71E1E"/>
            <path class="teardrop stage3" d="M188.85 408.74H182.4V563.99H188.85V408.74Z" fill="#F71E1E"/>
            <path class="teardrop stage1" d="M181.73 325.16H186.6L186.6 -28.4101H181.73L181.73 325.16Z" fill="#F71E1E"/>
            <path class="teardrop stage3" d="M871.74 87.5699H870.13V242.82H871.74V87.5699Z" fill="white"/>
            <path class="teardrop stage3" d="M175.94 -28.41H174.33V120.61H175.94V-28.41Z" fill="white"/>

            <use id="ticket1view" href="#ticket1" style="fill: #FF79B6;"/>
            <use id="ticket1blink" class="ticket-blink" href="#ticket1" mask="url(#ticket1-light-mask)" style="fill: silver;"/>
            
            <use id="ticket2view" href="#ticket2" style="fill: white;"/>
            <use id="ticket2blink" class="ticket-blink" href="#ticket2" mask="url(#ticket2-light-mask)" style="fill: silver;"/>
            
            <use id="ticket3view" href="#ticket3" style="fill: #F71E1E;"/>
            <use id="ticket3blink" class="ticket-blink" href="#ticket3" mask="url(#ticket3-light-mask)" style="fill: silver;"/>
            
            <use id="ticket4view" href="#ticket4" style="fill: #AD1717;"/>
            <use id="ticket4blink" class="ticket-blink" href="#ticket4" mask="url(#ticket4-light-mask)" style="fill: silver;"/>
        </svg>`

    const screen2WrapperEl = document.getElementById('screen_2-wrapper')

    screen2WrapperEl.innerHTML = screen2content
    screen2WrapperEl.offsetHeight
    screen2WrapperEl.classList.add('init')

    const screen2SvgEl = document.getElementById('screen_2')

    screen2SvgEl.classList.add('stage0')

    screen2SvgEl.querySelectorAll('.ticket-blink').forEach((el) => {
        el.addEventListener('click', (e) => {
            if (!e.target.classList.contains('clicked')) {
                e.target.classList.add('clicked')

                if (screen2SvgEl.classList.contains('stage0')) {
                    screen2SvgEl.classList.remove('stage0')
                    screen2SvgEl.classList.add('stage1')
                } else if (screen2SvgEl.classList.contains('stage1')) {
                    screen2SvgEl.classList.remove('stage1')
                    screen2SvgEl.classList.add('stage2')
                } else if (screen2SvgEl.classList.contains('stage2')) {
                    screen2SvgEl.classList.remove('stage2')
                    screen2SvgEl.classList.add('stage3')
                } else if (screen2SvgEl.classList.contains('stage3')) {
                    screen2SvgEl.classList.remove('stage3')
                    screen2SvgEl.classList.add('stage4')
                }
            }
        })
    })


    initTeardrops(screen2SvgEl)
    initCircles(screen2SvgEl)

    function animateScreen() {
        if (screen2WrapperEl.classList.contains('ending')) {
            // const {
            //     start,
            //     duration,
            //     x,
            //     y,
            //     width,
            //     height,
            //     xEnd,
            //     yEnd,
            //     widthEnd,
            //     heightEnd
            // } = JSON.parse(screen1SvgEl.dataset.payload)
            // const now = Date.now()
            //
            return false
            // if (now > start + duration + 16) {
            //     return false
            // }
            //
            // const pct = (now - start) / duration
            // const newX = (xEnd - x) * pct + x
            // const newY = (yEnd - y) * pct + y
            // const newWidth = (widthEnd - width) * pct + width
            // const newHeight = (heightEnd - height) * pct + height
            //
            // screen1SvgEl.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`)
        }

        return true
    }

    requestAnimationFrame(animateFrame)

    function animateFrame() {
        if (animateScreen()) {
            animateTeardrops(screen2SvgEl)
            moveCircles(screen2SvgEl)

            requestAnimationFrame(animateFrame)
        } else {
            screen2WrapperEl.innerHTML = ''
        }
    }
}
