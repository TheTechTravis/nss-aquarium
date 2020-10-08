// FishList which renders individual fish objects as HTML
// TODO: Import `useFish` from the data provider module

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer-left")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <section class="fishList">
    <h3 class="container-header">Fish List</h3>
    <div class="fish">
    Placeholder for list of fishes
    </div>
    </section>
    `
}