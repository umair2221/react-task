import React from 'react'
import { isValidElement } from 'react';
import { useState } from 'react'



const UserInformation = () => {

	const [reservationForm, setReservationForm] = useState(
		{destination:'',checkIn:'',checkOut:'',room:''}
		); 


	const handleEvent = (event) => {
		const {name}=  event.target
		const {value}=  event.target
		
		// console.log(event.target.name);
		// setReservationForm(event.target.value) ;
		console.log(event.target.value);

		setReservationForm((prev) =>{
			// console.log(prev);
			return {...prev, [name]:value}
		});
		// console.log(reservationForm.destination);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	console.log(reservationForm);
  return (
    <div>
      	<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-lg-7 col-sm-7 col-md-push-5">
						<div class="booking-cta">
							<h1 >Make your reservation</h1>
							<p> {reservationForm.destination}</p>
							<p> {reservationForm.checkIn}</p>
							<p> {reservationForm.checkOut}</p>
							<p> {reservationForm.room}</p>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 col-sm-4 col-md-pull-7">
						<div class="booking-form">
							<form  onSubmit={handleSubmit}>
								<div class="form-group">
									<span class="form-label">Your Destination</span>
									<input class="form-control" name='destination'  type="text" placeholder="Enter a destination or hotel name"
									onChange={handleEvent} />
								</div>
								<div class="row">
									<div class="col-sm-6 col-md-6 col-lg-6">
										<div class="form-group">
											<span class="form-label">Check In</span>
											<input class="form-control" type="date" required name='checkIn' 
											onChange = {handleEvent} 
											/>
										</div>
									</div>
									<div class="col-sm-6  col-md-6 col-lg-6">
										<div class="form-group">
											<span class="form-label">Check out</span>
											<input class="form-control" type="date" required name='checkout'
											value={reservationForm.checkOut}
											onChange = {handleEvent}
											 />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-4 col-md-4 col-lg-4">
										<div class="form-group">
											<span class="form-label">Rooms</span>
											<select class="form-control" value={reservationForm.room}
											onChange = {handleEvent}
											>
												
												<option selected disabled value={""}>Select Room</option>
												<option disabled>1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-sm-4  col-md-4 col-lg-4">
										<div class="form-group">
											<span class="form-label">Adults</span>
											<select class="form-control">
												<option disabled selected value={""}>Select No of adults</option>
												<option >1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-sm-4  col-md-4 col-lg-4">
										<div class="form-group">
											<span class="form-label">Children</span>
											<select class="form-control">
												<option selected disabled value={""}>Select No of childern</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
								</div>
								<div class="form-btn">
									<button class="submit-btn">Check availability</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default UserInformation
