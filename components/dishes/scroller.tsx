import { Button } from "../ui/button";

export default function Scroller() {
    return <div className="overflow-x-auto mt-5 ml-5 mr-5 mb-5 flex flex-row space-x-5">
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">All Dishes</Button>
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">Chaat</Button>
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">Rice Bowls</Button>
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">Tandoori & Grills</Button>
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">Wraps</Button>
        <Button className="bg-bandiwala-orange text-bandiwala-white py-6 px-10 text-md font-bold rounded-4xl">Others</Button>
    </div>
}