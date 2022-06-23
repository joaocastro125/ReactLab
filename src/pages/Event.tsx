import {Headers} from '../components/Headers'
import {Sidebar} from '../components/Sidebar'
import {Video} from '../components/Video'

export function Event(){
    return (
       <div className="flex flex-col min-h-screen">
         <Headers />
        <main className='flex flex-1'>
            <Video />
           <Sidebar />
        </main>
        
        
       </div>
       
    )
}