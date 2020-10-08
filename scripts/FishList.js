import { sliceFishCollection } from './FishDataProvider'

// FishList which renders individual fish objects as HTML
export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer-left")
    // const fishes = useFish()

    // Add to the existing HTML in the content element
contentElement.innerHTML += `
    <section class="fishList">
    <h3>Current Collection</h3>
    <div class="fishContainer">
    Placeholder for list of fishes
    </div>
    </section>
`
}