import OpenAI from 'openai';
import {OPENAI_KEY} from "../utilis/constants"

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, //this flag is suggested by openai to access api data from the browser
});

export default openai;