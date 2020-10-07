//    To get you started, here's some properties of Bart.
//    You need to add more properties to complete his
//    representation as an object. Then add all the other
//    fish to the collection.
const fishCollection = [
    {
        name: "Charles",
        image: "https://aquariumadviser.com/wp-content/uploads/2019/05/Betta-Fish.jpg",
        species: "Betta splendens",
        location: "Mekong River basin (Thailand)",
        length: "2.8",
        diet: "Bloodworms, daphnia, mosquito larvae, brine shrimp and smaller fish species."
    },

    {
        name: "Bobby",
        image: "https://aquariumadviser.com/wp-content/uploads/2018/10/Red-Tail-Shark.jpg",
        species: "Epalzeorhynchos bicolor",
        location: "Bueng Boraphet Lake (Thailand)",
        length: "4-6",
        diet: "Plants, crustaceans and other small insects, as well as flakes and pellets."
    },

    {
        name: "Frank",
        image: "https://aquariumadviser.com/wp-content/uploads/2019/05/African-Cichlids.jpg",
        species: "African cichlid",
        location: "Lake Tanganyika (East Africa)",
        length: "3-8",
        diet: "Bloodworms, brine shrimp, pellets, flakes, and occasionally green foods such as spinach."
    },
]

// Export a COPY of fishCollection so that other modules 
// can import and use it. This protects the original array
// from tampering.
export const sliceFishCollection = () => {
    return fishCollection.slice()
}