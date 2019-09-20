import React from 'react'

export default function CartItem({item, value}) {
	const { id, title, img, price, count, total } = item
	const { increment, decrement, removeItem } = value

	return (
		<div className="row my-1 text-capitalize text-center">
			{/* image */}
			<div className="col-10 mx-auto col-lg-2">
				<img
					src={img}
					style={{ width: "5rem", heigth: "5rem" }}
					className="img-fluid"
					alt="product"
				/>
			</div>
			{/* title */}
			<div className="col-10 mx-auto col-lg-2 ">
        <span className="d-lg-none">product :</span> {title}
			</div>
			{/* price */}
			<div className="col-10 mx-auto col-lg-2 ">
				<strong><span className="d-lg-none">price :</span> ${price}</strong>
			</div>
			{/* number button */}
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
				<div className="d-flex justify-content-center">
					  {/* btn style is in App.css */}
						<span className="btn btn-black mx-1" onClick={() => decrement(id)}> - </span>
						<span className="btn btn-black mx-1">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => increment(id)}> + </span>
				</div>
			</div>
			{/* remove item */}
			<div className="col-10 mx-auto col-lg-2 ">
				<div className="cart-icon" onClick={() => removeItem(id)}>
					<i className="fas fa-trash" />
				</div>
			</div>
			{/* item total price */}
			<div className="col-10 mx-auto col-lg-2 ">
				<strong>item total : ${total} </strong>
			</div>
		</div>
	)
}
