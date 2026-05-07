export const metadata={robots:{index:false,follow:false}};
export default function AppLayout({children}:{children:React.ReactNode}){return <div className='min-h-screen p-6'><h1 className='mb-4 text-xl'>Private App (TODO auth protection)</h1>{children}</div>}
