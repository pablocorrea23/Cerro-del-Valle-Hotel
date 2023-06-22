import React from "react"
import style from "./Modal.module.css"



const Modal = ({ show, close, titulo, copete, descripcion, fecha, imagen }) => {
	return (
		<>
			{
				show ?

					<div
						className={style.modalContainer}
						onClick={() => close()}
					>
						<div className={style.modal} onClick={(e) => e.stopPropagation()}>
							<header className={style.modalHeader}>
								<h2 className={style.modalHeader_title}>{titulo}</h2>
								<button className={style.close} onClick={() => close()}>
									<box-icon name='x'></box-icon>
								</button>
							</header>
							<main className={style.modalContent}>
								{descripcion}
								{imagen}
							</main>
							{/* <footer className={style.modalFooter}>
								<button className={style.modalClose} onClick={() => close()}>
									Siguiente
								</button>
							</footer> */}
						</div>
					</div>
					: null
			}
		</>
	);
};

export default Modal;