import { writeFileSync } from 'fs'

export function getApiKey() {
    let apiKey = process.env.OPENAI_API_KEY
    if(!apiKey){
       throw Error('OPENAI_API_KEY env var should be provided')
    }
    return apiKey
}

export async function saveImageToDisk(directory, url){
    //console.log(url)
    const imageResult = await fetch(url)
    const blob = await imageResult.blob()
    const imageArrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(imageArrayBuffer)

    writeFileSync(`./img/generated/${Date.now()}.png`, buffer)
}