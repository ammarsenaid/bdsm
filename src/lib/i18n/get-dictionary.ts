import { dictionaries } from './dictionaries';
import type { AppLang } from './config';
export async function getDictionary(lang: AppLang) { return dictionaries[lang]; }
