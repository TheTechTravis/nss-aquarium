import { Fish } from "./Fish.js"
// FishList which renders individual fish objects as HTML



import { sliceFishCollection } from "./FishDataProvider.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer-left")
    
    const fishes = sliceFishCollection()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += `
    <section class="fishList">
        <u><h3 class="container-header">Current Collection</h3></u>
        <ol class="fishnumber">
            <div class="fish">
                <div class="fishContent">
            </div>
            Placeholder for list of fishes
            ${fishHTMLRepresentations}
            </div>
        </ol>
    </section>
    `
}