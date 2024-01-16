import { OpenAI2Video, OpenAI2VideoError } from "./index.js"
import "dotenv/config"

main()

async function main() {
    const maker = new OpenAI2Video({
        openAIApiKey: process.env.OPEN_AI_API_KEY,
        aspect: 'vertical'
    })

    const storyName = 'short-etienne-story-fr'

    const results = await maker
        .fromHighlightsFile(`./inputs/highlights/${storyName}.json`)
        .addSpeechsDescriptionFile(`./inputs/speechs/${storyName}.json`)
        .addBackgroundMusicList([ './inputs/musics/lost-soul.mp3' ])
        .addImagesDescriptionFile(`./inputs/images/${storyName}.json`)
        .toAudioAndVideo(`./outputs/${storyName}.mp3`, `./outputs/${storyName}.mp4`)
    
    console.log('Results:', results)
}