import React, { useState,useEffect } from "react";
import style from"../Login/Login.module.css";
import 'animate.css';
import axios from "axios";

export const Login = () =>{
	useEffect(() => {
		axios.post({
			url:"192.168.68.129:8000/api/Admin",
		})
			console.log.then((response) => {
				console.log(response.data);
			})
			console.log.catch((error) => {
				console.log(error);
			});
	}, []);
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		
		<div className={style.login}>
			<div className={style.loginCaja}>
			<div className={style.tituloLogin}>
			<h2>Bienvenidos</h2>
			<img className={style.imgLogin} src={require('../../images/logo.png')} alt="css" width={90} />
			</div>
			<div className={style.loginGeneral}>
			<form className={style.forms} onSubmit={handleSubmit}>
				<group size="lg" controlId="administrador">
					<label>Administrador</label>
					<input
						autoFocus
						type="administrador"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</group>
				
				<group size="lg" controlId="password">
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</group>
				<div className={style.buttonLogin}>
					<button  className={style.button} block="true" size="lg" type="submit" disabled={!validateForm()}>
						Ingresar
					</button>
				</div>
			</form>
			</div>
		</div>
	</div>

	);
}