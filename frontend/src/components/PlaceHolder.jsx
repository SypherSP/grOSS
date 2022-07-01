import React from "react";

function PlaceHolder() {
	return (
		<div className='card' style={{ margin: "5%", marginTop: 56,color: "#fff", backgroundColor: "#0d1117" }}>
			<h5 className='card-header placeholder-glow'>
				<span className='placeholder col-6'></span>
			</h5>
			<div className='card-body'>
				<h5 className='card-title placeholder-glow'><span className="placeholder col-4"></span></h5>
				<p className='card-text placeholder-glow'>
					<span className='placeholder col-7'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-6'></span>
					<span className='placeholder col-8'></span>
				</p>
				<div className='d-grid gap-2 d-md-flex justify-content-md-end'>
					<button
						className='btn btn-success disabled placeholder col-2'
						style={{
							borderStyle: "solid",
							borderRightWidth: 1,
							borderTopWidth: 1,
						}}>
					</button>
					<button
						className='btn btn-danger disabled placeholder col-2'
						style={{
							borderStyle: "solid",
							borderLeftWidth: 1,
							borderTopWidth: 1,
						}}>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PlaceHolder;
