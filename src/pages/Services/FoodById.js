import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProductByCategory from "./ShowProductByCategory";

const FoodById = () => {
	const [food, setFood] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const ids = useParams().id;

	useEffect(() => {
		fetch("food.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setFood(data);
			});
	}, [ids]);

	const service = food?.find((fd) => fd.id === Number(ids));
	const addToFood = (item) => {
		const items = item;
		items.quantity = quantity;
	};

	return (
		<div className="container py-5">
			<h1>Food by {service?.name}</h1>
			<div className="row py-4">
				<div className="col">
					<img src={service?.image} alt="" className="img-fluid" />
				</div>
				<div className="col">
					<h3>{service?.name}</h3>
					<h4>Price: ${service?.price}</h4>
					<p>rating: {service?.rating}</p>
					<div className="d-flex">
						<button
							onClick={() => setQuantity(quantity + 1)}
							className="btn btn-primary me-2"
						>
							+
						</button>
						<form>
							<input
								type="number"
								className="form-control  w-100"
								name="quantity"
								readOnly
								value={quantity}
								id=""
							/>
						</form>
						{quantity > 1 ? (
							<button
								onClick={() => setQuantity(quantity - 1)}
								className="btn btn-danger ms-2"
							>
								-
							</button>
						) : (
							<button className="btn btn-danger disabled ms-2">
								-
							</button>
						)}
					</div>
					{/* product cart */}
					<div className="d-flex  justify-content-center mt-4">
						<h4>Total</h4>
					</div>
					{/* product price */}
					<div className="d-flex  justify-content-evenly w-75">
						<p>Price</p>
						<p>${service?.price}</p>
					</div>
					<div className="d-flex  justify-content-evenly w-75">
						<p>Quantity</p>
						<p>{quantity}</p>
					</div>

					<div className="d-flex  justify-content-evenly w-75">
						<h5>Total</h5>
						<h5>${service?.price + quantity * service?.price}</h5>
					</div>
					<div className="d-flex justify-content-center">
						<button
							className="btn btn-primary"
							onClick={() => addToFood(service)}
						>
							add to cart
						</button>
					</div>
				</div>
			</div>
			{/* product details */}
			<div className="py-4">
				<h3>Product Details</h3>
				<p>{service?.details}</p>
			</div>

			{<ShowProductByCategory type={service?.type} id={ids} />}
		</div>
	);
};

export default FoodById;
