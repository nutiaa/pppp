

function initTeardrops(svgEl) {
    svgEl.querySelectorAll('.teardrop').forEach((teardropEl) => {
        if (!teardropEl.hasAttribute('transform')) {
            teardropEl.setAttribute('transform', 'translate(0,0)')
            teardropEl.dataset.speed = (Math.random() * 0.8 + 0.2) * (Math.random() >= 0.5 ? 1 : -1)
        }
    })
}

function animateTeardrops(svgEl) {
    const fullHeight = svgEl.viewBox.baseVal.height

    svgEl.querySelectorAll('.teardrop').forEach((teardropEl) => {
        const { y, height } = teardropEl.getBBox()
        const yTransform = teardropEl.transform.baseVal.getItem(0).matrix.f
        const speed = +teardropEl.dataset.speed
        const newTransformY = yTransform + speed
        const newTop = y + newTransformY
        const newBottom = newTop + height

        if (
            speed < 0 && newTop <= 0 ||
            speed > 0 && newBottom >= fullHeight
        ) {
            if (!teardropEl.classList.contains('cloned')) {
                const newTeardown = teardropEl.cloneNode()

                newTeardown.removeAttribute('id')
                newTeardown.transform.baseVal.getItem(0).setTranslate(0, speed >= 0 ? (-y - height) : (fullHeight - y))
                teardropEl.after(newTeardown)

                teardropEl.classList.add('cloned')
            }
        }

        if (
            speed < 0 && newBottom < 0 ||
            speed > 0 && newTop > fullHeight
        ) {
            teardropEl.remove()
        }

        teardropEl.transform.baseVal.getItem(0).setTranslate(0, newTransformY)
    })
}

function initCircles(svgEl) {
    svgEl.querySelectorAll('.circle').forEach((circleEl) => {
        if (!circleEl.dataset.angle) {
            circleEl.dataset.angle = Math.random() * 2 * Math.PI
            circleEl.dataset.len = Math.random() * 0.8 + 0.1
        }
    })
}

function moveCircles(svgEl) {
    const {width, height} = svgEl.viewBox.baseVal

    svgEl.querySelectorAll('.circle').forEach((circleEl) => {
        const len = +circleEl.dataset.len
        let angle = +circleEl.dataset.angle

        let cx = +circleEl.getAttribute('cx')
        let cy = +circleEl.getAttribute('cy')
        let r = +circleEl.getAttribute('r')


        cx += len * Math.sin(getScreenAngle(angle))
        cy += len * Math.cos(getScreenAngle(angle))

        let nextAngle = angle
        if (
            cx - r <= 0 ||
            cx + r >= width
        ) {
            nextAngle = 2 * Math.PI - angle
        } else if (
            cy - r <= 0 ||
            cy + r >= height
        ) {
            nextAngle = (3 * Math.PI - angle) % (2 * Math.PI)
        }

        if (nextAngle !== angle) {
            circleEl.dataset.angle = nextAngle
        }

        circleEl.setAttribute('cx', cx.toString())
        circleEl.setAttribute('cy', cy.toString())
    })
}

function getScreenAngle(rad) {
    return (3 * Math.PI - rad) % (2 * Math.PI)
}
