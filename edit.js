import { Configuration, OpenAIApi } from 'openai';
import { createReadStream } from 'fs'
import { getApiKey, saveImageToDisk} from "./common.js";

const configuration = new Configuration({
    apiKey: getApiKey()
})

const openai = new OpenAIApi(configuration)

const imageSize = '256x256' // 256x256, 512x512, or 1024x1024
const src = 'albert-einstein.png'
const mask = 'albert-einstein-face-mask.png'
const prompt = 'Should have face tattoos'
const result = await openai.createImageEdit(
    createReadStream(`./img/original/${src}`),
    createReadStream(`./img/original/${mask}`),
    prompt,
    1,
    imageSize
)

result.data.data.forEach( data =>
    saveImageToDisk('edit', data.url)
)