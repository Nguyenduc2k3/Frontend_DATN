import { deliveryTime, freeDelivery, nextPoints } from "../assets"

const Newsletter = () => {
    return (
        <div className="w-4/5 mx-auto my-10 flex justify-around">
            <div className="flex flex-col items-center gap-4">
                <img className="w-20" src={freeDelivery} alt="" />
                <h1 className="font-bold text-xl">Free Delivery</h1>
                <p className="text-sm text-gray-600">for orders above $59.99</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <img className="w-20" src={deliveryTime} alt="" />
                <h1 className="font-bold text-xl">Fast Delivery</h1>
                <p className="text-sm text-gray-600">Usually delivered within 1-2 business days</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <img className="w-20" src={nextPoints} alt="" />
                <h1 className="font-bold text-xl">Next Club Points</h1>
                <p className="text-sm text-gray-600">1 club point for every $ spent</p>
            </div>
        </div>
    )
}

export default Newsletter
