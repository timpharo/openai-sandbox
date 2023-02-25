import { Configuration, OpenAIApi } from 'openai';
import { getApiKey, saveImageToDisk} from "./common.js";

const configuration = new Configuration({
    apiKey: getApiKey()
})

const openai = new OpenAIApi(configuration)

const imageSize = '1024x1024' // 256x256, 512x512, or 1024x1024
const prompt = 'Albert einstein, with face tattoos'
const result = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: imageSize,
    user: 'me'
})

result.data.data.forEach( data =>
    saveImageToDisk('generated', data.url)
)



