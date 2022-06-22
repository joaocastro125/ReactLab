import {Headers} from '../components/Headers'
import {Sidebar} from '../components/Sidebar'
import {Video} from '../components/Video'

export function Event(){
    return (
       <div>
         <Headers />
        <main>
            <Video />
           <Sidebar />
        </main>
        
        
       </div>
       
    )
}