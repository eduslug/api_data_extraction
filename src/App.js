import React, { useState, useEffect } from 'react'
import './App.css';
import api from './api';

function App() {

	const [posts, setPost] = useState([]);
	const [loding, setloding] = useState(true);
	useEffect(() => {
		api.get('list_posts').then((response) => {
			setPost(response.data.posts);
			setloding(false)
			console.log('Deu certo!')
		}).catch(() => {
			console.log('ERRO');
		})

	}, [])

	// loding ? <h1>carregando</h1>:<h1>falha</h1>

	if (loding) {
		return (
			<div className='loanding' class="loadingio-spinner-reload-e14ksbs1rqu"><div class="ldio-zzf8n5vtvqd">
				<div><div></div><div></div><div></div></div>
			</div></div>
		)
	}
	return (

		<div className="app">

			<div className="cards">

				{posts.map((post, key) => {
					return (
						<div className="card" key={key}>
							<div className="card-body" >
								<h1>{post.title}</h1>
								<div className="line"></div>
								<h2>{post.content}</h2>
							</div>
						</div>
					)
				})}

			</div>
		</div>
	)

}

export default App;

