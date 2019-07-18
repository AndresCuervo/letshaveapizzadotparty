const model = document.createElement('model-viewer');

function newPizza(glbSrc, usdzSrc) {
    return {
        glb : glbSrc,
        usdz : usdzSrc
    }
}

const paths = [
    newPizza("models/cheese_pizza_blocks/cheese_pizza.glb", "models/cheese_pizza_blocks/cheese_pizza.usdz"),
    newPizza("models/pizza_full_blocks/pizza_full.glb", "models/pizza_full_blocks/pizza_full.usdz"),
    newPizza("models/pizza_slice_blocks/pizza_slice.glb", "models/pizza_slice_blocks/pizza_slice.usdz"),
    newPizza("models/pizza_slice_optimized/pizza_slice_optimized.glb", "models/pizza_slice_optimized/pizza_slice_optimized.usdz"),
]

const randomIndex = Math.floor(Math.random()*paths.length)
const chosenPath = paths[randomIndex]

model.src = chosenPath.glb;
model.setAttribute('ios-src', chosenPath.usdz)
model.setAttribute('ar', '')
model.setAttribute('quick-look-browsers', 'safari chrome')
model.setAttribute('auto-rotate', '')
model.setAttribute('camera-controls', '')
model.setAttribute('background-color', 'rgb(200, 100, 0)')
model.setAttribute('preload', '')


document.body.appendChild(model);
