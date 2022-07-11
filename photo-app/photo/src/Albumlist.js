import { useState } from "react";
import './AlbumList.css';
import Counter from "./Counter";
function AlbumList() {
    let [photos, setphotos] = useState([]);
    if (!photos.length) {
        // getAlbums();
    }
    async function getAlbums() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId=" +document.getElementById('serchtext').value)).json();//why twice
        console.log(photos);
        setphotos(photos);
    }
    return (
        <div>
            <Counter count={photos.length}></Counter>
            <h3>Albumlist in table formate</h3>
            <input placeholder='Album ID' id='serchtext'></input><button onClick={getAlbums}>serch</button>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>URL</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {
                            return <tr key={photo.id}><td>{photo.title}</td>
                                <td><a href={photo.url}>click</a></td></tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AlbumList;