export default async function Page({params}:{params:Promise<{threadId:string}>}){const {threadId}=await params;return <div>Thread: {threadId}</div>}
