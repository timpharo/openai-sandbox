import { Configuration, OpenAIApi } from 'openai';
import { createReadStream } from 'fs'
import { getApiKey, saveImageToDisk} from "./common.js";

const configuration = new Configuration({
    apiKey: getApiKey()
})

const openai = new OpenAIApi(configuration)

const imageSize = '256x256' // 256x256, 512x512, or 1024x1024
const src = 'albert-einstein.png'
const result = await openai.createImageVariation(
    createReadStream(`./img/original/${src}`),
    1,
    imageSize
)

result.data.data.forEach( data =>
    saveImageToDisk('variation', data.url)
)
