export const createCanonicalUrl=(path:string)=>`http://localhost:3000${path}`;
export const createLanguageAlternates=(path:string)=>({ar:createCanonicalUrl(`/ar${path}`),en:createCanonicalUrl(`/en${path}`)});
