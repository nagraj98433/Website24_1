import React from 'react'
import '../../All styles/Hire_yourself.css'
import Hire_Yourself from '../../assets/Images/Hire_yourself.png'

const Hire_yourself = () => {
	return (
		<div className='Main_container mt-5'>
			<div className="row  mx-0">
				<div className="col-8">
					<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src={Hire_Yourself} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src={Hire_Yourself} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src={Hire_Yourself} class="d-block w-100" alt="..." />
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
				<div className="col-4">

				</div>
			</div>







		</div>
	)
}

export default Hire_yourself
