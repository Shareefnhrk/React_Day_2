import { useState } from "react";
import './AlbumList.css';
function AlbumList(){
    let [photos, setphotos] = useState([]);
    if(!photos.length){
        getAlbums();
    }
    async function getAlbums() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1")).json();//why twice
        console.log(photos);
        setphotos(photos);
    }
    return(
        <div>
        <h3>Albumlist in table formate</h3>
        <table>
        <thead>
        <tr><td>Title</td>
        <td>URL</td></tr>
        </thead>
        <tbody>
        {
            photos.map(function(photo){
                return <tr><td>{photo.title}</td>
                        <td>{photo.url}</td></tr>
            })
        }
        </tbody>
        </table>
        </div>
    )
}

export default AlbumList;