import { sliceFishCollection } from './FishDataProvider.js'

const copyOfFishCollection = sliceFishCollection()

for (const fish of copyOfFishCollection) {
    console.log(fish)
}