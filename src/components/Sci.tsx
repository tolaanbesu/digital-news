
import {scis} from "@/data/data"
export default function Sci(){
    return(
        <>
            {
                scis.map((sci)=>(
                     <a href={sci.link} key={sci.id} target='blank' className='mx-2'>
                        <span className={sci.icon}></span>
                    </a>
                ))
            }
            
        </>
    )
}