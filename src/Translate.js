import { translateText } from '@aws-amplify/predictions/amazon-ai';

export function TranslateText() {
    async function translate() {
        const text = prompt('Text to translate');
        const result = await translateText({ text, sourceLanguage: 'en', targetLanguage: 'fr' });


        alert(result.TranslatedText);
    }

    return <button onClick={translate}>Translate to French</button>

}