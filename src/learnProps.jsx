import { getImageUrl } from './utils.js';

function Aviator({person, size}){
    return(
        <img 
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}


export default function Profiler(){
    return(
        <>
         <Aviator
        size = {100}
        person = {{
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
        }}
        />

        <Aviator
        size = {100}
        person = {{
            name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
        />
        </>
       
    )
}
