/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fishObj) => {
    return `
        <div class="fish">
            <div class="fishContent">
                <li class="fish__name">Name: ${fishObj.name}</li>
                <img class="fish__image"
                    src="${fishObj.image}"
                    alt="Photo of a betta fish.">
                <ul>
                    <li class="fish__species">Species: ${fishObj.species}</li>
                    <li class="fish__location">Location: ${fishObj.location}</li>
                    <li class="fish__length">Length: ${fishObj.length} inches</li>
                    <li class="fish__diet">Diet: ${fishObj.diet}</li>
                </ul>
            </div>
        </div>
    `
}