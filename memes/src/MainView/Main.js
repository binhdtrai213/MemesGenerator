import React, {useState, useEffect} from 'react';
import './Main.css'

export const Main = () => {
    const urlData = 'https://api.imgflip.com/get_memes?fbclid=IwAR0F6wSVS0_7fAaJU_Z5CM2udNVsyb9zNNgCjNJW2eBW7fasRv1QL-pGHzg'
	const [urlImage, setUrlImage] = useState('https://thecyphersagency.com/wp-content/uploads/2017/05/leo2.png');   
	const [data, setData] = useState();
	useEffect(() => {
		fetch(urlData)
		.then(response => response.json())
		.then(todo => setData(todo))
	}, []);
    const changeImage = () => {
        let count = Math.round(Math.random() * 100);
        data.data.memes.map(todo => {
            if(count === 0) setUrlImage(todo.url);
            count--;
        })
        
    }
	return (
		<div>
			<img src={urlImage} alt=''/>
			<button onClick={changeImage}>Click here</button>
		</div>
	);
}