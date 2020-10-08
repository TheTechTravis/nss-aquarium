import { sliceFishCollection } from './FishDataProvider.js'
import { FishList } from './FishList.js'

const copyOfFishCollection = sliceFishCollection()

// for (const fish of copyOfFishCollection) {
//     console.log(fish)
// }

FishList()