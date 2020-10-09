import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish, sliceFishCollection } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishList")

    const mostHolyFishes = mostHolyFish()
    let fishHTMLRepresentations = ""
    for (const fish of mostHolyFishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    const soldierFishes = soldierFish()
    for (const fish of soldierFishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    const nonHolyFishes = nonHolyFish()
    for (const fish of nonHolyFishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += `
    <u><h3 class="container-header">Current Collection</h3></u>
    <ol class="fishnumber">
    ${fishHTMLRepresentations}
    </ol>
    `
}