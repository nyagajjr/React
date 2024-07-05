import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Profile() {
    return (
        <>
        <Avatar 
      person = {{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
      size = {100}
      />

      <Avatar 
      size={100}
      person={{ 
        name: 'Lin Lanying',
        imageId: '1bX5QH6'
      }}
      />
        </>
      
    );
  }