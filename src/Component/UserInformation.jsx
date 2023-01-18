import React from 'react'
// import { isValidElement } from 'react';
import { useState } from 'react'



const UserInformation = () => {
	const [submits, setSubmits] = useState([]);
const [formData, setFormData] = useState(
	{destination : "", checkIn: "", room: "" , checkout : "" , adult : "", child : ""}
);

const handleinput = (e) => {
	// console.log(e.target);
	setFormData({...formData, [e.target.name] : e.target.value})
	console.log(formData);
}
const formsubmit = (e) =>{
	e.preventDefault();
	setSubmits([...submits, {formData}]);

}

  return (
    <div>
      	<div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-lg-7 col-sm-7 col-md-push-5 col-lg-push-5 col-sm-push-5">
						<div className="booking-cta">
						<h1 >Make your reservation</h1>
						<table >
							<thead>
								<tr>
									<td><strong style={{color: "white"}}>Destination</strong></td>
									<td><strong style={{color: "white"}}>Check In Date</strong></td>
									<td><strong style={{color: "white"}}>Check Out Date</strong></td>
									<td><strong style={{color: "white"}}>No Of Rooms</strong></td>
									<td><strong style={{color: "white"}}>No Of Adults</strong></td>
									<td><strong style={{color: "white"}}>No Of Childerns</strong></td>
								</tr>
							</thead>
							<tbody>
							{
								submits.map((sub,index) =>{
									return(
								<tr key={index}>
									<td>{sub.formData.destination}</td>
									<td>{sub.formData.checkIn}</td>
									<td>{sub.formData.checkout}</td>
									<td>{sub.formData.room}</td>
									<td>{sub.formData.adult}</td>
									<td>{sub.formData.child}</td>
								</tr>
								)
							})
						}
							</tbody>
						</table>
									
						</div>
					</div>
					<div className="col-md-4 col-lg-4 col-sm-4 col-md-pull-7 col-lg-pull-7 col-sm-pull-7">
						<div className="booking-form">
							<form onSubmit={formsubmit}>
								<div className="form-group">
									<span className="form-label">Your Destination</span>
									<input className="form-control" name='destination' type="text" placeholder="Enter a destination or hotel name" 
									value={formData.destination} onChange={handleinput} />
								</div>
								<div className="row">
									<div className="col-sm-6 col-md-6 col-lg-6">
										<div className="form-group">
											<span className="form-label">Check In</span>
											<input className="form-control" type="date" value={formData.checkIn}  name='checkIn' onChange={handleinput} /> 
										</div>
									</div>
									<div className="col-sm-6  col-md-6 col-lg-6">
										<div className="form-group">
											<span className="form-label">Check out</span>
											<input className="form-control" type="date"  name='checkout' value={formData.checkout} onChange={handleinput} 
											 />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4 col-md-4 col-lg-4">
										<div className="form-group">
											<span className="form-label">Rooms</span>
											<select className="form-control" name='room' value={formData.room} onChange={handleinput}>
												<option value="DEFAULT" selected disabled>Select Room</option>
												<option value={1} >1</option>
												<option value={2}>2</option>
												<option value={3}>3</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-sm-4  col-md-4 col-lg-4">
										<div className="form-group">
											<span className="form-label">Adults</span>
											<select className="form-control" name='adult' value={formData.adult} onChange={handleinput} >
												<option value="DEFAULT" disabled selected >Select No of adults</option>
												<option value={1} >1</option>
												<option value={2} >2</option>
												<option value={3} >3</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-sm-4  col-md-4 col-lg-4">
										<div className="form-group">
											<span className="form-label">Children</span>
											<select className="form-control" name='child' value={formData.child} onChange={handleinput} >
												<option value="DEFAULT" selected disabled >Select No of childern</option>
												<option value={1} >1</option>
												<option value={2} >2</option>
												<option value={3} >3</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
								</div>
								<div className="form-btn">
									<button className="submit-btn">Confirm Reservation</button>
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
